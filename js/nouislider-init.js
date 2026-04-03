// TODO: Refactoring

const slider = document.querySelector('.effect-level__slider');
const imageUploadPreview = document.querySelector('.img-upload__preview img');
const effectLevel = document.querySelector('.effect-level__value');


const initSlider = (event) => {
  if (event.target.value === 'none' && slider.noUiSlider) {
    imageUploadPreview.style.filter = '';
    slider.noUiSlider.destroy();
  } else if (!slider.noUiSlider) {
    noUiSlider.create(slider, {
      start: 1,
      range: {
        'min': 0,
        'max': 1
      },
      step: 0.1,
      connect: 'lower',
      tooltips: {
        to: value => value.toFixed(1)
      }
    });
  }

  if (event.target.value === 'chrome' || event.target.value === 'sepia') {
    slider.noUiSlider.updateOptions({
      start: 1,
      range: {
        'min': 0,
        'max': 1
      },
      step: 0.1,
      connect: 'lower',
      tooltips: {
        to: value => value.toFixed(1)
      }
    });
  }

  if (event.target.value === 'chrome') {
    slider.noUiSlider.off('update');
    slider.noUiSlider.on('update', (_, handle, unencoded) => {
      console.log(unencoded[handle]);
      imageUploadPreview.style.filter = `grayscale(${unencoded[handle]})`;
      effectLevel.value = unencoded[handle];
    });
  }

  if (event.target.value === 'sepia') {
    slider.noUiSlider.off('update');
    slider.noUiSlider.on('update', (_, handle, unencoded) => {
      console.log(unencoded[handle]);
      imageUploadPreview.style.filter = `sepia(${unencoded[handle]})`;
      effectLevel.value = unencoded[handle];
    });
  }


  if (event.target.value === 'marvin') {
    slider.noUiSlider.updateOptions({
      start: 100,
      range: {
        'min': 0,
        'max': 100
      },
      step: 1,
      tooltips: {
        to: value => `${Math.round(value)}%`
      }
    });

    slider.noUiSlider.off('update');
    slider.noUiSlider.on('update', (_, handle, unencoded) => {
      console.log(unencoded[handle]);
      imageUploadPreview.style.filter = `invert(${unencoded[handle]}%)`;
      effectLevel.value = unencoded[handle];
    });
  }

  if (event.target.value === 'phobos') {
    slider.noUiSlider.updateOptions({
      start: 3,
      range: {
        'min': 0,
        'max': 3
      },
      step: 0.1,
      tooltips: {
        to: value => `${value.toFixed(1)}px`
      }
    });

    slider.noUiSlider.off('update');
    slider.noUiSlider.on('update', (_, handle, unencoded) => {
      console.log(unencoded[handle]);
      imageUploadPreview.style.filter = `blur(${unencoded[handle]}px)`;
      effectLevel.value = unencoded[handle];
    });
  }

  if (event.target.value === 'heat') {
    slider.noUiSlider.updateOptions({
      start: 3,
      range: {
        'min': 1,
        'max': 3
      },
      step: 0.1,
      tooltips: {
        to: value => value.toFixed(1)
      }
    });

    slider.noUiSlider.off('update');
    slider.noUiSlider.on('update', (_, handle, unencoded) => {
      console.log(unencoded[handle]);
      imageUploadPreview.style.filter = `brightness(${unencoded[handle]})`;
      effectLevel.value = unencoded[handle];
    });
  }
}

export { initSlider };
