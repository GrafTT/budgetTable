import Buttons from './Buttons';
import RowsTableList from './RowsTableList';

const ListService = {
  subscribers: [],
  data: [],
  subcribe(sub){
    this.subscribers.push(sub);
    sub(this.data);
  },
  publish(){
    this.subscribers.forEach(val => {
      val(this.data)
    });
  },
  remove(i){
    this.data.splice(i, 1);
    this.publish();
    console.log('onAdd', i, list);
  },
  add(){
    this.data.push({});
    this.publish();
    console.log('onAdd', list);
  }
};

export default () => {
  const RowsTable = document.querySelector('#table-head');

  const fragment = document.createDocumentFragment();
  const table = document.importNode(RowsTable.content, true);

  const tableRow = table.querySelector('.table-rows');


  ListService.subcribe((list)=>{
    const rowsTableListComponent = RowsTableList({
      onRemove(i) {
        list.splice(i, 1);
        console.log('onAdd', i, list);
      },
      list,
    });
    tableRow.innerHTML = '';
    tableRow.appendChild(rowsTableListComponent);
  })


  // BUTTONS
 
  const onSave = function () {

  };
  // ADD BUTTONS
  table.appendChild(Buttons({ onAdd: () => ListService.add(), onSave }));

  fragment.appendChild(table);
  return fragment;
};


