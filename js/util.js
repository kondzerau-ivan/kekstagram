const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

const validateStringLenght = (str, length) => str.length === length;

export { getRandomNumber, validateStringLenght, getRandomArrayElement };
