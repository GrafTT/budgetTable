export default ({
  val, i, update, updTable, key,
}) => {
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

      const inputValue = e.target.value;

      if (!isNaN(inputValue) && inputValue !== '') {
        update(inputValue, key, i);
        updTable();
        ceilText.innerHTML = val[key];
      }
    }
  });
  return fragment;
};
