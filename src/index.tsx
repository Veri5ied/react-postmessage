import { useEffect } from "react";

export const usePostMessageListener = (callback: (data: string) => void) => {
  useEffect(() => {
    const listener = (event: MessageEvent) => {
      callback(event?.data);
    };
    window.addEventListener("message", listener);
    return () => {
      window.removeEventListener("message", listener);
    };
  }, [callback]);
};

export const usePostMessageSender = (data: string) => {
  useEffect(() => {
    window.opener?.postMessage(data, "*");
  }, [data]);
};
