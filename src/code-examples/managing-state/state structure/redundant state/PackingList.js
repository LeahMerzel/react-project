import Item from './Item';

export default function PackingList({ items, onChangeItem, onDeleteItem }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onChangeItem={onChangeItem}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </ul>
  );
}
