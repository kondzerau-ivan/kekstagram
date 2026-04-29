// Конфигурация для каждого эффекта
const EFFECTS_CONFIG = {
  none: {
    destroy: true
  },
  chrome: {
    start: 1,
    range: { min: 0, max: 1 },
    step: 0.1,
    filter: (value) => `grayscale(${value})`,
    tooltip: (value) => value.toFixed(1)
  },
  sepia: {
    start: 1,
    range: { min: 0, max: 1 },
    step: 0.1,
    filter: (value) => `sepia(${value})`,
    tooltip: (value) => value.toFixed(1)
  },
  marvin: {
    start: 100,
    range: { min: 0, max: 100 },
    step: 1,
    filter: (value) => `invert(${value}%)`,
    tooltip: (value) => `${Math.round(value)}%`
  },
  phobos: {
    start: 3,
    range: { min: 0, max: 3 },
    step: 0.1,
    filter: (value) => `blur(${value}px)`,
    tooltip: (value) => `${value.toFixed(1)}px`
  },
  heat: {
    start: 3,
    range: { min: 1, max: 3 },
    step: 0.1,
    filter: (value) => `brightness(${value})`,
    tooltip: (value) => value.toFixed(1)
  }
};

const slider = document.querySelector('.effect-level__slider');
const imageUploadPreview = document.querySelector('.img-upload__preview img');
const effectLevel = document.querySelector('.effect-level__value');

const applySlider = (config) => {
  if (config.destroy) {
    if (slider.noUiSlider) {
      slider.noUiSlider.destroy();
    }
    imageUploadPreview.style.filter = '';
    return;
  }

  if (!slider.noUiSlider) {
    noUiSlider.create(slider, {
      start: config.start,
      range: config.range,
      step: config.step,
      connect: 'lower',
      tooltips: {
        to: config.tooltip
      }
    });
  } else {
    slider.noUiSlider.updateOptions({
      start: config.start,
      range: config.range,
      step: config.step,
      tooltips: {
        to: config.tooltip
      }
    });
  }

  slider.noUiSlider.off('update');
  slider.noUiSlider.on('update', (_, handle, unencoded) => {
    imageUploadPreview.style.filter = config.filter(unencoded[handle]);
    effectLevel.value = unencoded[handle];
  });
};

const initSlider = (event) => {
  const effectValue = event.target.value;
  const config = EFFECTS_CONFIG[effectValue];

  if (config) {
    applySlider(config);
  }
};

const resetSlider = () => {
  const noneConfig = EFFECTS_CONFIG.none;
  applySlider(noneConfig);
};

export { initSlider, resetSlider };
