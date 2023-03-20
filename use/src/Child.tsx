import { usePostMessageSender } from "react-postmessage";
import { useState } from "react";

export const Child = () => {
  const [message, setMessage] = useState("");

  usePostMessageSender(message);

  return (
    <div>
      <h1>Child</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};
