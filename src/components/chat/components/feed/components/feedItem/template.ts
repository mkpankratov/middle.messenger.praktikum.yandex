export default `
  <div class='message {{type}}{{#if img}} image{{/if}}'>
    {{#if img}}<img src='{{img}}'></img>{{/if}}
    <span class='text'>{{{text}}}</span>
    {{#if read}}<i class='icon read'></i>{{/if}}
    <span class='send-time'>{{time}}</span>
  </div>
`;
