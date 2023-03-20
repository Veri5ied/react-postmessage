import { useLayoutEffect, useCallback } from "react";

export const usePostMessageListener = (callback: (data: string) => void) => {
  const listener = useCallback(
    (event: MessageEvent) => {
      callback(event.data);
    },
    [callback]
  );
  useLayoutEffect(() => {
    window.addEventListener("message", listener);
    return () => {
      window.removeEventListener("message", listener);
    };
  }, [listener]);
};

export const usePostMessageSender = (data: string) => {
  useLayoutEffect(() => {
    window.parent.postMessage(data, "*");
  }, [data]);

  return null;
};
