export default () => {
  const template = document.querySelector('#ceil');
  const fragment = document.createDocumentFragment();
  const ceil = document.importNode(template.content, true);

  fragment.appendChild(ceil);
  const ceilInput = fragment.querySelector('.ceil-input');
  const ceilText = fragment.querySelector('.ceil-text');
  const input = fragment.querySelector('.ceil-input input');

  ceilText.addEventListener('dblclick', () => {
    ceilInput.style.display = 'block';
    ceilText.style.display = 'none';
  });

  ceilInput.addEventListener('submit', (e) => {
    e.preventDefault();
    ceilText.style.display = 'block';
    ceilInput.style.display = 'none';
    ceilText.textContent = input.value;
    console.log(e.target)
  });

  return fragment;
};
