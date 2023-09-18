export default `
  <div class='list'>
    <nav class='nav'>
      <div class='actions'>
        {{#Dropdown className='item' triggerText='Новый чат'}}
          <div class='dropdown-content'>
            {{{Button className='button' text='Тет-а-тет' clickHandler=showCreateSingle}}}
            {{{Button className='button' text='Групповой чат' clickHandler=showCreateMultiple}}}
          </div>
        {{/Dropdown}}
        {{{NavLink text='Профиль' className='item' to='/settings'}}}
      </div>
      <div class='search'>
        <input class='input' type='text' placeholder=' ' />
        <div class='placeholder'>
          <span class='icon magnifier'></span>
          <span class='text'>Поиск</span>
        </div>
      </div>
    </nav>
    <div class='inbox'>
      {{#each chatList}}
        {{{ListItem data=this selectedChat=../selectedChat myLogin=../myLogin}}}
      {{/each}}
    </div>
  </div>
`;
