const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomNumber(1, 5);

const validateStringLenght = (str, length) => str.length === length;

validateStringLenght('test', 5);
