export default `
  <div class='list'>
    <nav class='nav'>
      <div class='actions'>
        <a class='item'>Новый чат</a>
        {{{NavLink text='Профиль' className='item' route='ProfilePage'}}}
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
      {{#each inbox}}
        {{{ListItem data=this}}}
      {{/each}}
    </div>
  </div>
`;
