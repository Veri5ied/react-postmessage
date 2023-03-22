import { usePostMessage } from "@veri5ied/react-postmessage";

const Child = () => {
  const postMessage = usePostMessage({ targetOrigin: "*" });
  postMessage({ type: "message", payload: "hello" });

  return <div>Hello from child</div>;
};

export default Child;
