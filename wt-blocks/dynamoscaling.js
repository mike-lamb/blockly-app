var whenThenColor = '#2AC4EA';
var dynamoDBColor = '#2D72B8';
var dynamoImageUrl = 'https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png';
var slackImageUrl = 'https://zapier.cachefly.net/storage/services/57b336375384ab62cc06e7e83d5c3622.64x64.png';


// ----------------------------------------\
// When Then block
// ----------------------------------------\

Blockly.Blocks['ds_whenthen'] = {
    init: function() {
        this.setColour(whenThenColor);

        this.appendValueInput('WHEN')
                .appendField('When');
        this.appendStatementInput('THEN')
                .appendField('Then');

        this.setPreviousStatement(true);
        this.setNextStatement(false);
        this.setTooltip('When something occurs, then take an action');
    }
};


Blockly.Drools['ds_whenthen'] = function(block) {
    // When Then condition.
    var argument = Blockly.Drools.valueToCode(block, 'WHEN',
            Blockly.Drools.ORDER_NONE) || 'false';
    console.log('arg:' + argument);
    var branch = Blockly.Drools.statementToCode(block, 'THEN');
    var code = '';
    code += 'when\n';
    code += argument;
    code += '\n';
    code += 'then\n';
    code += branch;
    return code + '\n';
};


// ----------------------------------------\
// Rule block
// ----------------------------------------\


Blockly.Blocks['ds_rule'] = {
    init: function() {
        this.setColour(whenThenColor);

        var textInput = new Blockly.FieldTextInput('Enter Rule Name');
        this.appendDummyInput()
                .appendField('Rule')
                .appendField(textInput, 'RULENAME');

        this.appendStatementInput('RULEIMPL');

        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip('The name of the rule');
    }
};

Blockly.Drools['ds_rule'] = function(block) {
    // Rule name.
    var ruleName = Blockly.Drools.quote_(block.getFieldValue('RULENAME'));
    var branch = Blockly.Drools.statementToCode(block, 'RULEIMPL');
    var code = '';
    code += 'rule ' + ruleName + "\n";
    code += branch;
    code += 'end';
    return code;
};


// ----------------------------------------\
// When 'Consumed Reads' block
// ----------------------------------------\

Blockly.Blocks['ds_consumed_reads'] = {
    init: function() {
        this.setColour(dynamoDBColor);

        var dropdown = new Blockly.FieldDropdown([['greater than', '>'], ['less than', '<']]);

        this.appendValueInput('CAPACITY')
                .appendField(new Blockly.FieldImage(dynamoImageUrl, 15, 15))
                .appendField('Consumed read capacity is ')
                .appendField(dropdown, 'CAPACITY_OPERATOR');
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip('Consumed capacity');
        this.setOutput(true);
    }
    ,
    getVars: function() {
        var outputs = [];
        var propertyTypes = {};
        propertyTypes['.'] = 'CapacityAlarm';
        
        propertyTypes['.Table Name'] = ['String', 'alarm.tableName' ];
        propertyTypes['.Global Secondary Index Name'] = ['String', 'alarm.globalSecondaryIndexName'];
        propertyTypes['.Start Time'] = ['Number', 'alarm.startTime'];
        propertyTypes['.Duration'] = ['Number', 'alarm.duration'];
        propertyTypes['.Read Throttle Events'] = ['java.lang.Double', 'alarm.readThrottleEvents'];
        propertyTypes['.Write Throttle Events'] = ['java.lang.Double', 'alarm.writeThrottleEvents'];
        propertyTypes['.Provisioned Read Capacity Units'] = ['java.lang.Double', 'alarm.provisionedReadCapacityUnits'];
        propertyTypes['.Provisioned Write Capacity Units'] = ['java.lang.Double', 'alarm.provisionedWriteCapacityUnits'];
        propertyTypes['.Consumed Read Capacity Units'] = ['java.lang.Double', 'alarm.consumedReadCapacityUnits'];
        propertyTypes['.Consumed Write Capacity Units'] = ['java.lang.Double', 'alarm.consumedWriteCapacityUnits'];
        var obj = new WhenThenVariable("CapacityAlarm", dynamoDBColor, propertyTypes, dynamoImageUrl);
        outputs.push(obj);
        return outputs;
    }
};

Blockly.Drools['ds_consumed_reads'] = function(block) {
    var operator = block.getFieldValue('CAPACITY_OPERATOR');
    var capacity = Blockly.Drools.valueToCode(block, 'CAPACITY', Blockly.Drools.ORDER_ATOMIC) || '0';
    var code = 'alarm: co.whenthen.snap.examples.fuse.events.CapacityAlarm(consumedReadCapacityUnits ' + operator + ' ' + capacity + ') over window:length(1)';
    return [code, Blockly.Drools.ORDER_ATOMIC];
};


// ----------------------------------------\
// When 'Consumed Writes' block
// ----------------------------------------\


Blockly.Blocks['ds_consumed_writes'] = {
    init: function() {
        this.setColour(dynamoDBColor);

        var dropdown = new Blockly.FieldDropdown([['greater than', '>'], ['less than', '<']]);

        this.appendValueInput('CAPACITY')
                .appendField(new Blockly.FieldImage(dynamoImageUrl, 15, 15))
                .appendField('Consumed write capacity is ')
                .appendField(dropdown, 'CAPACITY_OPERATOR');
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip('Consumed write capacity');
        this.setOutput(true);
    }
    ,
    getVars: function() {
        var outputs = [];
        return outputs;
    }

};

Blockly.Drools['ds_consumed_writes'] = function(block) {
    var operator = block.getFieldValue('CAPACITY_OPERATOR');
    var capacity = Blockly.Drools.valueToCode(block, 'CAPACITY', Blockly.Drools.ORDER_ATOMIC) || '0';
    console.log(capacity);
    var code = 'alarm: co.whenthen.snap.examples.fuse.events.CapacityAlarm(consumedWriteCapacityUnits ' + operator + ' ' + capacity + ') over window:length(1)';
    return [code, Blockly.Drools.ORDER_ATOMIC];
};

// ----------------------------------------\
// 'Provisioned Reads Level' block
// ----------------------------------------\

Blockly.Blocks['ds_provisioned_reads_level'] = {
    init: function() {
        this.setColour(dynamoDBColor);

        var textInput = new Blockly.FieldTextInput('70');

        this.appendDummyInput()
                .appendField(textInput, 'PERCENTAGE')
                .appendField('% of provisioned read capacity')
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip('Provisioned read capacity');
        this.setOutput(true);
    }
    ,
    getVars: function() {
        var outputs = [];
        return outputs;
    }

};

Blockly.Drools['ds_provisioned_reads_level'] = function(block) {
    // Rule name.
    var percentage = block.getFieldValue('PERCENTAGE');
    var code = '((alarm.provisionedReadCapacityUnits * ' + percentage + ') / 100)';
    return [code, Blockly.Drools.ORDER_ATOMIC];
};

// ----------------------------------------\
// 'Provisioned Writes Level' block
// ----------------------------------------\

Blockly.Blocks['ds_provisioned_writes_level'] = {
    init: function() {
        this.setColour(dynamoDBColor);

        var textInput = new Blockly.FieldTextInput('70');

        this.appendDummyInput()
                .appendField(textInput, 'PERCENTAGE')
                .appendField('% of provisioned write capacity')
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip('Provisioned write capacity');
        this.setOutput(true);
    }
    ,
    getVars: function() {
        var outputs = [];
        return outputs;
    }

};

Blockly.Drools['ds_provisioned_writes_level'] = function(block) {
    // Rule name.
    var percentage = block.getFieldValue('PERCENTAGE');
    var code = '((alarm.provisionedWriteCapacityUnits * ' + percentage + ') / 100)'
    return [code, Blockly.Drools.ORDER_ATOMIC];
};


// ----------------------------------------\
// 'Consumed Reads Level' block
// ----------------------------------------\

Blockly.Blocks['ds_consumed_reads_level'] = {
    init: function() {
        this.setColour(dynamoDBColor);

        var textInput = new Blockly.FieldTextInput('70');

        this.appendDummyInput()
                .appendField(textInput, 'PERCENTAGE')
                .appendField('% of consumed read capacity')
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip('Consumed read capacity');
        this.setOutput(true);
    }
    ,
    getVars: function() {
        var outputs = [];
        return outputs;
    }

};

Blockly.Drools['ds_consumed_reads_level'] = function(block) {
    var percentage = block.getFieldValue('PERCENTAGE');
    var code = '((alarm.consumedReadCapacityUnits * ' + percentage + ') / 100)';
    return [code, Blockly.Drools.ORDER_ATOMIC];
};

// ----------------------------------------\
// 'Consumed Writes Level' block
// ----------------------------------------\

Blockly.Blocks['ds_consumed_writes_level'] = {
    init: function() {
        this.setColour(dynamoDBColor);

        var textInput = new Blockly.FieldTextInput('70');

        this.appendDummyInput()
                .appendField(textInput, 'PERCENTAGE')
                .appendField('% of consumed write capacity')
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip('Consumed write capacity');
        this.setOutput(true);
    }
    ,
    getVars: function() {
        var outputs = [];
        return outputs;
    }

};

Blockly.Drools['ds_consumed_writes_level'] = function(block) {
    // Rule name.
    var percentage = block.getFieldValue('PERCENTAGE');
    var code = '((alarm.consumedWriteCapacityUnits * ' + percentage + ') / 100)';
    return [code, Blockly.Drools.ORDER_ATOMIC];
};

// ----------------------------------------\
// 'Set Provisioned Reads' block
// ----------------------------------------\

Blockly.Blocks['ds_set_provisioned_reads'] = {
    init: function() {
        this.setColour(dynamoDBColor);

        this.appendValueInput('CAPACITY')
                .appendField(new Blockly.FieldImage(dynamoImageUrl, 15, 15))
                .appendField('Set provisioned read capacity to ');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Set provisioned read capacity');
        this.setOutput(false);
    }
    ,
    getVars: function() {
        var outputs = [];
        return outputs;
    }

};

Blockly.Drools['ds_set_provisioned_reads'] = function(block) {
    // Rule name.
//  var ruleName = Blockly.Drools.quote_(block.getFieldValue('RULENAME'));
//  var branch = Blockly.Drools.statementToCode(block, 'RULEIMPL');
    var capacity = Blockly.Drools.valueToCode(block, 'CAPACITY', Blockly.Drools.ORDER_ATOMIC) || '0';
    console.log(capacity);
    var code = 'co.whenthen.wave.channels.amazonaws.dynamodb.UpdateTableInput input = new co.whenthen.wave.channels.amazonaws.dynamodb.UpdateTableInput();' + '\n';
    code += 'input.tableName = alarm.tableName;' + '\n';
    code += 'input.provisionedThroughput = new co.whenthen.wave.channels.amazonaws.dynamodb.ProvisionedThroughput();' + '\n';
    code += 'input.provisionedThroughput.writeCapacityUnits = alarm.provisionedWriteCapacityUnits;' + '\n';
    code += 'input.provisionedThroughput.readCapacityUnits = ' + capacity + ';' + '\n';
    code += 'channels["co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new co.whenthen.wave.channels.amazonaws.dynamodb.UpdateTable(input))';
    return code;
};


// ----------------------------------------\
// 'Set Provisioned Writes' block
// ----------------------------------------\

Blockly.Blocks['ds_set_provisioned_writes'] = {
    init: function() {
        this.setColour(dynamoDBColor);

        this.appendValueInput('CAPACITY')
                .appendField(new Blockly.FieldImage(dynamoImageUrl, 15, 15))
                .appendField('Set provisioned write capacity to ');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Set provisioned write capacity');
        this.setOutput(false);
    }
    ,
    getVars: function() {
        var outputs = [];
        return outputs;
    }

};

Blockly.Drools['ds_set_provisioned_writes'] = function(block) {
    var capacity = Blockly.Drools.valueToCode(block, 'CAPACITY', Blockly.Drools.ORDER_ATOMIC) || '0';
    console.log(capacity);
    var code = 'co.whenthen.wave.channels.amazonaws.dynamodb.UpdateTableInput input = new co.whenthen.wave.channels.amazonaws.dynamodb.UpdateTableInput();' + '\n';
    code += 'input.tableName = alarm.tableName;' + '\n';
    code += 'input.provisionedThroughput = new co.whenthen.wave.channels.amazonaws.dynamodb.ProvisionedThroughput();' + '\n';
    code += 'input.provisionedThroughput.readCapacityUnits = alarm.provisionedReadCapacityUnits;' + '\n';
    code += 'input.provisionedThroughput.writeCapacityUnits = ' + capacity + ';' + '\n';
    code += 'channels["co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new co.whenthen.wave.channels.amazonaws.dynamodb.UpdateTable(input))';

    return code;
};


// ----------------------------------------\
// 'Set Provisioned Reads and Writes' block
// ----------------------------------------\

Blockly.Blocks['ds_set_provisioned_reads_and_writes'] = {
    init: function() {
        this.setColour(dynamoDBColor);

        this.appendValueInput('READ_CAPACITY')
                .appendField(new Blockly.FieldImage(dynamoImageUrl, 15, 15))
                .appendField('Set provisioned read capacity to ');
        this.appendValueInput('WRITE_CAPACITY')
                .appendField('and set provisioned write capacity to ');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Set provisioned read and write capacity');
        this.setOutput(false);
    }
    ,
    getVars: function() {
        var outputs = [];
        return outputs;
    }

};

Blockly.Drools['ds_set_provisioned_reads_and_writes'] = function(block) {
    // Rule name.
//  var ruleName = Blockly.Drools.quote_(block.getFieldValue('RULENAME'));
//  var branch = Blockly.Drools.statementToCode(block, 'RULEIMPL');
    var readCapacity = Blockly.Drools.valueToCode(block, 'READ_CAPACITY', Blockly.Drools.ORDER_ATOMIC) || '0';
    console.log(readCapacity);
    var writeCapacity = Blockly.Drools.valueToCode(block, 'WRITE_CAPACITY', Blockly.Drools.ORDER_ATOMIC) || '0';
    console.log(writeCapacity);
    var code = 'Set provisioned read capacity to' + ' ' + readCapacity + ' and provisioned write capacity to ' + writeCapacity;
    var code = 'co.whenthen.wave.channels.amazonaws.dynamodb.UpdateTableInput input = new co.whenthen.wave.channels.amazonaws.dynamodb.UpdateTableInput();' + '\n';
    code += 'input.tableName = alarm.tableName;' + '\n';
    code += 'input.provisionedThroughput = new co.whenthen.wave.channels.amazonaws.dynamodb.ProvisionedThroughput();' + '\n';
    code += 'input.provisionedThroughput.writeCapacityUnits = ' + writeCapacity + ';' + '\n';
    code += 'input.provisionedThroughput.readCapacityUnits = ' + readCapacity + ';' + '\n';
    code += 'channels["co.whenthen.wave.channels:aws-dynamodbv2-kie"].send(new co.whenthen.wave.channels.amazonaws.dynamodb.UpdateTable(input))';
    return code;
};

// todo
//[when]Read throttled events {operator} {capacityValue}=alarm: co.whenthen.snap.examples.fuse.events.CapacityAlarm(readThrottledEvents {operator} {capacityValue}) over window:length(1)
//[when]Write throttled events {operator} {capacityValue}=alarm: co.whenthen.snap.examples.fuse.events.CapacityAlarm(writeThrottledEvents {operator} {capacityValue}) over window:length(1)


// ----------------------------------------\
// 'Slack message' block
// ----------------------------------------\

Blockly.Blocks['slack_message'] = {
    init: function() {
        this.setColour('#49C5A1');

        var dropdown = new Blockly.FieldDropdown([['#sysops', 'gP8jzCY4xzqRKYi6LoD4LFxr'], ['#integration-tests', 'xednCWREOUjc6efexbQB08Vk']]);

        this.appendDummyInput()
                .appendField(new Blockly.FieldImage(slackImageUrl, 15, 15))
                .appendField('Send to channel')
                .appendField(dropdown, 'SLACK_CHANNEL');

        this.appendValueInput('MESSAGE').appendField('Message').setAlign(Blockly.ALIGN_RIGHT);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
    }
    ,
    getVars: function() {
        var outputs = [];
        return outputs;
    }

};

Blockly.Drools['slack_message'] = function(block) {
    var slackChannel = block.getFieldValue('SLACK_CHANNEL');
    var message = Blockly.Drools.valueToCode(block, 'MESSAGE',
            Blockly.Drools.ORDER_NONE) || '\'\'';
    console.log(message);

    var code = '\n';
    code += 'co.whenthen.wave.channels.slack.IncomingMessage message = new co.whenthen.wave.channels.slack.IncomingMessage();' + '\n';
    code += 'message.text = ' + message + ';' + '\n';
    code += 'message.token = "' + slackChannel + '";' + '\n';
    code += 'channels["co.whenthen.wave.channels:slack-kie"].send(new co.whenthen.wave.channels.slack.IncomingWebhook(message));' + '\n';

    return code;
};


Blockly.Blocks['hipchat_message'] = {
    init: function() {
        this.setColour('#393939');

        var dropdown = new Blockly.FieldDropdown([['DevOps', 'DevOps'], ['Everyone', 'Everyone']]);

        this.appendDummyInput()
                .appendField(new Blockly.FieldImage('http://static.squarespace.com/static/5141f98de4b01238136e109c/5141fb8ce4b0253264ed19af/5141fb8fe4b0253264ed1a09/1363278742009/', 15, 15))
                .appendField('Send to room')
                .appendField(dropdown, 'HIPCHAT_ROOM');

        this.appendValueInput('MESSAGE').appendField('Message').setAlign(Blockly.ALIGN_RIGHT);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
    }
    ,
    getVars: function() {
        var outputs = [];
        return outputs;
    }

};


Blockly.Blocks['campfire_message'] = {
    init: function() {
        this.setColour('#FF7E0F');

        var dropdown = new Blockly.FieldDropdown([['Everyone', 'Everyone'], ['DevOps', 'DevOps']]);

        this.appendDummyInput()
                .appendField(new Blockly.FieldImage('https://campfirenow.com/images/logo_mark-only.png', 15, 15))
                .appendField('Send to room')
                .appendField(dropdown, 'CAMPFIRE_ROOM');

        this.appendValueInput('MESSAGE').appendField('Message').setAlign(Blockly.ALIGN_RIGHT);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
    }
    ,
    getVars: function() {
        var outputs = [];
        return outputs;
    }

};

Blockly.Blocks['campfire_sound_message'] = {
    init: function() {
        this.setColour('#FF7E0F');

        var dropdownSound = new Blockly.FieldDropdown([['tada', 'tada'], ['bueller', 'bueller'], ['greatjob', 'greatjob']]);
        var dropdownRoom = new Blockly.FieldDropdown([['Everyone', 'Everyone'], ['DevOps', 'DevOps']]);

        this.appendDummyInput()
                .appendField(new Blockly.FieldImage('https://campfirenow.com/images/logo_mark-only.png', 15, 15))
                .appendField('Play sound ')
                .appendField(dropdownSound, 'CAMPFIRE_SOUND')
                .appendField(' in room ')
                .appendField(dropdownRoom, 'CAMPFIRE_ROOM');

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
    }
    ,
    getVars: function() {
        var outputs = [];
        return outputs;
    }

};


Blockly.Blocks['sqwiggle_message'] = {
    init: function() {
        this.setColour('#727272');

        var dropdown = new Blockly.FieldDropdown([['Lobby', 'Lobby'], ['DevOps', 'DevOps']]);

        this.appendDummyInput()
                .appendField(new Blockly.FieldImage('http://www.whenthen.co/stackbot/images/sqwiggle.png', 15, 15))
                .appendField('Send to room')
                .appendField(dropdown, 'SQWIGGLE_ROOM');

        this.appendValueInput('MESSAGE').appendField('Message').setAlign(Blockly.ALIGN_RIGHT);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
    }
    ,
    getVars: function() {
        var outputs = [];
        return outputs;
    }

};


Blockly.Blocks['flowdock_message'] = {
    init: function() {
        this.setColour('#F16C34');

        var dropdown = new Blockly.FieldDropdown([['Lobby', 'Lobby'], ['DevOps', 'DevOps']]);

        this.appendDummyInput()
                .appendField(new Blockly.FieldImage('https://pohjoisviitta.files.wordpress.com/2012/04/flowdock_twitter_large.png', 15, 15))
                .appendField('Send to flow')
                .appendField(dropdown, 'FLOWDOCK_ROOM');

        this.appendValueInput('MESSAGE').appendField('Message').setAlign(Blockly.ALIGN_RIGHT);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
    }
    ,
    getVars: function() {
        var outputs = [];
        return outputs;
    }

};

Blockly.Blocks['hall_message'] = {
    init: function() {
        this.setColour('#48a6fd');

        var dropdown = new Blockly.FieldDropdown([['DevOps', 'DevOps']]);

        this.appendDummyInput()
                .appendField(new Blockly.FieldImage('http://a5.mzstatic.com/us/r30/Purple4/v4/e1/95/4e/e1954e46-15cb-97da-51a0-479e741e5545/AppIcon.175x175-75.png', 15, 15))
                .appendField('Send to room')
                .appendField(dropdown, 'HALL_ROOM');

        this.appendValueInput('MESSAGE').appendField('Message').setAlign(Blockly.ALIGN_RIGHT);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
    }
    ,
    getVars: function() {
        var outputs = [];
        return outputs;
    }

};

Blockly.Blocks['twilio_sms'] = {
    init: function() {
        this.setColour('#E3292E');

        this.appendDummyInput()
                .appendField(new Blockly.FieldImage('http://www.frontlinesms.com/wp-content/uploads/2013/09/logos_downloadable_round.png', 15, 15))
                .appendField('Send SMS');

        this.appendValueInput('TO_NUMBER').appendField('To').setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('MESSAGE').appendField('Message').setAlign(Blockly.ALIGN_RIGHT);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
    }
    ,
    getVars: function() {
        var outputs = [];
        return outputs;
    }

};

Blockly.Drools['twilio_sms'] = function(block) {

    var toNumber = Blockly.Drools.valueToCode(block, 'TO_NUMBER',
            Blockly.Drools.ORDER_NONE) || '\'\'';
    var message = Blockly.Drools.valueToCode(block, 'MESSAGE',
            Blockly.Drools.ORDER_NONE) || '\'\'';
    console.log(message);

    var code = '\n';
    code += 'co.whenthen.wave.channels.twilio.api.SendSmsRequest message = new co.whenthen.wave.channels.twilio.api.SendSmsRequest();' + '\n';
    code += 'message.to = ' + toNumber + ';' + '\n';
    code += 'message.from = "+442033224230";' + '\n';
    code += 'message.body = ' + message + ';' + '\n';
    code += 'channels["co.whenthen.wave.channels:twilio-kie"].send(new co.whenthen.wave.channels.twilio.api.SendSms(message));' + '\n';

    return code;
};


// Surpress procedure blocks
Blockly.Blocks['procedures_defnoreturn'] = undefined;
Blockly.Blocks['procedures_ifreturn'] = undefined;

// 
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = "Request";
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = 'myApiName';

// Supress set variable block
Blockly.Blocks['variables_set'] = undefined;








function initBlockly() {
    var toolbox = '<xml>';
    toolbox += '<category name="New Rule"><block type="ds_rule"><statement name="RULEIMPL"><block type="ds_whenthen"></block></statement></block></category>';
    toolbox += '<category name="DynamoDB Autoscaling"><block type="ds_consumed_reads"></block><block type="ds_consumed_writes"></block><block type="ds_provisioned_reads_level"></block><block type="ds_provisioned_writes_level"></block><block type="ds_consumed_reads_level"></block><block type="ds_consumed_writes_level"></block><block type="ds_set_provisioned_reads"></block><block type="ds_set_provisioned_writes"></block><block type="ds_set_provisioned_reads_and_writes"></block></category>';
    toolbox += '<category name="Group Chat &amp; Notifications"><category name="Slack"><block type="slack_message"><value name="MESSAGE"><block type="text"><field name="TEXT">Enter Message</field></block></value></block></category><category name="HipChat"><block type="hipchat_message"><value name="MESSAGE"><block type="text"><field name="TEXT">Enter Message</field></block></value></block></category><category name="Campfire"><block type="campfire_message"><value name="MESSAGE"><block type="text"><field name="TEXT">Enter Message</field></block></value></block><block type="campfire_sound_message"></block></category><category name="Sqwiggle"><block type="sqwiggle_message"><value name="MESSAGE"><block type="text"><field name="TEXT">Enter Message</field></block></value></block></category><category name="Flowdock"><block type="flowdock_message"><value name="MESSAGE"><block type="text"><field name="TEXT">Enter Message</field></block></value></block></category><category name="Hall"><block type="hall_message"><value name="MESSAGE"><block type="text"><field name="TEXT">Enter Message</field></block></value></block></category><category name="Twilio"><block type="twilio_sms"><value name="MESSAGE"><block type="text"><field name="TEXT">Enter Message</field></block></value><value name="TO_NUMBER"><block type="text"><field name="TEXT">+447...</field></block></value></block></category></category>';
    toolbox += '<category name="Text"><block type="text"></block><block type="text_join"></block></category>';
    toolbox += '<category name="Variables" custom="VARIABLE"></category>';
    toolbox += '</xml>';

    Blockly.inject(document.getElementById('blocklyDiv'), {path: 'blockly-read-only-trunk/', toolbox: toolbox, scrollbars: false, trashcan: false});
    window.blocklyLoaded(Blockly);
}
