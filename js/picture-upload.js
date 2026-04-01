import { isEscEvent } from './util.js';

const body = document.querySelector('body');
const imageOverlay = document.querySelector('.img-upload__overlay');
const imageUploadPreview = imageOverlay.querySelector('.img-upload__preview img');
const inputFile = document.getElementById('upload-file');
const uploadCancel = document.getElementById('upload-cancel');
const scaleControlSmaller = imageOverlay.querySelector('.scale__control--smaller');
const scaleControl = imageOverlay.querySelector('.scale__control--value');
const scaleControlBigger = imageOverlay.querySelector('.scale__control--bigger');
const IMAGE_SCALE = {
  'min': 25,
  'max': 100,
  'step': 25
};
let scaleControlValue = parseInt(scaleControl.value.substring(0, 3));

const handleImageOverlayEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeImageOverlay();
  }
};

const handleScaleControlSmaller = () => {
  if (scaleControlValue > IMAGE_SCALE.min) {
    scaleControlValue -= IMAGE_SCALE.step;
    scaleControl.value = `${scaleControlValue}%`;
    scaleControl.dispatchEvent(new Event('change'));
  }
};

const handleScaleControlBigger = () => {
  if (scaleControlValue < IMAGE_SCALE.max) {
    scaleControlValue += IMAGE_SCALE.step;
    scaleControl.value = `${scaleControlValue}%`;
    scaleControl.dispatchEvent(new Event('change'));
  }
};

const handleScaleControlValueChange = () => {
  imageUploadPreview.style.transform = `scale(${scaleControlValue / 100})`;
}

inputFile.addEventListener('change', () => {
  imageOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', handleImageOverlayEscKeydown);
  uploadCancel.addEventListener('click', closeImageOverlay);
  scaleControlSmaller.addEventListener('click', handleScaleControlSmaller);
  scaleControlBigger.addEventListener('click', handleScaleControlBigger);
  scaleControl.addEventListener('change', handleScaleControlValueChange);
});

const closeImageOverlay = () => {
  imageOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  inputFile.value = '';

  document.removeEventListener('keydown', handleImageOverlayEscKeydown);
  uploadCancel.removeEventListener('click', closeImageOverlay);
  scaleControlSmaller.removeEventListener('click', handleScaleControlSmaller);
  scaleControlBigger.removeEventListener('click', handleScaleControlBigger);
  scaleControl.removeEventListener('change', handleScaleControlValueChange);
};
