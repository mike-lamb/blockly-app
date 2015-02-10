




Blockly.Blocks['nested'] = {
  inputBlock: undefined,
  objectStructure: undefined,
  propertyTypes: {},
  
  initObjectStructure: function() {
      
                                                
      this.objectStructure = ['.TableName', 
                               '.TableSizeBytes', 
                               '.TableStatus', 
                               '.ProvisionedThroughput',
                                  '.ProvisionedThroughput.LastDecreaseDateTime[String]',
                                  '.ProvisionedThroughput.LastDecreaseDateTime[String].one',
                                  '.ProvisionedThroughput.LastDecreaseDateTime[String].two',
                                  '.ProvisionedThroughput.LastIncreaseDateTime',
                                  '.ProvisionedThroughput.NumberOfDecreasesToday',
                                  '.ProvisionedThroughput.ReadCapacityUnits',
                                     '.ProvisionedThroughput.ReadCapacityUnits.blah',
                                  '.ProvisionedThroughput.WriteCapacityUnits'];
                                                
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

  toDropDownProperties: function(path) {
      
      var result = [];
      result.push(['', 'Object']);
      
      pathWithDot = path + '.';
      var pathLen = path.length;
      var pathWithDotLen = pathWithDot.length;
      for (var i = 0; i < this.objectStructure.length; i++) {
          var item = this.objectStructure[i];
          // If it starts with path, but doesn't have a dot after the pathLen
          var dotPos = item.indexOf('.', pathWithDotLen);
          if (item.indexOf(pathWithDot) == 0 && dotPos == -1) {
              var disp = item.substring(pathLen);
              console.log(disp);
              var selector = disp.indexOf('[');
              if (selector != -1) {
                  disp = disp.substring(0, selector);
              }
              result.push([disp, item.substring(pathLen+1)]);
          }
      }
      if (result.length == 1) {
          return undefined;
      }
      return result;
  }
  ,
  
  init: function() {
  this.initObjectStructure();
  this.setColour('#2D72B8');
  this.setObjectId('co.whenthen.wave.channels.amazonaws.dynamodbv2.DescribeTableRequest');
  
     var PROPERTIES = this.toDropDownProperties('');
     
     console.log(PROPERTIES);
     
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
    var subProperties = this.toDropDownProperties(path);
    if (subProperties) {
        var subdropdown = new Blockly.FieldDropdown(subProperties, function(option) {
            var newPath = path + "." + option;
            this.sourceBlock_.dropdownChanged(newPath);
        });
     
        // A selector (key or index)
        var selector = path.indexOf('[');
        if (selector != -1 && path.lastIndexOf(']') == path.length -1) {
            var selectorType = path.substring(selector + 1, path.length - 1);
            console.log('selectorType:'+selectorType);
            if (selectorType == 'String') {
                this.inputBlock.appendField('[', 'PROP'+ path);
                var textInput = new Blockly.FieldTextInput('key');
                this.inputBlock.appendField(textInput, 'PROP'+ path);
                this.inputBlock.appendField(']', 'PROP'+ path);
            }
        }
        
        this.inputBlock.appendField(subdropdown, 'PROP'+ path);
        
    }
  }
    
    

};

