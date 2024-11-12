export default function Item({ item, onChangeItem, onDeleteItem }) {
    function handleCheckboxChange() {
      onChangeItem({ ...item, packed: !item.packed });
    }
  
    function handleDeleteClick() {
      onDeleteItem(item.id);
    }
  
    return (
      <li>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={handleCheckboxChange}
        />
        {item.title}
        <button onClick={handleDeleteClick}>Delete</button>
      </li>
    );
  }
  