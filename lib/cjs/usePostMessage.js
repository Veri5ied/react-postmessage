"use strict";
// post message hook for sending data from child to parent window
//
// Usage:
//  const [postMessage] = usePostMessage();
//  postMessage({ type: 'message', payload: 'hello' });
//
//  const [postMessage] = usePostMessage({ targetOrigin: '*' });
//  postMessage({ type: 'message', payload: 'hello' });
//
//  const [postMessage] = usePostMessage({ targetOrigin: 'http://localhost:3000' });
//  postMessage({ type: 'message', payload: 'hello' });
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReceiveMessage = exports.usePostMessage = void 0;
var react_1 = require("react");
var usePostMessage = function (options) {
    if (options === void 0) { options = {
        targetOrigin: "*", // '*' for all origins
    }; }
    var _a = options.targetOrigin, targetOrigin = _a === void 0 ? "*" : _a;
    return (0, react_1.useCallback)(function (message) {
        window.parent.postMessage(message, targetOrigin);
    }, [targetOrigin]);
};
exports.usePostMessage = usePostMessage;
// Path: src/useReceiveMessage.ts
// receive message hook for receiving data from parent window
//
// Usage:
//  const [receiveMessage] = useReceiveMessage();
//  receiveMessage((message) => {
//      console.log(message);
//  });
//
//  const [receiveMessage] = useReceiveMessage({ targetOrigin: '*' });
//  receiveMessage((message) => {
//      console.log(message);
//  });
var useReceiveMessage = function (options) {
    if (options === void 0) { options = {
        targetOrigin: "*", // '*' for all origins
    }; }
    var _a = options.targetOrigin, targetOrigin = _a === void 0 ? "*" : _a;
    return (0, react_1.useCallback)(function (callback) {
        var handler = function (event) {
            if (targetOrigin !== "*" && event.origin !== targetOrigin) {
                return;
            }
            callback(event.data);
        };
        window.addEventListener("message", handler);
        return function () {
            window.removeEventListener("message", handler);
        };
    }, [targetOrigin]);
};
exports.useReceiveMessage = useReceiveMessage;
