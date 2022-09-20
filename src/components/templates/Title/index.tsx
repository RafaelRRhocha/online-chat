import type { FC } from 'react';
import * as styles from './styles';

interface TitleProps {
  title: string
  subtitle: string
}

const Title: FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className={ styles.divStyles }>
      <h1 className={ styles.h1Styles }>{title}</h1>
      <h2 className={ styles.h2Styles }>{subtitle}</h2>
    </div>
  );
}

export default Title;