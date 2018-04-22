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
      date: null,
      inc: null,
      exp1: null,
      exp2: null,
    });
    this.publish();
    console.log('onAdd', this.data);
  },
  update(input, key, i) {
    this.data[i][key] = input;
  },
};

export default () => {
  const template = document.querySelector('#table-head');

  const fragment = document.createDocumentFragment();
  const table = document.importNode(template.content, true);

  const tableRow = table.querySelector('.table-rows');

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
  // function total() {
  //   const incArr = ListService.data.map(( x ) => {
  //     return x.inc;
  //   })
  //   return incArr.reduce((a, b) => a + b, 0);
  // }
  // console.log(total(), ListService.data)

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
