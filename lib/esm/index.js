import { useLayoutEffect, useCallback } from "react";
export var usePostMessageListener = function (callback) {
    var listener = useCallback(function (event) {
        callback(event.data);
    }, [callback]);
    useLayoutEffect(function () {
        window.addEventListener("message", listener);
        return function () {
            window.removeEventListener("message", listener);
        };
    }, [listener]);
};
export var usePostMessageSender = function (data) {
    useLayoutEffect(function () {
        window.parent.postMessage(data, "*");
    }, [data]);
    return null;
};
