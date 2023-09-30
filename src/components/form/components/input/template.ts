export default `
  <input class='input' 
    autocomplete='{{#unless autocomplete}}on{{/unless}}{{autocomplete}}' 
    type='{{type}}' 
    name='{{name}}' 
    id='{{name}}' 
    value='{{value}}' 
    placeholder={{placeholder}} />
`;
