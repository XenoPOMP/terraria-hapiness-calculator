'use client';

import cn from 'classnames';
import { FC } from 'react';

import FilterSwitch from '@/src/components/ui/FilterSwitch/FilterSwitch';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { useTypedSelector } from '@/src/redux/hooks';
import getObjectKeys from '@/src/utils/getObjectKeys';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({}) => {
  const filters = useTypedSelector(state => state.npc.filters);

  const hasTwoOrMoreFilters: boolean =
    getObjectKeys(filters).filter(npcName => filters[npcName]).length >= 2;

  return (
    <header className={cn(styles.appHeader, 'pt-[.5em] pb-[.5em] ')}>
      <UiContainer>
        <h1 className={cn('text-[1.75rem] font-bold')}>
          Таблица счастья НИПов Terraria
        </h1>
      </UiContainer>

      {hasTwoOrMoreFilters && (
        <UiContainer className={cn('my-[.75em]')}>
          <FilterSwitch name={'guide'} isFilterReset />
        </UiContainer>
      )}

      <UiContainer
        className={cn(
          !hasTwoOrMoreFilters && 'mt-[.75em]',
          'mb-[1em] flex flex-wrap gap-[.25em]'
        )}
      >
        <FilterSwitch name={'guide'} />
        <FilterSwitch name={'seller'} />
        <FilterSwitch name={'zoologist'} />
        <FilterSwitch name={'golfer'} />
        <FilterSwitch name={'bomber'} />
        <FilterSwitch name={'tailor'} />
        <FilterSwitch name={'goblin-engineer'} />
        <FilterSwitch name={'gunner'} />
        <FilterSwitch name={'paint-seller'} />
        <FilterSwitch name={'steampunker'} />
        <FilterSwitch name={'triad'} />
        <FilterSwitch name={'painter'} />
        <FilterSwitch name={'witch-doctor'} />
        <FilterSwitch name={'stylist'} />
        <FilterSwitch name={'angler'} />
        <FilterSwitch name={'pirate'} />
        <FilterSwitch name={'mechanic'} />
        <FilterSwitch name={'cyborg'} />
        <FilterSwitch name={'tax-collector'} />
        <FilterSwitch name={'nurse'} />
        <FilterSwitch name={'party-girl'} />
        <FilterSwitch name={'tavernkeep'} />
        <FilterSwitch name={'magician'} />
        <FilterSwitch name={'truffle'} />
        <FilterSwitch name={'santa'} />
      </UiContainer>
    </header>
  );
};

export default Header;
