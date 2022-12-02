const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formatDate = (date: string, showMonth?: boolean) => {
  const newDate = new Date(date);
  if (showMonth) {
    return `${newDate.getDate()} ${
      MONTHS[newDate.getMonth()]
    }, ${newDate.getFullYear()}`;
  }
  return `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
};

export default formatDate;
