import Buttons from './Buttons';
import RowsTableList from './RowsTableList';

const ListService = {
  subscribers: [],
  data: [],
  subcribe(sub) {
    this.subscribers.push(sub);
    sub(this.data);
  },
  publish() {
    this.subscribers.forEach((sub) => {
      sub(this.data);
    });
  },
  remove(i) {
    this.data.splice(i, 1);
    this.publish();
    console.log('onAdd', i);
  },
  add() {
    this.data.push({});
    this.publish();
    console.log('onAdd');
  },
};

export default () => {
  const RowsTable = document.querySelector('#table-head');

  const fragment = document.createDocumentFragment();
  const table = document.importNode(RowsTable.content, true);

  const tableRow = table.querySelector('.table-rows');


  ListService.subcribe((list) => {
    const rowsTableListComponent = RowsTableList({
      onRemove: i => ListService.remove(i),
      list,
    });
    tableRow.innerHTML = '';
    tableRow.appendChild(rowsTableListComponent);
  });

  // BUTTONS

  const onSave = function () {};

  // ADD BUTTONS
  table.appendChild(Buttons({
    onAdd: () => ListService.add(),
    onSave,
  }));

  fragment.appendChild(table);
  return fragment;
};
