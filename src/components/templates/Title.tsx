import type { FC } from 'react';

interface TitleProps {
  title: string
  subtitle: string
}

const Title: FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-black text-3xl text-zinc-800 dark:text-zinc-200">{title}</h1>
      <h2 className="font-light text-sm text-zinc-600 dark:text-zinc-300">{subtitle}</h2>
    </div>
  );
}

export default Title;