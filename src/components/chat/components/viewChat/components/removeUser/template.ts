import defaultAvatar from '@images/display-avatar.png';

export default `
<div class='remove-user'>
  <nav class='nav'>
    {{#Button className='button' clickHandler=showFeed}}
      <i class='icon caret-left'></i> 
      Назад
    {{/Button}}
    <span class='chat-name'>Удалить пользователя из группового чата</span>
    <span class='spacer'></span>
  </nav>
  {{#each groupChatUserList}}
    <div class='item' data-remove-id='{{id}}'>
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
</div>`;
