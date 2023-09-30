export default `
<div class='feed'>
  <nav class='nav'>
    <img class='avatar' src='{{#if selectedChat.avatar}}https://ya-praktikum.tech/api/v2/resources{{/if}}{{selectedChat.avatar}}' />
    <span class='сhat-name'>{{selectedChat.title}}</span>
    {{#Dropdown className='icon actions'}}
      <div class='dropdown-content'>
        {{#unless isSelectedChatGroup}}
          {{{Button className='button' danger=true text='Удалить чат' clickHandler=deleteSelectedChat}}}
        {{/unless}}
        {{#if isSelectedChatGroup}}
          {{{Button className='button' danger=true text='Добавить пользователя' clickHandler=showAddUser}}}
          {{{Button className='button' danger=true text='Удалить пользователя' clickHandler=showRemoveUser}}}
          {{{Button className='button' danger=true text='Удалить чат' clickHandler=deleteSelectedChat}}}
        {{/if}}
      </div>
    {{/Dropdown}}
  </nav>

  {{#if messageList}}
    <div class='history'>
      {{#each messageList}}
        {{{FeedItem data=this myId = ../userId}}}
      {{/each}}
    </div>
  {{/if}}

  {{#unless messageList}}
    <div class='empty-chat'>
      <span class='empty-chat-text'>В чате пока нет сообщений</span>
    </div>
  {{/unless}}

  <div class='compose'>
    <button class='icon attach'></button>
    {{#Form className='send-message' submitHandler=handleSendMessage}}
      {{{Fieldset name='message' type='text' placeholder='Сообщение' className='fieldset' validate='notEmpty' autocomplete='off'}}}
      <button type='submit' class='icon arrow-right'></button>
    {{/Form}}
  </div>
</div>`;
