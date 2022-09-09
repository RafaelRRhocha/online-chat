import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { createContext, FC, useEffect, useState } from 'react';
import firebase from '../../firebase/config';
import UserModel from '../../model/user';

interface AuthContextProps {
  user?: UserModel
  loginGoogle?: () => Promise<void>
}

export const AuthContext = createContext<AuthContextProps>({})

interface AuthProviderProps {
  children: any
}

const createUser = async (firebaseUser: firebase.User): Promise<UserModel> => {
  const token = await firebaseUser.getIdToken()
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    name: firebaseUser.displayName,
    token,
    provider: firebaseUser.providerData[0].providerId,
    urlImage: firebaseUser.photoURL
  }
}

const manageCookie = (looged: boolean) => {
  if(looged) {
    Cookies.set('todo-list-auth', looged, {
      expires: 15
    })
  } else {
    Cookies.remove('todo-list-auth')
  }
}

export const AuthProvider: FC<AuthProviderProps> = ({children}) => {
  const router = useRouter();
  const [user, setUser] = useState<UserModel>(null);
  const [loading, setLoading] = useState(true);

  const configSession = async (userFirebase) => {
    const user = await createUser(userFirebase)
    if(userFirebase?.email) {
      setUser(user);
      manageCookie(true);
      setLoading(false);
      return user.email
    } else {
      setUser(null);
      manageCookie(false);
      setLoading(false);
      return false
    }
  }

  const loginGoogle = async () => {
    const resp = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
    configSession(resp.user);
    router.push('/');
  }

  useEffect(() => {
    const cancelObserver = firebase.auth().onIdTokenChanged(configSession);
    return () => cancelObserver();
  }, []);

  const data = {
    user,
    loginGoogle
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}