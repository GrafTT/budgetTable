import Row from './Row';

export default ({ onRemove, update, list }) => {
  const fragment = document.createDocumentFragment();

  list.forEach((val, i) => {
    const rowComponent = Row({
      onRemove: () => onRemove(i),
      update,
      val,
      i,
    });
    fragment.appendChild(rowComponent);
  });
  return fragment;
};
