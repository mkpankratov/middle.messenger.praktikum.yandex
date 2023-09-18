export default `
{{#Page title='Изменить аватар'}}
  <div class='profile'>
    <div class="back">
      {{#NavLink text=' ' className=' ' to='/messenger'}}
        <button class="icon arrow-right"></button>
      {{/NavLink}}
    </div>
    
    <div class='container'>
      <div>
        {{#Form className='edit-profile' submitHandler=handleEditAvatar}}
          <div class='block'>
            <h1 class='header'>Изменить аватар</h1>

            {{{Fieldset type='file' name='avatar' validate='notEmpty'}}}
            <button type='submit' class='link'>Сохранить</button>
            {{{NavLink text='Отменить' className='link-button' danger=true to='/settings'}}}
            
            </div>
        {{/Form}}
      </div>
    </div>
  </div>
{{/Page}}
`;
