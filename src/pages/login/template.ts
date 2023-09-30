export default `
{{#Page title='Авторизация'}}
  {{#Form className='login' type='login' submitHandler=handleLogin}}
    <div class='block'>
      <h1 class='header'>Вход</h1>

      {{{Fieldset
        name='login'
        type='text'
        label='Логин'
        placeholder='ivanivanov'
        validate='threeToTwenty, onlyLatin, notAllNubmers'
      }}}

      {{{Fieldset
        name='password'
        type='password'
        label='Пароль'
        placeholder='••••••••••••'
        validate = 'eightToForty, capitalAndNumber'
      }}}

      {{{Submit text='Войти'}}}
      {{{NavLink text='Нет аккаунта?' to='/sign-up'}}}
    </div>
  {{/Form}}
{{/Page}}
`;
