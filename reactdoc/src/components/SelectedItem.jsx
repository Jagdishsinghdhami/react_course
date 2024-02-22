import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

const SelectedItem = () => {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleItem = (id, e) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <div>
      <h2>This is a selected</h2>
      <h2>Whats your travel snack?</h2>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <input
              type="text"
              value={item.title}
              onChange={(e) => handleItem(item.id, e)}
            />
            <button onClick={() => setSelectedItem(item)}>choose</button>
          </li>
        );
      })}
      <h3>You picked {selectedItem.title}</h3>
    </div>
  );
};

export default SelectedItem;
