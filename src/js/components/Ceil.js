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

  const data = {
    date: null,
    inc: null,
    exp1: null,
    exp2: null,
  };

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
