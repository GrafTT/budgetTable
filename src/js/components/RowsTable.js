import Buttons from './Buttons';
import RowsTableList from './RowsTableList';

const ListService = {
  subscribers: [],
  data: [],
  tableData: {
    inc: 0,
    exp1: 0,
    exp2: 0,
    perc1: 0,
    perc2: 0,
    revTotal: 0,
    revPerc: 0,
  },
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
    // console.log('onAdd', i, this.data);
  },
  add() {
    this.data.push({
      date: 0,
      inc: 0,
      exp1: 0,
      exp2: 0,
    });
    this.publish();
    // console.log('onAdd', this.data);
  },
  update(input, key, i) {
    this.data[i][key] = input;
    // console.log('update', this.data);
    this.total();
  },
  total() {
    this.tableData.inc = this.data.map(x => +x.inc).reduce((a, b) => a + b, 0);
    this.tableData.exp1 = this.data.map(x => +x.exp1).reduce((a, b) => a + b, 0);
    this.tableData.exp2 = this.data.map(x => +x.exp2).reduce((a, b) => a + b, 0);

    this.tableData.revTotal = this.tableData.inc - this.tableData.exp1 - this.tableData.exp2;
    this.tableData.revPerc = ((this.tableData.revTotal / this.tableData.inc) * 100).toFixed(1);

    this.tableData.perc1 = ((this.tableData.exp1 / this.tableData.inc) * 100).toFixed(1);
    this.tableData.perc2 = ((this.tableData.exp2 / this.tableData.inc) * 100).toFixed(1);
  },
};

export default () => {
  const template = document.querySelector('#table-head');

  const fragment = document.createDocumentFragment();
  const table = document.importNode(template.content, true);

  const tableRow = table.querySelector('.table-rows');
  const totalInc = table.querySelector('.inc-total');
  const totalExp1 = table.querySelector('.exp-total1');
  const totalExp2 = table.querySelector('.exp-total2');
  const revTotal = table.querySelector('.rev-total');

  const expPerc1 = table.querySelector('.exp-perc1');
  const expPerc2 = table.querySelector('.exp-perc2');
  const revPerc = table.querySelector('.rev-perc');

  function updTable() {
    totalInc.innerHTML = ListService.tableData.inc;
    totalExp1.innerHTML = ListService.tableData.exp1;
    totalExp2.innerHTML = ListService.tableData.exp2;
    revTotal.innerHTML = ListService.tableData.revTotal;

    expPerc1.innerHTML = `${ListService.tableData.perc1}%`;
    expPerc2.innerHTML = `${ListService.tableData.perc2}%`;
    revPerc.innerHTML = `${ListService.tableData.revPerc}%`;
  }

  ListService.subcribe((list) => {
    const rowsTableListComponent = RowsTableList({
      onRemove: ListService.remove.bind(ListService),
      update: ListService.update.bind(ListService),
      total: ListService.total.bind(ListService),
      updTable: updTable.bind(this),
      list,
    });
    tableRow.innerHTML = '';
    tableRow.appendChild(rowsTableListComponent);
  });

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
