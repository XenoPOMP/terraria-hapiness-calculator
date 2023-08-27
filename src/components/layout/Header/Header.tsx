import cn from 'classnames';
import { FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({}) => {
  // mb-[.5em]

  return (
    <header className={cn(styles.appHeader, 'pt-[.5em] pb-[.5em] ')}>
      <UiContainer>
        <h1 className={cn('text-[1.75rem] font-bold')}>
          Таблица счастья НИПов Terraria
        </h1>
      </UiContainer>
    </header>
  );
};

export default Header;
