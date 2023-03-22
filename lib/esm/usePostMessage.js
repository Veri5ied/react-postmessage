export var usePostMessage = function (message, targetOrigin) {
    window.postMessage(message, targetOrigin);
};
