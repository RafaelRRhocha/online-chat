import type { FC } from 'react';

interface AuthInputProps {
  label: string
  value: any
  type: 'text' | 'email' | 'password',
  valueChanged: (newValue: any) => void,
  required: boolean
}

const AuthInput: FC<AuthInputProps> = ({label, value, valueChanged, type, required}) => {
  return (
    <div className="flex flex-col mt-4">
      <label>{label}</label>
        <input
          type={ type ?? 'text'}
          value={ value }
          onChange={e => valueChanged?.(e.target.value)}
          required={ required }
          className="py-4 px-3 rounded-lg bg-zinc-300 mt-2 border focus:border-violet-500 focus:outline-none focus:bg-zinc-100"
        />
    </div>
  );
}

export default AuthInput;