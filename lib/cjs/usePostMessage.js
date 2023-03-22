"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePostMessage = void 0;
var usePostMessage = function (message, targetOrigin) {
    window.postMessage(message, targetOrigin);
};
exports.usePostMessage = usePostMessage;
