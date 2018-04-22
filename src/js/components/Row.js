import Ceil from './Ceil';

export default ({
  onRemove, val, i, update,
}) => {
  const template = document.querySelector('#row');
  const fragment = document.createDocumentFragment();
  const row = document.importNode(template.content, true);

  const divs = row.querySelectorAll('[data-input]');

  divs.forEach((div) => {
    div.appendChild(Ceil({ val, i, update }));
  });
  fragment.appendChild(row);

  const deleteBtn = fragment.querySelector('.delete-btn');

  deleteBtn.addEventListener('click', onRemove);

  return fragment;
};
