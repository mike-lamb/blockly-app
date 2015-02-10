Blockly.Blocks['mike'] = {
  init: function() {
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    this.setColour('#ff00ff');
    this.appendValueInput('VALUE')
        .setCheck('String')
        .appendField('length');
    this.setOutput(true, 'Number');
    this.setTooltip('Returns number of letters in the provided text.');
  }
};


var whenImagePath = 'http://service-images.whenthen.co/blockly/when.png';    
var thenImagePath = 'http://service-images.whenthen.co/blockly/then.png';    

Blockly.Blocks['whenthen'] = {
  init: function() {
    this.setColour('#2AC4EA');
    var whenImage = new Blockly.FieldImage(whenImagePath, 65, 20);
    var thenImage = new Blockly.FieldImage(thenImagePath, 65, 20);

    // var textInput = new Blockly.FieldTextInput('Enter Rule Name');
    // this.appendDummyInput()
    //     .appendField('Rule')
    //     .appendField(textInput, 'NAME');

    this.appendValueInput('WHEN') // .setAlign(Blockly.ALIGN_RIGHT)
       // .setCheck(Boolean)
        .appendField('When'); // Title(whenImage);
    this.appendStatementInput('THEN') //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField('Then'); // Title(thenImage);
    this.setPreviousStatement(true);
    this.setNextStatement(false);
    this.setTooltip('When something occurs, then take an action');
  }
};


Blockly.Blocks['whenthenrule'] = {
  init: function() {
    this.setColour('#2AC4EA');
    var whenImage = new Blockly.FieldImage(whenImagePath, 65, 20);
    var thenImage = new Blockly.FieldImage(thenImagePath, 65, 20);

    var textInput = new Blockly.FieldTextInput('Enter Rule Name');
    this.appendDummyInput()
        .appendField('Rule')
        .appendField(textInput, 'NAME');

    this.appendStatementInput();
    

    // this.appendValueInput('WHEN') // .setAlign(Blockly.ALIGN_RIGHT)
    //    // .setCheck(Boolean)
    //     .appendField('When'); // Title(whenImage);
    // this.appendStatementInput('THEN').setAlign(Blockly.ALIGN_RIGHT)
    //     .appendField('Then'); // Title(thenImage);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('When something occurs, then take an action');
  }
};


Blockly.Drools['whenthen'] = function(block) {
  // When Then condition.
  var argument = Blockly.Drools.valueToCode(block, 'WHEN',
      Blockly.Drools.ORDER_NONE) || 'false';
  var branch = Blockly.Drools.statementToCode(block, 'THEN');
  var code = 'rule "todo"\n';
  code += 'when\n';
  code += '\t';
  code += argument;
  code += '\n';
  code += 'then\n';
  code += '\t';
  code += branch;
  code += '\n';
  code += 'end\n';
  return code + '\n';
};











Blockly.Blocks['whenthenmutator'] = {
  init: function() {
    this.setColour('#2AC4EA');
    var whenImage = new Blockly.FieldImage(whenImagePath, 65, 20);
    var thenImage = new Blockly.FieldImage(thenImagePath, 65, 20);

    // var textInput = new Blockly.FieldTextInput('Enter Rule Name');
    // this.appendDummyInput()
    //     .appendField('Rule')
    //     .appendField(textInput, 'NAME');

    this.appendValueInput('WHEN') // .setAlign(Blockly.ALIGN_RIGHT)
       // .setCheck(Boolean)
        .appendField('When'); // Title(whenImage);
        this.appendValueInput('WHEN') // .setAlign(Blockly.ALIGN_RIGHT)
       // .setCheck(Boolean)
        .appendField('and').setAlign(Blockly.ALIGN_RIGHT); // Title(whenImage);
    this.appendStatementInput('THEN') //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField('Then'); // Title(thenImage);
    this.setPreviousStatement(true);
    this.setNextStatement(false);
    this.setTooltip('When something occurs, then take an action');
  }
};








Blockly.Blocks['consumed'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('consumed');
  this.appendValueInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('Consumed read capacity is greater than');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateTableResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateTableResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};

Blockly.Blocks['consumed5'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('consumed');

  var dropdown = new Blockly.FieldDropdown([['TableName', 'TableName'], ['blah', 'blah']]);
  this.appendDummyInput()
     // .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField(dropdown, 'MODE');

  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateTableResult');
  this.setOutput(true);
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Blocks['consumed2'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('consumed2');
  var textInput = new Blockly.FieldTextInput('70');
  this.appendDummyInput()
    //  .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField(textInput, 'NAME')
      .appendField('% of provisioned read throughput');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateTableResult');
  this.setOutput(true);
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Blocks['consumed3'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('consumed3');
  this.appendValueInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('Set provisioned read throughput to');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateTableResult');
  this.setOutput(false);
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};





Blockly.Blocks['consumed4'] = {
  init: function() {
  this.setColour('#49C5A1');
  this.setObjectId('consumed3');

  var dropdown = new Blockly.FieldDropdown([['SysOps', 'SysOps'], ['blah', 'blah']]);

  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://pbs.twimg.com/profile_images/378800000271328329/349dc6f270e53cbe09cd05f6c032fc67.png', 15, 15)) 
      .appendField('Send to Slack channel')
      .appendField(dropdown, 'MODE');

   this.appendValueInput().appendField('Message').setAlign(Blockly.ALIGN_RIGHT);
   this.appendValueInput();
   this.appendValueInput();
  

  // this.appendValueInput()
  //     .appendField('Slack Channel').setAlign(Blockly.ALIGN_RIGHT);

  // this.appendDummyInput()
  //     .appendField('{{tableName} + ” read throughput set to ” + {{120}% of provisioned read throughput}}');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateTableResult');
  this.setOutput(false);
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};



Blockly.Blocks['refresh1'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourceRequest');

  var dropdown = new Blockly.FieldDropdown([['minutes', 'minutes'], ['hours', 'hours'], ['days', 'days'], ['weeks', 'weeks'], ['months', 'months'], ['years', 'years']]);
  var textInput = new Blockly.FieldTextInput('2');

  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://nr-platform.s3.amazonaws.com/uploads/platform/published_extension/branding_icon/58/EC2.png',15,15)) //https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Compute__Networking_copy_Amazon_EC2---128.png', 15, 15)) 
      .appendField('Instance has been running for more than')
      .appendField(textInput, 'something')
      .appendField(dropdown, 'something2');

//https://nr-platform.s3.amazonaws.com/uploads/platform/published_extension/branding_icon/58/EC2.png

  // this.setPreviousStatement(true);
  // this.setNextStatement(true);
  this.setOutput(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourceRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Blocks['refresh2'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourceRequest');

  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://nr-platform.s3.amazonaws.com/uploads/platform/published_extension/branding_icon/58/EC2.png',15,15)) //https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Compute__Networking_copy_Amazon_EC2---128.png', 15, 15)) 
      .appendField('Reboot instance');

//https://nr-platform.s3.amazonaws.com/uploads/platform/published_extension/branding_icon/58/EC2.png

  this.setPreviousStatement(true);
  this.setNextStatement(true);
  //this.setOutput(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourceRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};
 



Blockly.Blocks['refresh3'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourceRequest');

  var dropdown = new Blockly.FieldDropdown([['minutes', 'minutes'], ['hours', 'hours'], ['days', 'days'], ['weeks', 'weeks'], ['months', 'months'], ['years', 'years']]);
  var textInput = new Blockly.FieldTextInput('2');


  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/AWS_Simple_Icons_Compute_Amazon_Elastic_MapReduce_Auto_Scaling.svg/120px-AWS_Simple_Icons_Compute_Amazon_Elastic_MapReduce_Auto_Scaling.svg.png',15,15)) //https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Compute__Networking_copy_Amazon_EC2---128.png', 15, 15)) 
      .appendField('All instances in scaling group have been running for at least')
      .appendField(textInput, 'something')
      .appendField(dropdown, 'something2');


//https://nr-platform.s3.amazonaws.com/uploads/platform/published_extension/branding_icon/58/EC2.png

  // this.setPreviousStatement(true);
  // this.setNextStatement(true);
  this.setOutput(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourceRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Blocks['getCustomerTrackPlayIds'] = {
  init: function() {
  this.setColour('#F5830A');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-history_blockly.png', 15, 15)) 
      .appendField('getCustomerTrackPlayIds');

this.appendValueInput('customerId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('customerId');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
  this.setMutator(new Blockly.Mutator(['getCustomerTrackPlayIds_startDate','getCustomerTrackPlayIds_endDate','getCustomerTrackPlayIds_startItem','getCustomerTrackPlayIds_limit']));
  this.mutatorInputsEnabled = new Array( 4);
  for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
      this.mutatorInputsEnabled[x] = false;
  }
  this.mutatorInputBlockNames = ['startDate','endDate','startItem','limit'];
  this.mutatorInputBlockKeys = ['getCustomerTrackPlayIds_startDate','getCustomerTrackPlayIds_endDate','getCustomerTrackPlayIds_startItem','getCustomerTrackPlayIds_limit'];

}
,
mutationToDom: function() {
var container = document.createElement('mutation');
return container;
}
,
domToMutation: function(xmlElement) {
}
,
decompose: function(workspace) {
var containerBlock = new Blockly.Block.obtain(workspace, 'Contcbef51fa0cb94f94a73afa16eef68451');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      var itemBlock = new Blockly.Block.obtain(workspace, this.mutatorInputBlockKeys[x]);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
  }
}
return containerBlock;
}
,
compose: function(containerBlock) {
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.removeInput(this.mutatorInputBlockNames[x]);
      this.mutatorInputsEnabled[x] = false;
  }
}
var itemBlock = containerBlock.getInputTargetBlock('STACK');
while (itemBlock) {
  for (var x = 0; x < this.mutatorInputBlockNames.length; x++) { 
      if (this.mutatorInputBlockKeys[x] == itemBlock.type) {
          this.mutatorInputsEnabled[x] = true;
      }
  }
  itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
}
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.appendValueInput(this.mutatorInputBlockNames[x])
          .appendField(this.mutatorInputBlockNames[x])
          .setAlign(Blockly.ALIGN_RIGHT);
  }
}
}
,
getVars: function() {
  var outputs = [];
  outputs.push("trackPlayIdList");
  return outputs;
},
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('count', '#F5830A', 'count', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlayIdList', "Number"));
outputs.push(new Variable('trackPlayIds', '#F5830A', 'trackPlayIds', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlayIdList', "null"));
outputs.push(new Variable('endItem', '#F5830A', 'endItem', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlayIdList', "String"));
return outputs;
}

};


Blockly.Blocks['getCustomerTrackPlayIds_startDate'] = {
init: function() { 
  this.setColour('#F5830A');
  this.appendDummyInput()
      .appendField('startDate');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['getCustomerTrackPlayIds_endDate'] = {
init: function() { 
  this.setColour('#F5830A');
  this.appendDummyInput()
      .appendField('endDate');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['getCustomerTrackPlayIds_startItem'] = {
init: function() { 
  this.setColour('#F5830A');
  this.appendDummyInput()
      .appendField('startItem');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('The id of the item from which this list should start.');
  this.contextMenu = false;
  }
};
Blockly.Blocks['getCustomerTrackPlayIds_limit'] = {
init: function() { 
  this.setColour('#F5830A');
  this.appendDummyInput()
      .appendField('limit');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('The total number of items to return in this list.');
  this.contextMenu = false;
  }
};
Blockly.Blocks['Contcbef51fa0cb94f94a73afa16eef68451'] = {
  init: function() {
this.setColour('#F5830A');
this.appendDummyInput()
  .appendField('Optional inputs');
this.appendStatementInput('STACK');
this.setTooltip('Set optional parameters');
this.contextMenu = false;
}
};

Blockly.Blocks['getCustomerDeviceTrackPlayIds'] = {
  init: function() {
  this.setColour('#F5830A');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-history_blockly.png', 15, 15)) 
      .appendField('getCustomerDeviceTrackPlayIds');

this.appendValueInput('customerId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('customerId');
this.appendValueInput('deviceName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('deviceName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
  this.setMutator(new Blockly.Mutator(['getCustomerDeviceTrackPlayIds_startDate','getCustomerDeviceTrackPlayIds_endDate','getCustomerDeviceTrackPlayIds_startItem','getCustomerDeviceTrackPlayIds_limit']));
  this.mutatorInputsEnabled = new Array( 4);
  for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
      this.mutatorInputsEnabled[x] = false;
  }
  this.mutatorInputBlockNames = ['startDate','endDate','startItem','limit'];
  this.mutatorInputBlockKeys = ['getCustomerDeviceTrackPlayIds_startDate','getCustomerDeviceTrackPlayIds_endDate','getCustomerDeviceTrackPlayIds_startItem','getCustomerDeviceTrackPlayIds_limit'];

}
,
mutationToDom: function() {
var container = document.createElement('mutation');
return container;
}
,
domToMutation: function(xmlElement) {
}
,
decompose: function(workspace) {
var containerBlock = new Blockly.Block.obtain(workspace, 'Cont1f42dfe6f4004ae5a50c8f46d67a1ab4');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      var itemBlock = new Blockly.Block.obtain(workspace, this.mutatorInputBlockKeys[x]);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
  }
}
return containerBlock;
}
,
compose: function(containerBlock) {
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.removeInput(this.mutatorInputBlockNames[x]);
      this.mutatorInputsEnabled[x] = false;
  }
}
var itemBlock = containerBlock.getInputTargetBlock('STACK');
while (itemBlock) {
  for (var x = 0; x < this.mutatorInputBlockNames.length; x++) { 
      if (this.mutatorInputBlockKeys[x] == itemBlock.type) {
          this.mutatorInputsEnabled[x] = true;
      }
  }
  itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
}
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.appendValueInput(this.mutatorInputBlockNames[x])
          .appendField(this.mutatorInputBlockNames[x])
          .setAlign(Blockly.ALIGN_RIGHT);
  }
}
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('count', '#F5830A', 'count', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlayIdList', "Number"));
outputs.push(new Variable('trackPlayIds', '#F5830A', 'trackPlayIds', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlayIdList', "null"));
outputs.push(new Variable('endItem', '#F5830A', 'endItem', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlayIdList', "String"));
return outputs;
}

};


Blockly.Blocks['getCustomerDeviceTrackPlayIds_startDate'] = {
init: function() { 
  this.setColour('#F5830A');
  this.appendDummyInput()
      .appendField('startDate');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['getCustomerDeviceTrackPlayIds_endDate'] = {
init: function() { 
  this.setColour('#F5830A');
  this.appendDummyInput()
      .appendField('endDate');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['getCustomerDeviceTrackPlayIds_startItem'] = {
init: function() { 
  this.setColour('#F5830A');
  this.appendDummyInput()
      .appendField('startItem');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('The id of the item from which this list should start.');
  this.contextMenu = false;
  }
};
Blockly.Blocks['getCustomerDeviceTrackPlayIds_limit'] = {
init: function() { 
  this.setColour('#F5830A');
  this.appendDummyInput()
      .appendField('limit');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('The total number of items to return in this list.');
  this.contextMenu = false;
  }
};
Blockly.Blocks['Cont1f42dfe6f4004ae5a50c8f46d67a1ab4'] = {
  init: function() {
this.setColour('#F5830A');
this.appendDummyInput()
  .appendField('Optional inputs');
this.appendStatementInput('STACK');
this.setTooltip('Set optional parameters');
this.contextMenu = false;
}
};

Blockly.Blocks['getCustomerContextTypeTrackPlayIds'] = {
  init: function() {
  this.setColour('#F5830A');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-history_blockly.png', 15, 15)) 
      .appendField('getCustomerContextTypeTrackPlayIds');

this.appendValueInput('customerId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('customerId');
this.appendValueInput('contextType')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('contextType');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
  this.setMutator(new Blockly.Mutator(['getCustomerContextTypeTrackPlayIds_startDate','getCustomerContextTypeTrackPlayIds_endDate','getCustomerContextTypeTrackPlayIds_startItem','getCustomerContextTypeTrackPlayIds_limit']));
  this.mutatorInputsEnabled = new Array( 4);
  for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
      this.mutatorInputsEnabled[x] = false;
  }
  this.mutatorInputBlockNames = ['startDate','endDate','startItem','limit'];
  this.mutatorInputBlockKeys = ['getCustomerContextTypeTrackPlayIds_startDate','getCustomerContextTypeTrackPlayIds_endDate','getCustomerContextTypeTrackPlayIds_startItem','getCustomerContextTypeTrackPlayIds_limit'];

}
,
mutationToDom: function() {
var container = document.createElement('mutation');
return container;
}
,
domToMutation: function(xmlElement) {
}
,
decompose: function(workspace) {
var containerBlock = new Blockly.Block.obtain(workspace, 'Cont8c73c835080442f396912e2fe92aec1c');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      var itemBlock = new Blockly.Block.obtain(workspace, this.mutatorInputBlockKeys[x]);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
  }
}
return containerBlock;
}
,
compose: function(containerBlock) {
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.removeInput(this.mutatorInputBlockNames[x]);
      this.mutatorInputsEnabled[x] = false;
  }
}
var itemBlock = containerBlock.getInputTargetBlock('STACK');
while (itemBlock) {
  for (var x = 0; x < this.mutatorInputBlockNames.length; x++) { 
      if (this.mutatorInputBlockKeys[x] == itemBlock.type) {
          this.mutatorInputsEnabled[x] = true;
      }
  }
  itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
}
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.appendValueInput(this.mutatorInputBlockNames[x])
          .appendField(this.mutatorInputBlockNames[x])
          .setAlign(Blockly.ALIGN_RIGHT);
  }
}
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('count', '#F5830A', 'count', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlayIdList', "Number"));
outputs.push(new Variable('trackPlayIds', '#F5830A', 'trackPlayIds', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlayIdList', "null"));
outputs.push(new Variable('endItem', '#F5830A', 'endItem', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlayIdList', "String"));
return outputs;
}

};


Blockly.Blocks['getCustomerContextTypeTrackPlayIds_startDate'] = {
init: function() { 
  this.setColour('#F5830A');
  this.appendDummyInput()
      .appendField('startDate');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['getCustomerContextTypeTrackPlayIds_endDate'] = {
init: function() { 
  this.setColour('#F5830A');
  this.appendDummyInput()
      .appendField('endDate');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['getCustomerContextTypeTrackPlayIds_startItem'] = {
init: function() { 
  this.setColour('#F5830A');
  this.appendDummyInput()
      .appendField('startItem');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('The id of the item from which this list should start.');
  this.contextMenu = false;
  }
};
Blockly.Blocks['getCustomerContextTypeTrackPlayIds_limit'] = {
init: function() { 
  this.setColour('#F5830A');
  this.appendDummyInput()
      .appendField('limit');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('The total number of items to return in this list.');
  this.contextMenu = false;
  }
};
Blockly.Blocks['Cont8c73c835080442f396912e2fe92aec1c'] = {
  init: function() {
this.setColour('#F5830A');
this.appendDummyInput()
  .appendField('Optional inputs');
this.appendStatementInput('STACK');
this.setTooltip('Set optional parameters');
this.contextMenu = false;
}
};

Blockly.Blocks['getCustomerContextIdTrackPlayIds'] = {
  init: function() {
  this.setColour('#F5830A');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-history_blockly.png', 15, 15)) 
      .appendField('getCustomerContextIdTrackPlayIds');

this.appendValueInput('customerId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('customerId');
this.appendValueInput('contextType')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('contextType');
this.appendValueInput('contextId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('contextId');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
  this.setMutator(new Blockly.Mutator(['getCustomerContextIdTrackPlayIds_startDate','getCustomerContextIdTrackPlayIds_endDate','getCustomerContextIdTrackPlayIds_startItem','getCustomerContextIdTrackPlayIds_limit']));
  this.mutatorInputsEnabled = new Array( 4);
  for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
      this.mutatorInputsEnabled[x] = false;
  }
  this.mutatorInputBlockNames = ['startDate','endDate','startItem','limit'];
  this.mutatorInputBlockKeys = ['getCustomerContextIdTrackPlayIds_startDate','getCustomerContextIdTrackPlayIds_endDate','getCustomerContextIdTrackPlayIds_startItem','getCustomerContextIdTrackPlayIds_limit'];

}
,
mutationToDom: function() {
var container = document.createElement('mutation');
return container;
}
,
domToMutation: function(xmlElement) {
}
,
decompose: function(workspace) {
var containerBlock = new Blockly.Block.obtain(workspace, 'Contafd2ad1a145f4835a78ec71f797629e5');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      var itemBlock = new Blockly.Block.obtain(workspace, this.mutatorInputBlockKeys[x]);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
  }
}
return containerBlock;
}
,
compose: function(containerBlock) {
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.removeInput(this.mutatorInputBlockNames[x]);
      this.mutatorInputsEnabled[x] = false;
  }
}
var itemBlock = containerBlock.getInputTargetBlock('STACK');
while (itemBlock) {
  for (var x = 0; x < this.mutatorInputBlockNames.length; x++) { 
      if (this.mutatorInputBlockKeys[x] == itemBlock.type) {
          this.mutatorInputsEnabled[x] = true;
      }
  }
  itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
}
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.appendValueInput(this.mutatorInputBlockNames[x])
          .appendField(this.mutatorInputBlockNames[x])
          .setAlign(Blockly.ALIGN_RIGHT);
  }
}
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('count', '#F5830A', 'count', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlayIdList', "Number"));
outputs.push(new Variable('trackPlayIds', '#F5830A', 'trackPlayIds', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlayIdList', "null"));
outputs.push(new Variable('endItem', '#F5830A', 'endItem', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlayIdList', "String"));
return outputs;
}

};


Blockly.Blocks['getCustomerContextIdTrackPlayIds_startDate'] = {
init: function() { 
  this.setColour('#F5830A');
  this.appendDummyInput()
      .appendField('startDate');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['getCustomerContextIdTrackPlayIds_endDate'] = {
init: function() { 
  this.setColour('#F5830A');
  this.appendDummyInput()
      .appendField('endDate');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['getCustomerContextIdTrackPlayIds_startItem'] = {
init: function() { 
  this.setColour('#F5830A');
  this.appendDummyInput()
      .appendField('startItem');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('The id of the item from which this list should start.');
  this.contextMenu = false;
  }
};
Blockly.Blocks['getCustomerContextIdTrackPlayIds_limit'] = {
init: function() { 
  this.setColour('#F5830A');
  this.appendDummyInput()
      .appendField('limit');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('The total number of items to return in this list.');
  this.contextMenu = false;
  }
};
Blockly.Blocks['Contafd2ad1a145f4835a78ec71f797629e5'] = {
  init: function() {
this.setColour('#F5830A');
this.appendDummyInput()
  .appendField('Optional inputs');
this.appendStatementInput('STACK');
this.setTooltip('Set optional parameters');
this.contextMenu = false;
}
};

Blockly.Blocks['getTrackPlay'] = {
  init: function() {
  this.setColour('#F5830A');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-history_blockly.png', 15, 15)) 
      .appendField('getTrackPlay');

this.appendValueInput('trackPlayId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('trackPlayId');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
}
,
getVars: function() {
  var outputs = [];
  outputs.push("trackPlay");
  return outputs;
},
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('id', '#F5830A', 'id', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlay', "String"));
outputs.push(new Variable('trackId', '#F5830A', 'trackId', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlay', "String"));
outputs.push(new Variable('customerId', '#F5830A', 'customerId', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlay', "String"));
outputs.push(new Variable('reportedDate', '#F5830A', 'reportedDate', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlay', "String"));
outputs.push(new Variable('deviceName', '#F5830A', 'deviceName', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlay', "String"));
outputs.push(new Variable('events', '#F5830A', 'events', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlay', "null"));
outputs.push(new Variable('playContext.playedFromIndex', '#F5830A', 'playedFromIndex', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/PlayContext', "Number"));
outputs.push(new Variable('playContext.playedFromId', '#F5830A', 'playedFromId', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/PlayContext', "String"));
outputs.push(new Variable('playContext.playedFromType', '#F5830A', 'playedFromType', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/PlayContext', "String"));
outputs.push(new Variable('partnerId', '#F5830A', 'partnerId', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlay', "String"));
outputs.push(new Variable('playbackSessionId', '#F5830A', 'playbackSessionId', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlay', "String"));
outputs.push(new Variable('right', '#F5830A', 'right', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlay', "String"));
outputs.push(new Variable('country', '#F5830A', 'country', 'http://service-images.whenthen.co/blockly/ms-history_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/history/resources.json#/TrackPlay', "String"));
return outputs;
}

};


Blockly.Blocks['batchGetArtists'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('batchGetArtists');

  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
  this.setMutator(new Blockly.Mutator(['batchGetArtists_artistIds']));
  this.mutatorInputsEnabled = new Array( 1);
  for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
      this.mutatorInputsEnabled[x] = false;
  }
  this.mutatorInputBlockNames = ['artistIds'];
  this.mutatorInputBlockKeys = ['batchGetArtists_artistIds'];

}
,
mutationToDom: function() {
var container = document.createElement('mutation');
return container;
}
,
domToMutation: function(xmlElement) {
}
,
decompose: function(workspace) {
var containerBlock = new Blockly.Block.obtain(workspace, 'Cont3e266a0d9c984deaa666572420b8045a');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      var itemBlock = new Blockly.Block.obtain(workspace, this.mutatorInputBlockKeys[x]);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
  }
}
return containerBlock;
}
,
compose: function(containerBlock) {
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.removeInput(this.mutatorInputBlockNames[x]);
      this.mutatorInputsEnabled[x] = false;
  }
}
var itemBlock = containerBlock.getInputTargetBlock('STACK');
while (itemBlock) {
  for (var x = 0; x < this.mutatorInputBlockNames.length; x++) { 
      if (this.mutatorInputBlockKeys[x] == itemBlock.type) {
          this.mutatorInputsEnabled[x] = true;
      }
  }
  itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
}
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.appendValueInput(this.mutatorInputBlockNames[x])
          .appendField(this.mutatorInputBlockNames[x])
          .setAlign(Blockly.ALIGN_RIGHT);
  }
}
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('artists', '#A31090', 'artists', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/ArtistList', "null"));
return outputs;
}

};


Blockly.Blocks['batchGetArtists_artistIds'] = {
init: function() { 
  this.setColour('#A31090');
  this.appendDummyInput()
      .appendField('artistIds');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['Cont3e266a0d9c984deaa666572420b8045a'] = {
  init: function() {
this.setColour('#A31090');
this.appendDummyInput()
  .appendField('Optional inputs');
this.appendStatementInput('STACK');
this.setTooltip('Set optional parameters');
this.contextMenu = false;
}
};

Blockly.Blocks['batchGetReleases'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('batchGetReleases');

  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
  this.setMutator(new Blockly.Mutator(['batchGetReleases_releaseIds']));
  this.mutatorInputsEnabled = new Array( 1);
  for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
      this.mutatorInputsEnabled[x] = false;
  }
  this.mutatorInputBlockNames = ['releaseIds'];
  this.mutatorInputBlockKeys = ['batchGetReleases_releaseIds'];

}
,
mutationToDom: function() {
var container = document.createElement('mutation');
return container;
}
,
domToMutation: function(xmlElement) {
}
,
decompose: function(workspace) {
var containerBlock = new Blockly.Block.obtain(workspace, 'Cont3bb9eb66f4824fb585f7579f00768780');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      var itemBlock = new Blockly.Block.obtain(workspace, this.mutatorInputBlockKeys[x]);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
  }
}
return containerBlock;
}
,
compose: function(containerBlock) {
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.removeInput(this.mutatorInputBlockNames[x]);
      this.mutatorInputsEnabled[x] = false;
  }
}
var itemBlock = containerBlock.getInputTargetBlock('STACK');
while (itemBlock) {
  for (var x = 0; x < this.mutatorInputBlockNames.length; x++) { 
      if (this.mutatorInputBlockKeys[x] == itemBlock.type) {
          this.mutatorInputsEnabled[x] = true;
      }
  }
  itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
}
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.appendValueInput(this.mutatorInputBlockNames[x])
          .appendField(this.mutatorInputBlockNames[x])
          .setAlign(Blockly.ALIGN_RIGHT);
  }
}
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('releases', '#A31090', 'releases', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/ReleaseList', "null"));
return outputs;
}

};


Blockly.Blocks['batchGetReleases_releaseIds'] = {
init: function() { 
  this.setColour('#A31090');
  this.appendDummyInput()
      .appendField('releaseIds');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['Cont3bb9eb66f4824fb585f7579f00768780'] = {
  init: function() {
this.setColour('#A31090');
this.appendDummyInput()
  .appendField('Optional inputs');
this.appendStatementInput('STACK');
this.setTooltip('Set optional parameters');
this.contextMenu = false;
}
};

Blockly.Blocks['batchGetTracks'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('batchGetTracks');

  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
  this.setMutator(new Blockly.Mutator(['batchGetTracks_trackIds']));
  this.mutatorInputsEnabled = new Array( 1);
  for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
      this.mutatorInputsEnabled[x] = false;
  }
  this.mutatorInputBlockNames = ['trackIds'];
  this.mutatorInputBlockKeys = ['batchGetTracks_trackIds'];

}
,
mutationToDom: function() {
var container = document.createElement('mutation');
return container;
}
,
domToMutation: function(xmlElement) {
}
,
decompose: function(workspace) {
var containerBlock = new Blockly.Block.obtain(workspace, 'Cont6b9026dbd70c4387bd85f6d1da5b7827');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      var itemBlock = new Blockly.Block.obtain(workspace, this.mutatorInputBlockKeys[x]);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
  }
}
return containerBlock;
}
,
compose: function(containerBlock) {
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.removeInput(this.mutatorInputBlockNames[x]);
      this.mutatorInputsEnabled[x] = false;
  }
}
var itemBlock = containerBlock.getInputTargetBlock('STACK');
while (itemBlock) {
  for (var x = 0; x < this.mutatorInputBlockNames.length; x++) { 
      if (this.mutatorInputBlockKeys[x] == itemBlock.type) {
          this.mutatorInputsEnabled[x] = true;
      }
  }
  itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
}
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.appendValueInput(this.mutatorInputBlockNames[x])
          .appendField(this.mutatorInputBlockNames[x])
          .setAlign(Blockly.ALIGN_RIGHT);
  }
}
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('tracks', '#A31090', 'tracks', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/TrackList', "null"));
return outputs;
}

};


Blockly.Blocks['batchGetTracks_trackIds'] = {
init: function() { 
  this.setColour('#A31090');
  this.appendDummyInput()
      .appendField('trackIds');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['Cont6b9026dbd70c4387bd85f6d1da5b7827'] = {
  init: function() {
this.setColour('#A31090');
this.appendDummyInput()
  .appendField('Optional inputs');
this.appendStatementInput('STACK');
this.setTooltip('Set optional parameters');
this.contextMenu = false;
}
};

Blockly.Blocks['batchGetRecordings'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('batchGetRecordings');

  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
  this.setMutator(new Blockly.Mutator(['batchGetRecordings_recordingIds']));
  this.mutatorInputsEnabled = new Array( 1);
  for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
      this.mutatorInputsEnabled[x] = false;
  }
  this.mutatorInputBlockNames = ['recordingIds'];
  this.mutatorInputBlockKeys = ['batchGetRecordings_recordingIds'];

}
,
mutationToDom: function() {
var container = document.createElement('mutation');
return container;
}
,
domToMutation: function(xmlElement) {
}
,
decompose: function(workspace) {
var containerBlock = new Blockly.Block.obtain(workspace, 'Contc57a7abb63b44446aa77033d6c9b7c50');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      var itemBlock = new Blockly.Block.obtain(workspace, this.mutatorInputBlockKeys[x]);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
  }
}
return containerBlock;
}
,
compose: function(containerBlock) {
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.removeInput(this.mutatorInputBlockNames[x]);
      this.mutatorInputsEnabled[x] = false;
  }
}
var itemBlock = containerBlock.getInputTargetBlock('STACK');
while (itemBlock) {
  for (var x = 0; x < this.mutatorInputBlockNames.length; x++) { 
      if (this.mutatorInputBlockKeys[x] == itemBlock.type) {
          this.mutatorInputsEnabled[x] = true;
      }
  }
  itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
}
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.appendValueInput(this.mutatorInputBlockNames[x])
          .appendField(this.mutatorInputBlockNames[x])
          .setAlign(Blockly.ALIGN_RIGHT);
  }
}
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('recordings', '#A31090', 'recordings', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/RecordingList', "null"));
return outputs;
}

};


Blockly.Blocks['batchGetRecordings_recordingIds'] = {
init: function() { 
  this.setColour('#A31090');
  this.appendDummyInput()
      .appendField('recordingIds');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['Contc57a7abb63b44446aa77033d6c9b7c50'] = {
  init: function() {
this.setColour('#A31090');
this.appendDummyInput()
  .appendField('Optional inputs');
this.appendStatementInput('STACK');
this.setTooltip('Set optional parameters');
this.contextMenu = false;
}
};

Blockly.Blocks['batchGetOwners'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('batchGetOwners');

  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
  this.setMutator(new Blockly.Mutator(['batchGetOwners_ownerIds']));
  this.mutatorInputsEnabled = new Array( 1);
  for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
      this.mutatorInputsEnabled[x] = false;
  }
  this.mutatorInputBlockNames = ['ownerIds'];
  this.mutatorInputBlockKeys = ['batchGetOwners_ownerIds'];

}
,
mutationToDom: function() {
var container = document.createElement('mutation');
return container;
}
,
domToMutation: function(xmlElement) {
}
,
decompose: function(workspace) {
var containerBlock = new Blockly.Block.obtain(workspace, 'Cont3d650c397ef3476abb63d5f881cd65e3');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      var itemBlock = new Blockly.Block.obtain(workspace, this.mutatorInputBlockKeys[x]);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
  }
}
return containerBlock;
}
,
compose: function(containerBlock) {
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.removeInput(this.mutatorInputBlockNames[x]);
      this.mutatorInputsEnabled[x] = false;
  }
}
var itemBlock = containerBlock.getInputTargetBlock('STACK');
while (itemBlock) {
  for (var x = 0; x < this.mutatorInputBlockNames.length; x++) { 
      if (this.mutatorInputBlockKeys[x] == itemBlock.type) {
          this.mutatorInputsEnabled[x] = true;
      }
  }
  itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
}
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.appendValueInput(this.mutatorInputBlockNames[x])
          .appendField(this.mutatorInputBlockNames[x])
          .setAlign(Blockly.ALIGN_RIGHT);
  }
}
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('owners', '#A31090', 'owners', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/OwnerList', "null"));
return outputs;
}

};


Blockly.Blocks['batchGetOwners_ownerIds'] = {
init: function() { 
  this.setColour('#A31090');
  this.appendDummyInput()
      .appendField('ownerIds');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['Cont3d650c397ef3476abb63d5f881cd65e3'] = {
  init: function() {
this.setColour('#A31090');
this.appendDummyInput()
  .appendField('Optional inputs');
this.appendStatementInput('STACK');
this.setTooltip('Set optional parameters');
this.contextMenu = false;
}
};

Blockly.Blocks['batchGetSets'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('batchGetSets');

  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
  this.setMutator(new Blockly.Mutator(['batchGetSets_setIds']));
  this.mutatorInputsEnabled = new Array( 1);
  for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
      this.mutatorInputsEnabled[x] = false;
  }
  this.mutatorInputBlockNames = ['setIds'];
  this.mutatorInputBlockKeys = ['batchGetSets_setIds'];

}
,
mutationToDom: function() {
var container = document.createElement('mutation');
return container;
}
,
domToMutation: function(xmlElement) {
}
,
decompose: function(workspace) {
var containerBlock = new Blockly.Block.obtain(workspace, 'Cont00f5e522dd5d4cbbb80777aebaf54460');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      var itemBlock = new Blockly.Block.obtain(workspace, this.mutatorInputBlockKeys[x]);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
  }
}
return containerBlock;
}
,
compose: function(containerBlock) {
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.removeInput(this.mutatorInputBlockNames[x]);
      this.mutatorInputsEnabled[x] = false;
  }
}
var itemBlock = containerBlock.getInputTargetBlock('STACK');
while (itemBlock) {
  for (var x = 0; x < this.mutatorInputBlockNames.length; x++) { 
      if (this.mutatorInputBlockKeys[x] == itemBlock.type) {
          this.mutatorInputsEnabled[x] = true;
      }
  }
  itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
}
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.appendValueInput(this.mutatorInputBlockNames[x])
          .appendField(this.mutatorInputBlockNames[x])
          .setAlign(Blockly.ALIGN_RIGHT);
  }
}
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('sets', '#A31090', 'sets', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/SetList', "null"));
return outputs;
}

};


Blockly.Blocks['batchGetSets_setIds'] = {
init: function() { 
  this.setColour('#A31090');
  this.appendDummyInput()
      .appendField('setIds');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['Cont00f5e522dd5d4cbbb80777aebaf54460'] = {
  init: function() {
this.setColour('#A31090');
this.appendDummyInput()
  .appendField('Optional inputs');
this.appendStatementInput('STACK');
this.setTooltip('Set optional parameters');
this.contextMenu = false;
}
};

Blockly.Blocks['batchGetWorks'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('batchGetWorks');

  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
  this.setMutator(new Blockly.Mutator(['batchGetWorks_workIds']));
  this.mutatorInputsEnabled = new Array( 1);
  for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
      this.mutatorInputsEnabled[x] = false;
  }
  this.mutatorInputBlockNames = ['workIds'];
  this.mutatorInputBlockKeys = ['batchGetWorks_workIds'];

}
,
mutationToDom: function() {
var container = document.createElement('mutation');
return container;
}
,
domToMutation: function(xmlElement) {
}
,
decompose: function(workspace) {
var containerBlock = new Blockly.Block.obtain(workspace, 'Cont594a7541fd4b42e1996ae35b54b66ee5');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      var itemBlock = new Blockly.Block.obtain(workspace, this.mutatorInputBlockKeys[x]);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
  }
}
return containerBlock;
}
,
compose: function(containerBlock) {
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.removeInput(this.mutatorInputBlockNames[x]);
      this.mutatorInputsEnabled[x] = false;
  }
}
var itemBlock = containerBlock.getInputTargetBlock('STACK');
while (itemBlock) {
  for (var x = 0; x < this.mutatorInputBlockNames.length; x++) { 
      if (this.mutatorInputBlockKeys[x] == itemBlock.type) {
          this.mutatorInputsEnabled[x] = true;
      }
  }
  itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
}
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.appendValueInput(this.mutatorInputBlockNames[x])
          .appendField(this.mutatorInputBlockNames[x])
          .setAlign(Blockly.ALIGN_RIGHT);
  }
}
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('works', '#A31090', 'works', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/WorkList', "null"));
return outputs;
}

};


Blockly.Blocks['batchGetWorks_workIds'] = {
init: function() { 
  this.setColour('#A31090');
  this.appendDummyInput()
      .appendField('workIds');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['Cont594a7541fd4b42e1996ae35b54b66ee5'] = {
  init: function() {
this.setColour('#A31090');
this.appendDummyInput()
  .appendField('Optional inputs');
this.appendStatementInput('STACK');
this.setTooltip('Set optional parameters');
this.contextMenu = false;
}
};

Blockly.Blocks['sortArtistIds'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('sortArtistIds');

  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
  this.setMutator(new Blockly.Mutator(['sortArtistIds_artistIds']));
  this.mutatorInputsEnabled = new Array( 1);
  for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
      this.mutatorInputsEnabled[x] = false;
  }
  this.mutatorInputBlockNames = ['artistIds'];
  this.mutatorInputBlockKeys = ['sortArtistIds_artistIds'];

}
,
mutationToDom: function() {
var container = document.createElement('mutation');
return container;
}
,
domToMutation: function(xmlElement) {
}
,
decompose: function(workspace) {
var containerBlock = new Blockly.Block.obtain(workspace, 'Contecba6a3d7de1446abf64b99930a8ae93');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      var itemBlock = new Blockly.Block.obtain(workspace, this.mutatorInputBlockKeys[x]);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
  }
}
return containerBlock;
}
,
compose: function(containerBlock) {
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.removeInput(this.mutatorInputBlockNames[x]);
      this.mutatorInputsEnabled[x] = false;
  }
}
var itemBlock = containerBlock.getInputTargetBlock('STACK');
while (itemBlock) {
  for (var x = 0; x < this.mutatorInputBlockNames.length; x++) { 
      if (this.mutatorInputBlockKeys[x] == itemBlock.type) {
          this.mutatorInputsEnabled[x] = true;
      }
  }
  itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
}
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.appendValueInput(this.mutatorInputBlockNames[x])
          .appendField(this.mutatorInputBlockNames[x])
          .setAlign(Blockly.ALIGN_RIGHT);
  }
}
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('artistIds', '#A31090', 'artistIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/ArtistIdList', "null"));
return outputs;
}

};


Blockly.Blocks['sortArtistIds_artistIds'] = {
init: function() { 
  this.setColour('#A31090');
  this.appendDummyInput()
      .appendField('artistIds');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['Contecba6a3d7de1446abf64b99930a8ae93'] = {
  init: function() {
this.setColour('#A31090');
this.appendDummyInput()
  .appendField('Optional inputs');
this.appendStatementInput('STACK');
this.setTooltip('Set optional parameters');
this.contextMenu = false;
}
};

Blockly.Blocks['sortRecordingIds'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('sortRecordingIds');

  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
  this.setMutator(new Blockly.Mutator(['sortRecordingIds_recordingIds']));
  this.mutatorInputsEnabled = new Array( 1);
  for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
      this.mutatorInputsEnabled[x] = false;
  }
  this.mutatorInputBlockNames = ['recordingIds'];
  this.mutatorInputBlockKeys = ['sortRecordingIds_recordingIds'];

}
,
mutationToDom: function() {
var container = document.createElement('mutation');
return container;
}
,
domToMutation: function(xmlElement) {
}
,
decompose: function(workspace) {
var containerBlock = new Blockly.Block.obtain(workspace, 'Cont5d2976ad970d44f1a8a2fd2ba0da9d98');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      var itemBlock = new Blockly.Block.obtain(workspace, this.mutatorInputBlockKeys[x]);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
  }
}
return containerBlock;
}
,
compose: function(containerBlock) {
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.removeInput(this.mutatorInputBlockNames[x]);
      this.mutatorInputsEnabled[x] = false;
  }
}
var itemBlock = containerBlock.getInputTargetBlock('STACK');
while (itemBlock) {
  for (var x = 0; x < this.mutatorInputBlockNames.length; x++) { 
      if (this.mutatorInputBlockKeys[x] == itemBlock.type) {
          this.mutatorInputsEnabled[x] = true;
      }
  }
  itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
}
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.appendValueInput(this.mutatorInputBlockNames[x])
          .appendField(this.mutatorInputBlockNames[x])
          .setAlign(Blockly.ALIGN_RIGHT);
  }
}
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('recordingIds', '#A31090', 'recordingIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/RecordingIdList', "null"));
return outputs;
}

};


Blockly.Blocks['sortRecordingIds_recordingIds'] = {
init: function() { 
  this.setColour('#A31090');
  this.appendDummyInput()
      .appendField('recordingIds');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['Cont5d2976ad970d44f1a8a2fd2ba0da9d98'] = {
  init: function() {
this.setColour('#A31090');
this.appendDummyInput()
  .appendField('Optional inputs');
this.appendStatementInput('STACK');
this.setTooltip('Set optional parameters');
this.contextMenu = false;
}
};

Blockly.Blocks['sortReleaseIds'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('sortReleaseIds');

  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
  this.setMutator(new Blockly.Mutator(['sortReleaseIds_releaseIds']));
  this.mutatorInputsEnabled = new Array( 1);
  for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
      this.mutatorInputsEnabled[x] = false;
  }
  this.mutatorInputBlockNames = ['releaseIds'];
  this.mutatorInputBlockKeys = ['sortReleaseIds_releaseIds'];

}
,
mutationToDom: function() {
var container = document.createElement('mutation');
return container;
}
,
domToMutation: function(xmlElement) {
}
,
decompose: function(workspace) {
var containerBlock = new Blockly.Block.obtain(workspace, 'Cont923459cbed1d402aa1e971735cee506e');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      var itemBlock = new Blockly.Block.obtain(workspace, this.mutatorInputBlockKeys[x]);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
  }
}
return containerBlock;
}
,
compose: function(containerBlock) {
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.removeInput(this.mutatorInputBlockNames[x]);
      this.mutatorInputsEnabled[x] = false;
  }
}
var itemBlock = containerBlock.getInputTargetBlock('STACK');
while (itemBlock) {
  for (var x = 0; x < this.mutatorInputBlockNames.length; x++) { 
      if (this.mutatorInputBlockKeys[x] == itemBlock.type) {
          this.mutatorInputsEnabled[x] = true;
      }
  }
  itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
}
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.appendValueInput(this.mutatorInputBlockNames[x])
          .appendField(this.mutatorInputBlockNames[x])
          .setAlign(Blockly.ALIGN_RIGHT);
  }
}
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('releaseIds', '#A31090', 'releaseIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/ReleaseIdList', "null"));
return outputs;
}

};


Blockly.Blocks['sortReleaseIds_releaseIds'] = {
init: function() { 
  this.setColour('#A31090');
  this.appendDummyInput()
      .appendField('releaseIds');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['Cont923459cbed1d402aa1e971735cee506e'] = {
  init: function() {
this.setColour('#A31090');
this.appendDummyInput()
  .appendField('Optional inputs');
this.appendStatementInput('STACK');
this.setTooltip('Set optional parameters');
this.contextMenu = false;
}
};

Blockly.Blocks['sortTrackIds'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('sortTrackIds');

  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
  this.setMutator(new Blockly.Mutator(['sortTrackIds_trackIds']));
  this.mutatorInputsEnabled = new Array( 1);
  for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
      this.mutatorInputsEnabled[x] = false;
  }
  this.mutatorInputBlockNames = ['trackIds'];
  this.mutatorInputBlockKeys = ['sortTrackIds_trackIds'];

}
,
mutationToDom: function() {
var container = document.createElement('mutation');
return container;
}
,
domToMutation: function(xmlElement) {
}
,
decompose: function(workspace) {
var containerBlock = new Blockly.Block.obtain(workspace, 'Cont08655c85205f447488dd335a07eb3328');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      var itemBlock = new Blockly.Block.obtain(workspace, this.mutatorInputBlockKeys[x]);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
  }
}
return containerBlock;
}
,
compose: function(containerBlock) {
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.removeInput(this.mutatorInputBlockNames[x]);
      this.mutatorInputsEnabled[x] = false;
  }
}
var itemBlock = containerBlock.getInputTargetBlock('STACK');
while (itemBlock) {
  for (var x = 0; x < this.mutatorInputBlockNames.length; x++) { 
      if (this.mutatorInputBlockKeys[x] == itemBlock.type) {
          this.mutatorInputsEnabled[x] = true;
      }
  }
  itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
}
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.appendValueInput(this.mutatorInputBlockNames[x])
          .appendField(this.mutatorInputBlockNames[x])
          .setAlign(Blockly.ALIGN_RIGHT);
  }
}
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('trackIds', '#A31090', 'trackIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/TrackIdList', "null"));
return outputs;
}

};


Blockly.Blocks['sortTrackIds_trackIds'] = {
init: function() { 
  this.setColour('#A31090');
  this.appendDummyInput()
      .appendField('trackIds');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['Cont08655c85205f447488dd335a07eb3328'] = {
  init: function() {
this.setColour('#A31090');
this.appendDummyInput()
  .appendField('Optional inputs');
this.appendStatementInput('STACK');
this.setTooltip('Set optional parameters');
this.contextMenu = false;
}
};

Blockly.Blocks['sortOwnerIds'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('sortOwnerIds');

  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
  this.setMutator(new Blockly.Mutator(['sortOwnerIds_ownerIds']));
  this.mutatorInputsEnabled = new Array( 1);
  for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
      this.mutatorInputsEnabled[x] = false;
  }
  this.mutatorInputBlockNames = ['ownerIds'];
  this.mutatorInputBlockKeys = ['sortOwnerIds_ownerIds'];

}
,
mutationToDom: function() {
var container = document.createElement('mutation');
return container;
}
,
domToMutation: function(xmlElement) {
}
,
decompose: function(workspace) {
var containerBlock = new Blockly.Block.obtain(workspace, 'Conte7500a14560548b893fb26dc97cd764b');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      var itemBlock = new Blockly.Block.obtain(workspace, this.mutatorInputBlockKeys[x]);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
  }
}
return containerBlock;
}
,
compose: function(containerBlock) {
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.removeInput(this.mutatorInputBlockNames[x]);
      this.mutatorInputsEnabled[x] = false;
  }
}
var itemBlock = containerBlock.getInputTargetBlock('STACK');
while (itemBlock) {
  for (var x = 0; x < this.mutatorInputBlockNames.length; x++) { 
      if (this.mutatorInputBlockKeys[x] == itemBlock.type) {
          this.mutatorInputsEnabled[x] = true;
      }
  }
  itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
}
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.appendValueInput(this.mutatorInputBlockNames[x])
          .appendField(this.mutatorInputBlockNames[x])
          .setAlign(Blockly.ALIGN_RIGHT);
  }
}
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('ownerIds', '#A31090', 'ownerIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/OwnerIdList', "null"));
return outputs;
}

};


Blockly.Blocks['sortOwnerIds_ownerIds'] = {
init: function() { 
  this.setColour('#A31090');
  this.appendDummyInput()
      .appendField('ownerIds');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['Conte7500a14560548b893fb26dc97cd764b'] = {
  init: function() {
this.setColour('#A31090');
this.appendDummyInput()
  .appendField('Optional inputs');
this.appendStatementInput('STACK');
this.setTooltip('Set optional parameters');
this.contextMenu = false;
}
};

Blockly.Blocks['sortWorkIds'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('sortWorkIds');

  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
  this.setMutator(new Blockly.Mutator(['sortWorkIds_workIds']));
  this.mutatorInputsEnabled = new Array( 1);
  for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
      this.mutatorInputsEnabled[x] = false;
  }
  this.mutatorInputBlockNames = ['workIds'];
  this.mutatorInputBlockKeys = ['sortWorkIds_workIds'];

}
,
mutationToDom: function() {
var container = document.createElement('mutation');
return container;
}
,
domToMutation: function(xmlElement) {
}
,
decompose: function(workspace) {
var containerBlock = new Blockly.Block.obtain(workspace, 'Cont0360364b50584e2a91bd604dd6cb598f');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      var itemBlock = new Blockly.Block.obtain(workspace, this.mutatorInputBlockKeys[x]);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
  }
}
return containerBlock;
}
,
compose: function(containerBlock) {
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.removeInput(this.mutatorInputBlockNames[x]);
      this.mutatorInputsEnabled[x] = false;
  }
}
var itemBlock = containerBlock.getInputTargetBlock('STACK');
while (itemBlock) {
  for (var x = 0; x < this.mutatorInputBlockNames.length; x++) { 
      if (this.mutatorInputBlockKeys[x] == itemBlock.type) {
          this.mutatorInputsEnabled[x] = true;
      }
  }
  itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
}
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.appendValueInput(this.mutatorInputBlockNames[x])
          .appendField(this.mutatorInputBlockNames[x])
          .setAlign(Blockly.ALIGN_RIGHT);
  }
}
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('workIds', '#A31090', 'workIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/WorkIdList', "null"));
return outputs;
}

};


Blockly.Blocks['sortWorkIds_workIds'] = {
init: function() { 
  this.setColour('#A31090');
  this.appendDummyInput()
      .appendField('workIds');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['Cont0360364b50584e2a91bd604dd6cb598f'] = {
  init: function() {
this.setColour('#A31090');
this.appendDummyInput()
  .appendField('Optional inputs');
this.appendStatementInput('STACK');
this.setTooltip('Set optional parameters');
this.contextMenu = false;
}
};

Blockly.Blocks['sortSetIds'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('sortSetIds');

  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
  this.setMutator(new Blockly.Mutator(['sortSetIds_setIds']));
  this.mutatorInputsEnabled = new Array( 1);
  for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
      this.mutatorInputsEnabled[x] = false;
  }
  this.mutatorInputBlockNames = ['setIds'];
  this.mutatorInputBlockKeys = ['sortSetIds_setIds'];

}
,
mutationToDom: function() {
var container = document.createElement('mutation');
return container;
}
,
domToMutation: function(xmlElement) {
}
,
decompose: function(workspace) {
var containerBlock = new Blockly.Block.obtain(workspace, 'Cont25c32a187f0d412baf1361552ef76db1');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      var itemBlock = new Blockly.Block.obtain(workspace, this.mutatorInputBlockKeys[x]);
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
  }
}
return containerBlock;
}
,
compose: function(containerBlock) {
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.removeInput(this.mutatorInputBlockNames[x]);
      this.mutatorInputsEnabled[x] = false;
  }
}
var itemBlock = containerBlock.getInputTargetBlock('STACK');
while (itemBlock) {
  for (var x = 0; x < this.mutatorInputBlockNames.length; x++) { 
      if (this.mutatorInputBlockKeys[x] == itemBlock.type) {
          this.mutatorInputsEnabled[x] = true;
      }
  }
  itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
}
for (var x = 0; x < this.mutatorInputsEnabled.length; x++) { 
  if (this.mutatorInputsEnabled[x]) {
      this.appendValueInput(this.mutatorInputBlockNames[x])
          .appendField(this.mutatorInputBlockNames[x])
          .setAlign(Blockly.ALIGN_RIGHT);
  }
}
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('setIds', '#A31090', 'setIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/SetIdList', "null"));
return outputs;
}

};


Blockly.Blocks['sortSetIds_setIds'] = {
init: function() { 
  this.setColour('#A31090');
  this.appendDummyInput()
      .appendField('setIds');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.contextMenu = false;
  }
};
Blockly.Blocks['Cont25c32a187f0d412baf1361552ef76db1'] = {
  init: function() {
this.setColour('#A31090');
this.appendDummyInput()
  .appendField('Optional inputs');
this.appendStatementInput('STACK');
this.setTooltip('Set optional parameters');
this.contextMenu = false;
}
};

Blockly.Blocks['getArtistTrackRelationships'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('getArtistTrackRelationships');

this.appendValueInput('artistId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('artistId');
this.appendValueInput('relationship')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('relationship');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('trackIds', '#A31090', 'trackIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/TrackRelationshipList', "null"));
return outputs;
}

};


Blockly.Blocks['getArtistRecordingRelationships'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('getArtistRecordingRelationships');

this.appendValueInput('artistId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('artistId');
this.appendValueInput('relationship')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('relationship');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('recordingIds', '#A31090', 'recordingIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/RecordingRelationshipList', "null"));
return outputs;
}

};


Blockly.Blocks['getArtistReleaseRelationships'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('getArtistReleaseRelationships');

this.appendValueInput('artistId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('artistId');
this.appendValueInput('relationship')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('relationship');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('releaseIds', '#A31090', 'releaseIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/ReleaseRelationshipList', "null"));
return outputs;
}

};


Blockly.Blocks['getArtistSetRelationships'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('getArtistSetRelationships');

this.appendValueInput('artistId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('artistId');
this.appendValueInput('relationship')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('relationship');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('setIds', '#A31090', 'setIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/SetRelationshipList', "null"));
return outputs;
}

};


Blockly.Blocks['getReleaseTrackRelationships'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('getReleaseTrackRelationships');

this.appendValueInput('releaseId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('releaseId');
this.appendValueInput('relationship')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('relationship');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('trackIds', '#A31090', 'trackIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/TrackRelationshipList', "null"));
return outputs;
}

};


Blockly.Blocks['getSetReleaseRelationships'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('getSetReleaseRelationships');

this.appendValueInput('setId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('setId');
this.appendValueInput('relationship')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('relationship');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('releaseIds', '#A31090', 'releaseIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/ReleaseRelationshipList', "null"));
return outputs;
}

};


Blockly.Blocks['getSetTrackRelationships'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('getSetTrackRelationships');

this.appendValueInput('setId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('setId');
this.appendValueInput('relationship')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('relationship');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('trackIds', '#A31090', 'trackIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/TrackRelationshipList', "null"));
return outputs;
}

};


Blockly.Blocks['getRecordingTrackRelationships'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('getRecordingTrackRelationships');

this.appendValueInput('recordingId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('recordingId');
this.appendValueInput('relationship')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('relationship');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('trackIds', '#A31090', 'trackIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/TrackRelationshipList', "null"));
return outputs;
}

};


Blockly.Blocks['getArtist'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('getArtist');

this.appendValueInput('artistId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('artistId');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('tags', '#A31090', 'tags', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Artist', "null"));
outputs.push(new Variable('imageUrl', '#A31090', 'imageUrl', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Artist', "String"));
outputs.push(new Variable('artistId', '#A31090', 'artistId', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Artist', "String"));
outputs.push(new Variable('artistName', '#A31090', 'artistName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Artist', "String"));
outputs.push(new Variable('localArtistName', '#A31090', 'localArtistName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Artist', "null"));
outputs.push(new Variable('aliases', '#A31090', 'aliases', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Artist', "null"));
return outputs;
}

};


Blockly.Blocks['getRecording'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('getRecording');

this.appendValueInput('recordingId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('recordingId');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('tags', '#A31090', 'tags', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Recording', "null"));
outputs.push(new Variable('localRecordingName', '#A31090', 'localRecordingName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Recording', "null"));
outputs.push(new Variable('isrc', '#A31090', 'isrc', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Recording', "String"));
outputs.push(new Variable('workIds', '#A31090', 'workIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Recording', "null"));
outputs.push(new Variable('recordingId', '#A31090', 'recordingId', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Recording', "String"));
outputs.push(new Variable('artistIds', '#A31090', 'artistIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Recording', "null"));
outputs.push(new Variable('recordedDate', '#A31090', 'recordedDate', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Recording', "String"));
outputs.push(new Variable('recordingName', '#A31090', 'recordingName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Recording', "String"));
outputs.push(new Variable('ownerIds', '#A31090', 'ownerIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Recording', "null"));
return outputs;
}

};


Blockly.Blocks['getRelease'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('getRelease');

this.appendValueInput('releaseId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('releaseId');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('imageUrl', '#A31090', 'imageUrl', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "String"));
outputs.push(new Variable('recordLabel', '#A31090', 'recordLabel', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "String"));
outputs.push(new Variable('releaseYear', '#A31090', 'releaseYear', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "Number"));
outputs.push(new Variable('setIds', '#A31090', 'setIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "null"));
outputs.push(new Variable('releaseDate', '#A31090', 'releaseDate', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "String"));
outputs.push(new Variable('releaseKind', '#A31090', 'releaseKind', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "String"));
outputs.push(new Variable('artistId', '#A31090', 'artistId', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "String"));
outputs.push(new Variable('releaseName', '#A31090', 'releaseName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "String"));
outputs.push(new Variable('recordLabelSubLabel', '#A31090', 'recordLabelSubLabel', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "String"));
outputs.push(new Variable('localArtistName', '#A31090', 'localArtistName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "null"));
outputs.push(new Variable('explicitLyrics', '#A31090', 'explicitLyrics', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "Boolean"));
outputs.push(new Variable('trackCount', '#A31090', 'trackCount', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "Number"));
outputs.push(new Variable('tags', '#A31090', 'tags', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "null"));
outputs.push(new Variable('albumId', '#A31090', 'albumId', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "String"));
outputs.push(new Variable('phonographCopyright', '#A31090', 'phonographCopyright', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "String"));
outputs.push(new Variable('tracks', '#A31090', 'tracks', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "null"));
outputs.push(new Variable('copyright', '#A31090', 'copyright', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "String"));
outputs.push(new Variable('ownerIds', '#A31090', 'ownerIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "null"));
outputs.push(new Variable('releaseId', '#A31090', 'releaseId', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "String"));
outputs.push(new Variable('partCount', '#A31090', 'partCount', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "Number"));
outputs.push(new Variable('artistIds', '#A31090', 'artistIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "null"));
outputs.push(new Variable('artistName', '#A31090', 'artistName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "String"));
outputs.push(new Variable('localReleaseName', '#A31090', 'localReleaseName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Release', "null"));
return outputs;
}

};


Blockly.Blocks['getTrack'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('getTrack');

this.appendValueInput('trackId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('trackId');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
}
,
getVars: function() {
  var outputs = [];
  outputs.push("track");
  return outputs;
},
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('imageUrl', '#A31090', 'imageUrl', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "String"));
outputs.push(new Variable('recordLabel', '#A31090', 'recordLabel', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "String"));
outputs.push(new Variable('localTrackName', '#A31090', 'localTrackName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "null"));
outputs.push(new Variable('trackName', '#A31090', 'trackName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "String"));
outputs.push(new Variable('contentId', '#A31090', 'contentId', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "String"));
outputs.push(new Variable('setIds', '#A31090', 'setIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "null"));
outputs.push(new Variable('releaseDate', '#A31090', 'releaseDate', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "String"));
outputs.push(new Variable('artistId', '#A31090', 'artistId', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "String"));
outputs.push(new Variable('recordingId', '#A31090', 'recordingId', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "String"));
outputs.push(new Variable('releaseName', '#A31090', 'releaseName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "String"));
outputs.push(new Variable('recordLabelSubLabel', '#A31090', 'recordLabelSubLabel', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "String"));
outputs.push(new Variable('localArtistName', '#A31090', 'localArtistName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "null"));
outputs.push(new Variable('explicitLyrics', '#A31090', 'explicitLyrics', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "Boolean"));
outputs.push(new Variable('recordingIds', '#A31090', 'recordingIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "null"));
outputs.push(new Variable('tags', '#A31090', 'tags', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "null"));
outputs.push(new Variable('trackId', '#A31090', 'trackId', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "String"));
outputs.push(new Variable('releasePartIndex', '#A31090', 'releasePartIndex', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "Number"));
outputs.push(new Variable('phonographCopyright', '#A31090', 'phonographCopyright', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "String"));
outputs.push(new Variable('copyright', '#A31090', 'copyright', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "String"));
outputs.push(new Variable('ownerIds', '#A31090', 'ownerIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "null"));
outputs.push(new Variable('durationInSeconds', '#A31090', 'durationInSeconds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "Number"));
outputs.push(new Variable('releaseTrackIndex', '#A31090', 'releaseTrackIndex', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "Number"));
outputs.push(new Variable('releaseId', '#A31090', 'releaseId', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "String"));
outputs.push(new Variable('artistIds', '#A31090', 'artistIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "null"));
outputs.push(new Variable('artistName', '#A31090', 'artistName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "String"));
outputs.push(new Variable('localReleaseName', '#A31090', 'localReleaseName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Track', "null"));
return outputs;
}

};


Blockly.Blocks['getOwner'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('getOwner');

this.appendValueInput('ownerId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('ownerId');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('tags', '#A31090', 'tags', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Owner', "null"));
outputs.push(new Variable('localOwnerName', '#A31090', 'localOwnerName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Owner', "null"));
outputs.push(new Variable('ownerName', '#A31090', 'ownerName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Owner', "String"));
outputs.push(new Variable('ownerId', '#A31090', 'ownerId', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Owner', "String"));
return outputs;
}

};


Blockly.Blocks['getWork'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('getWork');

this.appendValueInput('workId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('workId');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('tags', '#A31090', 'tags', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Work', "null"));
outputs.push(new Variable('iswc', '#A31090', 'iswc', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Work', "String"));
outputs.push(new Variable('workName', '#A31090', 'workName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Work', "String"));
outputs.push(new Variable('workId', '#A31090', 'workId', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Work', "String"));
outputs.push(new Variable('artistIds', '#A31090', 'artistIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Work', "null"));
outputs.push(new Variable('createdDate', '#A31090', 'createdDate', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Work', "String"));
outputs.push(new Variable('localWorkName', '#A31090', 'localWorkName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Work', "null"));
outputs.push(new Variable('ownerIds', '#A31090', 'ownerIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Work', "null"));
return outputs;
}

};


Blockly.Blocks['getSet'] = {
  init: function() {
  this.setColour('#A31090');
  this.setObjectId('null');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 15, 15)) 
      .appendField('getSet');

this.appendValueInput('setId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck(String)
  .appendField('setId');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('null');
}
,
getOutputs: function() {
var outputs = [];
outputs.push(new Variable('tags', '#A31090', 'tags', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Set', "null"));
outputs.push(new Variable('imageUrl', '#A31090', 'imageUrl', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Set', "String"));
outputs.push(new Variable('artistIds', '#A31090', 'artistIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Set', "null"));
outputs.push(new Variable('setName', '#A31090', 'setName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Set', "String"));
outputs.push(new Variable('artistName', '#A31090', 'artistName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Set', "String"));
outputs.push(new Variable('localSetName', '#A31090', 'localSetName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Set', "null"));
outputs.push(new Variable('localArtistName', '#A31090', 'localArtistName', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Set', "null"));
outputs.push(new Variable('createdDate', '#A31090', 'createdDate', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Set', "String"));
outputs.push(new Variable('ownerIds', '#A31090', 'ownerIds', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Set', "null"));
outputs.push(new Variable('setId', '#A31090', 'setId', 'http://service-images.whenthen.co/blockly/ms-catalog_blockly.png', 'resource:/co/whenthen/wave/schemas/ms/catalog/resources.json#/Set', "String"));
return outputs;
}

};

// Surpress procedure blocks
Blockly.Blocks['procedures_defnoreturn'] = undefined;
Blockly.Blocks['procedures_ifreturn'] = undefined;

// 
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = "Request";
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = 'myApiName';

// Supress set variable block
Blockly.Blocks['variables_set'] = undefined;

































/*
function init() {var toolbox = '<xml>';toolbox +='<category name="Variables" custom="VARIABLE"></category>'+
   '<category name="Functions" custom="PROCEDURE"></category><category name="Actions"><category name="MS Catalog"><block type="batchGetArtists"></block><block type="batchGetOwners"></block><block type="batchGetRecordings"></block><block type="batchGetReleases"></block><block type="batchGetSets"></block><block type="batchGetTracks"></block><block type="batchGetWorks"></block><block type="getArtist"></block><block type="getArtistRecordingRelationships"></block><block type="getArtistReleaseRelationships"></block><block type="getArtistSetRelationships"></block><block type="getArtistTrackRelationships"></block><block type="getOwner"></block><block type="getRecording"></block><block type="getRecordingTrackRelationships"></block><block type="getRelease"></block><block type="getReleaseTrackRelationships"></block><block type="getSet"></block><block type="getSetReleaseRelationships"></block><block type="getSetTrackRelationships"></block><block type="getTrack"></block><block type="getWork"></block><block type="sortArtistIds"></block><block type="sortOwnerIds"></block><block type="sortRecordingIds"></block><block type="sortReleaseIds"></block><block type="sortSetIds"></block><block type="sortTrackIds"></block><block type="sortWorkIds"></block></category><category name="MS History"><block type="getCustomerContextIdTrackPlayIds"></block><block type="getCustomerContextTypeTrackPlayIds"></block><block type="getCustomerDeviceTrackPlayIds"></block><block type="getCustomerTrackPlayIds"></block><block type="getTrackPlay"></block></category></category>'+
   '<category name="Logic"><block type="lists_setIndex"></block><block type="controls_forEach"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category>' +
   '<category name="Math"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block></category>'+
   '<category name="Text"><block type="text"></block><block type="text_length"></block></category>'+
   '<category name="Core"><block type="whenthen"></block></category><category name="Request"><block type="type_boolean"></block><block type="type_group"></block><block type="type_list"></block><block type="type_number"></block><block type="type_string"></block></category>';toolbox += '</xml>';Blockly.inject(document.body,{path: '../../', toolbox: toolbox});window.parent.blocklyLoaded(Blockly);}
*/