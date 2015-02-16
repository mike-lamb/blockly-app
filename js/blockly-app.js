function clearAllBlocks() {
  if (Blockly.mainWorkspace !== null) {
    Blockly.mainWorkspace.clear();
  }
}

function save() {
    var uri = 'TODO';
    var drl = Blockly.Drools.workspaceToCode();
    console.log(drl);
              
    $.ajax({
      url: uri,
      type: 'PUT',
      contentType: 'text/plain',
      data: drl,
      success: function() { alert('PUT completed'); }
  });
}


function debugToConsole() {
  console.log(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace));
  console.log(Blockly.mainWorkspace.toolbox_.tree_);
  console.log(Blockly.Flyout);
}


function dismissTooltip(closeButton) {
  closeButton.parentElement.style.display = 'none';
}

var tutorialState = 1;
var tutorialState1Timeout;
var tutorialState3Timeout;
var tutorialState4Timeout;
var tutorialState5Timeout;
var tutorialState6Timeout;
function checkTutorialState(opt_fromChange) {
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
      tutorialState3Timeout = setTimeout(function() { showTooltip('.tutorial-3'); tutorialState = 4; }, 1000);    // Show the 'open Dynamo tooltip'
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

function hideWTTooltip() {
  var myElements = document.querySelectorAll(".desktop-tooltip");
 
  for (var i = 0; i < myElements.length; i++) {
      myElements[i].style.display = 'none';
  }
}

function blocklyChangeListener(event) {
  console.log('change');
  // console.log(event);
  checkTutorialState(true);
}

