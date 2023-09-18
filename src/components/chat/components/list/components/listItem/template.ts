export default `
  <div class='chatListItem {{activeClass}}'>
    <img class='avatar' src='{{#if data.avatar}}https://ya-praktikum.tech/api/v2/resources{{/if}}{{data.avatar}}' />
    <div class='content'>
      <div class='line'>
        <span class='chat-name'>{{data.title}}</span>
        <span class='time'>Пн</span>
      </div>
      <div class='line'>
        {{#if data.last_message}}

          <span class='excerpt'>
            {{#if isMyLastWord}}
              <span class='my-last-word'>Вы: </span>
            {{/if}}

            {{data.last_message.content}}
          </span>
          {{#if data.unread_count}}
            <span class='unread-count'>{{data.unread_count}}</span>
          {{/if}}
        {{/if}}
  
        {{#unless data.last_message}} 
          <span class='excerpt empty'>В чате пока нет сообщений</span>
        {{/unless}}
      </div>
    </div>
    <div class='highlight'></div>
  </div>
`;
