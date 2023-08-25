import avatarUrl from '@images/avatar.png';
import cameraUrl from '@images/camera.png';
import type { TInbox, TMessageList } from '@mocks/types';

export const inbox: TInbox[] = [
  {
    avatarUrl: avatarUrl,
    sender: 'Андрей',
    excerpt: 'Изображение',
    time: '10:49',
    unreadCount: 2,
  },
  {
    avatarUrl: avatarUrl,
    sender: 'Киноклуб',
    excerpt: '<em>Вы:</em> стикер',
    time: '12:00',
    unreadCount: null,
  },
  {
    avatarUrl: avatarUrl,
    sender: 'Илья',
    excerpt: 'Друзья, у меня для вас особенный выпуск новостей!...',
    time: '15:12',
    unreadCount: 4,
  },
  {
    avatarUrl: avatarUrl,
    sender: 'Вадим',
    excerpt: '<em>Вы:</em> Круто!',
    time: 'Пт',
    unreadCount: null,
  },
  {
    avatarUrl: avatarUrl,
    sender: 'тет-а-теты',
    excerpt: 'И Human Interface Guidelines и Material Design рекомендуют...',
    time: 'Ср',
    unreadCount: null,
  },
  {
    avatarUrl: avatarUrl,
    sender: 'Николай Давыдов',
    excerpt: 'Миллионы россиян ежедневно проводят десятки часов свое...',
    time: 'Пн',
    unreadCount: null,
  },
  {
    avatarUrl: avatarUrl,
    sender: 'Design Destroyer',
    excerpt: 'В 2008 году художник Jon Rafman  начал собирать...',
    time: 'Пн',
    unreadCount: null,
  },
  {
    avatarUrl: avatarUrl,
    sender: 'Day.',
    excerpt: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
    time: '1 Мая 2020',
    unreadCount: null,
  },
  {
    avatarUrl: avatarUrl,
    sender: 'Стас Рогозин',
    excerpt: 'Можно или сегодня или завтра вечером.',
    time: '12 Апр 2020',
    unreadCount: null,
  },
  {
    avatarUrl: avatarUrl,
    sender: 'Андрей',
    excerpt: 'Изображение',
    time: '10:49',
    unreadCount: 2,
  },
  {
    avatarUrl: avatarUrl,
    sender: 'Киноклуб',
    excerpt: '<em>Вы:</em> стикер',
    time: '12:00',
    unreadCount: null,
  },
  {
    avatarUrl: avatarUrl,
    sender: 'Илья',
    excerpt: 'Друзья, у меня для вас особенный выпуск новостей!...',
    time: '15:12',
    unreadCount: 4,
  },
  {
    avatarUrl: avatarUrl,
    sender: 'Вадим',
    excerpt: '<em>Вы:</em> Круто!',
    time: 'Пт',
    unreadCount: null,
  },
  {
    avatarUrl: avatarUrl,
    sender: 'тет-а-теты',
    excerpt: 'И Human Interface Guidelines и Material Design рекомендуют...',
    time: 'Ср',
    unreadCount: null,
  },
  {
    avatarUrl: avatarUrl,
    sender: 'Николай Давыдов',
    excerpt: 'Миллионы россиян ежедневно проводят десятки часов свое...',
    time: 'Пн',
    unreadCount: null,
  },
  {
    avatarUrl: avatarUrl,
    sender: 'Design Destroyer',
    excerpt: 'В 2008 году художник Jon Rafman  начал собирать...',
    time: 'Пн',
    unreadCount: null,
  },
  {
    avatarUrl: avatarUrl,
    sender: 'Day.',
    excerpt: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
    time: '1 Мая 2020',
    unreadCount: null,
  },
  {
    avatarUrl: avatarUrl,
    sender: 'Стас Рогозин',
    excerpt: 'Можно или сегодня или завтра вечером.',
    time: '12 Апр 2020',
    unreadCount: null,
  },
];

const message = `
Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
<br/> <br/>
Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
  `;

export const messageList: TMessageList[] = [
  {
    type: 'incoming',
    text: message,
    img: null,
    time: '11:56',
    read: null,
  },
  {
    type: 'incoming',
    text: '',
    img: cameraUrl,
    time: '11:56',
    read: null,
  },
  {
    type: 'outgoing',
    text: 'Круто!',
    img: null,
    time: '12:00',
    read: true,
  },
  {
    type: 'incoming',
    text: message,
    img: null,
    time: '11:56',
    read: null,
  },
  {
    type: 'incoming',
    text: '',
    img: cameraUrl,
    time: '11:56',
    read: null,
  },
  {
    type: 'outgoing',
    text: 'Круто!',
    img: null,
    time: '12:00',
    read: true,
  },
  {
    type: 'incoming',
    text: message,
    img: null,
    time: '11:56',
    read: null,
  },
  {
    type: 'incoming',
    text: '',
    img: cameraUrl,
    time: '11:56',
    read: null,
  },
  {
    type: 'outgoing',
    text: 'Круто!',
    img: null,
    time: '12:00',
    read: true,
  },
];
