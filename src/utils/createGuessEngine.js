const genRandIndex = (length) => Math.floor(Math.random() * length);

const checkBoundaries = (min, max) => {
  const boundariesInValid = Number.isNaN(Number(min)) || Number.isNaN(Number(max));
  if (boundariesInValid || min > max) throw new Error('Boundaries are invalid');
  return true;
};

export const GUESS_DIRECTION = {
  HIGHER: 'HIGHER',
  LOWER: 'LOWER',
};

const ERROR_MIN_MORE_THAN_MAX = 'Make sure you choose the boundaries correctly!';

const ERRORS = {
  minMoreThanMax: ERROR_MIN_MORE_THAN_MAX,
};

export default (min, max, options = {}) => {
  const { errors = {} } = options;
  const globalErrors = { ...ERRORS, ...errors };

  if (!checkBoundaries(min, max)) return { error: globalErrors.minMoreThanMax };

  let availNums = Array.from(Array(max - min), (_, index) => index + min);
  let previousGuess = null;
  let currMin = min;
  let currMax = max;
  return {
    guess: (direction) => {
      let newMin = currMin;
      let newMax = currMax;
      switch (direction) {
        case GUESS_DIRECTION.HIGHER:
          newMin = previousGuess + 1;
          break;
        case GUESS_DIRECTION.LOWER:
          newMax = previousGuess;
          break;
        default:
          break;
      }
      if (!checkBoundaries(newMin, newMax))
        return {
          error: globalErrors.minMoreThanMax,
        };
      currMin = newMin;
      currMax = newMax;
      availNums = availNums.filter(
        (num) => num !== previousGuess && num >= currMin && num < currMax
      );
      const randIndex = genRandIndex(availNums.length);
      const guess = availNums[randIndex];
      previousGuess = guess;
      return { value: guess };
    },
    reset: () => {
      availNums = Array.from(Array(max - min), (_, index) => index + min);
      previousGuess = null;
      currMin = min;
      currMax = max;
    },
  };
};
