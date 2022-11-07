export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  return `${addZero(day)}/${addZero(month)}/${year}`;
};

const addZero = (n: number): string => {
  if (n <= 9) return `0${n}`;
  return `${n}`;
};
