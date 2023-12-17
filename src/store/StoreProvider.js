import { createContext } from 'react';
import { useEffect, useState } from 'react';
import { socket } from '../socket';
import { getProfile } from '../Services/user';
export const StoreContext = createContext();

function StoreProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [user, setUser] = useState({});

  const value = {
    theme,
    user,
    socket,
    isConnected,
    setTheme,
    setIsConnected,
  };

  useEffect(() => {
    // getProfile()
    //   .then((res) => {
    //     if (res.data) {
    //       setUser(res.data);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // function onConnect() {
    //   console.log('connected to server');
    //   setIsConnected(true);
    // }
    // function onDisconnect() {
    //   setIsConnected(false);
    // }
    // socket.connect();
    // socket.on('connect', onConnect);
    // socket.on('disconnect', onDisconnect);
    // return () => {
    //   socket.off('connect', onConnect);
    //   socket.off('disconnect', onDisconnect);
    // };
  }, []);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export default StoreProvider;
