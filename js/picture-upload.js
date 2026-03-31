import { isEscEvent } from './util.js';

const body = document.querySelector('body');
const inputFile = document.getElementById('upload-file');
const imageOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.getElementById('upload-cancel');

const handleImageOverlayEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeImageOverlay();
  }
}

const closeImageOverlay = () => {
  imageOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  inputFile.value = '';

  document.removeEventListener('keydown', handleImageOverlayEscKeydown);
}

inputFile.addEventListener('change', () => {
  imageOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', handleImageOverlayEscKeydown);
  uploadCancel.addEventListener('click', closeImageOverlay);
});
