export default ({ val, i, update }) => {
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

  ceilInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      ceilText.style.display = 'block';
      ceilInput.style.display = 'none';
      if (!isNaN(e.target.value) && e.target.value !== '') {
        if (e.target.closest('.data-inc')) {
          update(e.target.value, 'inc', i);
          ceilText.innerHTML = val.inc;
          console.log(val.inc);
        } else if (e.target.closest('.data-exp1')) {
          update(e.target.value, 'exp1', i);
          ceilText.innerHTML = val.exp1;
        } else if (e.target.closest('.data-exp2')) {
          update(e.target.value, 'exp2', i);
          ceilText.innerHTML = val.exp2;
        }
      }
    }
  });
  return fragment;
};
