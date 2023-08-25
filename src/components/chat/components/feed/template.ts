export default `
<div class='feed'>
  <nav class='nav'>
    <img class='avatar' src='{{chatAvatarSrc}}' />
    <span class='сhat-name'>{{chatName}}</span>
    <button class='icon actions' />
  </nav>
  <div class='history'>
    {{#each messageList}}
      {{{FeedItem type=type text=text time=time img=img read=read}}}
    {{/each}}
  </div>
  <div class='compose'>
    <button class='icon attach'></button>
    {{#Form className='send-message'}}
      {{{Fieldset name='message' type='text' placeholder='Сообщение' className='fieldset' validate='notEmpty'}}}

      <button type='submit' class='icon arrow-right'></button>
    {{/Form}}
  </div>
</div>`;
