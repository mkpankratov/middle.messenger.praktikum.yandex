export default `
<div class='create-chat-button-container'>
  {{#if hasData}}
    {{#Button className='button button-right' clickHandler=handleCreateChat}}
      Создать
      <i class='icon caret-right'></i> 
    {{/Button}}
  {{/if}}
</div>
`;
