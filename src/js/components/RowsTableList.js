import Row from './Row';

export default ({ list = [], onRemove }) => {
  const fragment = document.createDocumentFragment();
  
  list.forEach((val, i) => {
    const rowComponent = Row({ onRemove: () => onRemove(i) });
    fragment.appendChild(rowComponent);

  });
  return fragment;
};
