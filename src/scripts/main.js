'use strict';

const MAX_SIZE = 10;
const MIN_SIZE = 2;
const table = document.querySelector('tbody');
const row = document.querySelector('tr');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

let tableChildrenCount = table.children.length;
let columnCount = row.children.length;

appendRowBtn.addEventListener('click', () => {
  tableChildrenCount++;

  if (tableChildrenCount > MIN_SIZE) {
    removeRowBtn.disabled = false;
  }

  if (tableChildrenCount <= MAX_SIZE) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < row.children.length; i++) {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
    }

    table.appendChild(newRow);

    if (tableChildrenCount === MAX_SIZE) {
      appendRowBtn.disabled = true;
    }
  }
});

removeRowBtn.addEventListener('click', () => {
  tableChildrenCount--;

  if (tableChildrenCount < MAX_SIZE) {
    appendRowBtn.disabled = false;
  }

  if (tableChildrenCount >= MIN_SIZE) {
    table.lastElementChild.remove();

    if (tableChildrenCount === MIN_SIZE) {
      removeRowBtn.disabled = true;
    }
  }
});

appendColumnBtn.addEventListener('click', () => {
  columnCount++;

  const rows = document.querySelectorAll('tr');

  if (columnCount > MIN_SIZE) {
    removeColumnBtn.disabled = false;
  }

  if (columnCount <= MAX_SIZE) {
    for (let i = 0; i < tableChildrenCount; i++) {
      const cell = document.createElement('td');

      rows[i].appendChild(cell);
    }

    if (columnCount === MAX_SIZE) {
      appendColumnBtn.disabled = true;
    }
  }
});

removeColumnBtn.addEventListener('click', () => {
  columnCount--;

  const rows = document.querySelectorAll('tr');

  if (columnCount < MAX_SIZE) {
    appendColumnBtn.disabled = false;
  }

  if (columnCount >= MIN_SIZE) {
    for (let i = 0; i < tableChildrenCount; i++) {
      rows[i].lastElementChild.remove();
    }

    if (columnCount === MIN_SIZE) {
      removeColumnBtn.disabled = true;
    }
  }
});
