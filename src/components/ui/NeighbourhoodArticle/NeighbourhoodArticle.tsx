import cn from 'classnames';
import { FC, useMemo } from 'react';

import NeighbourhoodGroup from '@/src/components/ui/NeighbourhoodGroup/NeighbourhoodGroup';
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
    <article className={cn('mt-[1em]', styles.neighbourhood)}>
      <h3>Соседство</h3>

      <div className={cn(styles.grid)}>
        <NeighbourhoodGroup
          names={verySuitableNeighbours}
          type={'very-suitable'}
        />

        <NeighbourhoodGroup names={fitsWellNeighbours} type={'fits-well'} />

        <NeighbourhoodGroup names={badFitNeighbours} type={'bad-fit'} />

        <NeighbourhoodGroup
          names={absolutelyNotSuitableNeighbours}
          type={'absolutely not suitable'}
        />
      </div>
    </article>
  );
};

export default NeighbourhoodArticle;
