export const isHighest = (num: number, arr: number[]) => {
  if (arr.length === 0) {
    return true;
  }

  if (!arr.includes(num)) {
    return false;
  }

  const maxValue = Math.max(...arr);

  return num === maxValue;
};
