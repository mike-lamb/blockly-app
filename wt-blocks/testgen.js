Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.Condition'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.Condition');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('Condition');

this.appendValueInput('comparisonOperator')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('comparisonOperator');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.Condition');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.Condition');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.Condition'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.ItemCollectionMetrics'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.ItemCollectionMetrics');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('ItemCollectionMetrics');

this.appendValueInput('itemCollectionKey')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('itemCollectionKey');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.ItemCollectionMetrics');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ItemCollectionMetrics');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.ItemCollectionMetrics'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteItemRequest'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteItemRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('DeleteItemRequest');

this.appendValueInput('expected')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('expected');
this.appendValueInput('key')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('key');
this.appendValueInput('returnConsumedCapacity')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('returnConsumedCapacity');
this.appendValueInput('returnItemCollectionMetrics')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('returnItemCollectionMetrics');
this.appendValueInput('returnValues')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('returnValues');
this.appendValueInput('tableName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('tableName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteItemRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteItemResult';
propertyTypes['.attributes[String]'] = 'java.util.Map';
propertyTypes['.attributes[String].b'] = 'byte[]';
propertyTypes['.attributes[String].n'] = 'String';
propertyTypes['.attributes[String].s'] = 'String';
propertyTypes['.consumedCapacity'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ConsumedCapacity';
propertyTypes['.consumedCapacity.capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.globalSecondaryIndexes[String]'] = 'java.util.Map';
propertyTypes['.consumedCapacity.globalSecondaryIndexes[String].capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.localSecondaryIndexes[String]'] = 'java.util.Map';
propertyTypes['.consumedCapacity.localSecondaryIndexes[String].capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.table'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.Capacity';
propertyTypes['.consumedCapacity.table.capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.tableName'] = 'String';
propertyTypes['.itemCollectionMetrics'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ItemCollectionMetrics';
propertyTypes['.itemCollectionMetrics.itemCollectionKey[String]'] = 'java.util.Map';
propertyTypes['.itemCollectionMetrics.itemCollectionKey[String].b'] = 'byte[]';
propertyTypes['.itemCollectionMetrics.itemCollectionKey[String].n'] = 'String';
propertyTypes['.itemCollectionMetrics.itemCollectionKey[String].s'] = 'String';
var obj = new WhenThenVariable("DeleteItemResult","#2D72B8", propertyTypes, "https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteItemRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.WriteRequest'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.WriteRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('WriteRequest');

this.appendValueInput('deleteRequest')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteRequest')
  .appendField('deleteRequest');
this.appendValueInput('putRequest')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.PutRequest')
  .appendField('putRequest');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.WriteRequest');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.WriteRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.WriteRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.PutRequest'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.PutRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('PutRequest');

this.appendValueInput('item')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('item');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.PutRequest');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.PutRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.PutRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.GetItemRequest'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.GetItemRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('GetItemRequest');

this.appendValueInput('consistentRead')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.lang.Boolean')
  .appendField('consistentRead');
this.appendValueInput('key')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('key');
this.appendValueInput('returnConsumedCapacity')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('returnConsumedCapacity');
this.appendValueInput('tableName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('tableName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.GetItemRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.GetItemResult';
propertyTypes['.consumedCapacity'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ConsumedCapacity';
propertyTypes['.consumedCapacity.capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.globalSecondaryIndexes[String]'] = 'java.util.Map';
propertyTypes['.consumedCapacity.globalSecondaryIndexes[String].capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.localSecondaryIndexes[String]'] = 'java.util.Map';
propertyTypes['.consumedCapacity.localSecondaryIndexes[String].capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.table'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.Capacity';
propertyTypes['.consumedCapacity.table.capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.tableName'] = 'String';
propertyTypes['.item[String]'] = 'java.util.Map';
propertyTypes['.item[String].b'] = 'byte[]';
propertyTypes['.item[String].n'] = 'String';
propertyTypes['.item[String].s'] = 'String';
var obj = new WhenThenVariable("GetItemResult","#2D72B8", propertyTypes, "https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.GetItemRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.ScanResult'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.ScanResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('ScanResult');

this.appendValueInput('consumedCapacity')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.ConsumedCapacity')
  .appendField('consumedCapacity');
this.appendValueInput('count')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('count');
this.appendValueInput('lastEvaluatedKey')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('lastEvaluatedKey');
this.appendValueInput('scannedCount')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('scannedCount');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.ScanResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ScanResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.ScanResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.GetItemResult'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.GetItemResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('GetItemResult');

this.appendValueInput('consumedCapacity')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.ConsumedCapacity')
  .appendField('consumedCapacity');
this.appendValueInput('item')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('item');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.GetItemResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.GetItemResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.GetItemResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.ListTablesRequest'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.ListTablesRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('ListTablesRequest');

this.appendValueInput('exclusiveStartTableName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('exclusiveStartTableName');
this.appendValueInput('limit')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('limit');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.ListTablesRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ListTablesResult';
propertyTypes['.lastEvaluatedTableName'] = 'String';
var obj = new WhenThenVariable("ListTablesResult","#2D72B8", propertyTypes, "https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.ListTablesRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.ListTablesResult'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.ListTablesResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('ListTablesResult');

this.appendValueInput('lastEvaluatedTableName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('lastEvaluatedTableName');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.ListTablesResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ListTablesResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.ListTablesResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.AmazonDynamoDBAsyncClientRequest'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.AmazonDynamoDBAsyncClientRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('AmazonDynamoDBAsyncClientRequest');

  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.AmazonDynamoDBAsyncClientRequest');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.AmazonDynamoDBAsyncClientRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.AmazonDynamoDBAsyncClientRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.PutItemRequest'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.PutItemRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('PutItemRequest');

this.appendValueInput('expected')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('expected');
this.appendValueInput('item')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('item');
this.appendValueInput('returnConsumedCapacity')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('returnConsumedCapacity');
this.appendValueInput('returnItemCollectionMetrics')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('returnItemCollectionMetrics');
this.appendValueInput('returnValues')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('returnValues');
this.appendValueInput('tableName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('tableName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.PutItemRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.PutItemResult';
propertyTypes['.attributes[String]'] = 'java.util.Map';
propertyTypes['.attributes[String].b'] = 'byte[]';
propertyTypes['.attributes[String].n'] = 'String';
propertyTypes['.attributes[String].s'] = 'String';
propertyTypes['.consumedCapacity'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ConsumedCapacity';
propertyTypes['.consumedCapacity.capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.globalSecondaryIndexes[String]'] = 'java.util.Map';
propertyTypes['.consumedCapacity.globalSecondaryIndexes[String].capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.localSecondaryIndexes[String]'] = 'java.util.Map';
propertyTypes['.consumedCapacity.localSecondaryIndexes[String].capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.table'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.Capacity';
propertyTypes['.consumedCapacity.table.capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.tableName'] = 'String';
propertyTypes['.itemCollectionMetrics'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ItemCollectionMetrics';
propertyTypes['.itemCollectionMetrics.itemCollectionKey[String]'] = 'java.util.Map';
propertyTypes['.itemCollectionMetrics.itemCollectionKey[String].b'] = 'byte[]';
propertyTypes['.itemCollectionMetrics.itemCollectionKey[String].n'] = 'String';
propertyTypes['.itemCollectionMetrics.itemCollectionKey[String].s'] = 'String';
var obj = new WhenThenVariable("PutItemResult","#2D72B8", propertyTypes, "https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.PutItemRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchGetItemRequest'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchGetItemRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('BatchGetItemRequest');

this.appendValueInput('requestItems')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('requestItems');
this.appendValueInput('returnConsumedCapacity')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('returnConsumedCapacity');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchGetItemRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchGetItemResult';
propertyTypes['.responses[String]'] = 'java.util.Map';
propertyTypes['.unprocessedKeys[String]'] = 'java.util.Map';
propertyTypes['.unprocessedKeys[String].consistentRead'] = 'java.lang.Boolean';
var obj = new WhenThenVariable("BatchGetItemResult","#2D72B8", propertyTypes, "https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchGetItemRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteRequest'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('DeleteRequest');

this.appendValueInput('key')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('key');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteRequest');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.CreateTableResult'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.CreateTableResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('CreateTableResult');

this.appendValueInput('tableDescription')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.TableDescription')
  .appendField('tableDescription');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.CreateTableResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.CreateTableResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.CreateTableResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughputDescription'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughputDescription');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('ProvisionedThroughputDescription');

this.appendValueInput('lastDecreaseDateTime')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('lastDecreaseDateTime');
this.appendValueInput('lastIncreaseDateTime')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('lastIncreaseDateTime');
this.appendValueInput('numberOfDecreasesToday')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('numberOfDecreasesToday');
this.appendValueInput('readCapacityUnits')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('readCapacityUnits');
this.appendValueInput('writeCapacityUnits')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('writeCapacityUnits');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughputDescription');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughputDescription');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughputDescription'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateTableResult'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateTableResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('UpdateTableResult');

this.appendValueInput('tableDescription')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.TableDescription')
  .appendField('tableDescription');
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


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateTableResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.QueryRequest'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.QueryRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('QueryRequest');

this.appendValueInput('consistentRead')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.lang.Boolean')
  .appendField('consistentRead');
this.appendValueInput('exclusiveStartKey')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('exclusiveStartKey');
this.appendValueInput('indexName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('indexName');
this.appendValueInput('keyConditions')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('keyConditions');
this.appendValueInput('limit')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('limit');
this.appendValueInput('returnConsumedCapacity')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('returnConsumedCapacity');
this.appendValueInput('scanIndexForward')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.lang.Boolean')
  .appendField('scanIndexForward');
this.appendValueInput('select')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('select');
this.appendValueInput('tableName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('tableName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.QueryRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.QueryResult';
propertyTypes['.consumedCapacity'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ConsumedCapacity';
propertyTypes['.consumedCapacity.capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.globalSecondaryIndexes[String]'] = 'java.util.Map';
propertyTypes['.consumedCapacity.globalSecondaryIndexes[String].capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.localSecondaryIndexes[String]'] = 'java.util.Map';
propertyTypes['.consumedCapacity.localSecondaryIndexes[String].capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.table'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.Capacity';
propertyTypes['.consumedCapacity.table.capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.tableName'] = 'String';
propertyTypes['.count'] = 'Number';
propertyTypes['.lastEvaluatedKey[String]'] = 'java.util.Map';
propertyTypes['.lastEvaluatedKey[String].b'] = 'byte[]';
propertyTypes['.lastEvaluatedKey[String].n'] = 'String';
propertyTypes['.lastEvaluatedKey[String].s'] = 'String';
var obj = new WhenThenVariable("QueryResult","#2D72B8", propertyTypes, "https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.QueryRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.DescribeTableResult'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.DescribeTableResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('DescribeTableResult');

this.appendValueInput('table')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.TableDescription')
  .appendField('table');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.DescribeTableResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.DescribeTableResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.DescribeTableResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.QueryResult'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.QueryResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('QueryResult');

this.appendValueInput('consumedCapacity')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.ConsumedCapacity')
  .appendField('consumedCapacity');
this.appendValueInput('count')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('count');
this.appendValueInput('lastEvaluatedKey')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('lastEvaluatedKey');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.QueryResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.QueryResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.QueryResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.ScanRequest'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.ScanRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('ScanRequest');

this.appendValueInput('exclusiveStartKey')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('exclusiveStartKey');
this.appendValueInput('limit')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('limit');
this.appendValueInput('returnConsumedCapacity')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('returnConsumedCapacity');
this.appendValueInput('scanFilter')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('scanFilter');
this.appendValueInput('segment')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('segment');
this.appendValueInput('select')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('select');
this.appendValueInput('tableName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('tableName');
this.appendValueInput('totalSegments')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('totalSegments');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.ScanRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ScanResult';
propertyTypes['.consumedCapacity'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ConsumedCapacity';
propertyTypes['.consumedCapacity.capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.globalSecondaryIndexes[String]'] = 'java.util.Map';
propertyTypes['.consumedCapacity.globalSecondaryIndexes[String].capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.localSecondaryIndexes[String]'] = 'java.util.Map';
propertyTypes['.consumedCapacity.localSecondaryIndexes[String].capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.table'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.Capacity';
propertyTypes['.consumedCapacity.table.capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.tableName'] = 'String';
propertyTypes['.count'] = 'Number';
propertyTypes['.lastEvaluatedKey[String]'] = 'java.util.Map';
propertyTypes['.lastEvaluatedKey[String].b'] = 'byte[]';
propertyTypes['.lastEvaluatedKey[String].n'] = 'String';
propertyTypes['.lastEvaluatedKey[String].s'] = 'String';
propertyTypes['.scannedCount'] = 'Number';
var obj = new WhenThenVariable("ScanResult","#2D72B8", propertyTypes, "https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.ScanRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.AttributeValueUpdate'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.AttributeValueUpdate');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('AttributeValueUpdate');

this.appendValueInput('action')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('action');
this.appendValueInput('value')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.AttributeValue')
  .appendField('value');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.AttributeValueUpdate');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.AttributeValueUpdate');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.AttributeValueUpdate'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteItemResult'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteItemResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('DeleteItemResult');

this.appendValueInput('attributes')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('attributes');
this.appendValueInput('consumedCapacity')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.ConsumedCapacity')
  .appendField('consumedCapacity');
this.appendValueInput('itemCollectionMetrics')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.ItemCollectionMetrics')
  .appendField('itemCollectionMetrics');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteItemResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteItemResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteItemResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughput'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughput');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('ProvisionedThroughput');

this.appendValueInput('readCapacityUnits')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('readCapacityUnits');
this.appendValueInput('writeCapacityUnits')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('writeCapacityUnits');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughput');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughput');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughput'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.DescribeTableRequest'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.DescribeTableRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('DescribeTableRequest');

this.appendValueInput('tableName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('tableName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.DescribeTableRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.DescribeTableResult';
propertyTypes['.table'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.TableDescription';
propertyTypes['.table.creationDateTime'] = 'Number';
propertyTypes['.table.itemCount'] = 'Number';
propertyTypes['.table.provisionedThroughput'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughputDescription';
propertyTypes['.table.provisionedThroughput.lastDecreaseDateTime'] = 'Number';
propertyTypes['.table.provisionedThroughput.lastIncreaseDateTime'] = 'Number';
propertyTypes['.table.provisionedThroughput.numberOfDecreasesToday'] = 'Number';
propertyTypes['.table.provisionedThroughput.readCapacityUnits'] = 'Number';
propertyTypes['.table.provisionedThroughput.writeCapacityUnits'] = 'Number';
propertyTypes['.table.tableName'] = 'String';
propertyTypes['.table.tableSizeBytes'] = 'Number';
propertyTypes['.table.tableStatus'] = 'String';
var obj = new WhenThenVariable("DescribeTableResult","#2D72B8", propertyTypes, "https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.DescribeTableRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.AttributeValue'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.AttributeValue');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('AttributeValue');

this.appendValueInput('b')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('byte[]')
  .appendField('b');
this.appendValueInput('n')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('n');
this.appendValueInput('s')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('s');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.AttributeValue');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.AttributeValue');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.AttributeValue'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateTableRequest'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateTableRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('UpdateTableRequest');

this.appendValueInput('provisionedThroughput')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughput')
  .appendField('provisionedThroughput');
this.appendValueInput('tableName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('tableName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateTableRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateTableResult';
propertyTypes['.tableDescription'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.TableDescription';
propertyTypes['.tableDescription.creationDateTime'] = 'Number';
propertyTypes['.tableDescription.itemCount'] = 'Number';
propertyTypes['.tableDescription.provisionedThroughput'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughputDescription';
propertyTypes['.tableDescription.provisionedThroughput.lastDecreaseDateTime'] = 'Number';
propertyTypes['.tableDescription.provisionedThroughput.lastIncreaseDateTime'] = 'Number';
propertyTypes['.tableDescription.provisionedThroughput.numberOfDecreasesToday'] = 'Number';
propertyTypes['.tableDescription.provisionedThroughput.readCapacityUnits'] = 'Number';
propertyTypes['.tableDescription.provisionedThroughput.writeCapacityUnits'] = 'Number';
propertyTypes['.tableDescription.tableName'] = 'String';
propertyTypes['.tableDescription.tableSizeBytes'] = 'Number';
propertyTypes['.tableDescription.tableStatus'] = 'String';
var obj = new WhenThenVariable("UpdateTableResult","#2D72B8", propertyTypes, "https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateTableRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteTableRequest'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteTableRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('DeleteTableRequest');

this.appendValueInput('tableName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('tableName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteTableRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteTableResult';
propertyTypes['.tableDescription'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.TableDescription';
propertyTypes['.tableDescription.creationDateTime'] = 'Number';
propertyTypes['.tableDescription.itemCount'] = 'Number';
propertyTypes['.tableDescription.provisionedThroughput'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughputDescription';
propertyTypes['.tableDescription.provisionedThroughput.lastDecreaseDateTime'] = 'Number';
propertyTypes['.tableDescription.provisionedThroughput.lastIncreaseDateTime'] = 'Number';
propertyTypes['.tableDescription.provisionedThroughput.numberOfDecreasesToday'] = 'Number';
propertyTypes['.tableDescription.provisionedThroughput.readCapacityUnits'] = 'Number';
propertyTypes['.tableDescription.provisionedThroughput.writeCapacityUnits'] = 'Number';
propertyTypes['.tableDescription.tableName'] = 'String';
propertyTypes['.tableDescription.tableSizeBytes'] = 'Number';
propertyTypes['.tableDescription.tableStatus'] = 'String';
var obj = new WhenThenVariable("DeleteTableResult","#2D72B8", propertyTypes, "https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteTableRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchWriteItemResult'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchWriteItemResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('BatchWriteItemResult');

this.appendValueInput('itemCollectionMetrics')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('itemCollectionMetrics');
this.appendValueInput('unprocessedItems')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('unprocessedItems');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchWriteItemResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchWriteItemResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchWriteItemResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.PutItemResult'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.PutItemResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('PutItemResult');

this.appendValueInput('attributes')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('attributes');
this.appendValueInput('consumedCapacity')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.ConsumedCapacity')
  .appendField('consumedCapacity');
this.appendValueInput('itemCollectionMetrics')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.ItemCollectionMetrics')
  .appendField('itemCollectionMetrics');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.PutItemResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.PutItemResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.PutItemResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.ConsumedCapacity'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.ConsumedCapacity');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('ConsumedCapacity');

this.appendValueInput('capacityUnits')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.lang.Double')
  .appendField('capacityUnits');
this.appendValueInput('globalSecondaryIndexes')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('globalSecondaryIndexes');
this.appendValueInput('localSecondaryIndexes')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('localSecondaryIndexes');
this.appendValueInput('table')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.Capacity')
  .appendField('table');
this.appendValueInput('tableName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('tableName');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.ConsumedCapacity');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ConsumedCapacity');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.ConsumedCapacity'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateItemRequest'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateItemRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('UpdateItemRequest');

this.appendValueInput('attributeUpdates')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('attributeUpdates');
this.appendValueInput('expected')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('expected');
this.appendValueInput('key')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('key');
this.appendValueInput('returnConsumedCapacity')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('returnConsumedCapacity');
this.appendValueInput('returnItemCollectionMetrics')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('returnItemCollectionMetrics');
this.appendValueInput('returnValues')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('returnValues');
this.appendValueInput('tableName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('tableName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateItemRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateItemResult';
propertyTypes['.attributes[String]'] = 'java.util.Map';
propertyTypes['.attributes[String].b'] = 'byte[]';
propertyTypes['.attributes[String].n'] = 'String';
propertyTypes['.attributes[String].s'] = 'String';
propertyTypes['.consumedCapacity'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ConsumedCapacity';
propertyTypes['.consumedCapacity.capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.globalSecondaryIndexes[String]'] = 'java.util.Map';
propertyTypes['.consumedCapacity.globalSecondaryIndexes[String].capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.localSecondaryIndexes[String]'] = 'java.util.Map';
propertyTypes['.consumedCapacity.localSecondaryIndexes[String].capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.table'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.Capacity';
propertyTypes['.consumedCapacity.table.capacityUnits'] = 'java.lang.Double';
propertyTypes['.consumedCapacity.tableName'] = 'String';
propertyTypes['.itemCollectionMetrics'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ItemCollectionMetrics';
propertyTypes['.itemCollectionMetrics.itemCollectionKey[String]'] = 'java.util.Map';
propertyTypes['.itemCollectionMetrics.itemCollectionKey[String].b'] = 'byte[]';
propertyTypes['.itemCollectionMetrics.itemCollectionKey[String].n'] = 'String';
propertyTypes['.itemCollectionMetrics.itemCollectionKey[String].s'] = 'String';
var obj = new WhenThenVariable("UpdateItemResult","#2D72B8", propertyTypes, "https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateItemRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.ExpectedAttributeValue'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.ExpectedAttributeValue');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('ExpectedAttributeValue');

this.appendValueInput('exists')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.lang.Boolean')
  .appendField('exists');
this.appendValueInput('value')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.AttributeValue')
  .appendField('value');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.ExpectedAttributeValue');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ExpectedAttributeValue');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.ExpectedAttributeValue'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteTableResult'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteTableResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('DeleteTableResult');

this.appendValueInput('tableDescription')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.TableDescription')
  .appendField('tableDescription');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteTableResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteTableResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteTableResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.TableDescription'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.TableDescription');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('TableDescription');

this.appendValueInput('creationDateTime')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('creationDateTime');
this.appendValueInput('itemCount')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('itemCount');
this.appendValueInput('provisionedThroughput')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughputDescription')
  .appendField('provisionedThroughput');
this.appendValueInput('tableName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('tableName');
this.appendValueInput('tableSizeBytes')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('tableSizeBytes');
this.appendValueInput('tableStatus')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('tableStatus');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.TableDescription');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.TableDescription');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.TableDescription'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateItemResult'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateItemResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('UpdateItemResult');

this.appendValueInput('attributes')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('attributes');
this.appendValueInput('consumedCapacity')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.ConsumedCapacity')
  .appendField('consumedCapacity');
this.appendValueInput('itemCollectionMetrics')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.ItemCollectionMetrics')
  .appendField('itemCollectionMetrics');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateItemResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateItemResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateItemResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchGetItemResult'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchGetItemResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('BatchGetItemResult');

this.appendValueInput('responses')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('responses');
this.appendValueInput('unprocessedKeys')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('unprocessedKeys');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchGetItemResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchGetItemResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchGetItemResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.KeysAndAttributes'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.KeysAndAttributes');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('KeysAndAttributes');

this.appendValueInput('consistentRead')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.lang.Boolean')
  .appendField('consistentRead');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.KeysAndAttributes');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.KeysAndAttributes');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.KeysAndAttributes'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.CreateTableRequest'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.CreateTableRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('CreateTableRequest');

this.appendValueInput('provisionedThroughput')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughput')
  .appendField('provisionedThroughput');
this.appendValueInput('tableName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('tableName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.CreateTableRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.CreateTableResult';
propertyTypes['.tableDescription'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.TableDescription';
propertyTypes['.tableDescription.creationDateTime'] = 'Number';
propertyTypes['.tableDescription.itemCount'] = 'Number';
propertyTypes['.tableDescription.provisionedThroughput'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughputDescription';
propertyTypes['.tableDescription.provisionedThroughput.lastDecreaseDateTime'] = 'Number';
propertyTypes['.tableDescription.provisionedThroughput.lastIncreaseDateTime'] = 'Number';
propertyTypes['.tableDescription.provisionedThroughput.numberOfDecreasesToday'] = 'Number';
propertyTypes['.tableDescription.provisionedThroughput.readCapacityUnits'] = 'Number';
propertyTypes['.tableDescription.provisionedThroughput.writeCapacityUnits'] = 'Number';
propertyTypes['.tableDescription.tableName'] = 'String';
propertyTypes['.tableDescription.tableSizeBytes'] = 'Number';
propertyTypes['.tableDescription.tableStatus'] = 'String';
var obj = new WhenThenVariable("CreateTableResult","#2D72B8", propertyTypes, "https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.CreateTableRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.Capacity'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.Capacity');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('Capacity');

this.appendValueInput('capacityUnits')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.lang.Double')
  .appendField('capacityUnits');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.Capacity');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.dynamodbv2.Capacity');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.Capacity'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchWriteItemRequest'] = {
  init: function() {
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchWriteItemRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('BatchWriteItemRequest');

this.appendValueInput('requestItems')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.util.Map')
  .appendField('requestItems');
this.appendValueInput('returnConsumedCapacity')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('returnConsumedCapacity');
this.appendValueInput('returnItemCollectionMetrics')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('returnItemCollectionMetrics');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchWriteItemRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchWriteItemResult';
propertyTypes['.itemCollectionMetrics[String]'] = 'java.util.Map';
propertyTypes['.unprocessedItems[String]'] = 'java.util.Map';
var obj = new WhenThenVariable("BatchWriteItemResult","#2D72B8", propertyTypes, "https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchWriteItemRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourceRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourceRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('DescribeStackResourceRequest');

this.appendValueInput('logicalResourceId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('logicalResourceId');
this.appendValueInput('stackName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourceRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourceResult';
propertyTypes['.stackResourceDetail'] = 'co.whenthen.wave.channels.amazonaws.cloudformation.StackResourceDetail';
propertyTypes['.stackResourceDetail.description'] = 'String';
propertyTypes['.stackResourceDetail.lastUpdatedTimestamp'] = 'Number';
propertyTypes['.stackResourceDetail.logicalResourceId'] = 'String';
propertyTypes['.stackResourceDetail.metadata'] = 'String';
propertyTypes['.stackResourceDetail.physicalResourceId'] = 'String';
propertyTypes['.stackResourceDetail.resourceStatus'] = 'String';
propertyTypes['.stackResourceDetail.resourceStatusReason'] = 'String';
propertyTypes['.stackResourceDetail.resourceType'] = 'String';
propertyTypes['.stackResourceDetail.stackId'] = 'String';
propertyTypes['.stackResourceDetail.stackName'] = 'String';
var obj = new WhenThenVariable("DescribeStackResourceResult","#759C3E", propertyTypes, "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourceRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourcesRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourcesRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('DescribeStackResourcesRequest');

this.appendValueInput('logicalResourceId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('logicalResourceId');
this.appendValueInput('physicalResourceId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('physicalResourceId');
this.appendValueInput('stackName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourcesRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourcesResult';
var obj = new WhenThenVariable("DescribeStackResourcesResult","#759C3E", propertyTypes, "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourcesRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.ListStacksRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.ListStacksRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('ListStacksRequest');

this.appendValueInput('nextToken')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextToken');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.ListStacksRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.cloudformation.ListStacksResult';
propertyTypes['.nextToken'] = 'String';
var obj = new WhenThenVariable("ListStacksResult","#759C3E", propertyTypes, "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.ListStacksRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.UpdateStackRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.UpdateStackRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('UpdateStackRequest');

this.appendValueInput('stackName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackName');
this.appendValueInput('stackPolicyBody')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackPolicyBody');
this.appendValueInput('stackPolicyDuringUpdateBody')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackPolicyDuringUpdateBody');
this.appendValueInput('stackPolicyDuringUpdateURL')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackPolicyDuringUpdateURL');
this.appendValueInput('stackPolicyURL')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackPolicyURL');
this.appendValueInput('templateBody')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('templateBody');
this.appendValueInput('templateURL')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('templateURL');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.UpdateStackRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.cloudformation.UpdateStackResult';
propertyTypes['.stackId'] = 'String';
var obj = new WhenThenVariable("UpdateStackResult","#759C3E", propertyTypes, "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.UpdateStackRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.Void'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.Void');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('Void');

  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.Void');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudformation.Void');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.Void'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourceResult'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourceResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('DescribeStackResourceResult');

this.appendValueInput('stackResourceDetail')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.cloudformation.StackResourceDetail')
  .appendField('stackResourceDetail');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourceResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourceResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourceResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.GetStackPolicyResult'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.GetStackPolicyResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('GetStackPolicyResult');

this.appendValueInput('stackPolicyBody')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackPolicyBody');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.GetStackPolicyResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudformation.GetStackPolicyResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.GetStackPolicyResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.CreateStackRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.CreateStackRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('CreateStackRequest');

this.appendValueInput('disableRollback')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.lang.Boolean')
  .appendField('disableRollback');
this.appendValueInput('onFailure')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('onFailure');
this.appendValueInput('stackName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackName');
this.appendValueInput('stackPolicyBody')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackPolicyBody');
this.appendValueInput('stackPolicyURL')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackPolicyURL');
this.appendValueInput('templateBody')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('templateBody');
this.appendValueInput('templateURL')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('templateURL');
this.appendValueInput('timeoutInMinutes')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('timeoutInMinutes');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.CreateStackRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.cloudformation.CreateStackResult';
propertyTypes['.stackId'] = 'String';
var obj = new WhenThenVariable("CreateStackResult","#759C3E", propertyTypes, "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.CreateStackRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.GetStackPolicyRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.GetStackPolicyRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('GetStackPolicyRequest');

this.appendValueInput('stackName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.GetStackPolicyRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.cloudformation.GetStackPolicyResult';
propertyTypes['.stackPolicyBody'] = 'String';
var obj = new WhenThenVariable("GetStackPolicyResult","#759C3E", propertyTypes, "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.GetStackPolicyRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourcesResult'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourcesResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('DescribeStackResourcesResult');

  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourcesResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourcesResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourcesResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackEventsResult'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackEventsResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('DescribeStackEventsResult');

this.appendValueInput('nextToken')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextToken');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackEventsResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackEventsResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackEventsResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.ValidateTemplateRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.ValidateTemplateRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('ValidateTemplateRequest');

this.appendValueInput('templateBody')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('templateBody');
this.appendValueInput('templateURL')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('templateURL');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.ValidateTemplateRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.cloudformation.ValidateTemplateResult';
propertyTypes['.capabilitiesReason'] = 'String';
propertyTypes['.description'] = 'String';
var obj = new WhenThenVariable("ValidateTemplateResult","#759C3E", propertyTypes, "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.ValidateTemplateRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.UpdateStackResult'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.UpdateStackResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('UpdateStackResult');

this.appendValueInput('stackId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackId');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.UpdateStackResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudformation.UpdateStackResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.UpdateStackResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStacksResult'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStacksResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('DescribeStacksResult');

this.appendValueInput('nextToken')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextToken');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStacksResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStacksResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStacksResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.GetTemplateRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.GetTemplateRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('GetTemplateRequest');

this.appendValueInput('stackName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.GetTemplateRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.cloudformation.GetTemplateResult';
propertyTypes['.templateBody'] = 'String';
var obj = new WhenThenVariable("GetTemplateResult","#759C3E", propertyTypes, "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.GetTemplateRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.StackResourceDetail'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.StackResourceDetail');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('StackResourceDetail');

this.appendValueInput('description')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('description');
this.appendValueInput('lastUpdatedTimestamp')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('lastUpdatedTimestamp');
this.appendValueInput('logicalResourceId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('logicalResourceId');
this.appendValueInput('metadata')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('metadata');
this.appendValueInput('physicalResourceId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('physicalResourceId');
this.appendValueInput('resourceStatus')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('resourceStatus');
this.appendValueInput('resourceStatusReason')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('resourceStatusReason');
this.appendValueInput('resourceType')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('resourceType');
this.appendValueInput('stackId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackId');
this.appendValueInput('stackName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackName');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.StackResourceDetail');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudformation.StackResourceDetail');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.StackResourceDetail'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.ListStackResourcesRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.ListStackResourcesRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('ListStackResourcesRequest');

this.appendValueInput('nextToken')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextToken');
this.appendValueInput('stackName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.ListStackResourcesRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.cloudformation.ListStackResourcesResult';
propertyTypes['.nextToken'] = 'String';
var obj = new WhenThenVariable("ListStackResourcesResult","#759C3E", propertyTypes, "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.ListStackResourcesRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.GetTemplateResult'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.GetTemplateResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('GetTemplateResult');

this.appendValueInput('templateBody')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('templateBody');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.GetTemplateResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudformation.GetTemplateResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.GetTemplateResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.EstimateTemplateCostResult'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.EstimateTemplateCostResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('EstimateTemplateCostResult');

this.appendValueInput('url')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('url');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.EstimateTemplateCostResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudformation.EstimateTemplateCostResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.EstimateTemplateCostResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.DeleteStackRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.DeleteStackRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('DeleteStackRequest');

this.appendValueInput('stackName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.DeleteStackRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.DeleteStackRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.ValidateTemplateResult'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.ValidateTemplateResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('ValidateTemplateResult');

this.appendValueInput('capabilitiesReason')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('capabilitiesReason');
this.appendValueInput('description')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('description');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.ValidateTemplateResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudformation.ValidateTemplateResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.ValidateTemplateResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.AmazonCloudFormationAsyncClientRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.AmazonCloudFormationAsyncClientRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('AmazonCloudFormationAsyncClientRequest');

  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.AmazonCloudFormationAsyncClientRequest');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudformation.AmazonCloudFormationAsyncClientRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.AmazonCloudFormationAsyncClientRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStacksRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStacksRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('DescribeStacksRequest');

this.appendValueInput('nextToken')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextToken');
this.appendValueInput('stackName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStacksRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStacksResult';
propertyTypes['.nextToken'] = 'String';
var obj = new WhenThenVariable("DescribeStacksResult","#759C3E", propertyTypes, "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStacksRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.CancelUpdateStackRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.CancelUpdateStackRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('CancelUpdateStackRequest');

this.appendValueInput('stackName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.CancelUpdateStackRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.CancelUpdateStackRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.ListStacksResult'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.ListStacksResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('ListStacksResult');

this.appendValueInput('nextToken')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextToken');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.ListStacksResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudformation.ListStacksResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.ListStacksResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.CreateStackResult'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.CreateStackResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('CreateStackResult');

this.appendValueInput('stackId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackId');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.CreateStackResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudformation.CreateStackResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.CreateStackResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackEventsRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackEventsRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('DescribeStackEventsRequest');

this.appendValueInput('nextToken')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextToken');
this.appendValueInput('stackName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackName');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackEventsRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackEventsResult';
propertyTypes['.nextToken'] = 'String';
var obj = new WhenThenVariable("DescribeStackEventsResult","#759C3E", propertyTypes, "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackEventsRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.EstimateTemplateCostRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.EstimateTemplateCostRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('EstimateTemplateCostRequest');

this.appendValueInput('templateBody')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('templateBody');
this.appendValueInput('templateURL')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('templateURL');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.EstimateTemplateCostRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.cloudformation.EstimateTemplateCostResult';
propertyTypes['.url'] = 'String';
var obj = new WhenThenVariable("EstimateTemplateCostResult","#759C3E", propertyTypes, "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.EstimateTemplateCostRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.ListStackResourcesResult'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.ListStackResourcesResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('ListStackResourcesResult');

this.appendValueInput('nextToken')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextToken');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.ListStackResourcesResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudformation.ListStackResourcesResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.ListStackResourcesResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudformation.SetStackPolicyRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudformation.SetStackPolicyRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-128.png', 15, 15)) 
      .appendField('SetStackPolicyRequest');

this.appendValueInput('stackName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackName');
this.appendValueInput('stackPolicyBody')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackPolicyBody');
this.appendValueInput('stackPolicyURL')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stackPolicyURL');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudformation.SetStackPolicyRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudformation.SetStackPolicyRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudwatch.Void'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudwatch.Void');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png', 15, 15)) 
      .appendField('At 80% of Provisioned Read Throughput');

  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudwatch.Void');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudwatch.Void');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.cloudformation.EstimateTemplateCostResult';
propertyTypes['.tableName'] = 'String';
var obj = new WhenThenVariable("CloudWatch alarm properties","#759C3E", propertyTypes, "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudwatch.Void'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudwatch.AmazonCloudWatchAsyncClientRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudwatch.AmazonCloudWatchAsyncClientRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png', 15, 15)) 
      .appendField('AmazonCloudWatchAsyncClientRequest');

  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudwatch.AmazonCloudWatchAsyncClientRequest');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudwatch.AmazonCloudWatchAsyncClientRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudwatch.AmazonCloudWatchAsyncClientRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsForMetricResult'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsForMetricResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png', 15, 15)) 
      .appendField('DescribeAlarmsForMetricResult');

  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsForMetricResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsForMetricResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsForMetricResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudwatch.PutMetricDataRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudwatch.PutMetricDataRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png', 15, 15)) 
      .appendField('PutMetricDataRequest');

this.appendValueInput('namespace')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('namespace');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudwatch.PutMetricDataRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudwatch.PutMetricDataRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudwatch.SetAlarmStateRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudwatch.SetAlarmStateRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png', 15, 15)) 
      .appendField('SetAlarmStateRequest');

this.appendValueInput('alarmName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('alarmName');
this.appendValueInput('stateReason')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stateReason');
this.appendValueInput('stateReasonData')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stateReasonData');
this.appendValueInput('stateValue')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stateValue');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudwatch.SetAlarmStateRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudwatch.SetAlarmStateRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudwatch.GetMetricStatisticsResult'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudwatch.GetMetricStatisticsResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png', 15, 15)) 
      .appendField('GetMetricStatisticsResult');

this.appendValueInput('label')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('label');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudwatch.GetMetricStatisticsResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudwatch.GetMetricStatisticsResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudwatch.GetMetricStatisticsResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsForMetricRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsForMetricRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png', 15, 15)) 
      .appendField('DescribeAlarmsForMetricRequest');

this.appendValueInput('metricName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('metricName');
this.appendValueInput('namespace')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('namespace');
this.appendValueInput('period')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('period');
this.appendValueInput('statistic')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('statistic');
this.appendValueInput('unit')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('unit');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsForMetricRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsForMetricResult';
var obj = new WhenThenVariable("DescribeAlarmsForMetricResult","#759C3E", propertyTypes, "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsForMetricRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmHistoryResult'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmHistoryResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png', 15, 15)) 
      .appendField('DescribeAlarmHistoryResult');

this.appendValueInput('nextToken')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextToken');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmHistoryResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmHistoryResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmHistoryResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudwatch.PutMetricAlarmRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudwatch.PutMetricAlarmRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png', 15, 15)) 
      .appendField('PutMetricAlarmRequest');

this.appendValueInput('actionsEnabled')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.lang.Boolean')
  .appendField('actionsEnabled');
this.appendValueInput('alarmDescription')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('alarmDescription');
this.appendValueInput('alarmName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('alarmName');
this.appendValueInput('comparisonOperator')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('comparisonOperator');
this.appendValueInput('evaluationPeriods')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('evaluationPeriods');
this.appendValueInput('metricName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('metricName');
this.appendValueInput('namespace')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('namespace');
this.appendValueInput('period')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('period');
this.appendValueInput('statistic')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('statistic');
this.appendValueInput('threshold')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.lang.Double')
  .appendField('threshold');
this.appendValueInput('unit')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('unit');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudwatch.PutMetricAlarmRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudwatch.PutMetricAlarmRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png', 15, 15)) 
      .appendField('DescribeAlarmsRequest');

this.appendValueInput('actionPrefix')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('actionPrefix');
this.appendValueInput('alarmNamePrefix')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('alarmNamePrefix');
this.appendValueInput('maxRecords')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('maxRecords');
this.appendValueInput('nextToken')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextToken');
this.appendValueInput('stateValue')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('stateValue');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsResult';
propertyTypes['.nextToken'] = 'String';
var obj = new WhenThenVariable("DescribeAlarmsResult","#759C3E", propertyTypes, "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmHistoryRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmHistoryRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png', 15, 15)) 
      .appendField('DescribeAlarmHistoryRequest');

this.appendValueInput('alarmName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('alarmName');
this.appendValueInput('endDate')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('endDate');
this.appendValueInput('historyItemType')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('historyItemType');
this.appendValueInput('maxRecords')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('maxRecords');
this.appendValueInput('nextToken')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextToken');
this.appendValueInput('startDate')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('startDate');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmHistoryRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmHistoryResult';
propertyTypes['.nextToken'] = 'String';
var obj = new WhenThenVariable("DescribeAlarmHistoryResult","#759C3E", propertyTypes, "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmHistoryRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudwatch.EnableAlarmActionsRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudwatch.EnableAlarmActionsRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png', 15, 15)) 
      .appendField('EnableAlarmActionsRequest');

  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudwatch.EnableAlarmActionsRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudwatch.EnableAlarmActionsRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudwatch.GetMetricStatisticsRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudwatch.GetMetricStatisticsRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png', 15, 15)) 
      .appendField('GetMetricStatisticsRequest');

this.appendValueInput('endTime')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('endTime');
this.appendValueInput('metricName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('metricName');
this.appendValueInput('namespace')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('namespace');
this.appendValueInput('period')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('period');
this.appendValueInput('startTime')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('startTime');
this.appendValueInput('unit')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('unit');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudwatch.GetMetricStatisticsRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.cloudwatch.GetMetricStatisticsResult';
propertyTypes['.label'] = 'String';
var obj = new WhenThenVariable("GetMetricStatisticsResult","#759C3E", propertyTypes, "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudwatch.GetMetricStatisticsRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsResult'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png', 15, 15)) 
      .appendField('DescribeAlarmsResult');

this.appendValueInput('nextToken')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextToken');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudwatch.DisableAlarmActionsRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudwatch.DisableAlarmActionsRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png', 15, 15)) 
      .appendField('DisableAlarmActionsRequest');

  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudwatch.DisableAlarmActionsRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudwatch.DisableAlarmActionsRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudwatch.ListMetricsRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudwatch.ListMetricsRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png', 15, 15)) 
      .appendField('ListMetricsRequest');

this.appendValueInput('metricName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('metricName');
this.appendValueInput('namespace')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('namespace');
this.appendValueInput('nextToken')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextToken');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudwatch.ListMetricsRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.cloudwatch.ListMetricsResult';
propertyTypes['.nextToken'] = 'String';
var obj = new WhenThenVariable("ListMetricsResult","#759C3E", propertyTypes, "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudwatch.ListMetricsRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudwatch.ListMetricsResult'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudwatch.ListMetricsResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png', 15, 15)) 
      .appendField('ListMetricsResult');

this.appendValueInput('nextToken')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextToken');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudwatch.ListMetricsResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.cloudwatch.ListMetricsResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudwatch.ListMetricsResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.cloudwatch.DeleteAlarmsRequest'] = {
  init: function() {
  this.setColour('#759C3E');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.cloudwatch.DeleteAlarmsRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-128.png', 15, 15)) 
      .appendField('DeleteAlarmsRequest');

  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.cloudwatch.DeleteAlarmsRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.cloudwatch.DeleteAlarmsRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.CreateHealthCheckRequest'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.CreateHealthCheckRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('CreateHealthCheckRequest');

this.appendValueInput('callerReference')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('callerReference');
this.appendValueInput('healthCheckConfig')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.route53.HealthCheckConfig')
  .appendField('healthCheckConfig');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.CreateHealthCheckRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.route53.CreateHealthCheckResult';
propertyTypes['.healthCheck'] = 'co.whenthen.wave.channels.amazonaws.route53.HealthCheck';
propertyTypes['.healthCheck.callerReference'] = 'String';
propertyTypes['.healthCheck.healthCheckConfig'] = 'co.whenthen.wave.channels.amazonaws.route53.HealthCheckConfig';
propertyTypes['.healthCheck.healthCheckConfig.IPAddress'] = 'String';
propertyTypes['.healthCheck.healthCheckConfig.failureThreshold'] = 'Number';
propertyTypes['.healthCheck.healthCheckConfig.fullyQualifiedDomainName'] = 'String';
propertyTypes['.healthCheck.healthCheckConfig.port'] = 'Number';
propertyTypes['.healthCheck.healthCheckConfig.requestInterval'] = 'Number';
propertyTypes['.healthCheck.healthCheckConfig.resourcePath'] = 'String';
propertyTypes['.healthCheck.healthCheckConfig.searchString'] = 'String';
propertyTypes['.healthCheck.healthCheckConfig.type'] = 'String';
propertyTypes['.healthCheck.id'] = 'String';
propertyTypes['.location'] = 'String';
var obj = new WhenThenVariable("CreateHealthCheckResult","#F58536", propertyTypes, "http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.CreateHealthCheckRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.ListHostedZonesResult'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.ListHostedZonesResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('ListHostedZonesResult');

this.appendValueInput('isTruncated')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.lang.Boolean')
  .appendField('isTruncated');
this.appendValueInput('marker')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('marker');
this.appendValueInput('maxItems')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('maxItems');
this.appendValueInput('nextMarker')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextMarker');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.ListHostedZonesResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.ListHostedZonesResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.ListHostedZonesResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.DeleteHealthCheckResult'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.DeleteHealthCheckResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('DeleteHealthCheckResult');

  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.DeleteHealthCheckResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.DeleteHealthCheckResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.DeleteHealthCheckResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.CreateHostedZoneResult'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.CreateHostedZoneResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('CreateHostedZoneResult');

this.appendValueInput('changeInfo')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.route53.ChangeInfo')
  .appendField('changeInfo');
this.appendValueInput('delegationSet')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.route53.DelegationSet')
  .appendField('delegationSet');
this.appendValueInput('hostedZone')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.route53.HostedZone')
  .appendField('hostedZone');
this.appendValueInput('location')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('location');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.CreateHostedZoneResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.CreateHostedZoneResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.CreateHostedZoneResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.DeleteHostedZoneResult'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.DeleteHostedZoneResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('DeleteHostedZoneResult');

this.appendValueInput('changeInfo')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.route53.ChangeInfo')
  .appendField('changeInfo');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.DeleteHostedZoneResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.DeleteHostedZoneResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.DeleteHostedZoneResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.HealthCheckConfig'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.HealthCheckConfig');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('HealthCheckConfig');

this.appendValueInput('IPAddress')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('IPAddress');
this.appendValueInput('failureThreshold')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('failureThreshold');
this.appendValueInput('fullyQualifiedDomainName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('fullyQualifiedDomainName');
this.appendValueInput('port')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('port');
this.appendValueInput('requestInterval')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('requestInterval');
this.appendValueInput('resourcePath')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('resourcePath');
this.appendValueInput('searchString')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('searchString');
this.appendValueInput('type')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('type');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.HealthCheckConfig');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.HealthCheckConfig');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.HealthCheckConfig'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.ChangeInfo'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.ChangeInfo');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('ChangeInfo');

this.appendValueInput('comment')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('comment');
this.appendValueInput('id')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('id');
this.appendValueInput('status')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('status');
this.appendValueInput('submittedAt')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('submittedAt');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.ChangeInfo');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.ChangeInfo');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.ChangeInfo'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.ListResourceRecordSetsResult'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.ListResourceRecordSetsResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('ListResourceRecordSetsResult');

this.appendValueInput('isTruncated')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.lang.Boolean')
  .appendField('isTruncated');
this.appendValueInput('maxItems')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('maxItems');
this.appendValueInput('nextRecordIdentifier')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextRecordIdentifier');
this.appendValueInput('nextRecordName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextRecordName');
this.appendValueInput('nextRecordType')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextRecordType');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.ListResourceRecordSetsResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.ListResourceRecordSetsResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.ListResourceRecordSetsResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.HostedZoneConfig'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.HostedZoneConfig');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('HostedZoneConfig');

this.appendValueInput('comment')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('comment');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.HostedZoneConfig');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.HostedZoneConfig');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.HostedZoneConfig'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.GetChangeRequest'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.GetChangeRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('GetChangeRequest');

this.appendValueInput('id')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('id');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.GetChangeRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.route53.GetChangeResult';
propertyTypes['.changeInfo'] = 'co.whenthen.wave.channels.amazonaws.route53.ChangeInfo';
propertyTypes['.changeInfo.comment'] = 'String';
propertyTypes['.changeInfo.id'] = 'String';
propertyTypes['.changeInfo.status'] = 'String';
propertyTypes['.changeInfo.submittedAt'] = 'Number';
var obj = new WhenThenVariable("GetChangeResult","#F58536", propertyTypes, "http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.GetChangeRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.HostedZone'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.HostedZone');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('HostedZone');

this.appendValueInput('callerReference')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('callerReference');
this.appendValueInput('config')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.route53.HostedZoneConfig')
  .appendField('config');
this.appendValueInput('id')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('id');
this.appendValueInput('name')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('name');
this.appendValueInput('resourceRecordSetCount')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('Number')
  .appendField('resourceRecordSetCount');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.HostedZone');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.HostedZone');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.HostedZone'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.CreateHealthCheckResult'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.CreateHealthCheckResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('CreateHealthCheckResult');

this.appendValueInput('healthCheck')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.route53.HealthCheck')
  .appendField('healthCheck');
this.appendValueInput('location')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('location');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.CreateHealthCheckResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.CreateHealthCheckResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.CreateHealthCheckResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.DeleteHostedZoneRequest'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.DeleteHostedZoneRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('DeleteHostedZoneRequest');

this.appendValueInput('id')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('id');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.DeleteHostedZoneRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.route53.DeleteHostedZoneResult';
propertyTypes['.changeInfo'] = 'co.whenthen.wave.channels.amazonaws.route53.ChangeInfo';
propertyTypes['.changeInfo.comment'] = 'String';
propertyTypes['.changeInfo.id'] = 'String';
propertyTypes['.changeInfo.status'] = 'String';
propertyTypes['.changeInfo.submittedAt'] = 'Number';
var obj = new WhenThenVariable("DeleteHostedZoneResult","#F58536", propertyTypes, "http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.DeleteHostedZoneRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.CreateHostedZoneRequest'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.CreateHostedZoneRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('CreateHostedZoneRequest');

this.appendValueInput('callerReference')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('callerReference');
this.appendValueInput('hostedZoneConfig')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.route53.HostedZoneConfig')
  .appendField('hostedZoneConfig');
this.appendValueInput('name')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('name');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.CreateHostedZoneRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.route53.CreateHostedZoneResult';
propertyTypes['.changeInfo'] = 'co.whenthen.wave.channels.amazonaws.route53.ChangeInfo';
propertyTypes['.changeInfo.comment'] = 'String';
propertyTypes['.changeInfo.id'] = 'String';
propertyTypes['.changeInfo.status'] = 'String';
propertyTypes['.changeInfo.submittedAt'] = 'Number';
propertyTypes['.delegationSet'] = 'co.whenthen.wave.channels.amazonaws.route53.DelegationSet';
propertyTypes['.hostedZone'] = 'co.whenthen.wave.channels.amazonaws.route53.HostedZone';
propertyTypes['.hostedZone.callerReference'] = 'String';
propertyTypes['.hostedZone.config'] = 'co.whenthen.wave.channels.amazonaws.route53.HostedZoneConfig';
propertyTypes['.hostedZone.config.comment'] = 'String';
propertyTypes['.hostedZone.id'] = 'String';
propertyTypes['.hostedZone.name'] = 'String';
propertyTypes['.hostedZone.resourceRecordSetCount'] = 'Number';
propertyTypes['.location'] = 'String';
var obj = new WhenThenVariable("CreateHostedZoneResult","#F58536", propertyTypes, "http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.CreateHostedZoneRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.ChangeBatch'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.ChangeBatch');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('ChangeBatch');

this.appendValueInput('comment')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('comment');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.ChangeBatch');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.ChangeBatch');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.ChangeBatch'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.GetHealthCheckResult'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.GetHealthCheckResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('GetHealthCheckResult');

this.appendValueInput('healthCheck')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.route53.HealthCheck')
  .appendField('healthCheck');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.GetHealthCheckResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.GetHealthCheckResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.GetHealthCheckResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.ListHealthChecksRequest'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.ListHealthChecksRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('ListHealthChecksRequest');

this.appendValueInput('marker')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('marker');
this.appendValueInput('maxItems')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('maxItems');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.ListHealthChecksRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.route53.ListHealthChecksResult';
propertyTypes['.isTruncated'] = 'java.lang.Boolean';
propertyTypes['.marker'] = 'String';
propertyTypes['.maxItems'] = 'String';
propertyTypes['.nextMarker'] = 'String';
var obj = new WhenThenVariable("ListHealthChecksResult","#F58536", propertyTypes, "http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.ListHealthChecksRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.DeleteHealthCheckRequest'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.DeleteHealthCheckRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('DeleteHealthCheckRequest');

this.appendValueInput('healthCheckId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('healthCheckId');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.DeleteHealthCheckRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.route53.DeleteHealthCheckResult';
var obj = new WhenThenVariable("DeleteHealthCheckResult","#F58536", propertyTypes, "http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.DeleteHealthCheckRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.HealthCheck'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.HealthCheck');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('HealthCheck');

this.appendValueInput('callerReference')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('callerReference');
this.appendValueInput('healthCheckConfig')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.route53.HealthCheckConfig')
  .appendField('healthCheckConfig');
this.appendValueInput('id')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('id');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.HealthCheck');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.HealthCheck');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.HealthCheck'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.ChangeResourceRecordSetsResult'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.ChangeResourceRecordSetsResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('ChangeResourceRecordSetsResult');

this.appendValueInput('changeInfo')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.route53.ChangeInfo')
  .appendField('changeInfo');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.ChangeResourceRecordSetsResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.ChangeResourceRecordSetsResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.ChangeResourceRecordSetsResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.ListResourceRecordSetsRequest'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.ListResourceRecordSetsRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('ListResourceRecordSetsRequest');

this.appendValueInput('hostedZoneId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('hostedZoneId');
this.appendValueInput('maxItems')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('maxItems');
this.appendValueInput('startRecordIdentifier')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('startRecordIdentifier');
this.appendValueInput('startRecordName')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('startRecordName');
this.appendValueInput('startRecordType')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('startRecordType');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.ListResourceRecordSetsRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.route53.ListResourceRecordSetsResult';
propertyTypes['.isTruncated'] = 'java.lang.Boolean';
propertyTypes['.maxItems'] = 'String';
propertyTypes['.nextRecordIdentifier'] = 'String';
propertyTypes['.nextRecordName'] = 'String';
propertyTypes['.nextRecordType'] = 'String';
var obj = new WhenThenVariable("ListResourceRecordSetsResult","#F58536", propertyTypes, "http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.ListResourceRecordSetsRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.DelegationSet'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.DelegationSet');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('DelegationSet');

  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.DelegationSet');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.DelegationSet');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.DelegationSet'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.GetHealthCheckRequest'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.GetHealthCheckRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('GetHealthCheckRequest');

this.appendValueInput('healthCheckId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('healthCheckId');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.GetHealthCheckRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.route53.GetHealthCheckResult';
propertyTypes['.healthCheck'] = 'co.whenthen.wave.channels.amazonaws.route53.HealthCheck';
propertyTypes['.healthCheck.callerReference'] = 'String';
propertyTypes['.healthCheck.healthCheckConfig'] = 'co.whenthen.wave.channels.amazonaws.route53.HealthCheckConfig';
propertyTypes['.healthCheck.healthCheckConfig.IPAddress'] = 'String';
propertyTypes['.healthCheck.healthCheckConfig.failureThreshold'] = 'Number';
propertyTypes['.healthCheck.healthCheckConfig.fullyQualifiedDomainName'] = 'String';
propertyTypes['.healthCheck.healthCheckConfig.port'] = 'Number';
propertyTypes['.healthCheck.healthCheckConfig.requestInterval'] = 'Number';
propertyTypes['.healthCheck.healthCheckConfig.resourcePath'] = 'String';
propertyTypes['.healthCheck.healthCheckConfig.searchString'] = 'String';
propertyTypes['.healthCheck.healthCheckConfig.type'] = 'String';
propertyTypes['.healthCheck.id'] = 'String';
var obj = new WhenThenVariable("GetHealthCheckResult","#F58536", propertyTypes, "http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.GetHealthCheckRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.GetHostedZoneResult'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.GetHostedZoneResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('GetHostedZoneResult');

this.appendValueInput('delegationSet')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.route53.DelegationSet')
  .appendField('delegationSet');
this.appendValueInput('hostedZone')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.route53.HostedZone')
  .appendField('hostedZone');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.GetHostedZoneResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.GetHostedZoneResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.GetHostedZoneResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.ChangeResourceRecordSetsRequest'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.ChangeResourceRecordSetsRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('ChangeResourceRecordSetsRequest');

this.appendValueInput('changeBatch')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.route53.ChangeBatch')
  .appendField('changeBatch');
this.appendValueInput('hostedZoneId')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('hostedZoneId');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.ChangeResourceRecordSetsRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.route53.ChangeResourceRecordSetsResult';
propertyTypes['.changeInfo'] = 'co.whenthen.wave.channels.amazonaws.route53.ChangeInfo';
propertyTypes['.changeInfo.comment'] = 'String';
propertyTypes['.changeInfo.id'] = 'String';
propertyTypes['.changeInfo.status'] = 'String';
propertyTypes['.changeInfo.submittedAt'] = 'Number';
var obj = new WhenThenVariable("ChangeResourceRecordSetsResult","#F58536", propertyTypes, "http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.ChangeResourceRecordSetsRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.AmazonRoute53AsyncClientRequest'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.AmazonRoute53AsyncClientRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('AmazonRoute53AsyncClientRequest');

  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.AmazonRoute53AsyncClientRequest');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.AmazonRoute53AsyncClientRequest');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.AmazonRoute53AsyncClientRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.GetChangeResult'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.GetChangeResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('GetChangeResult');

this.appendValueInput('changeInfo')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('co.whenthen.wave.channels.amazonaws.route53.ChangeInfo')
  .appendField('changeInfo');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.GetChangeResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.GetChangeResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.GetChangeResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.ListHostedZonesRequest'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.ListHostedZonesRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('ListHostedZonesRequest');

this.appendValueInput('marker')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('marker');
this.appendValueInput('maxItems')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('maxItems');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.ListHostedZonesRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.route53.ListHostedZonesResult';
propertyTypes['.isTruncated'] = 'java.lang.Boolean';
propertyTypes['.marker'] = 'String';
propertyTypes['.maxItems'] = 'String';
propertyTypes['.nextMarker'] = 'String';
var obj = new WhenThenVariable("ListHostedZonesResult","#F58536", propertyTypes, "http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.ListHostedZonesRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.ListHealthChecksResult'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.ListHealthChecksResult');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('ListHealthChecksResult');

this.appendValueInput('isTruncated')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('java.lang.Boolean')
  .appendField('isTruncated');
this.appendValueInput('marker')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('marker');
this.appendValueInput('maxItems')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('maxItems');
this.appendValueInput('nextMarker')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('nextMarker');
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.ListHealthChecksResult');
  this.setOutput(true, 'co.whenthen.wave.channels.amazonaws.route53.ListHealthChecksResult');
}
,
getVars: function() {
var outputs = [];
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.ListHealthChecksResult'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
Blockly.Blocks['co.whenthen.wave.channels.amazonaws.route53.GetHostedZoneRequest'] = {
  init: function() {
  this.setColour('#F58536');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.route53.GetHostedZoneRequest');
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage('http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png', 15, 15)) 
      .appendField('GetHostedZoneRequest');

this.appendValueInput('id')
  .setAlign(Blockly.ALIGN_RIGHT)
  .setCheck('String')
  .appendField('id');
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('co.whenthen.wave.channels.amazonaws.route53.GetHostedZoneRequest');
}
,
getVars: function() {
var outputs = [];
var propertyTypes = {};
propertyTypes['.'] = 'co.whenthen.wave.channels.amazonaws.route53.GetHostedZoneResult';
propertyTypes['.delegationSet'] = 'co.whenthen.wave.channels.amazonaws.route53.DelegationSet';
propertyTypes['.hostedZone'] = 'co.whenthen.wave.channels.amazonaws.route53.HostedZone';
propertyTypes['.hostedZone.callerReference'] = 'String';
propertyTypes['.hostedZone.config'] = 'co.whenthen.wave.channels.amazonaws.route53.HostedZoneConfig';
propertyTypes['.hostedZone.config.comment'] = 'String';
propertyTypes['.hostedZone.id'] = 'String';
propertyTypes['.hostedZone.name'] = 'String';
propertyTypes['.hostedZone.resourceRecordSetCount'] = 'Number';
var obj = new WhenThenVariable("GetHostedZoneResult","#F58536", propertyTypes, "http://mbridge.co.kr/wp-content/uploads/2013/06/route53.png");
outputs.push(obj);
return outputs;
}

};


Blockly.Drools['co.whenthen.wave.channels.amazonaws.route53.GetHostedZoneRequest'] = function(block) {
var argument = Blockly.Drools.valueToCode(block, 'tableName', Blockly.Drools.ORDER_NONE) || '';
var code = 'channels["kie://co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new DescribeTableRequest(new DescribeTableRequest$Parameters(';
code += argument;
code += ')))';
return code + '\n';
}
/*
function init() {var toolbox = '<xml>';
toolbox +='<category name="Rule Sets"><category name="Slack"></category></category>';
toolbox +='<category name="Amazon Web Services"><category name="Slack"></category></category>';
toolbox +='<category name="Performance Monitoring"><category name="Slack"></category></category>';
toolbox +='<category name="Log Management"><category name="Slack"></category></category>';
toolbox +='<category name="Group Chat &amp; Notifications"><category name="Slack"></category><category name="HipChat"></category><category name="Campfire"></category><category name="Sqwiggle"></category><category name="Flowdock"></category><category name="Kato"></category><category name="Hall"></category></category>';

toolbox +='<category name="Variables" custom="VARIABLE"></category>';toolbox +='<category name="Functions" custom="PROCEDURE"></category>';toolbox +='<category name="Logic"><block type="lists_setIndex"></block><block type="controls_forEach"></block><block type="whenthenmutator"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category>';toolbox +='<category name="Math"><block type="math_number"></block><block type="refresh1"></block><block type="refresh2"></block><block type="refresh3"></block><block type="consumed"></block><block type="consumed2"></block><block type="consumed3"></block><block type="consumed4"></block><block type="consumed5"></block><block type="whenthenrule"></block><block type="math_arithmetic"></block><block type="math_single"></block></category>';toolbox +='<category name="Text"><block type="text"></block><block type="text_length"></block></category>';toolbox +='<category name="AWS"><category name="CloudFormation APIs"><block type="co.whenthen.wave.channels.amazonaws.cloudformation.CancelUpdateStackRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.CreateStackRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.DeleteStackRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackEventsRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourceRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourcesRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStacksRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.EstimateTemplateCostRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.GetStackPolicyRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.GetTemplateRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.ListStackResourcesRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.ListStacksRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.SetStackPolicyRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.UpdateStackRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.ValidateTemplateRequest"></block></category><category name="CloudFormation Objects"><block type="co.whenthen.wave.channels.amazonaws.cloudformation.AmazonCloudFormationAsyncClientRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.CreateStackResult"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackEventsResult"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourceResult"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStackResourcesResult"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.DescribeStacksResult"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.EstimateTemplateCostResult"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.GetStackPolicyResult"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.GetTemplateResult"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.ListStackResourcesResult"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.ListStacksResult"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.StackResourceDetail"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.UpdateStackResult"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.ValidateTemplateResult"></block><block type="co.whenthen.wave.channels.amazonaws.cloudformation.Void"></block></category><category name="CloudWatch APIs"><block type="co.whenthen.wave.channels.amazonaws.cloudwatch.DeleteAlarmsRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmHistoryRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsForMetricRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudwatch.DisableAlarmActionsRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudwatch.EnableAlarmActionsRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudwatch.GetMetricStatisticsRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudwatch.ListMetricsRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudwatch.PutMetricAlarmRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudwatch.PutMetricDataRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudwatch.SetAlarmStateRequest"></block></category><category name="CloudWatch Objects"><block type="co.whenthen.wave.channels.amazonaws.cloudwatch.AmazonCloudWatchAsyncClientRequest"></block><block type="co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmHistoryResult"></block><block type="co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsForMetricResult"></block><block type="co.whenthen.wave.channels.amazonaws.cloudwatch.DescribeAlarmsResult"></block><block type="co.whenthen.wave.channels.amazonaws.cloudwatch.GetMetricStatisticsResult"></block><block type="co.whenthen.wave.channels.amazonaws.cloudwatch.ListMetricsResult"></block><block type="co.whenthen.wave.channels.amazonaws.cloudwatch.Void"></block></category><category name="DynamoDB APIs"><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchGetItemRequest"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchWriteItemRequest"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.CreateTableRequest"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteItemRequest"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteTableRequest"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.DescribeTableRequest"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.GetItemRequest"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.ListTablesRequest"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.PutItemRequest"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.QueryRequest"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.ScanRequest"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateItemRequest"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateTableRequest"></block></category><category name="DynamoDB Objects"><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.AmazonDynamoDBAsyncClientRequest"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.AttributeValue"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.AttributeValueUpdate"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchGetItemResult"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.BatchWriteItemResult"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.Capacity"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.Condition"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.ConsumedCapacity"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.CreateTableResult"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteItemResult"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteRequest"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.DeleteTableResult"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.DescribeTableResult"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.ExpectedAttributeValue"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.GetItemResult"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.ItemCollectionMetrics"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.KeysAndAttributes"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.ListTablesResult"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughput"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.ProvisionedThroughputDescription"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.PutItemResult"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.PutRequest"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.QueryResult"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.ScanResult"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.TableDescription"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateItemResult"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.UpdateTableResult"></block><block type="co.whenthen.wave.channels.amazonaws.dynamodbv2.WriteRequest"></block></category><category name="Route 53 APIs"><block type="co.whenthen.wave.channels.amazonaws.route53.ChangeResourceRecordSetsRequest"></block><block type="co.whenthen.wave.channels.amazonaws.route53.CreateHealthCheckRequest"></block><block type="co.whenthen.wave.channels.amazonaws.route53.CreateHostedZoneRequest"></block><block type="co.whenthen.wave.channels.amazonaws.route53.DeleteHealthCheckRequest"></block><block type="co.whenthen.wave.channels.amazonaws.route53.DeleteHostedZoneRequest"></block><block type="co.whenthen.wave.channels.amazonaws.route53.GetChangeRequest"></block><block type="co.whenthen.wave.channels.amazonaws.route53.GetHealthCheckRequest"></block><block type="co.whenthen.wave.channels.amazonaws.route53.GetHostedZoneRequest"></block><block type="co.whenthen.wave.channels.amazonaws.route53.ListHealthChecksRequest"></block><block type="co.whenthen.wave.channels.amazonaws.route53.ListHostedZonesRequest"></block><block type="co.whenthen.wave.channels.amazonaws.route53.ListResourceRecordSetsRequest"></block></category><category name="Route 53 Objects"><block type="co.whenthen.wave.channels.amazonaws.route53.AmazonRoute53AsyncClientRequest"></block><block type="co.whenthen.wave.channels.amazonaws.route53.ChangeBatch"></block><block type="co.whenthen.wave.channels.amazonaws.route53.ChangeInfo"></block><block type="co.whenthen.wave.channels.amazonaws.route53.ChangeResourceRecordSetsResult"></block><block type="co.whenthen.wave.channels.amazonaws.route53.CreateHealthCheckResult"></block><block type="co.whenthen.wave.channels.amazonaws.route53.CreateHostedZoneResult"></block><block type="co.whenthen.wave.channels.amazonaws.route53.DelegationSet"></block><block type="co.whenthen.wave.channels.amazonaws.route53.DeleteHealthCheckResult"></block><block type="co.whenthen.wave.channels.amazonaws.route53.DeleteHostedZoneResult"></block><block type="co.whenthen.wave.channels.amazonaws.route53.GetChangeResult"></block><block type="co.whenthen.wave.channels.amazonaws.route53.GetHealthCheckResult"></block><block type="co.whenthen.wave.channels.amazonaws.route53.GetHostedZoneResult"></block><block type="co.whenthen.wave.channels.amazonaws.route53.HealthCheck"></block><block type="co.whenthen.wave.channels.amazonaws.route53.HealthCheckConfig"></block><block type="co.whenthen.wave.channels.amazonaws.route53.HostedZone"></block><block type="co.whenthen.wave.channels.amazonaws.route53.HostedZoneConfig"></block><block type="co.whenthen.wave.channels.amazonaws.route53.ListHealthChecksResult"></block><block type="co.whenthen.wave.channels.amazonaws.route53.ListHostedZonesResult"></block><block type="co.whenthen.wave.channels.amazonaws.route53.ListResourceRecordSetsResult"></block></category></category><category name="Core"><block type="whenthen"></block></category><category name="Request"><block type="controls_api_definer"></block><block type="type_boolean"></block><block type="type_group"></block><block type="type_list"></block><block type="type_number"></block><block type="type_string"></block></category>';toolbox += '</xml>';Blockly.inject(document.body,{path: '../../', toolbox: toolbox});window.parent.blocklyLoaded(Blockly);}
*/