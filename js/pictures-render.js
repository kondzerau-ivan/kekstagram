import { photos } from './data.js';
import { renderBigPicture } from './big-picture-render.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesSection = document.querySelector('.pictures');

const createPicture = (photo) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = photo.url;
  picture.querySelector('.picture__likes').textContent = photo.likes;
  picture.querySelector('.picture__comments').textContent = photo.comments.length;

  picture.addEventListener('click', (evt) => {
    evt.preventDefault();
    renderBigPicture(photo);
  });

  return picture;
};

const renderPictures = () => {
  const picturesFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    picturesFragment.appendChild(createPicture(photo));
  });

  picturesSection.appendChild(picturesFragment);
}

export { renderPictures };
