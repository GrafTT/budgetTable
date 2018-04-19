export default () => {
  const template = document.querySelector('#ceil');
  const fragment = document.createDocumentFragment();
  const ceil = document.importNode(template.content, true);

  fragment.appendChild(ceil);
  const ceilInput = fragment.querySelector('.ceil-input');
  const ceilText = fragment.querySelector('.ceil-text');

  ceilText.addEventListener('dblclick', () => {
    ceilInput.style.display = 'block';
    ceilText.style.display = 'none';
  });

  // С этого обьекта данные вычисляються в ячейки 'Всего' '%'. А изменяються через input.
  const data = {
    date: null,
    inc: null,
    exp1: null,
    exp2: null,
  };

  // При нажатии ентер делаю проверку, что введено число или что строка не пустая. Далее в зависимости от того в какой ячейки введены данные - сохраняем в data. И вот непонятно где создавать data и как к ней добраться с этого копмонента.
  ceilInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      ceilText.style.display = 'block';
      ceilInput.style.display = 'none';
      if (!isNaN(e.target.value) && e.target.value !== '') {
        if (e.target.closest('.data-inc')) {
          data.inc = e.target.value;
          ceilText.innerHTML = data.inc;
        } else if (e.target.closest('.data-exp1')) {
          data.exp1 = e.target.value;
          ceilText.innerHTML = data.exp1;
        } else if (e.target.closest('.data-exp2')) {
          data.exp2 = e.target.value;
          ceilText.innerHTML = data.exp2;
        }
      }
    }
  });

  console.log(data);
  return fragment;
};
