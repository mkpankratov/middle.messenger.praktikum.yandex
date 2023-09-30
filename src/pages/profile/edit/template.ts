export default `
{{#Page title='Редактировать профиль'}}
  <div class='profile'>
    <div class="back">
      {{#NavLink text=' ' className=' ' to='/messenger'}}
        <button class="icon arrow-right"></button>
      {{/NavLink}}
    </div>
    
    <div class='container'>
      <div>
        {{#Form className='edit-profile' submitHandler=handleEditProfile}}
          <div class='block'>
            <h1 class='header'>Редактировать профиль</h1>

            {{{Fieldset name='display_name' type='text' label='Имя в чате' value=display_name validate='latinOrCyrillic, notEmpty'}}}
            {{{Fieldset name='first_name' type='text' label='Имя' value=first_name validate='latinOrCyrillic, capitalCase, noSpaceOrNumbers, noSpecialChars'}}}
            {{{Fieldset name='second_name' type='text' label='Фамилия' value=second_name validate='latinOrCyrillic, capitalCase, noSpaceOrNumbers, noSpecialChars'}}}
            {{{Fieldset name='email' type='text' label='Почта' value=email validate = 'emailLike'}}}
            {{{Fieldset name='phone' type='text' label='Телефон' value=phone validate = 'phoneLike'}}}
            {{{Fieldset name='login' type='text' label='Логин' value=login validate='threeToTwenty, onlyLatin, notAllNubmers'}}}

            <button type='submit' class='link'>Сохранить</button>
            {{{NavLink text='Отменить' className='link-button' danger=true to='/settings'}}}
            
            </div>
        {{/Form}}
      </div>
    </div>
  </div>
{{/Page}}
`;
