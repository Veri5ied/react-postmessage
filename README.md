# react-postmessage

Cross-Origin Communication with post message for react applications

## Usage

### Post message hook for sending data from child to parent window

Usage:

```
const postMessage = usePostMessage();
postMessage({ type: 'message', payload: 'hello' });
```

```
const postMessage = usePostMessage({ targetOrigin: '\*' });
postMessage({ type: 'message', payload: 'hello' });
```

```
const postMessage = usePostMessage({ targetOrigin: 'http://localhost:3000' });
postMessage({ type: 'message', payload: 'hello' });
```

### Receive message hook for receiving data from parent window

Usage:

```
const receiveMessage = useReceiveMessage();
receiveMessage((message) => {
console.log(message);
});
```

```
const receiveMessage = useReceiveMessage({ targetOrigin: '\*' });
receiveMessage((message) => {
console.log(message);
});
```
