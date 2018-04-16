export default ({
  onRemove,
}) => {
  const template = document.querySelector('#row');
  const fragment = document.createDocumentFragment();
  const row = document.importNode(template.content, true);
  fragment.appendChild(row);
  const deleteBtn = fragment.querySelector('.delete-btn');

  deleteBtn.addEventListener('click', onRemove);

  return fragment;
};
