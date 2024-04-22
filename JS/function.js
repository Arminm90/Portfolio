function showTable() {
  const table = document.querySelector('#sprogTable');
  if (table.style.display === 'none' || table.style.display === '') {
    table.style.display = 'block';
  } else {
    table.style.display = 'none';
  }
}
