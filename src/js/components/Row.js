import Ceil from './Ceil';

export default ({
  onRemove, val, i, update, updTable,
}) => {
  const template = document.querySelector('#row');
  const fragment = document.createDocumentFragment();
  const row = document.importNode(template.content, true);

  const divs = row.querySelectorAll('[data-input]');

  divs.forEach((div) => {
    const key = div.dataset.input;
    div.appendChild(Ceil({
      val,
      i,
      key,
      update,
      updTable,
    }));

    const text = div.querySelector('.ceil-text');
    text.innerHTML = val[key];
  });

  fragment.appendChild(row);

  const deleteBtn = fragment.querySelector('.delete-btn');

  deleteBtn.addEventListener('click', onRemove);

  return fragment;
};
