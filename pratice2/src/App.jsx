import "./App.css";
// import CheckBox from "./components/CheckBox";
// import PlayGame from "./components/PlayGame";
import Practice1 from "./components/Practice1";
// import Post from "./components/Post";

function App() {
  const heading = {
    color: "red",
    fontSize: "40px",
  };
  return (
    <>
      <h1 style={heading}>React.js Practice</h1>
      {/* <Post /> */}
      {/* <CheckBox /> */}
      {/* <PlayGame /> */}
      <Practice1 />
    </>
  );
}

export default App;
