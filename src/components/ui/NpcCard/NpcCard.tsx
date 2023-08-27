'use client';

import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { AppConstants } from '@/app/app.constants';
import BiomeArticle from '@/src/components/ui/BiomeArticle/BiomeArticle';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { useTypedSelector } from '@/src/redux/hooks';

import styles from './NpcCard.module.scss';
import type { NpcCardProps } from './NpcCard.props';

const NpcCard: FC<NpcCardProps> = ({ name }) => {
  const { biomes, neighbourhood } = useTypedSelector(
    state => state.npc.npc[name]
  );

  const { formattedName, avatar } = AppConstants.npcData[name];

  return (
    <UiContainer className={cn('text-[1rem]', styles.card)}>
      <header className={cn(styles.title)}>
        <h2 className={cn('text-[1.35rem] font-semibold')}>{formattedName}</h2>

        <Image src={avatar} alt={`${name}-avatar`} />
      </header>

      <BiomeArticle biomes={biomes} />
    </UiContainer>
  );
};

export default NpcCard;
