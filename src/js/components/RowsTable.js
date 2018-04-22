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
    console.log('onAdd', i, this.data);
  },
  add() {
    this.data.push({
      date: 0,
      inc: 0,
      exp1: 0,
      exp2: 0,
    });
    this.publish();
    console.log('onAdd', this.data);
  },
  update(input, key, i) {
    this.data[i][key] = input;
    console.log('update', this.data);
  },
};

export default () => {
  const template = document.querySelector('#table-head');

  const fragment = document.createDocumentFragment();
  const table = document.importNode(template.content, true);

  const tableRow = table.querySelector('.table-rows');

  function total() {
    const incArr = ListService.data.map(x => x.inc);
    return incArr.reduce((a, b) => a + b, 0);
  }

  ListService.subcribe((list) => {
    const rowsTableListComponent = RowsTableList({
      onRemove: ListService.remove.bind(ListService),
      update: ListService.update.bind(ListService),
      list,
    });
    tableRow.innerHTML = '';
    tableRow.appendChild(rowsTableListComponent);
  });

  // const totalInc = table.querySelector('.inc-total');

  console.log(total(), ListService.data);

  // BUTTONS

  const onSave = function () {};

  // ADD BUTTONS
  table.appendChild(Buttons({
    onAdd: ListService.add.bind(ListService),
    onSave,
  }));

  fragment.appendChild(table);

  return fragment;
};
