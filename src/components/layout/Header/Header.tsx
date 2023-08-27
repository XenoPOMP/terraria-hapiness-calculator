import cn from 'classnames';
import { FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header>
      <UiContainer>
        <h1 className={cn('text-[1.75rem] mt-[.5em] mb-[1em] font-bold')}>
          Таблица счастья НИПов Terraria
        </h1>
      </UiContainer>
    </header>
  );
};

export default Header;
