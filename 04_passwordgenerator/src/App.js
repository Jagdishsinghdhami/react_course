import "./App.css";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  return (
    <>
      <h1 className="text-center text-4xl"> Password Generator</h1>
      <PasswordGenerator />
      <h2 className="text-center text-2xl">
        <b>useState Hook : </b>usestate is react hook that allows you to a
        functional component. It returns an array with two values: the current
        state and a function to update it. The hook take an initial state value
        as an argument and returns and updated state value whenever the setter
        function is called.
      </h2>
    </>
  );
}

export default App;
