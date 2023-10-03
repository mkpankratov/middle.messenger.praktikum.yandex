import defaultAvatar from '../../../../../../../../images/display-avatar.png';

export default `
<div class='suggest{{#unless hasData}} sempty{{/unless}}'>
  {{#each searchUserList}}
    <div class='item' data-user-id='{{id}}' data-user-name='{{display_name}}'>
    {{#if avatar}}
      <img class='avatar' src='https://ya-praktikum.tech/api/v2/resources{{avatar}}' />
    {{/if}}
    {{#unless avatar}}
      <img class='avatar' src='${defaultAvatar}'/>
    {{/unless}}
      <span class='display-name'>
        {{display_name}}
        {{#unless display_name}}Имя не указано{{/unless}}</span>
      <span class='login'>
        {{login}}
      </span>
    </div>
  {{/each}}
</div>
`;
