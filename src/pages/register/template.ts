export default `
  {{#Page title='Регистрация'}}
    {{#Form className='register'}}
      <div class='block'>
        <h1 class='header'>Регистрация</h1>
        {{{Fieldset ref='first_name' name='first_name' type='text' label='Имя' placeholder='Иван' validate='latinOrCyrillic, capitalCase, noSpaceOrNumbers, noSpecialChars'}}}
        {{{Fieldset ref='second_name' name='second_name' type='text' label='Фамилия' placeholder='Иванов' validate='latinOrCyrillic, capitalCase, noSpaceOrNumbers, noSpecialChars'}}}
        {{{Fieldset ref='email' name='email' type='text' label='Почта' placeholder='pochta@yandex.ru' validate = 'emailLike'}}}
        {{{Fieldset ref='phone' name='phone' type='text' label='Телефон' placeholder='+7 (909) 967 30 30' validate = 'phoneLike'}}}
        {{{Fieldset ref='login' name='login' type='text' label='Логин' placeholder='ivanivanov' validate='threeToTwenty, onlyLatin, notAllNubmers'}}}
        {{{Fieldset 
          ref='password' 
          name='password' 
          type='password' 
          label='Пароль' 
          placeholder='••••••••••••' 
          validate = 'eightToForty, capitalAndNumber'
        }}}
        {{{Fieldset 
          ref='passwordCheck' 
          name='passwordCheck' 
          type='password' 
          label='Повторите пароль' 
          placeholder='••••••••••••' 
          validate = 'eightToForty, capitalAndNumber'
        }}}
        {{{Submit text='Зарегистрироваться'}}}
        {{{NavLink text='Войти' route='LoginPage'}}}
      </div>
    {{/Form}}
  {{/Page}}
`;
