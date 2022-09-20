import type { FC } from 'react';
import * as styles from './styles';

interface AuthInputProps {
  label: string
  value: any
  type: 'text' | 'email' | 'password',
  valueChanged: (newValue: any) => void,
  required: boolean
}

const AuthInput: FC<AuthInputProps> = ({label, value, valueChanged, type, required}) => {
  return (
    <div className={ styles.labelStyles }>
      <label>{label}</label>
        <input
          type={ type ?? 'text'}
          value={ value }
          onChange={e => valueChanged?.(e.target.value)}
          required={ required }
          className={ styles.inputsStyles }
        />
    </div>
  );
}

export default AuthInput;