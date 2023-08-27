import cn from 'classnames';
import Image from 'next/image';
import { FC, useMemo } from 'react';

import { AppConstants } from '@/app/app.constants';
import { useTypedSelector } from '@/src/redux/hooks';
import { Npc } from '@/src/redux/reducers/npc.slice';

import styles from './NeighbourhoodArticle.module.scss';
import type { NeighbourhoodArticleProps } from './NeighbourhoodArticle.props';

const NeighbourhoodArticle: FC<NeighbourhoodArticleProps> = ({
  name,
  neighbourhood,
}) => {
  const neighbourNames: Npc[] = Object.keys(neighbourhood)
    .map(name => {
      return name as Npc;
    })
    .filter(castedName => castedName !== name);

  const verySuitableNeighbours: Npc[] = useMemo(
    () =>
      neighbourNames.filter(name => {
        const targetNeighbourRating = neighbourhood[name];

        return targetNeighbourRating === 'very-suitable';
      }),
    [name, neighbourhood]
  );

  const fitsWellNeighbours: Npc[] = useMemo(
    () =>
      neighbourNames.filter(name => {
        const targetNeighbourRating = neighbourhood[name];

        return targetNeighbourRating === 'fits-well';
      }),
    [name, neighbourhood]
  );

  const badFitNeighbours: Npc[] = useMemo(
    () =>
      neighbourNames.filter(name => {
        const targetNeighbourRating = neighbourhood[name];

        return targetNeighbourRating === 'bad-fit';
      }),
    [name, neighbourhood]
  );

  const absolutelyNotSuitableNeighbours: Npc[] = useMemo(
    () =>
      neighbourNames.filter(name => {
        const targetNeighbourRating = neighbourhood[name];

        return targetNeighbourRating === 'absolutely not suitable';
      }),
    [name, neighbourhood]
  );

  return (
    <article className={cn('mt-[1em]')}>
      <h3>Соседство</h3>

      <h4 className={cn('mt-[.75em]')}>Отличный сосед</h4>
      {verySuitableNeighbours.map(name => (
        <div className={cn('text-[.75em] ml-[1em]')}>
          <Image
            src={AppConstants.npcData[name].avatar}
            alt={`${name}-avatar`}
          />
        </div>
      ))}

      <h4 className={cn('mt-[.75em]')}>Хороший сосед</h4>
      {fitsWellNeighbours.map(name => (
        <div className={cn('text-[.75em] ml-[1em]')}>
          <Image
            src={AppConstants.npcData[name].avatar}
            alt={`${name}-avatar`}
          />
        </div>
      ))}

      <h4 className={cn('mt-[.75em]')}>Плохой сосед</h4>
      {badFitNeighbours.map(name => (
        <div className={cn('text-[.75em] ml-[1em]')}>
          <Image
            src={AppConstants.npcData[name].avatar}
            alt={`${name}-avatar`}
          />
        </div>
      ))}

      <h4 className={cn('mt-[.75em]')}>Худший сосед</h4>
      {absolutelyNotSuitableNeighbours.map(name => (
        <div className={cn('text-[.75em] ml-[1em]')}>
          <Image
            src={AppConstants.npcData[name].avatar}
            alt={`${name}-avatar`}
          />
        </div>
      ))}
    </article>
  );
};

export default NeighbourhoodArticle;
