import Buttons from './Buttons';
import RowsTableList from './RowsTableList';

export default () => {
  const RowsTable = document.querySelector('#table-head');
  
  const fragment = document.createDocumentFragment();
  const table = document.importNode(RowsTable.content, true);
  fragment.appendChild(table);
  const tableRow = table.querySelector('.table-rows');

  const list = [null, null];

  const rowsTableListComponent = RowsTableList({
    onRemove: function () {
      this.closest('.container-data-input').remove();
    }, 
    list,
  });
  console.log(table);
  tableRow.appendChild(rowsTableListComponent);

  const onAdd = function () {
    // Add row element to table
      list.push({});
    }
  const onSave = function () {
      // Add row element to table
      document.body.insertBefore(rowComponent, this.parentNode);
    }

    
  return fragment;
}

