const isSameDates = (a: Date, b: Date): boolean => {
  const isYearSame = a.getFullYear() === b.getFullYear();
  const isMonthSame = a.getMonth() === b.getMonth();
  const isDaySame = a.getDate() === b.getDate();

  return isYearSame && isMonthSame && isDaySame;
};

export default isSameDates;
