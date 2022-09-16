import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { createContext, FC, useEffect, useState } from 'react';
import firebase from '../../firebase/config';
import UserModel from '../../model/user';

interface AuthContextProps {
  user?: UserModel
  loginUser?: (email: string, password: string) => Promise<void>
  registerUser?: (email: string, password: string) => Promise<void>
  loginGoogle?: () => Promise<void>
  logout?: () => Promise<void>
  loading?: boolean
}

export const AuthContext = createContext<AuthContextProps>({})

interface AuthProviderProps {
  children: any
}

const createUser = async (firebaseUser: firebase.User): Promise<UserModel> => {
  const token = await firebaseUser?.getIdToken();
  return {
    uid: firebaseUser?.uid,
    email: firebaseUser?.email,
    name: firebaseUser?.displayName,
    token,
    provider: firebaseUser?.providerData[0].providerId,
    urlImage: firebaseUser?.photoURL
  }
}

const manageCookie = (looged: boolean) => {
  if(looged) {
    Cookies.set('online-chat-auth', looged, {
      expires: 10
    })
  } else {
    Cookies.remove('online-chat-auth')
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
    try {
      setLoading(true);
      const resp = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
      await configSession(resp.user);
      router.push('/');
    } finally {
      setLoading(false);
    }
  }

  const loginUser = async (email, password) => {
    try {
      setLoading(true);
      const resp = await firebase.auth().signInWithEmailAndPassword(
        email, password
      )
      await configSession(resp.user);
      router.push('/');
    } finally {
      setLoading(false);
    }
  }

  const registerUser = async (email, password) => {
    try {
      setLoading(true);
      const resp = await firebase.auth().createUserWithEmailAndPassword(
        email, password
      )
      await configSession(resp.user);
      router.push('/');
    } finally {
      setLoading(false);
    }
  }


  const logout = async () => {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await configSession(null)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(Cookies.get('online-chat-auth')) {
      const cancelObserver = firebase.auth().onIdTokenChanged(configSession);
      return () => cancelObserver();
    } else {
      setLoading(false)
    }
  }, []);

  const data = {
    user,
    loginGoogle,
    loginUser,
    registerUser,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}