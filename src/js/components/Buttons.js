import Row from './Row';


export default ({onAdd, onSave}) => {
  const btnTemp = document.querySelector('#btn-group');
  const fragment = document.createDocumentFragment();
  const btns = document.importNode(btnTemp.content, true);
  fragment.appendChild(btns);

  const addBtn = fragment.querySelector('.add-btn');
  const saveBtn = fragment.querySelector('.save-btn');
  
  // ADD NEW ROW
  addBtn.addEventListener('click', onAdd);
  saveBtn.addEventListener('click', onSave);

  return fragment;
}
