export default `
<div class='create-chat'>
  <nav class='nav'>
    {{#Button className='button' clickHandler=showFeed}}
      <i class='icon caret-left'></i> 
      Назад
    {{/Button}}
    <span class='chat-name'>{{header}}</span>
    {{{CreateGroupChatButton}}}
  </nav>

  <div class='create-wrapper'>
    <div class='fieldset'>
      {{{SelectedUser}}}
      <input class='input' placeholder='Введите логин для поиска пользователя' name='login' type='text'/>
    </div>
    {{{SuggestSingleUser}}}
  </div>
</div>`;
