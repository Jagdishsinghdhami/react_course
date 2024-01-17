import "./App.css";
import Card from "./components/Card";
import React from "react";

function App() {
  return (
    <>
      <h1 className="text-center bg-black text-white m-5 p-5 text-4xl">
        Card Components :
      </h1>
      <div className="flex flex-wrap justify-center">
        <Card btnText="click me" name="Jagdish Singh" image="1">
          Card 1
        </Card>
        <Card btnText="click me" name="Jazz Dhami" image="2">
          Card 2
        </Card>
        <Card name="Ashok Singh" image="3">
          Card 3
        </Card>
      </div>
    </>
  );
}

export default App;
