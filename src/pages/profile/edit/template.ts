export default `
{{#Page title='Профиль'}}
  <div class='profile'>
    <div class="back">
      {{#NavLink text=' ' className=' ' route='ChatPage'}}
        <button class="icon arrow-right"></button>
      {{/NavLink}}
    </div>
    
    <div class='container'>
      <div>
        {{#Form className='edit-profile'}}
          <div class='block'>
            <h1 class='header'>Редактировать профиль</h1>

            {{{Fieldset name='first_name' type='text' label='Имя' placeholder='Иван' validate='latinOrCyrillic, capitalCase, noSpaceOrNumbers, noSpecialChars'}}}
            {{{Fieldset name='second_name' type='text' label='Фамилия' placeholder='Иванов' validate='latinOrCyrillic, capitalCase, noSpaceOrNumbers, noSpecialChars'}}}
            {{{Fieldset name='email' type='text' label='Почта' placeholder='pochta@yandex.ru' validate = 'emailLike'}}}
            {{{Fieldset name='phone' type='text' label='Телефон' placeholder='+7 (909) 967 30 30' validate = 'phoneLike'}}}
            {{{Fieldset name='login' type='text' label='Логин' placeholder='ivanivanov' validate='threeToTwenty, onlyLatin, notAllNubmers'}}}
            {{{Fieldset name='password' type='password' label='Пароль' placeholder='••••••••••••' validate = 'eightToForty, capitalAndNumber'}}}
            {{{Fieldset 
              name='passwordCheck' 
              type='password' 
              label='Повторите пароль' 
              placeholder='••••••••••••' 
              validate = 'eightToForty, capitalAndNumber'
            }}}
            <button type='submit' class='link'>Сохранить</button>
            {{{NavLink text='Отменить' className='link-button' danger=true route='ProfilePage'}}}
            
            </div>
        {{/Form}}
      </div>
    </div>
  </div>
{{/Page}}
`;
