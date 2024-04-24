function showTable() {
  const table = document.querySelector('#sprogTable');
  const button = document.querySelector('#showButton');

  if (table.style.display === 'none' || table.style.display === '') {
    table.style.display = 'block';
    button.style.display = 'none';
  } else {
    table.style.display = 'none';
    button.style.display = 'block';
  }
}
