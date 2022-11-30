const formatDate = (date: string) => {
  const newDate = new Date(date);
  return `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
};

export default formatDate;
