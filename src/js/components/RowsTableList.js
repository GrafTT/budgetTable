import Row from './Row';

export default ({
  onRemove, update, updTable, list, total,
}) => {
  const fragment = document.createDocumentFragment();

  list.forEach((val, i) => {
    const rowComponent = Row({
      onRemove: () => {
        onRemove(i);
        total();
        updTable();
      },
      update,
      updTable,
      val,
      i,
    });
    fragment.appendChild(rowComponent);
  });
  return fragment;
};
