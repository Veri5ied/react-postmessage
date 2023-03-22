"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetMessage = void 0;
var useGetMessage = function (targetOrigin) {
    var message;
    var handleMessage = function (event) {
        if (event.origin !== targetOrigin) {
            return;
        }
        message = event.data;
    };
    window.addEventListener("message", handleMessage);
    window.removeEventListener("message", handleMessage);
    return message;
};
exports.useGetMessage = useGetMessage;
