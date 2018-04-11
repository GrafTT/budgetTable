import Row from './Row';

export default function Buttons() {
  const addBtn = document.querySelector('.add-btn');
  // ADD NEW ROW

  addBtn.addEventListener('click', function () {
  // Add row element to table
    document.body.insertBefore(Row(), this.parentNode);
  });
}
