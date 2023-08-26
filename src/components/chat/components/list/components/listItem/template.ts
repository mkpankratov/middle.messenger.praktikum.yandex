export default `
  <div class='item'>
    <img class='avatar' src='{{data.avatarUrl}}' />
    <div class='content'>
      <div class='line'>
        <span class='chat-name'>{{data.sender}}</span>
        <span class='time'>{{data.time}}</span>
      </div>
      <div class='line'>
        <span class='excerpt'>{{{data.excerpt}}}</span>
        {{#if data.unreadCount}}
          <span class='unread-count'>{{data.unreadCount}}</span>
        {{/if}}
      </div>
    </div>
    <div class='hover'></div>
  </div>
`;
