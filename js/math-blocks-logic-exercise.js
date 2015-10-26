/* Propositional variables with negation */
Blockly.Blocks['logic_p_notp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField( new Blockly.FieldDropdown([["P", "P"], ["~P", "NOTP"]]), "VAR");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(booleanHue);
    this.setTooltip('Propositional variable P');
    this.setHelpUrl();
  }
};

Blockly.Blocks['logic_q_notq'] = {
  init: function() {
    this.appendDummyInput()
        .appendField( new Blockly.FieldDropdown([["Q", "Q"], ["~Q", "NOTQ"]]), "VAR");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(booleanHue);
    this.setTooltip('Propositional variable Q');
    this.setHelpUrl();
  }
};

Blockly.Blocks['logic_r_notr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField( new Blockly.FieldDropdown([["R", "R"], ["~R", "NOTR"]]), "VAR");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(booleanHue);
    this.setTooltip('Propositional variable R');
    this.setHelpUrl();
  }
};

/* Implication */
Blockly.Blocks['logic_implies'] = {
  init: function() {
    this.appendValueInput("LEFTINPUT")
        .setCheck("Boolean");
    this.appendValueInput("RIGHTINPUT")
        .setCheck("Boolean")
        .appendField( "⇒" );
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(booleanHue);
    this.setTooltip('Logical implication');
    this.setHelpUrl();
  }
};

/* Square of number */
Blockly.Blocks['number_square'] = {
  init: function() {
    this.appendValueInput("NUM")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField( "²" );
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(numberHue);
    this.setTooltip('Square');
    this.setHelpUrl();
  }

};