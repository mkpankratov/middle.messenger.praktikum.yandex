Мессенджер — это личный проект для первой части обучения курса Middle Front End Яндекс Практикума. Написан на vanilla js со сборкой на Vite. Для раздачи статики есть Express или Netlify. Страницы генерируются на стороне клиента при помощи Handlebars.


### Установка
```
//локальный дев сервер на Vite
npm run dev

//сборка статики на Vite
npm run build

//локальный сервер на Express
npm run start

//Линтеры
npm run lint
```

### Линтеры
Команда `npm run lint` запускает настроенные линтеры ESLint, Stylelint и проверку типов Typescript. Вместо .editorconfig используется Prettier плагин для ESLint.

> [!WARNING]
> До конца 3 спринта ссылки на нетлифай не будут работать. Прошу пользоваться [ссылкой на главную](https://deploy--magnificent-bunny-1cd7ad.netlify.app) со списком всех страниц. Во втором спринте приложение перешло на формат SPA, при этом обработка URL в реализации пока не предусмотрена. Ссылки на фигму рабоатют. 

### Ссылки
1. Авторизация [Фигма](https://www.figma.com/file/hlfNnkWI5MQKl2S68cW19f/msg?type=design&node-id=1%3A663&mode=design&t=Sydz6P14fpzl64dX-1) [Нетлифай](https://deploy--magnificent-bunny-1cd7ad.netlify.app/src/pages/login/)
1. Регистрация [Фигма](https://www.figma.com/file/hlfNnkWI5MQKl2S68cW19f/msg?type=design&node-id=1%3A721&mode=design&t=Sydz6P14fpzl64dX-1) [Нетлифай](https://deploy--magnificent-bunny-1cd7ad.netlify.app/src/pages/register/)
1. Страница 404 [Фигма](https://www.figma.com/file/hlfNnkWI5MQKl2S68cW19f/msg?type=design&node-id=1%3A675&mode=design&t=Sydz6P14fpzl64dX-1) [Нетлифай](https://deploy--magnificent-bunny-1cd7ad.netlify.app/src/pages/404/)
1. Страница 5** [Фигма](https://www.figma.com/file/hlfNnkWI5MQKl2S68cW19f/msg?type=design&node-id=1%3A679&mode=design&t=Sydz6P14fpzl64dX-1) [Нетлифай](https://deploy--magnificent-bunny-1cd7ad.netlify.app/src/pages/5xx/)
1. Список чатов и лента переписки [Фигма](https://www.figma.com/file/hlfNnkWI5MQKl2S68cW19f/msg?type=design&node-id=42%3A37&mode=design&t=Sydz6P14fpzl64dX-1) [Нетлифай](https://deploy--magnificent-bunny-1cd7ad.netlify.app/src/pages/chat/)
1. Настройки пользователя [Фигма](https://www.figma.com/file/hlfNnkWI5MQKl2S68cW19f/msg?type=design&node-id=84%3A210&mode=design&t=Sydz6P14fpzl64dX-1) [Нетлифай](https://deploy--magnificent-bunny-1cd7ad.netlify.app/src/pages/profile/)
1. Редактировать профиль [Фигма](https://www.figma.com/file/hlfNnkWI5MQKl2S68cW19f/msg?type=design&node-id=107%3A2&mode=design&t=RrOOTGs8NS3TZpgd-1) [Нетлифай](https://deploy--magnificent-bunny-1cd7ad.netlify.app/src/pages/profile/edit/)
