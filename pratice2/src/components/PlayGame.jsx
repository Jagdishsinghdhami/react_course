import { useState } from "react";

const arr = [
  "playing cricket",
  "playing football",
  "playing kabbaddi",
  "playing pubg",
];

const Practice1 = () => {
  const [game, setGame] = useState(arr);
  const [checkedItems, setCheckedItems] = useState(
    Array(arr.length).fill(false)
  );

  const handleDelete = (index) => {
    setGame(game.filter((_, i) => i !== index));
    setCheckedItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCheckBox = (index) => {
    setCheckedItems((prev) => {
      const newCheckedItems = [...prev];
      newCheckedItems[index] = !newCheckedItems[index];
      return newCheckedItems;
    });
  };

  return (
    <>
      <h1>React Practice Questions 1 : </h1>
      <div>
        {game.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={checkedItems[index]}
              onChange={() => handleCheckBox(index)}
            />
            {item}{" "}
            {checkedItems[index] && (
              <button onClick={() => handleDelete(index)}>Delete</button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Practice1;
