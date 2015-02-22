function clearAllBlocks() {
  if (Blockly.mainWorkspace !== null) {
    Blockly.mainWorkspace.clear();
  }
}

function save() {

    document.getElementById("saveFail").style.display = 'none';
    document.getElementById("saveDone").style.display = 'none';

    var uri = getSaveUri();
    var drl = Blockly.Drools.workspaceToCode();
    console.log(drl);

    // var hack = 'package whenthen.dynamodb.chat;\n' +
    //            'import stackbot.amazonaws.cloudwatch.AlarmState;\n' +
    //            'import stackbot.slack.ChatPostMessage;\n' +
    //            'import java.util.Map;\n' +
    //            '\n' +
    //            'global Map dimensions;\n' +
    //            '\n' +
    //            'rule "PostMessage"\n' +
    //            'when\n' +
    //            'state: AlarmState(stateValue == StateValue.ALARM)\n' +
    //            'then\n' +
    //            'String message = "Mike Table " + dimensions.get("TableName") + " capacity (" + state.getDatapoint() + ") above threshold (" + state.getThreshold() + ")";\n' +
    //            'insert(new ChatPostMessage().withText(message).withChannel("#sysops").withUsername("Stackbot"));\n' +
    //            'end\n';

    //            drl = hack;

    //    console.log(drl);

    $.ajax({
      url: uri,
      type: 'PUT',
      contentType: 'text/plain',
      data: drl
  }) .done(function( data, textStatus, jqXHR ) {
      console.log(textStatus);
      document.getElementById("saveDone").style.display = 'block';
      document.getElementById("saveFail").style.display = 'none';
  }) .fail(function( jqXHR, textStatus, errorThrown ) {
      console.log(textStatus);
      document.getElementById("saveFail").style.display = 'block';
      document.getElementById("saveDone").style.display = 'none';
  });
}

function turnTutorialOff() {
    hideAllTooltips();
    tutorialOn = false;
    // Remove icon
    document.getElementById("toggleTutorialIcon").className =
     document.getElementById("toggleTutorialIcon").className.replace
        ( /(?:^|\s)fa-toggle-on(?!\S)/g , '' );
    // Add icon
    document.getElementById("toggleTutorialIcon").className += " fa-toggle-off";
}

function turnTutorialOn() {
  tutorialOn = true;
    tutorialState = 1;
    showTooltip('.tutorial-1');
    // Remove icon
    document.getElementById("toggleTutorialIcon").className =
     document.getElementById("toggleTutorialIcon").className.replace
        ( /(?:^|\s)fa-toggle-off(?!\S)/g , '' );
    // Add icon
    document.getElementById("toggleTutorialIcon").className += " fa-toggle-on";
}

function toggleTutorial(element) {
  if (tutorialOn) {
    turnTutorialOff();
  } else {
    turnTutorialOn();
  }
}

function debugToConsole() {
  console.log(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace));
  console.log(Blockly.mainWorkspace.toolbox_.tree_);
  console.log(Blockly.Flyout);
}


function dismissTooltip(closeButton) {
  closeButton.parentElement.style.display = 'none';
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var tutorialOn = true;
var tutorialState = 1;
var tutorialState1Timeout;
var tutorialState3Timeout;
var tutorialState4Timeout;
var tutorialState5Timeout;
var tutorialState6Timeout;
function checkTutorialState(opt_fromChange) {
  if (!tutorialOn) {
    return;
  }
  if (Blockly.dragMode_ != 0) {
    // Don't need to change tutorial pieces during a drag
    return;
  }
  console.log('checkTutorialState');
  if (!opt_fromChange && tutorialState == 1) {     // Initial 'start'
    hideTooltip('.tutorial-1');
    if (!tutorialState1Timeout && workspaceEmpty() && Blockly.mainWorkspace.toolbox_.tree_.children_[0].selected_ == true) {    // if 'start' selected
      tutorialState1Timeout = setTimeout(function() { showTooltip('.tutorial-2') }, 250);
      tutorialState = 2;
    }
  } else if (tutorialState == 2) { // Showing 'drag rule/when/then tooltip' 
    hideTooltip('.tutorial-2');
    tutorialState = 3;             // Waiting for the 'rule/when/then' block to be dropped
  } else if (opt_fromChange && tutorialState == 3) {
    if (workspaceHasJustRuleBlock() && !tutorialState3Timeout) {
      tutorialState3Timeout = setTimeout(function() { showTooltip('.tutorial-3'); tutorialState = 4; }, 250);    // Show the 'open Dynamo tooltip'
    }
  } else if (tutorialState == 4) {
    if (Blockly.mainWorkspace.toolbox_.tree_.children_[2].selected_ == true) {
      hideTooltip('.tutorial-3');
    }
    if (!tutorialState4Timeout && Blockly.mainWorkspace.toolbox_.tree_.children_[2].selected_ == true) {    // if 'dynamodb' selected
      tutorialState4Timeout = setTimeout(function() { showTooltip('.tutorial-4') }, 250);
      tutorialState = 5;
    }
  } else if (tutorialState == 5) {
    hideTooltip('.tutorial-4');
    if (!tutorialState5Timeout && workspaceHasRuleAndCapacityBlock()) {
      tutorialState5Timeout = setTimeout(function() { showTooltip('.tutorial-5') }, 150);
      tutorialState = 6;
    }
  } else if (tutorialState == 6) {    // Showing 'open dynamo again'
    if (Blockly.mainWorkspace.toolbox_.tree_.children_[2].selected_ == true) {
      hideTooltip('.tutorial-5');
      if (!tutorialState6Timeout && Blockly.mainWorkspace.toolbox_.tree_.children_[2].selected_ == true) {    // if 'dynamodb' selected
        tutorialState6Timeout = setTimeout(function() { showTooltip('.tutorial-6') }, 250);
        tutorialState = 7;
      }
    }
  } else if (tutorialState == 7) {
    hideTooltip('.tutorial-6');
  }
}

function workspaceEmpty() {
  var blocks = Blockly.mainWorkspace.getTopBlocks(false);
  return blocks.length == 0;
}
function workspaceHasJustRuleBlock() {
  var blocks = Blockly.mainWorkspace.getTopBlocks(false);
  if (blocks.length == 1 &&
      blocks[0].type == 'ds_rule') {
    return true;
  }
  return false;
}

function workspaceHasRuleAndCapacityBlock() {
  var blocks = Blockly.mainWorkspace.getAllBlocks();
  console.log(blocks);
  if (blocks.length == 3 &&
      blocks[0].type == 'ds_rule' &&
      blocks[2].parentBlock_ == blocks[1]) {
    return true;
  }
  return false;
}

function showTooltip(selectorClass) {
  var myElements = document.querySelectorAll(selectorClass);
 
  for (var i = 0; i < myElements.length; i++) {
      myElements[i].style.display = 'block';
  }
}

function hideTooltip(selectorClass) {
  var myElements = document.querySelectorAll(selectorClass);
 
  for (var i = 0; i < myElements.length; i++) {
      myElements[i].style.display = 'none';
  }
}

function hideAllTooltips() {
  var myElements = document.querySelectorAll(".desktop-tooltip");
 
  for (var i = 0; i < myElements.length; i++) {
      myElements[i].style.display = 'none';
  }
}

function blocklyChangeListener(event) {
  console.log('change');
  // console.log(event);
  disableNonRuleAttachedBlocks();
  checkTutorialState(true);
}

function disableNonRuleAttachedBlocks() {
  if (Blockly.dragMode_ != 0) {
    // Don't disable blocks during a drag.
    return;
  }
  var blocks = Blockly.mainWorkspace.getAllBlocks();
  console.log(blocks);
  for (var i = 0; i < blocks.length; i++) {
    if (isAttachedToBlock(blocks[i], 'ds_rule')) {
      blocks[i].setDisabled(false);
    } else {
      blocks[i].setDisabled(true);
    }
  }

  function isAttachedToBlock(block, typeName) {
    var attached = false;
    do {
      if (block.type == typeName) {
        attached = true;
      } else {
        block = block.parentBlock_;
      }
    } while (!attached && block);

    return attached;
  }
}


function SaveSettings( uid ) {
  var  saveSettingsObj = {
        attributes: {},

        // The attribute setter publish changes using the DataBinder PubSub
        set: function( attr_name, val ) {
          this.attributes[ attr_name ] = val;
          console.log(attr_name + ' set to '+ val);
        },

        get: function( attr_name ) {
          return this.attributes[ attr_name ];
        }
      };

  return saveSettingsObj;
}

// javascript
var saveSettingsObj = new SaveSettings( 12345 );

function initFromQueryParams() {


  var tutorialQueryParam = getParameterByName('tutorial');
  if (tutorialQueryParam == 'on') {
    turnTutorialOn();
  } else {
    turnTutorialOff();
  }

  saveSettingsObj.set( "moduleId", getParameterByName('moduleId') );
  saveSettingsObj.set( "version", getParameterByName('version') );
  saveSettingsObj.set( "saveUrl", "http://stackbot.elasticbeanstalk.com/whenthen/modules/{moduleId}/{version}/source" );

  initSettingsForm();
}

function initSettingsForm() {
  document.getElementById("moduleIdEntry").value = saveSettingsObj.get('moduleId');
  document.getElementById("saveVersionEntry").value = saveSettingsObj.get('version');
  document.getElementById("saveUrlEntry").value = saveSettingsObj.get('saveUrl');
}

function saveSettings() {
  saveSettingsObj.set('moduleId', document.getElementById("moduleIdEntry").value);
  saveSettingsObj.set('version', document.getElementById("saveVersionEntry").value);
  saveSettingsObj.set('saveUrl', document.getElementById("saveUrlEntry").value);
}

function getSaveUri() {
  var value = saveSettingsObj.get('saveUrl');
  value = value.replace("{moduleId}", saveSettingsObj.get('moduleId'));
  value = value.replace("{version}", saveSettingsObj.get('version'));
  return value;
}


