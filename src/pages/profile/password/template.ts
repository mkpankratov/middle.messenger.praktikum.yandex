export default `
{{#Page title='Изменить пароль'}}
  <div class='profile'>
    <div class="back">
      {{#NavLink text=' ' className=' ' to='/messenger'}}
        <button class="icon arrow-right"></button>
      {{/NavLink}}
    </div>
    
    <div class='container'>
      <div>
        {{#Form className='edit-profile' submitHandler=handleEditPassword}}
          <div class='block'>
            <h1 class='header'>Изменить пароль</h1>

            {{{Fieldset name='oldPassword' type='password' label='Старый пароль' placeholder='••••••••••••' validate = 'eightToForty, capitalAndNumber'}}}
            
            {{{Fieldset name='newPassword' type='password' label='Новый пароль' placeholder='••••••••••••' validate = 'eightToForty, capitalAndNumber'}}}
            {{{Fieldset 
              name='passwordCheck' 
              type='password' 
              label='Повторите пароль' 
              placeholder='••••••••••••' 
              validate = 'eightToForty, capitalAndNumber'
            }}}
            <button type='submit' class='link'>Сохранить</button>
            {{{NavLink text='Отменить' className='link-button' danger=true to='/settings'}}}
            
          </div>
        {{/Form}}
      </div>
    </div>
  </div>
{{/Page}}
`;
