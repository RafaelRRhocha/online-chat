import { FC, useState } from 'react';
import AuthInput from '../../components/auth/AuthInput';
import { Warning } from '../../components/icons';
import { useAuth } from '../../data/hook/useAuth';
import * as styles from './styles';

interface AuthenticationProps {}

const Authentication: FC<AuthenticationProps> = ({}) => {
  const { loginUser, registerUser , loginGoogle } = useAuth();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const sendError = (msg: any, time = 5) => {
    setError(msg)
    setTimeout(() => setError(null), time * 1000)
  }

  const submitForm = async () => {
    try {
      if(mode === 'login') {
        await loginUser(email, password)
      } else {
        await registerUser(email, password)
      }
    } catch (error) {
      sendError(error.message ?? 'Um erro desconhecido ocorreu')
    }
  }

  return (
    <div className={ styles.divFather }>
      <div className={ styles.imgDiv }>
        <picture>
            <img
              src="https://picsum.photos/1000"
              alt="image authentication"
              className={ styles.imgStyles }
            />
        </picture>
      </div>
      <div className={ styles.headerDiv }>
        <h1 className={ styles.h1LoginOrRegister }>{mode === 'login' ? 'Entre com sua conta' : 'Registre sua conta'}</h1>
        {error && (
          <div className={ styles.errorDiv }>
            {Warning}
            <p className={ styles.errorText }>
              {error}
            </p>
          </div>
        )}
        <AuthInput label="Email" value={email} type="email" valueChanged={setEmail} required />
        <AuthInput label="Senha" value={password} type="password" valueChanged={setPassword} required />
        <button onClick={ submitForm } className={ styles.loginButton }>
          {mode === 'login' ? 'Entrar' : 'Registrar'}
        </button>
        <hr className="my-6 border-zinc-300 w-full" />
        <button onClick={ loginGoogle } className={ styles.googleButton }>
          Entre com o Google
        </button>
        {mode === 'login' ? (
          <p className={ styles.loginOrRegisterP }>
            Novo por Aqui?
            <a onClick={() => setMode('register')} className={ styles.loginOrRegisterA }>
              Crie uma conta Gratuitamente!
            </a>
          </p>
        ) : (
          <p className={ styles.loginOrRegisterP }>
            Já possui uma Conta?
            <a onClick={() => setMode('login')} className={ styles.loginOrRegisterA }>
              Entre aqui!
            </a>
          </p>
        )}
      </div>
    </div>
    );
}

export default Authentication;