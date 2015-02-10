/**
 * Extensions to standard blockly to provide specific functionality
 *
 */
'use strict';

/* ============================================================================
 * Section for adding functionality to block.js
 * ============================================================================
 */




Blockly.Block.prototype.setObjectId = function(objectId) {
    this.objectId_ = objectId;
}

Blockly.Block.prototype.getObjectId = function() {
  return this.objectId_;
};

/* ============================================================================
 * Section for adding functionality to block_svg.js
 * ============================================================================
 */

// Override standard blockly makeColour function
// Our version tests whether it's an rgb colour already
// and if so, uses that
Blockly.makeColour = function(color) {
  if (typeof color == 'string' && color.indexOf('#') == 0) {
    return color;
  } else {
    return goog.color.hsvToHex(color, Blockly.HSV_SATURATION,
      Blockly.HSV_VALUE * 256);
  }
};


/**
 * Removes any fields which ar not in the given heirarchy
 * @param {string} name The name of the input.
 * @return {Object} The input object, or null of the input does not exist.
 */
Blockly.Block.prototype.removeFields = function(param) {
    //console.log('remove inputs:'+nameStartsWith)
    for (var x = 0, input; input = this.inputList[x]; x++) {
    for (var y = 2, field; field = input.fieldRow[y]; y++) {    // hacky 2 is to skip the image and basename
        console.log('FieldName:'+field.name+', param:'+param);
        // If a string that startWith (but not exact same string)
    if (typeof field.name == 'string' && param.indexOf(field.name) != 0) {
        input.removeField(field.name);
        y--; // hack the y so we cover all the items
    }
    }
  } 
};


// Our extended variable type
function WhenThenVariable(name, colour, propertyTypes, icon) {
    this.name = name;
    this.colour = colour;
    this.objectStructure = Object.keys(propertyTypes);
    // Lose the first element which is just a .
    this.objectStructure.shift();
    this.propertyTypes = propertyTypes;
    this.icon = icon;
}
// A couple of methods for compatibility with the methods called by blockly core (which is assuming a string type)
WhenThenVariable.prototype.toLowerCase = function() {
    if (this.name) 
        return this.name.toLowerCase();
    return 'unknown';
};
WhenThenVariable.prototype.replace = function(a, b) {
    if (this.name)
        return this.name.replace(a, b);
    return 'unknown';
};
// Method to serialize as XML
WhenThenVariable.prototype.toXml = function(container) {
    container.setAttribute('name', this.name);
    container.setAttribute('colour', this.colour);
    container.setAttribute('propertyTypes', JSON.stringify(this.propertyTypes));
    container.setAttribute('icon', this.icon);
    return container;
};
// Method to deserialize from XML
WhenThenVariable.prototype.fromXml = function(container) {
    var name = container.getAttribute('name');
    var colour = container.getAttribute('colour');
    var propertyTypesString = container.getAttribute('propertyTypes');
    var propertyTypes = JSON.parse(propertyTypesString);
    var icon = container.getAttribute('icon');
    var result = new WhenThenVariable(name, colour, propertyTypes, icon);
   
    return result;
};


/**
 * Override the creation of flyout for variables
 * Suppress sorting, and the 'default' variable
 * 
 * Construct the blocks required by the flyout for the variable category.
 * @param {!Array.<!Blockly.Block>} blocks List of blocks to show.
 * @param {!Array.<number>} gaps List of widths between blocks.
 * @param {number} margin Standard margin width for calculating gaps.
 * @param {!Blockly.Workspace} workspace The flyout's workspace.
 */
Blockly.Variables.flyoutCategory = function(blocks, gaps, margin, workspace) {
  var variableList = Blockly.Variables.allVariables();
// WTDELTA  variableList.sort(goog.string.caseInsensitiveCompare);
  // In addition to the user's variables, we also want to display the default
  // variable name at the top.  We also don't want this duplicated if the
  // user has created a variable of the same name.
// WTDELTA  variableList.unshift(null);
  var defaultVariable = undefined;
  for (var i = 0; i < variableList.length; i++) {
    if (variableList[i] === defaultVariable) {
      continue;
    }
    var getBlock = Blockly.Blocks['variables_get'] ?
        Blockly.Block.obtain(workspace, 'variables_get') : null;
    getBlock && getBlock.initSvg();
    var setBlock = Blockly.Blocks['variables_set'] ?
        Blockly.Block.obtain(workspace, 'variables_set') : null;
    setBlock && setBlock.initSvg();
    if (variableList[i] === null) {
// WTDELTA      defaultVariable = (getBlock || setBlock).getVars()[0];
    } else {
      getBlock && getBlock.setFieldValue(variableList[i], 'VAR');
      setBlock && setBlock.setFieldValue(variableList[i], 'VAR');
    }
    setBlock && blocks.push(setBlock);
    getBlock && blocks.push(getBlock);
    if (getBlock && setBlock) {
      gaps.push(margin, margin * 3);
    } else {
      gaps.push(margin * 2);
    }
  }
};

// Our own variable block

Blockly.Blocks['variables_get'] = {
  /**
   * Block for variable getter.
   * @this Blockly.Block
   */
  objValue: undefined,
  inputBlock: undefined,
  fieldValue: undefined,
  getFieldValue: function(name) {
      console.log('myGetFieldValue');
      if (name != 'VAR') {
          return '';
      }
      if (this.fieldValue) {
          return this.fieldValue;
      }
      if (this.objValue) {
          return this.objValue.name
      } else {
          console.log('not an obj value');
          return '';
      }
  },
  setFieldValue: function(newValue, name) {
      
      if (name != 'VAR') {
          console.log('setFieldValue('+newValue+","+name+')');
          return;
      }
      
      if (newValue.name) {
        this.objValue = newValue;
        this.refresh();
      } else {
          console.log('simple string value='+newValue);
          this.nothing.createstacktrace;
          var field = this.getField_(name);
          goog.asserts.assertObject(field, 'Field "%s" not found.', name);
          field.setValue(newValue); //simple string var
      }
  },
  init: function() {
    var name = 'unknown';
    console.log('init');
    console.log(this);
    
    this.inputBlock = this.appendDummyInput();
    this.inputBlock
            .appendField(new Blockly.FieldImage('https://zapier.cachefly.net/storage/services/2d6115168232f9a49767bc7049ba4246.64x64.png', 15, 15), 'ICON')
            .appendField(name,'VAR');
    
           //   .appendField(dropdown, "PROP.");
    
    if (this.objValue) {
        refresh();
    } else {
        this.setColour(330);
    }
    
    
    this.setOutput(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
      
    
  },
  // Store in XML all the additional properties for this block
  mutationToDom: function() {
    var container = document.createElement('mutation');
    if (this.objValue) {
        container = this.objValue.toXml(container);
    }
    return container;
  },
  /**
   * Parse XML to restore the additional properties
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.objValue = WhenThenVariable.prototype.fromXml(xmlElement);
    this.refresh();
  },
  // Refresh the block appearance based on an updated objValue
  refresh: function() {
      if (this.objValue) {
          // Set colour
          this.setColour(this.objValue.colour);
          // Set text on field
          var field = this.getField_('VAR');
          goog.asserts.assertObject(field, 'Field "%s" not found.', name);
          field.setValue(this.objValue.name); // object type var
          
          var iconField = this.getField_('ICON');
          goog.asserts.assertObject(iconField, 'Field "%s" not found.', name);
          iconField.setValue(this.objValue.icon); // object type var
          
          
          var PROPERTIES = this.toDropDownProperties('');
          if (PROPERTIES) {
            var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
              this.sourceBlock_.dropdownChanged("."+option);
            });

            this.inputBlock.appendField(dropdown, "PROP.");
        }
      }
  },
  toDropDownProperties: function(path) {
      
      var result = [];
      result.push(['', 'Object']);
      
      if (this.objValue && this.objValue.objectStructure) {  
        var pathWithDot = path + '.';
        var pathLen = path.length;
        var pathWithDotLen = pathWithDot.length;
        for (var i = 0; i < this.objValue.objectStructure.length; i++) {
            var item = this.objValue.objectStructure[i];
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
    }
      if (result.length == 1) {
          return undefined;
      }
      return result;
  }
  ,
  dropdownChanged: function(path) {
    // Need to clear any blocks to the right of the one that was changed
    var uptoLastDot = path.substring(0, path.lastIndexOf(".")+1);
    //console.log('up to last dot='+uptoLastDot);
    
    this.removeFields("PROP"+uptoLastDot);
    //console.log('################################################################');
    // Next set the correct output type for this block
    var type = null;
    if (this.objValue && this.objValue.propertyTypes) {
        type = this.objValue.propertyTypes[path][0];
        this.fieldValue = this.objValue.propertyTypes[path][1];
    }
    
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
            if (selectorType == 'String') {
                this.inputBlock.appendField('[', 'PROP'+ path);
                var textInput = new Blockly.FieldTextInput('key');
                this.inputBlock.appendField(textInput, 'PROP'+ path);
                this.inputBlock.appendField(']', 'PROP'+ path);
            } else {
                console.log('selectorType:'+selectorType);
            }
        }
     
        this.inputBlock.appendField(subdropdown, 'PROP'+ path);
          
    }
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
      if (this.objValue) return [ this.objValue ];
    return [this.getFieldValue('VAR')];
  }
  //,
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
//  renameVar: function(oldName, newName) {
//    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
//      this.setFieldValue(newName, 'VAR');
//    }
//  }
//  ,
//  /**
//   * Add menu option to create getter/setter block for this setter/getter.
//   * @param {!Array} options List of menu options to add to.
//   * @this Blockly.Block
//   */
//  customContextMenu: function(options) {
//    var option = {enabled: true};
//    var name = this.getFieldValue('VAR');
//    option.text = this.contextMenuMsg_.replace('%1', name);
//    var xmlField = goog.dom.createDom('field', null, name);
//    xmlField.setAttribute('name', 'VAR');
//    var xmlBlock = goog.dom.createDom('block', null, xmlField);
//    xmlBlock.setAttribute('type', this.contextMenuType_);
//    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
//    options.push(option);
//  }
};





// UI constants for rendering blocks.
/**
 * Horizontal space between elements.
 * @const
 */
Blockly.BlockSvg.SEP_SPACE_X = 15;  // was 10
/**
 * Vertical space between elements.
 * @const
 */
Blockly.BlockSvg.SEP_SPACE_Y = 15;  // was 10
/**
 * Vertical padding around inline elements.
 * @const
 */
Blockly.BlockSvg.INLINE_PADDING_Y = 8;  // was 5
/**
 * Minimum height of a block.
 * @const
 */
Blockly.BlockSvg.MIN_BLOCK_Y = 42;  // was 25
/**
 * Height of horizontal puzzle tab.
 * @const
 */
Blockly.BlockSvg.TAB_HEIGHT = 27;  // was 20
/**
 * Width of horizontal puzzle tab.
 * @const
 */
Blockly.BlockSvg.TAB_WIDTH = 14;  // was 8
/**
 * Width of vertical tab (inc left margin).
 * @const
 */
Blockly.BlockSvg.NOTCH_WIDTH = 30;
/**
 * Rounded corner radius.
 * @const
 */
Blockly.BlockSvg.CORNER_RADIUS = 8;
/**
 * Minimum height of field rows.
 * @const
 */
Blockly.BlockSvg.FIELD_HEIGHT = 24; // was 18
/**
 * Distance from shape edge to intersect with a curved corner at 45 degrees.
 * Applies to highlighting on around the inside of a curve.
 * @const
 */
Blockly.BlockSvg.DISTANCE_45_INSIDE = (1 - Math.SQRT1_2) *
      (Blockly.BlockSvg.CORNER_RADIUS - 1) + 1;
/**
 * Distance from shape edge to intersect with a curved corner at 45 degrees.
 * Applies to highlighting on around the outside of a curve.
 * @const
 */
Blockly.BlockSvg.DISTANCE_45_OUTSIDE = (1 - Math.SQRT1_2) *
      (Blockly.BlockSvg.CORNER_RADIUS + 1) - 1;
/**
 * SVG path for drawing next/previous notch from left to right.
 * @const
 */
Blockly.BlockSvg.NOTCH_PATH_LEFT = 'l 6,4 3,0 6,-4';    // notch being the thing on top
/**
 * SVG path for drawing next/previous notch from left to right with
 * highlighting.
 * @const
 */
Blockly.BlockSvg.NOTCH_PATH_LEFT_HIGHLIGHT = 'l 6.5,4 2,0 6.5,-4';
/**
 * SVG path for drawing next/previous notch from right to left.
 * @const
 */
Blockly.BlockSvg.NOTCH_PATH_RIGHT = 'l -6,4 -3,0 -6,-4';
/**
 * SVG path for drawing jagged teeth at the end of collapsed blocks.
 * @const
 */
Blockly.BlockSvg.JAGGED_TEETH = 'l 8,0 0,4 8,4 -16,8 8,4';
/**
 * Height of SVG path for jagged teeth at the end of collapsed blocks.
 * @const
 */
Blockly.BlockSvg.JAGGED_TEETH_HEIGHT = 20;
/**
 * Width of SVG path for jagged teeth at the end of collapsed blocks.
 * @const
 */
Blockly.BlockSvg.JAGGED_TEETH_WIDTH = 15;
/**
 * SVG path for drawing a horizontal puzzle tab from top to bottom.
 * @const
 */
Blockly.BlockSvg.TAB_PATH_DOWN = 'v 12 c 0,10 -' + Blockly.BlockSvg.TAB_WIDTH +   // Changed from 'v 5 c'
    ',-8 -' + Blockly.BlockSvg.TAB_WIDTH + ',7.5 s ' +
    Blockly.BlockSvg.TAB_WIDTH + ',-2.5 ' + Blockly.BlockSvg.TAB_WIDTH + ',7.5';
/**
 * SVG path for drawing a horizontal puzzle tab from top to bottom with
 * highlighting from the upper-right.
 * @const
 */
Blockly.BlockSvg.TAB_PATH_DOWN_HIGHLIGHT_RTL = 'v 6.5 m -' +
    (Blockly.BlockSvg.TAB_WIDTH * 0.98) + ',2.5 q -' +
    (Blockly.BlockSvg.TAB_WIDTH * .05) + ',10 ' +
    (Blockly.BlockSvg.TAB_WIDTH * .27) + ',10 m ' +
    (Blockly.BlockSvg.TAB_WIDTH * .71) + ',-2.5 v 1.5';

/**
 * SVG start point for drawing the top-left corner.
 * @const
 */
Blockly.BlockSvg.TOP_LEFT_CORNER_START =
    'm 0,' + Blockly.BlockSvg.CORNER_RADIUS;
/**
 * SVG start point for drawing the top-left corner's highlight in RTL.
 * @const
 */
Blockly.BlockSvg.TOP_LEFT_CORNER_START_HIGHLIGHT_RTL =
    'm ' + Blockly.BlockSvg.DISTANCE_45_INSIDE + ',' +
    Blockly.BlockSvg.DISTANCE_45_INSIDE;
/**
 * SVG start point for drawing the top-left corner's highlight in LTR.
 * @const
 */
Blockly.BlockSvg.TOP_LEFT_CORNER_START_HIGHLIGHT_LTR =
    'm 1,' + (Blockly.BlockSvg.CORNER_RADIUS - 1);
/**
 * SVG path for drawing the rounded top-left corner.
 * @const
 */
Blockly.BlockSvg.TOP_LEFT_CORNER =
    'A ' + Blockly.BlockSvg.CORNER_RADIUS + ',' +
    Blockly.BlockSvg.CORNER_RADIUS + ' 0 0,1 ' +
    Blockly.BlockSvg.CORNER_RADIUS + ',0';
/**
 * SVG path for drawing the highlight on the rounded top-left corner.
 * @const
 */
Blockly.BlockSvg.TOP_LEFT_CORNER_HIGHLIGHT =
    'A ' + (Blockly.BlockSvg.CORNER_RADIUS - 1) + ',' +
    (Blockly.BlockSvg.CORNER_RADIUS - 1) + ' 0 0,1 ' +
    Blockly.BlockSvg.CORNER_RADIUS + ',1';
/**
 * SVG path for drawing the top-left corner of a statement input.
 * Includes the top notch, a horizontal space, and the rounded inside corner.
 * @const
 */
Blockly.BlockSvg.INNER_TOP_LEFT_CORNER =
    Blockly.BlockSvg.NOTCH_PATH_RIGHT + ' h -' +
    (Blockly.BlockSvg.NOTCH_WIDTH - 15 - Blockly.BlockSvg.CORNER_RADIUS) +
    ' a ' + Blockly.BlockSvg.CORNER_RADIUS + ',' +
    Blockly.BlockSvg.CORNER_RADIUS + ' 0 0,0 -' +
    Blockly.BlockSvg.CORNER_RADIUS + ',' +
    Blockly.BlockSvg.CORNER_RADIUS;
/**
 * SVG path for drawing the bottom-left corner of a statement input.
 * Includes the rounded inside corner.
 * @const
 */
Blockly.BlockSvg.INNER_BOTTOM_LEFT_CORNER =
    'a ' + Blockly.BlockSvg.CORNER_RADIUS + ',' +
    Blockly.BlockSvg.CORNER_RADIUS + ' 0 0,0 ' +
    Blockly.BlockSvg.CORNER_RADIUS + ',' +
    Blockly.BlockSvg.CORNER_RADIUS;
/**
 * SVG path for drawing highlight on the top-left corner of a statement
 * input in RTL.
 * @const
 */
Blockly.BlockSvg.INNER_TOP_LEFT_CORNER_HIGHLIGHT_RTL =
    'a ' + (Blockly.BlockSvg.CORNER_RADIUS + 1) + ',' +
    (Blockly.BlockSvg.CORNER_RADIUS + 1) + ' 0 0,0 ' +
    (-Blockly.BlockSvg.DISTANCE_45_OUTSIDE - 1) + ',' +
    (Blockly.BlockSvg.CORNER_RADIUS -
    Blockly.BlockSvg.DISTANCE_45_OUTSIDE);
/**
 * SVG path for drawing highlight on the bottom-left corner of a statement
 * input in RTL.
 * @const
 */
Blockly.BlockSvg.INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_RTL =
    'a ' + (Blockly.BlockSvg.CORNER_RADIUS + 1) + ',' +
    (Blockly.BlockSvg.CORNER_RADIUS + 1) + ' 0 0,0 ' +
    (Blockly.BlockSvg.CORNER_RADIUS + 1) + ',' +
    (Blockly.BlockSvg.CORNER_RADIUS + 1);
/**
 * SVG path for drawing highlight on the bottom-left corner of a statement
 * input in LTR.
 * @const
 */
Blockly.BlockSvg.INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_LTR =
    'a ' + (Blockly.BlockSvg.CORNER_RADIUS + 1) + ',' +
    (Blockly.BlockSvg.CORNER_RADIUS + 1) + ' 0 0,0 ' +
    (Blockly.BlockSvg.CORNER_RADIUS -
    Blockly.BlockSvg.DISTANCE_45_OUTSIDE) + ',' +
    (Blockly.BlockSvg.DISTANCE_45_OUTSIDE + 1);
