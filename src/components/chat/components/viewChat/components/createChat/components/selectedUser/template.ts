export default `
<div class='selected-user-container{{#unless hasData}}hide{{/unless}}'>
  {{#if hasData}}
  {{#each multipleUserList}}
    <span class='selected-user'>{{login}}<i class='icon remove' data-remove-id='{{id}}'></i></span>
  {{/each}}
  {{/if}}
</div>
`;
