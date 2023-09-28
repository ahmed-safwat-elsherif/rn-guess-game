const genRandBetween = (min, max) => {
  const boundariesInValid = Number.isNaN(Number(min)) || Number.isNaN(Number(max));
  if (boundariesInValid || min > max) throw new Error('Boundaries are invalid');

  if (min == max) return min;

  return Math.floor(Math.random() * (max - min)) + min;
};

export default genRandBetween;
