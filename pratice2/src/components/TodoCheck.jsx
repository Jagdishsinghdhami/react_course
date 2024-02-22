import { useState } from "react";

const arr = [
  { id: 1, text: "playing cricket", checked: false },
  { id: 2, text: "playing football", checked: false },
  { id: 3, text: "playing kabaddi", checked: false },
  { id: 4, text: "Playing pubg", checked: false },
];

const TodoCheck = () => {
  const [game, setGame] = useState(arr);

  const handleCheckboxChange = (i) => {
    setGame((prevGame) =>
      prevGame.map((item) =>
        item.id === i ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleDelete = (i) => {
    console.log("todo delete ", i);
    setGame((prevGame) => prevGame.filter((item) => item.id !== i));
  };

  return (
    <div>
      <h1>This is a Play game array</h1>
      <div>
        {game.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.text}{" "}
            {item.checked && (
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoCheck;
