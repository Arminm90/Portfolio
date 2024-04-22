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

// function showTable() {
//     const table = document.querySelector('#sprogTable');
//     const button = document.querySelector('#showButton');

//     if (table.style.display === 'none' || table.style.display === '') {
//       table.style.display = 'block';
//       button.textContent = 'Hide Programmeringssprog'; // Change button text
//     } else {
//       table.style.display = 'none';
//       button.textContent = 'Vis Programmeringssprog'; // Change button text
//     }
//   }
// function showTable() {
//   const table = document.querySelector('#sprogTable');
//   const button = document.querySelector('#showButton');
//   const computedStyle = window.getComputedStyle(table); // Get the computed style

//   if (computedStyle.display === 'none') {
//     table.style.display = 'block';
//     button.textContent = 'Skjul Programmeringssprog';
//   } else {
//     table.style.display = 'none';
//     button.textContent = 'Vis Programmeringssprog';
//   }
// }
