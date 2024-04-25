const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const getDayFromNumber = (numberDay: number): string => {
  return days[numberDay];
};

export default getDayFromNumber;
