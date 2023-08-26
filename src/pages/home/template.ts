export default `
  {{#Page title='Мессенджер' className='nav-page'}}
    <h1 class='header'>Список страниц</h1>
    <nav class='nav'>
      <ol class='list'>
        <li>{{{NavLink text='Авторизация' route='LoginPage'}}}</li>
        <li>{{{NavLink text='Регистрация' route='RegisterPage'}}}</li>
        <li>{{{NavLink text='Страница 404' route='Page404'}}}</li>
        <li>{{{NavLink text='Страница 5**' route='Page5XX'}}}</li>
        <li>{{{NavLink text='Список чатов и лента переписки' route='ChatPage'}}}</li>
        <li>{{{NavLink text='Настройки пользователя' route='ProfilePage'}}}</li>
        <li>{{{NavLink text='Редактировать профиль' route='EditProfilePage'}}}</li>
      </ol>
    </nav>
  {{/Page}}
`;
