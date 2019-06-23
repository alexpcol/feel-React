import { NetInfo } from 'react-native';

export function handleConnection(dispatch, ACTION_TYPE) {
  return self => (isConnected) => {
    self.isConnected = isConnected;
    self.status = isConnected ? 'online' : 'offline';
    dispatch({ type: ACTION_TYPE, payload: __DEV__ ? true : isConnected });
  };
}

function ConnectionHandler() {
  // this.connectionType = 'unknown';
  this.isConnected = false;
  this.status = 'unknown';

  this.configure = (cb = handleConnection) => {
    NetInfo.isConnected.fetch().then(cb(this));
  };

  this.addConnectionListener = (cb = handleConnection) => {
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      cb(this),
    );
  };

  this.removeConnectionListener = (cb = handleConnection) => {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      cb(this),
    );
  };

  return this;
}

console.log('Connection handler initialized');
const Handler = new ConnectionHandler();

export default Handler;
