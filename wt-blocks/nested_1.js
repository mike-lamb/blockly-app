




Blockly.Blocks['nested'] = {
  inputBlock: undefined,
  
  objectStructure: {},
  propertyTypes: {},
  
  initObjectStructure: function() {
      this.objectStructure['.'] = [['', 'Object'],        // String
                              ['.TableName', 'TableName'],        // String
                              ['.TableSizeBytes', 'TableSizeBytes'], // Number
                              ['.TableStatus', 'TableStatus'], // String
                              ['.ProvisionedThroughput', 'ProvisionedThroughput']];
                            
      this.objectStructure['.ProvisionedThroughput'] =  [['', 'Object'],        // Object
                                                    ['.LastDecreaseDateTime', 'LastDecreaseDateTime'],        // Number
                                                    ['.LastIncreaseDateTime', 'LastIncreaseDateTime'], // Number
                                                    ['.NumberOfDecreasesToday', 'NumberOfDecreasesToday'], // Number
                                                    ['.ReadCapacityUnits', 'ReadCapacityUnits'], //Number
                                                    ['.WriteCapacityUnits', 'WriteCapacityUnits']];  // Number
                                                
      this.objectStructure['.ProvisionedThroughput.ReadCapacityUnits'] =  [['', 'Object'],        // Object
                                                    ['.blah', 'blah']];  // String
                                                
      this.propertyTypes['.'] = 'Object';
      this.propertyTypes['.TableName'] = 'String';
      this.propertyTypes['.TableSizeBytes'] = 'Number';
      this.propertyTypes['.TableStatus'] = 'String';
      this.propertyTypes['.ProvisionedThroughput'] = 'Object';
      this.propertyTypes['.ProvisionedThroughput.LastDecreaseDateTime'] = 'Number';
      this.propertyTypes['.ProvisionedThroughput.LastIncreaseDateTime'] = 'Number';
      this.propertyTypes['.ProvisionedThroughput.NumberOfDecreasesToday'] = 'Number';
      this.propertyTypes['.ProvisionedThroughput.ReadCapacityUnits'] = 'Number';
      this.propertyTypes['.ProvisionedThroughput.WriteCapacityUnits'] = 'Number';
      this.propertyTypes['.ProvisionedThroughput.ReadCapacityUnits.blah'] = 'String';
  },

  
  init: function() {
  this.initObjectStructure();
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.DescribeTableRequest');
  
     var PROPERTIES = this.objectStructure['.'];
     
     var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
//        var divisorInput = (option == 'DIVISIBLE_BY');
        this.sourceBlock_.dropdownChanged("."+option);
            console.log('changed to '+option);
      });
     
     this.inputBlock = this.appendDummyInput();
     this.inputBlock
      .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15)) 
      .appendField('DescribeTableResult')
      .appendField(dropdown, "PROP.");
         
    this.setTooltip(function() {
        console.log('tooltip function');
        // todo - get the current dropdown status and get the correct tooltip
    });
    this.setOutput(true);
   
  this.setPreviousStatement(false);
  this.setNextStatement(false);
},
dropdownChanged: function(path) {
    // Need to clear any blocks to the right of the one that was changed
    var uptoLastDot = path.substring(0, path.lastIndexOf(".")+1);
    //console.log('up to last dot='+uptoLastDot);
    
    this.removeFields("PROP"+uptoLastDot);
    //console.log('################################################################');
    // Next set the correct output type for this block
    var type = this.propertyTypes[path];
    
    // Check whether type has changed, and whether we can stay connected to the block we're connected to
    if (this.outputConnection) {
        if (type === undefined) {
            type = null;
        }
        // Set the type on the existing output connection
        this.outputConnection.setCheck(type);
    } else {
        this.setOutput(true, type);
    } 
    var subProperties = this.objectStructure[path];
    if (subProperties) {
        var subdropdown = new Blockly.FieldDropdown(subProperties, function(option) {
            var newPath = path + "." + option;
            this.sourceBlock_.dropdownChanged(newPath);
        });
     
        this.inputBlock.appendField(subdropdown, 'PROP'+ path);
          
    }
  }
    
    

};

