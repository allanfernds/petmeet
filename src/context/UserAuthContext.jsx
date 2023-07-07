/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';

import { auth } from '../services/firebase/firebaseConfig';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logOut() {
    return signOut(auth);
  }

  function setUpRecaptha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log(
        currentuser
          ? `Usuário ${currentuser.displayName} autenticado`
          : 'Nenhum usuário autenticado'
      );
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        logOut,
        setUpRecaptha,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUserAuth() {
  return useContext(userAuthContext);
}
