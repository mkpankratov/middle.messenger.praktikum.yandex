Мессенджер — это личный проект для первой части обучения курса Middle Front End Яндекс Практикума. Написан на vanilla js со сборкой на Vite. Для раздачи статики есть Express или Netlify. Страницы генерируются на стороне клиента при помощи Handlebars. Приложение работает через [API Мессенджера](https://ya-praktikum.tech/api/v2/swagger/) Яндекс Практикума. Исползуютс протоколы HTTP и WebSoket. Для тестирования используются библиотеки Mocha, Chai, sinon и es-mock.


### Установка
```
//локальный дев сервер на Vite
npm run dev

//сборка статики на Vite
npm run build

//локальный сервер на Express
npm run start

//линтеры
npm run lint

//тесты
npm run test
```

### Линтеры
Команда `npm run lint` запускает настроенные линтеры ESLint, Stylelint и проверку типов Typescript. Вместо .editorconfig используется Prettier плагин для ESLint.

> [!WARNING]
> Перечень страниц приложения перехал на [страницу содержания](https://deploy--magnificent-bunny-1cd7ad.netlify.app/toc) 

### Ссылки
1. Авторизация [Фигма](https://www.figma.com/file/hlfNnkWI5MQKl2S68cW19f/msg?type=design&node-id=1%3A663&mode=design&t=Sydz6P14fpzl64dX-1) [Нетлифай](https://deploy--magnificent-bunny-1cd7ad.netlify.app/)
1. Регистрация [Фигма](https://www.figma.com/file/hlfNnkWI5MQKl2S68cW19f/msg?type=design&node-id=1%3A721&mode=design&t=Sydz6P14fpzl64dX-1) [Нетлифай](https://deploy--magnificent-bunny-1cd7ad.netlify.app/sign-up)
1. Страница 404 [Фигма](https://www.figma.com/file/hlfNnkWI5MQKl2S68cW19f/msg?type=design&node-id=1%3A675&mode=design&t=Sydz6P14fpzl64dX-1) [Нетлифай](https://deploy--magnificent-bunny-1cd7ad.netlify.app/404)
1. Страница 5** [Фигма](https://www.figma.com/file/hlfNnkWI5MQKl2S68cW19f/msg?type=design&node-id=1%3A679&mode=design&t=Sydz6P14fpzl64dX-1) [Нетлифай](https://deploy--magnificent-bunny-1cd7ad.netlify.app/5XX)
1. Список чатов и лента переписки [Фигма](https://www.figma.com/file/hlfNnkWI5MQKl2S68cW19f/msg?type=design&node-id=42%3A37&mode=design&t=Sydz6P14fpzl64dX-1) [Нетлифай](https://deploy--magnificent-bunny-1cd7ad.netlify.app/messenger)
1. Настройки пользователя [Фигма](https://www.figma.com/file/hlfNnkWI5MQKl2S68cW19f/msg?type=design&node-id=84%3A210&mode=design&t=Sydz6P14fpzl64dX-1) [Нетлифай](https://deploy--magnificent-bunny-1cd7ad.netlify.app/settings)
1. Редактировать профиль [Фигма](https://www.figma.com/file/hlfNnkWI5MQKl2S68cW19f/msg?type=design&node-id=107%3A2&mode=design&t=RrOOTGs8NS3TZpgd-1) [Нетлифай](https://deploy--magnificent-bunny-1cd7ad.netlify.app/settings/edit)
