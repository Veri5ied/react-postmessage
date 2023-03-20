import "./App.css";
import { useState } from "react";
import {
  usePostMessageSender,
  usePostMessageListener,
} from "react-postmessage";

function App() {
  const [data, setData] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
