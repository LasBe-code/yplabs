const formatStringDate = (stringDate: string) => {
  const date = new Date(stringDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month < 10 ? '0' : ''}${month}-${
    day < 10 ? '0' : ''
  }${day}`;
};

const dateUtil = {formatStringDate};
export default dateUtil;
