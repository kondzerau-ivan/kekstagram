import { getRandomNumber, getRandomArrayElement } from './helpers.js';

const Id = {
  MIN: 1,
  MAX: 25,
};

const Comments = {
  MIN: 1,
  MAX: 6,
};

const Likes = {
  MIN: 15,
  MAX: 200,
};

const Avatars = {
  MIN: 1,
  MAX: 6,
}

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const authors = [
  'Дима',
  'Тимофей',
  'Алексей',
  'Мария',
  'Кристина',
  'Вика',
  'Игорь',
  'Виктор',
  'Катя',
  'Денис',
]

const descriptions = [
  'Без фильтров',
  'Новая камера',
  'Зацените фотку!',
  'Хороший ракурс',
  'Просто так',
  'Из архива',
];

const getComments = () => {
  const comments = [];
  for (let i = 1; i <= getRandomNumber(Comments.MIN, Comments.MAX); i++) {
    comments.push({
      id: getRandomNumber(0, 666),
      avatar: `img/avatar-${getRandomNumber(Avatars.MIN, Avatars.MAX)}.svg`,
      message: getRandomArrayElement(messages),
      name: getRandomArrayElement(authors),
    });
  }
  return comments;
}

let photos = [];

const getPhotos = () => {
  for (let i = Id.MIN; i <= Id.MAX; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomArrayElement(descriptions),
      likes: getRandomNumber(Likes.MIN, Likes.MAX),
      comments: getComments(),
    });
  }
  return photos;
}

getPhotos();

export { photos };
