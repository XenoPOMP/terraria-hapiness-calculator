'use client';

import cn from 'classnames';
import { FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { useTypedSelector } from '@/src/redux/hooks';
import { Npc } from '@/src/redux/reducers/npc.slice';
import { isUndefined } from '@/src/utils/type-checks';

import styles from './MatcherSection.module.scss';
import type { MatcherSectionProps } from './MatcherSection.props';

const MatcherSection: FC<MatcherSectionProps> = ({}) => {
  const filters = useTypedSelector(state => state.npc.filters);

  const npcNames: Npc[] = Object.keys(filters).map(name => {
    return name as Npc;
  });

  const isAnyFilterEnabled: boolean = !isUndefined(
    npcNames.find(name => filters[name])
  );

  const activatedNames: Npc[] = npcNames.filter(name => filters[name]);

  return (
    <>
      {isAnyFilterEnabled && (
        <UiContainer className={cn('my-[1.25em]', styles.matcher)}>
          <h2 className={cn('text-[1.35em] font-semibold')}>
            Вот, что удалось найти
          </h2>

          {activatedNames.map(name => (
            <div>{name}</div>
          ))}
        </UiContainer>
      )}
    </>
  );
};

export default MatcherSection;
