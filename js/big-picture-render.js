import { isEscEvent } from './util.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const sociaCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureImg = bigPicture.querySelector('.big-picture__img > img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const sociaComments = bigPicture.querySelector('.social__comments');
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
  sociaComments.innerHTML = '';

  document.removeEventListener('keydown', handleBigPictureEscKeydown);
};

const createComment = ({ avatar, message, name }) => `
  <li class="social__comment">
    <img
      class="social__picture"
      src="${avatar}"
      alt="${name}"
      width="35" height="35">
    <p class="social__text">${message}</p>
  </li>
`;

const renderComments = (comments) => {
  comments.forEach((comment) => {
    sociaComments.insertAdjacentHTML('beforeend', createComment(comment));
  })
  console.log(comments.length);
};

const renderBigPicture = ({ url, likes, comments, description }) => {
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = description;
  renderComments(comments);

  openBigPicture();
};

export { renderBigPicture };
