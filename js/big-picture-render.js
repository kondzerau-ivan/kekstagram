import { isEscEvent } from './util.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const sociaCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureImg = bigPicture.querySelector('.big-picture__img > img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialCaption = bigPicture.querySelector('.social__caption');

const handleBigPictureEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  sociaCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', handleBigPictureEscKeydown);
  bigPictureCancel.addEventListener('click', () => closeBigPicture());
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  sociaCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', handleBigPictureEscKeydown);
};

const renderBigPicture = ({ url, likes, comments, description }) => {
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = description;

  openBigPicture();
};

export { renderBigPicture };
