"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePostMessageSender = exports.usePostMessageListener = void 0;
var react_1 = require("react");
var usePostMessageListener = function (callback) {
    (0, react_1.useEffect)(function () {
        var listener = function (event) {
            callback(event.data);
        };
        window.addEventListener("message", listener);
        return function () {
            window.removeEventListener("message", listener);
        };
    }, [callback]);
};
exports.usePostMessageListener = usePostMessageListener;
var usePostMessageSender = function (data) {
    (0, react_1.useEffect)(function () {
        var _a;
        (_a = window.opener) === null || _a === void 0 ? void 0 : _a.postMessage(data, "*");
    }, [data]);
};
exports.usePostMessageSender = usePostMessageSender;
