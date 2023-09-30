export default `
  <div class='message {{type}}{{#if img}} image{{/if}}'>
    {{#if img}}<img src='{{img}}'></img>{{/if}}
    <span class='text'>{{{data.content}}}</span>
    {{#if data.is_read}}<i class='icon read'></i>{{/if}}
    {{#unless data.is_read}}<i class='icon unread'></i>{{/unless}}
    <span class='send-time'>{{displayTime}}</span>
  </div>
`;
