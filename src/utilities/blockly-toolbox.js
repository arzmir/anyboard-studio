let toolbox = '<xml>'
toolbox += '  <category name="Logic" colour="#5C81A6">'
toolbox += '    <block type="controls_if"></block>'
toolbox += '    <block type="logic_compare">'
toolbox += '      <field name="OP">EQ</field>'
toolbox += '    </block>'
toolbox += '    <block type="logic_operation">'
toolbox += '      <field name="OP">AND</field>'
toolbox += '    </block>'
toolbox += '    <block type="logic_negate"></block>'
toolbox += '    <block type="logic_boolean">'
toolbox += '      <field name="BOOL">TRUE</field>'
toolbox += '    </block>'
toolbox += '    <block type="logic_null"></block>'
toolbox += '    <block type="logic_ternary"></block>'
toolbox += '  </category>'
toolbox += '  <category name="Math" colour="#5C68A6">'
toolbox += '    <block type="math_number">'
toolbox += '      <field name="NUM">0</field>'
toolbox += '    </block>'
toolbox += '    <block type="math_single">'
toolbox += '      <field name="OP">ROOT</field>'
toolbox += '      <value name="NUM">'
toolbox += '        <shadow type="math_number">'
toolbox += '          <field name="NUM">9</field>'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '    <block type="math_number_property">'
toolbox += '      <mutation divisor_input="false"></mutation>'
toolbox += '      <field name="PROPERTY">EVEN</field>'
toolbox += '      <value name="NUMBER_TO_CHECK">'
toolbox += '        <shadow type="math_number">'
toolbox += '          <field name="NUM">0</field>'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '    <block type="math_arithmetic">'
toolbox += '      <field name="OP">ADD</field>'
toolbox += '      <value name="A">'
toolbox += '        <shadow type="math_number">'
toolbox += '          <field name="NUM">1</field>'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '      <value name="B">'
toolbox += '        <shadow type="math_number">'
toolbox += '          <field name="NUM">1</field>'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '    <block type="math_constrain">'
toolbox += '      <value name="VALUE">'
toolbox += '        <shadow type="math_number">'
toolbox += '          <field name="NUM">50</field>'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '      <value name="LOW">'
toolbox += '        <shadow type="math_number">'
toolbox += '          <field name="NUM">1</field>'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '      <value name="HIGH">'
toolbox += '        <shadow type="math_number">'
toolbox += '          <field name="NUM">100</field>'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '    <block type="math_random_int">'
toolbox += '      <value name="FROM">'
toolbox += '        <shadow type="math_number">'
toolbox += '          <field name="NUM">1</field>'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '      <value name="TO">'
toolbox += '        <shadow type="math_number">'
toolbox += '          <field name="NUM">100</field>'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '  </category>'
toolbox += '  <category name="Text" colour="#5CA68D">'
toolbox += '    <block type="text_charAt">'
toolbox += '      <mutation at="true"></mutation>'
toolbox += '      <field name="WHERE">FROM_START</field>'
toolbox += '      <value name="VALUE">'
toolbox += '        <block type="variables_get">'
toolbox += '          <field name="VAR">text</field>'
toolbox += '        </block>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '    <block type="text">'
toolbox += '      <field name="TEXT"></field>'
toolbox += '    </block>'
toolbox += '    <block type="text_length">'
toolbox += '      <value name="VALUE">'
toolbox += '        <shadow type="text">'
toolbox += '          <field name="TEXT">abc</field>'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '    <block type="text_isEmpty">'
toolbox += '      <value name="VALUE">'
toolbox += '        <shadow type="text">'
toolbox += '          <field name="TEXT"></field>'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '    <block type="text_prompt_ext">'
toolbox += '      <mutation type="TEXT"></mutation>'
toolbox += '      <field name="TYPE">TEXT</field>'
toolbox += '      <value name="TEXT">'
toolbox += '        <shadow type="text">'
toolbox += '          <field name="TEXT">abc</field>'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '  </category>'
toolbox += '  <category name="Variables" colour="#A65C81" custom="VARIABLE"></category>'
toolbox += '  <category name="Input" colour="#a5a55b">'
toolbox += '    <block type="move"></block>'
toolbox += '    <block type="tap"></block>'
toolbox += '    <block type="double_tap"></block>'
toolbox += '    <block type="test_init"></block>'
toolbox += '    <block type="tilt"></block>'
toolbox += '    <block type="turn"></block>'
toolbox += '    <block type="token_token_interaction"></block>'
toolbox += '  </category>'
toolbox += '  <category name="Output" colour="#6d5ba5">'
toolbox += '    <block type="vibrate">'
toolbox += '      <value name="TOKEN">'
toolbox += '        <shadow type="current_token">'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '    <block type="wait">'
toolbox += '      <value name="SECONDS">'
toolbox += '        <shadow type="math_number">'
toolbox += '          <field name="NUM">0</field>'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '    <block type="show_text">'
toolbox += '      <value name="TEXT">'
toolbox += '        <shadow type="text">'
toolbox += '          <field name="TEXT">abc</field>'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '    <block type="show_textfield"></block>'
toolbox += '    <block type="show_number">'
toolbox += '      <value name="NUMBER">'
toolbox += '        <shadow type="math_number">'
toolbox += '          <field name="NUM">0</field>'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '    <block type="show_numberfield"></block>'
toolbox += '  </category>'
toolbox += '  <category name="Display" colour="#5CA65C">'
toolbox += '    <block type="grid"></block>'
toolbox += '    <block type="random_grid"></block>'
toolbox += '    <block type="show_grid">'
toolbox += '      <value name="GRID">'
toolbox += '        <shadow type="grid">'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '      <value name="TOKEN">'
toolbox += '        <shadow type="current_token">'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '    <block type="get_grid">'
toolbox += '      <value name="TOKEN">'
toolbox += '        <shadow type="current_token">'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '  </category>'
toolbox += '  <category name="Sectors" colour="#a56d5b">'
toolbox += '    <block type="sector"></block>'
toolbox += '    <block type="random_sector"></block>'
toolbox += '    <block type="get_sector">'
toolbox += '      <value name="TOKEN">'
toolbox += '        <shadow type="current_token">'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '    <block type="sector_test">'
toolbox += '      <value name="TOKEN">'
toolbox += '        <shadow type="token">'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '      <value name="SECTOR">'
toolbox += '        <shadow type="sector">'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '    <block type="current_sector_test">'
toolbox += '      <value name="SECTOR">'
toolbox += '        <shadow type="sector">'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '  </category>'
toolbox += '  <category name="Tokens" colour="#9A5CA6">'
toolbox += '    <block type="token"></block>'
toolbox += '    <block type="current_token"></block>'
toolbox += '    <block type="other_token"></block>'
toolbox += '    <block type="random_token"></block>'
toolbox += '    <block type="token_test">'
toolbox += '      <value name="TOKEN">'
toolbox += '        <shadow type="token">'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '    <block type="set_id">'
toolbox += '      <value name="TEXT">'
toolbox += '        <shadow type="text">'
toolbox += '          <field name="TEXT">TokenName</field>'
toolbox += '        </shadow>'
toolbox += '      </value>'
toolbox += '    </block>'
toolbox += '  </category>'
toolbox += '</xml>'

export default toolbox
