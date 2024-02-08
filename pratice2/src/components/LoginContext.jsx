import { useState } from "react";
import { useContextHook } from "../context/ContextHook";

const LoginContext = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContextHook();

  const submitValue = (e) => {
    if (name === "" || password === "") {
      alert("Kindly update the value.");
    } else {
      e.preventDefault();
      // setName("");
      // setPassword("");
      setUser({ name, password });
    }
  };
  return (
    <div>
      <h1>This is user login context</h1>
      User Name :
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="username"
      />{" "}
      <br />
      <br />
      Password :{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <br />
      <br />
      <button onClick={submitValue}>Submit</button> <br />
      LoginContext : {name || password}
    </div>
  );
};

export default LoginContext;
