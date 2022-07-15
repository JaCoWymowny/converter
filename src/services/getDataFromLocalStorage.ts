export const getDataFromLocalStorage = () => {
  const data = localStorage.getItem('HistoryRecords');
  if (data) {
    return JSON.parse(data);
  } else {
    return []
  }
}
