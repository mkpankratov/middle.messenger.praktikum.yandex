import displayAvatarUrl from '@images/display-avatar.png';

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
          <img class='display-avatar' src='${displayAvatarUrl}'/>
          <h1 class='display-name'>Иван</h1>
          {{{ProfileReadonly label='Имя в чате' text='Мистер Фантастик'}}}
          {{{ProfileReadonly label='Имя' text='Константин'}}}
          {{{ProfileReadonly label='Фамилия' text='Богословский'}}}
          {{{ProfileReadonly label='Логин' text='ivanivanov'}}}
          {{{ProfileReadonly label='Почта' text='pochta@yandex.ru'}}}
          {{{ProfileReadonly label='Телефон' text='+7 (909) 967 30 30'}}}
          {{{NavLink text='Редактировать профиль' className='link-button' route='EditProfilePage'}}}
          {{{NavLink text='Выйти' className='link-button' danger=true}}}
        </div>
      </div>
    </div>
  {{/Page}}
`;
