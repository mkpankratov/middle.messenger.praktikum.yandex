import displayAvatarUrl from '@images/display-avatar.png';

export default `
  {{#Page title='Профиль'}}
    <div class='profile'>
      <div class="back">
        {{#NavLink text=' ' className=' ' to='/messenger'}}
          <button class="icon arrow-right"></button>
        {{/NavLink}}
      </div>
      <div class='container'>
        <div>
          {{#if avatar}}
            <img class='display-avatar' src='{{#if avatar}}https://ya-praktikum.tech/api/v2/resources{{/if}}{{avatar}}'/>
          {{/if}}
          {{#unless avatar}}
            <img class='display-avatar' src='${displayAvatarUrl}'/>
          {{/unless}}
          
          {{#if display_name}}<h1 class='display-name'>{{display_name}}</h1>{{/if}}
          {{{ProfileReadonly label='Имя' text=first_name}}}
          {{{ProfileReadonly label='Фамилия' text=second_name}}}
          {{{ProfileReadonly label='Логин' text=login}}}
          {{{ProfileReadonly label='Почта' text=email}}}
          {{{ProfileReadonly label='Телефон' text=phone }}}
          {{{NavLink text='Редактировать профиль' className='link-button' to='/settings/edit'}}}
          {{{NavLink text='Изменить пароль' className='link-button' to='/settings/password'}}}
          {{{NavLink text='Сменить аватар' className='link-button' to='/settings/avatar'}}}
          {{{Button text='Выйти' className='link-button' danger=true clickHandler=clickHandler}}}
        </div>
      </div>
    </div>
  {{/Page}}
`;
