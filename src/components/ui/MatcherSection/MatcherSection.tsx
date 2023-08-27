'use client';

import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { AppConstants } from '@/app/app.constants';
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

          <article className={cn(styles.npcList)}>
            {activatedNames.map(name => (
              <Image
                src={AppConstants.npcData[name].avatar}
                alt={`${name}-avatar`}
              />
            ))}
          </article>

          <article className={cn(styles.info)}></article>
        </UiContainer>
      )}
    </>
  );
};

export default MatcherSection;
