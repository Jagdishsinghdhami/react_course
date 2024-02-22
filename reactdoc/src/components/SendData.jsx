import { useState } from "react";

const SendData = () => {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submitted..");
    setIsSending(true);
    await sendMessage(text);
    setIsSending(false);
    setIsSent(true);
  };

  if (isSent) {
    return <h1>Thanks for response..</h1>;
  }
  return (
    <div>
      <h1>send data to server</h1>
      <h2>How was your stay at The Prancing Pony?</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>SUBMIT</button>
      {isSending && <p>Sending...</p>}
    </div>
  );
};

// pretend to send a message .

function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}
export default SendData;
