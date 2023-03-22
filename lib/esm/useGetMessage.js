export var useGetMessage = function (targetOrigin) {
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
