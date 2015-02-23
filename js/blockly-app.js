function clearAllBlocks() {
  if (Blockly.mainWorkspace !== null) {
    Blockly.mainWorkspace.clear();
  }
}

function save() {

    document.getElementById("saveFail").style.display = 'none';
    document.getElementById("saveDone").style.display = 'none';

    // If save tutorial step is showing, remove it
    hideTooltip('.tutorial-22');

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

var tutorialStateTimeout;


function checkTutorialState(opt_fromChange) {
  if (!tutorialOn) {
    return;
  }
  if (Blockly.dragMode_ != 0) {
    // Don't need to change tutorial pieces during a drag
    return;
  }

  if (tutorialStepFulfilled(opt_fromChange)) {
    hideTooltip('.tutorial-' + tutorialState);
    if (tutorialStepProgress(opt_fromChange)) {
      tutorialState ++;
      tutorialStateTimeout = setTimeout(function() { showTooltip('.tutorial-' + tutorialState); tutorialStateTimeout = null; }, 150);
    }
  }
}


function tutorialStepFulfilled(opt_fromChange) {
  switch (tutorialState) {
    case 1:
      return !opt_fromChange;
    case 2:
      var blocks = Blockly.mainWorkspace.getTopBlocks(false);
      if (blocks.length > 0) {
        var xy = blocks[0].getRelativeToSurfaceXY();
        var tooltip3 = document.querySelector('.tutorial-3');
        tooltip3.style.left = (208 + xy.x) + 'px';
        tooltip3.style.top = (78 + xy.y) + 'px';
        return true;
      }
      return false;
    case 13:
      var blocks = Blockly.mainWorkspace.getAllBlocks();
      if (blocks.length > 5) {
        var xy = blocks[5].getRelativeToSurfaceXY();
        var tooltip14 = document.querySelector('.tutorial-14');
        tooltip14.style.left = (58 + xy.x) + 'px';
        tooltip14.style.top = (78 + xy.y) + 'px';
        return true;
      }
      return false;
    case 20:
      var blocks = Blockly.mainWorkspace.getAllBlocks();
      if (blocks.length > 9) {
        var xy = blocks[9].getRelativeToSurfaceXY();
        var tooltip21 = document.querySelector('.tutorial-21');
        tooltip21.style.left = (88 + xy.x) + 'px';
        tooltip21.style.top = (68 + xy.y) + 'px';
        return true;
      }
      return false;
    default:
      return true;
  }
}

function tutorialStepProgress(opt_fromChange) {
  if (tutorialStateTimeout) {
    return false;
  }
  switch (tutorialState) {
    case 1:
      return workspaceEmpty() && Blockly.mainWorkspace.toolbox_.tree_.children_[0].selected_ == true;   // Start menu selected
    case 2:
      return opt_fromChange && workspaceHasJustRuleBlock();                                             // Rule block added
    case 3:
      return ruleNameHasBeenEdited();                                                                   // Rule name edited
    case 4:
      return Blockly.mainWorkspace.toolbox_.tree_.children_[2].selected_ == true;                       // Dynamo menu selected
    case 5:
      return workspaceHasRuleAndCapacityBlock();                                                        // Dynamo block added                                  
    case 6:
      return Blockly.mainWorkspace.toolbox_.tree_.children_[3].selected_ == true;                       // Math menu selected
    case 7:
      return workspaceHasRuleCapacityAndPercentageBlock();                                              // Percentage block added
    case 8:
      return Blockly.mainWorkspace.toolbox_.tree_.children_[6].selected_ == true;                       // Variables menu selected
    case 9:
      return workspaceHasRuleCapacityPercentageAndProvisionedBlock();                                   // Provisioned block added
    case 10:
      return Blockly.mainWorkspace.toolbox_.tree_.children_[2].selected_ == true;                       // Dynamo menu selected
    case 11:
      return workspaceHasRuleCapacityPercentageProvisionedAndSetProvisionedBlock();                     // Set Provisioned block added
    case 12:
      return Blockly.mainWorkspace.toolbox_.tree_.children_[3].selected_ == true;                       // Math menu selected
    case 13:
      return workspaceHasRuleCapacityPercentageProvisionedSetProvisionedAndPercentageBlock();           // 2nd percentage block added
    case 14:
      return percentageHasBeenEdited();
    case 15:
      return Blockly.mainWorkspace.toolbox_.tree_.children_[6].selected_ == true;                       // Variables menu selected
    case 16:
      return workspaceHasWhenDynamoThenDynamo();                                                        // 2nd provisioned block added
    case 17:
      return Blockly.mainWorkspace.toolbox_.tree_.children_[5].selected_ == true;                       // Notification menu selected
    case 18:
      return workspaceHasWhenDynamoThenDynamoAndSlack();                                                // Slack block added
    case 19:
      return Blockly.mainWorkspace.toolbox_.tree_.children_[4].selected_ == true;                       // Text menu selected
    case 20:
      return workspaceHasWhenDynamoThenDynamoAndSlackAndText();                                         // Empty text piece added
    case 21:
      return slackMessageHasBeenEdited();                                                               // Message to slack edited
    default:
      return false;
  }
}

function checkTutorialStateOld(opt_fromChange) {
  if (!tutorialOn) {
    return;
  }
  if (Blockly.dragMode_ != 0) {
    // Don't need to change tutorial pieces during a drag
    return;
  }
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
      tutorialState5Timeout = setTimeout(function() { showTooltip('.tutorial-5') }, 150);           // Open 'Math' category
      tutorialState = 6;
    }
  } else if (tutorialState == 6) {    // Showing 'open math'
    if (Blockly.mainWorkspace.toolbox_.tree_.children_[3].selected_ == true) {
      hideTooltip('.tutorial-5');
      if (!tutorialState6Timeout && Blockly.mainWorkspace.toolbox_.tree_.children_[3].selected_ == true) {    // if 'math' selected
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

function ruleNameHasBeenEdited() {
  var blocks = Blockly.mainWorkspace.getTopBlocks(false);
  if (blocks.length == 1 &&
      blocks[0].type == 'ds_rule' &&
      !Blockly.WidgetDiv.isVisible()) {
    var text = blocks[0].inputList[0].fieldRow[1].text_;
    if (text && text != '' && text != 'Enter Rule Name') {
      return true;
    }
  }
  return false;
}

function percentageHasBeenEdited() {
  var blocks = Blockly.mainWorkspace.getAllBlocks();
  if (blocks.length == 7 &&
      blocks[0].type == 'ds_rule' &&
      !Blockly.WidgetDiv.isVisible()) {
    var text = blocks[5].inputList[0].fieldRow[0].text_;
    if (text && text != '' && text != '70') {
      return true;
    }
  }
  return false;
}

function slackMessageHasBeenEdited() {
  var blocks = Blockly.mainWorkspace.getAllBlocks();
  if (blocks.length == 10 &&
      blocks[0].type == 'ds_rule' &&
      !Blockly.WidgetDiv.isVisible()) {
    var text = blocks[9].inputList[0].fieldRow[1].text_;
    if (text && text != '') {
      return true;
    }
  }
  return false;
}

function workspaceHasRuleAndCapacityBlock() {
  var blocks = Blockly.mainWorkspace.getAllBlocks();
  if (blocks.length == 3 &&
      blocks[0].type == 'ds_rule' &&
      blocks[2].parentBlock_ == blocks[1]) {
    return true;
  }
  return false;
}

function workspaceHasRuleCapacityAndPercentageBlock() {
  var blocks = Blockly.mainWorkspace.getAllBlocks();
  if (blocks.length == 4 &&
      blocks[0].type == 'ds_rule' &&
      blocks[2].parentBlock_ == blocks[1] &&
      blocks[2].childBlocks_ &&
      blocks[2].childBlocks_.length == 1 &&
      blocks[2].childBlocks_[0] == blocks[3]) {
    return true;
  }
  return false;
}

function workspaceHasRuleCapacityPercentageAndProvisionedBlock() {
  var blocks = Blockly.mainWorkspace.getAllBlocks();
  if (blocks.length == 5 &&
      blocks[0].type == 'ds_rule' &&
      blocks[2].parentBlock_ == blocks[1] &&
      blocks[2].childBlocks_ &&
      blocks[2].childBlocks_.length == 1 &&
      blocks[2].childBlocks_[0] == blocks[3] &&
      blocks[3].childBlocks_ &&
      blocks[3].childBlocks_.length == 1 &&
      blocks[3].childBlocks_[0] == blocks[4]) {
    return true;
  }
  return false;
}

function workspaceHasRuleCapacityPercentageProvisionedAndSetProvisionedBlock() {
  var blocks = Blockly.mainWorkspace.getAllBlocks();
  if (blocks.length == 6 &&
      blocks[0].type == 'ds_rule' &&
      blocks[2].parentBlock_ == blocks[1] &&
      blocks[2].childBlocks_ &&
      blocks[2].childBlocks_.length == 1 &&
      blocks[2].childBlocks_[0] == blocks[4] &&
      blocks[4].childBlocks_ &&
      blocks[4].childBlocks_.length == 1 &&
      blocks[4].childBlocks_[0] == blocks[5] &&
      blocks[3].parentBlock_ == blocks[1]) {
    return true;
  }
  return false;
}

function workspaceHasRuleCapacityPercentageProvisionedSetProvisionedAndPercentageBlock() {
  var blocks = Blockly.mainWorkspace.getAllBlocks();
  if (blocks.length == 7 &&
      blocks[0].type == 'ds_rule' &&
      blocks[2].parentBlock_ == blocks[1] &&          // 2 connected to when
      blocks[2].childBlocks_ &&
      blocks[2].childBlocks_.length == 1 &&
      blocks[2].childBlocks_[0] == blocks[4] &&
      blocks[4].childBlocks_ &&
      blocks[4].childBlocks_.length == 1 &&
      blocks[4].childBlocks_[0] == blocks[6] &&
      blocks[3].parentBlock_ == blocks[1] &&          // 3 connected to then
      blocks[3].childBlocks_ &&
      blocks[3].childBlocks_.length == 1 &&
      blocks[3].childBlocks_[0] == blocks[5]) {
    return true;
  }
  return false;
}

function workspaceHasWhenDynamoThenDynamo() {
  var blocks = Blockly.mainWorkspace.getAllBlocks();
  if (blocks.length == 8 &&
      blocks[0].type == 'ds_rule' &&
      blocks[2].parentBlock_ == blocks[1] &&          // 2 connected to when
      blocks[2].childBlocks_ &&
      blocks[2].childBlocks_.length == 1 &&
      blocks[2].childBlocks_[0] == blocks[4] &&
      blocks[4].childBlocks_ &&
      blocks[4].childBlocks_.length == 1 &&
      blocks[4].childBlocks_[0] == blocks[6] &&
      blocks[3].parentBlock_ == blocks[1] &&          // 3 connected to then
      blocks[3].childBlocks_ &&
      blocks[3].childBlocks_.length == 1 &&
      blocks[3].childBlocks_[0] == blocks[5]  &&
      blocks[5].childBlocks_ &&
      blocks[5].childBlocks_.length == 1 &&
      blocks[5].childBlocks_[0] == blocks[7] ) {
    return true;
  }
  return false;
}

function workspaceHasWhenDynamoThenDynamoAndSlack() {
  var blocks = Blockly.mainWorkspace.getAllBlocks();
  if (blocks.length == 9 &&
      blocks[0].type == 'ds_rule' &&
      blocks[2].parentBlock_ == blocks[1] &&          // 2 connected to when
      blocks[3].parentBlock_ == blocks[1] &&          // 3 connected to then
      blocks[6].parentBlock_ == blocks[3] ) {
    return true;
  }
  return false;
}

function workspaceHasWhenDynamoThenDynamoAndSlackAndText() {
  var blocks = Blockly.mainWorkspace.getAllBlocks();
  if (blocks.length == 10 && allBlocksEnabled(blocks) &&
      blocks[0].type == 'ds_rule' &&
      blocks[2].parentBlock_ == blocks[1] &&          // 2 connected to when
      blocks[3].parentBlock_ == blocks[1] &&          // 3 connected to then
      blocks[6].parentBlock_ == blocks[3] ) {
    return true;
  }
  return false;
}

function allBlocksEnabled(blocks) {
  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i].disable) {
      return false;
    }
  }
  return true;
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


