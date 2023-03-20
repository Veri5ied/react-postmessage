import { usePostMessageListener } from "react-postmessage";
import { useState } from "react";

export const Parent = () => {
  const [message, setMessage] = useState("");
  usePostMessageListener((event: any) => {
    setMessage(event.data);
  });
  return (
    <div>
      <h1>Parent</h1>
      <p>Message from child: {message}</p>
    </div>
  );
};
