import { createContext } from 'react';
import { useEffect, useState } from 'react';
import { socket } from '../socket';
export const StoreContext = createContext();

function StoreProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [isConnected, setIsConnected] = useState(socket.connected);

  const value = {
    theme,
    setTheme,
    socket,
    isConnected,
    setIsConnected,
  };

  useEffect(() => {
    function onConnect() {
      console.log('connected to server');
      setIsConnected(true);
    }
    function onDisconnect() {
      setIsConnected(false);
    }
    socket.connect();
    socket.on('connect', onConnect);

    socket.on('disconnect', onDisconnect);
    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export default StoreProvider;
