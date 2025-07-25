function formatDate(date: string | number | Date) {
  const originalDate = new Date(date);
  if (!date) {
    return '';
  }
  return originalDate.toLocaleDateString('en-GB');
}

export default formatDate;
