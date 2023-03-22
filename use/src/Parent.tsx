import { useState } from "react";
import { useReceiveMessage } from "@veri5ied/react-postmessage";

const Parent = () => {
  const receiveMessage = useReceiveMessage({ targetOrigin: "*" });
  receiveMessage((message: any) => {
    console.log(message);
  });

  return <div>Hello from parent</div>;
};

export default Parent;
