export default `
  {{#Page title='Мессенджер' className='nav-page'}}
    <h1 class='header'>Список страниц</h1>
    <nav class='nav'>
      <ol class='list'>
        <li>{{{NavLink text='Авторизация' to='/'}}}</li>
        <li>{{{NavLink text='Регистрация' to='/sign-up'}}}</li>
        <li>{{{NavLink text='Страница 404' to='/404'}}}</li>
        <li>{{{NavLink text='Страница 5**' to='/5XX'}}}</li>
        <li>{{{NavLink text='Список чатов и лента переписки' to='/messenger'}}}</li>
        <li>{{{NavLink text='Настройки пользователя' to='/settings'}}}</li>
        <li>{{{NavLink text='Редактировать профиль' to='/settings/edit'}}}</li>
        <li>{{{NavLink text='Сменить аватар' to='/settings/avatar'}}}</li>
        <li>{{{NavLink text='Изменить пароль' to='/settings/password'}}}</li>
      </ol>
    </nav>
  {{/Page}}
`;
