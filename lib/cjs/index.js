"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePostMessageSender = exports.usePostMessageListener = void 0;
var react_1 = require("react");
var usePostMessageListener = function (callback) {
    var listener = (0, react_1.useCallback)(function (event) {
        callback(event.data);
    }, [callback]);
    (0, react_1.useLayoutEffect)(function () {
        window.addEventListener("message", listener);
        return function () {
            window.removeEventListener("message", listener);
        };
    }, [listener]);
};
exports.usePostMessageListener = usePostMessageListener;
var usePostMessageSender = function (data) {
    (0, react_1.useLayoutEffect)(function () {
        window.parent.postMessage(data, "*");
    }, [data]);
    return null;
};
exports.usePostMessageSender = usePostMessageSender;
