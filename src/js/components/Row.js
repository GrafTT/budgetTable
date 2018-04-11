export default function Row() {
  const template = document.querySelector('#temp');
  const fragment = document.createDocumentFragment();
  const row = document.importNode(template.content, true);
  fragment.appendChild(row);
  const deleteBtn = fragment.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function () {
    this.closest('.container-data-input').remove();
  });
  return fragment;
}
