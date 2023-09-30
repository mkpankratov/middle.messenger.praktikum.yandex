export default `
  <div class='{{#unless className}}fieldset{{/unless}} {{className}} {{#if error}}error{{/if}}'>
    <label class='label' for='{{name}}'>{{label}}</label>
    {{{Input autocomplete=autocomplete ref='input' type=type placeholder=placeholder name=name id=name value=value validate=validate}}}

    {{{ErrorMessage ref='errorMessage' error=error}}}
  </div>
`;
