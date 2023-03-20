import { useEffect } from "react";
export var usePostMessageListener = function (callback) {
    useEffect(function () {
        var listener = function (event) {
            callback(event.data);
        };
        window.addEventListener("message", listener);
        return function () {
            window.removeEventListener("message", listener);
        };
    }, [callback]);
};
export var usePostMessageSender = function (data) {
    useEffect(function () {
        var _a;
        (_a = window.opener) === null || _a === void 0 ? void 0 : _a.postMessage(data, "*");
    }, [data]);
};
