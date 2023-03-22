import { useCallback } from "react";

export const usePostMessage = (
  options = {
    targetOrigin: "*", // '*' for all origins
  }
) => {
  const { targetOrigin = "*" } = options;

  return useCallback(
    (
      message:
        | string
        | number
        | boolean
        | null
        | undefined
        | object
        | Array<string | number | boolean | null | undefined | object>
    ) => {
      window.parent.postMessage(message, targetOrigin);
    },
    [targetOrigin]
  );
};

export const useReceiveMessage = (
  options = {
    targetOrigin: "*", // '*' for all origins
  }
) => {
  const { targetOrigin = "*" } = options;

  return useCallback(
    (callback: (message: string) => void) => {
      const handler = (event: MessageEvent) => {
        if (targetOrigin !== "*" && event.origin !== targetOrigin) {
          return;
        }
        callback(event.data);
      };
      window.addEventListener("message", handler);
      return () => {
        window.removeEventListener("message", handler);
      };
    },
    [targetOrigin]
  );
};
