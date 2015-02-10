'use strict';

var whenImagePath = 'http://service-images.whenthen.co/blockly/when.png';    
var thenImagePath = 'http://service-images.whenthen.co/blockly/then.png';    

Blockly.Blocks['controls_api_definer'] = {
  init: function() {
    this.setColour('#B2C374');
    
    this.appendDummyInput()
        .appendTitle('Request');
      //  .appendTitle(new Blockly.FieldTextInput('myApiName'), 'API_NAME');

    this.appendValueInput('INPUT0')
        .setCheck('Type')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle('Input');

    this.setOutput(true, Boolean);

//    this.appendValueInput('OUTPUT0')
//        .setCheck('Type')
//        .setAlign(Blockly.ALIGN_RIGHT)
//        .appendTitle('Output');
        
    // this.appendStatementInput('IMPL')
    //     .setCheck('Title')
    //     .appendTitle('Then');


    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Define the interface to the API');

    this.setMutator(new Blockly.Mutator(['type_api_definer_input']));
    this.setTooltip('Allows more than one type to be accepted.');
    this.inputTypeCount_ = 1;
    this.outputTypeCount_ = 1;
  },
//  onConnect: function(something) {
//      console.log('onconnect');
//      console.log(something);
//      // Need to see whether the inputs have changed
//      for (var x = 0; x < this.inputTypeCount_; x++) {
//        var input = this.getInput('INPUT' + x);
//        var conn = input.connection.targetConnection;
//        if (conn) {
//            var source = conn.sourceBlock_;
//            console.log(source);
//            for (var x = 0, input; input = source.inputList[x]; x++) {
//                for (var y = 0, title; title = input.titleRow[y]; y++) {
//                  if (title.name && title.EDITABLE) {
//                      var blah = title.getValue();
//                      console.log(blah);
//                  }
//                }
//              }            
//        }
//      }
//  },
//  onDisconnect: function(something) {
//      console.log('ondisconnect');
//      console.log(something);
//  },
  mutationToDom: function(workspace) {
      console.log('mutationToDom');
    var container = document.createElement('mutation');
    container.setAttribute('inputTypes', this.inputTypeCount_);
    container.setAttribute('outputTypes', this.outputTypeCount_);
    return container;
  },
  domToMutation: function(container) {
      console.log('domToMutation');
    for (var x = 0; x < this.inputTypeCount_; x++) {
      this.removeInput('INPUT' + x);
    }
    this.inputTypeCount_ = window.parseInt(container.getAttribute('inputTypes'), 10);
    for (var x = 0; x < this.inputTypeCount_; x++) {
      var input = this.appendValueInput('INPUT' + x)
                      .setCheck('Type');
      if (x == 0) {
        input
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle('Input');
      }
    }
    // Add & remove output to make sure it's below the inputs
//    this.removeInput('OUTPUT0');
//    this.appendValueInput('OUTPUT0').setCheck('Type').setAlign(Blockly.ALIGN_RIGHT).appendTitle('Output');
    // this.removeInput('IMPL');
    // this.appendStatementInput('IMPL').setCheck('Title').appendTitle('Then');
    
  },
  decompose: function(workspace) {
      console.log('decompose');
    var containerBlock = new Blockly.Block.obtain(workspace,
                                           'type_api_definer_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.inputTypeCount_; x++) {
      var typeBlock = new Blockly.Block.obtain(workspace, 'type_api_definer_input');
      typeBlock.initSvg();
      connection.connect(typeBlock.previousConnection);
      connection = typeBlock.nextConnection;
    }
    /*
    for (var x = 0; x < this.outputTypeCount_; x++) {
      var typeBlock = new Blockly.Block(workspace, 'type_api_definer_output');
      typeBlock.initSvg();
      connection.connect(typeBlock.previousConnection);
      connection = typeBlock.nextConnection;
    }*/
    return containerBlock;
  },
  compose: function(containerBlock) {
      console.log('compose');
    // Disconnect all input blocks and remove all inputs.
    for (var x = this.inputTypeCount_ - 1; x >= 0; x--) {
      this.removeInput('INPUT' + x);
    }
    this.inputTypeCount_ = 0;
    
    
    /*
    for (var x = this.outputTypeCount_ - 1; x >= 0; x--) {
      this.removeInput('OUTPUT' + x);
    }
    this.outputTypeCount_ = 0;*/
    // Rebuild the block's inputs.
    var typeBlock = containerBlock.getInputTargetBlock('STACK');
    while (typeBlock) {
      if (typeBlock.type == 'type_api_definer_input') {
        var input = this.appendValueInput('INPUT' + this.inputTypeCount_)
                        .setCheck('Type');
        if (this.inputTypeCount_ == 0) {
          input
              .setCheck('Type')
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendTitle('Input');
        }
        this.inputTypeCount_++;
      } /* else {
          var output = this.appendValueInput('OUTPUT' + this.outputTypeCount_)
                        .setCheck('Type');
        if (this.outputTypeCount_ == 0) {
          output
              .setCheck('Type')
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendTitle('Output');
        }
        this.outputTypeCount_++;
      }*/
      // Reconnect any child blocks.
      if (typeBlock.valueConnection_) {
        input.connection.connect(typeBlock.valueConnection_);
      }
      
      typeBlock = typeBlock.nextConnection &&
          typeBlock.nextConnection.targetBlock();
    }
//    this.removeInput('OUTPUT0');
//    this.appendValueInput('OUTPUT0').setCheck('Type').setAlign(Blockly.ALIGN_RIGHT).appendTitle('Output');
    // this.removeInput('IMPL');
    // this.appendStatementInput('IMPL').setCheck('Title').appendTitle('Then');
  },
  saveConnections: function(containerBlock) {
      console.log('saveConnections');
    // Store a pointer to any connected child blocks.
    var typeBlock = containerBlock.getInputTargetBlock('STACK');
    var inputsX = 0;
    var outputsX = 0;
    while (typeBlock) {
     if (typeBlock.type == 'type_api_definer_input') {
        var input = this.getInput('INPUT' + inputsX);
        typeBlock.valueConnection_ = input && input.connection.targetConnection;
        inputsX++;
      } /*else { 
        var output = this.getInput('OUTPUT' + outputsX);
        typeBlock.valueConnection_ = output && output.connection.targetConnection;
        outputsX++;
      }*/
      
      typeBlock = typeBlock.nextConnection &&
          typeBlock.nextConnection.targetBlock();
    }
  }
};

Blockly.Blocks['type_group'] = {
  // Group of types.
  category: 'API Definer',
  init: function() {
    this.setColour('#516AED');
    this.appendValueInput('TYPE0')
        .setCheck('Type')
        .appendTitle('Object named')
        .appendTitle(new Blockly.FieldTextInput('myObject'), 'TYPE')
        .appendTitle('of');
//    this.appendDummyInput()
//        .appendTitle('List named')
//        .appendTitle(new Blockly.FieldTextInput('myList'), 'TYPE'); 
    this.appendValueInput('TYPE1')
        .setCheck('Type');
    this.setOutput(true, 'Type');
    this.setMutator(new Blockly.Mutator(['type_group_item']));
    this.setTooltip('Allows more than one type to be accepted.');
    this.typeCount_ = 2;
  },
  mutationToDom: function(workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('types', this.typeCount_);
    return container;
  },
  domToMutation: function(container) {
    for (var x = 0; x < this.typeCount_; x++) {
      this.removeInput('TYPE' + x);
    }
    this.typeCount_ = window.parseInt(container.getAttribute('types'), 10);
    for (var x = 0; x < this.typeCount_; x++) {
      var input = this.appendValueInput('TYPE' + x)
                      .setCheck('Type');
      if (x == 0) {
        input
            .appendTitle('Object named')
            .appendTitle(new Blockly.FieldTextInput('myObject'), 'TYPE')
            .appendTitle('of');
      }
    }
  },
  decompose: function(workspace) {
    var containerBlock = new Blockly.Block.obtain(workspace,
                                           'type_group_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.typeCount_; x++) {
      var typeBlock = new Blockly.Block.obtain(workspace, 'type_group_item');
      typeBlock.initSvg();
      connection.connect(typeBlock.previousConnection);
      connection = typeBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function(containerBlock) {
    // Disconnect all input blocks and remove all inputs.
    for (var x = this.typeCount_ - 1; x >= 0; x--) {
      this.removeInput('TYPE' + x);
    }
    this.typeCount_ = 0;
    // Rebuild the block's inputs.
    var typeBlock = containerBlock.getInputTargetBlock('STACK');
    while (typeBlock) {
      var input = this.appendValueInput('TYPE' + this.typeCount_)
                      .setCheck('Type');
      if (this.typeCount_ == 0) {
        input
            .appendTitle('Object named')
            .appendTitle(new Blockly.FieldTextInput('myObject'), 'TYPE')
            .appendTitle('of');
      }
      // Reconnect any child blocks.
      if (typeBlock.valueConnection_) {
        input.connection.connect(typeBlock.valueConnection_);
      }
      this.typeCount_++;
      typeBlock = typeBlock.nextConnection &&
          typeBlock.nextConnection.targetBlock();
    }
  },
  saveConnections: function(containerBlock) {
    // Store a pointer to any connected child blocks.
    var typeBlock = containerBlock.getInputTargetBlock('STACK');
    var x = 0;
    while (typeBlock) {
      var input = this.getInput('TYPE' + x);
      typeBlock.valueConnection_ = input && input.connection.targetConnection;
      x++;
      typeBlock = typeBlock.nextConnection &&
          typeBlock.nextConnection.targetBlock();
    }
  }
};

Blockly.Blocks['type_group_container'] = {
  // Container.
  init: function() {
    this.setColour('#516AED');
    this.appendDummyInput()
        .appendTitle('add types');
    this.appendStatementInput('STACK');
    this.setTooltip('Add, or remove allowed type.');
    this.contextMenu = false;
  }
};




Blockly.Blocks['type_group_item'] = {
  // Add type.
  init: function() {
    this.setColour('#516AED');
    this.appendDummyInput()
        .appendTitle('type');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Add a new allowed type.');
    this.contextMenu = false;
  }
};

/*
Blockly.Language.type_api_definer_input_item = {
  // Add type.
  init: function() {
    this.setRGBColour('#B2C374');
    this.appendDummyInput()
        .appendTitle('Input');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Add a new input.');
    this.contextMenu = false;
  }
};
*/
Blockly.Blocks['type_api_definer_input'] = {
  // Add type.
  init: function() {
    this.setColour('#B2C374');
    this.appendDummyInput()
        .appendTitle('Input');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Add a new input.');
    this.contextMenu = false;
  }
};

Blockly.Blocks['type_api_definer_container'] = {
  // Container.
  init: function() {
    this.setColour('#B2C374');
    this.appendDummyInput()
        .appendTitle('add Inputs');
    this.appendStatementInput('STACK');
    this.setTooltip('Add, or remove inputs.');
    this.contextMenu = false;
  }
};

Blockly.Blocks['type_api_definer_output'] = {
  // Add type.
  init: function() {
    this.setColour('#B2C374');
    this.appendDummyInput()
        .appendTitle('Output');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Add a new output.');
    this.contextMenu = false;
  }
};

// Blockly.Language.type_null = {
//   // Null type.
//   category: 'API Definer',
//   valueType: 'null',
//   init: function() {
//     this.setRGBColour('#516AED');
//     this.appendDummyInput()
//         .appendTitle('any');
//     this.setOutput(true, 'Type');
//     this.setTooltip('Any type is allowed.');
//   }
// };

Blockly.Blocks['type_boolean'] = {
  // Boolean type.
  category: 'API Definer',
  valueType: 'Boolean',
  init: function() {
    this.setColour('#516AED');
    this.appendDummyInput()
        .appendTitle('Boolean named')
        .appendTitle(new Blockly.FieldTextInput('myBoolean'), 'TYPE');
    this.setOutput(true, 'Type');
    this.setTooltip('Booleans (true/false) are allowed.');
  }
};

Blockly.Blocks['type_number'] = {
  // Number type.
  category: 'API Definer',
  valueType: 'Number',
  init: function() {
    this.setColour('#516AED');
    this.appendDummyInput()
        .appendTitle('Number named')
        .appendTitle(new Blockly.FieldTextInput('myNumber'), 'TYPE');
    this.setOutput(true, 'Type');
    this.setTooltip('Numbers (int/float) are allowed.');
  }
};

Blockly.Blocks['type_string'] = {
  // String type.
  category: 'API Definer',
  valueType: 'String',
  init: function() {
    this.setColour('#516AED');
    this.appendDummyInput()
        .appendTitle('String named')
        .appendTitle(new Blockly.FieldTextInput('myString'), 'TYPE');
    this.setOutput(true, 'Type');
    this.setTooltip('Strings (text) are allowed.');
  }
};

Blockly.Blocks['type_list'] = {
  // List type.
  category: 'API Definer',
  valueType: 'Array',
  init: function() {
    this.setColour('#516AED');
    this.appendDummyInput()
        .appendTitle('List named')
        .appendTitle(new Blockly.FieldTextInput('myList'), 'TYPE');
    this.appendValueInput('of type')
        .setCheck('Type')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle('of type');
    this.setOutput(true, 'Type');
    this.setTooltip('Arrays (lists) are allowed.');
  }
};


