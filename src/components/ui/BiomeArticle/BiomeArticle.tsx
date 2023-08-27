import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import cn from 'classnames';
import { FC } from 'react';

import { AppConstants } from '@/app/app.constants';
import Icon from '@/src/components/ui/Icon/Icon';
import { Biome, Rating } from '@/src/redux/reducers/npc.slice';

import styles from './BiomeArticle.module.scss';
import type { BiomeArticleProps } from './BiomeArticle.props';

const BiomeArticle: FC<BiomeArticleProps> = ({ biomes }) => {
  const { forest, underground, desert, jungle, ocean, tundra, holy } = biomes;
  const glowingMushroomBiome = biomes['glowing-mushroom-biome'];

  const MatchIcon: FC<{ rating: Rating }> = ({ rating }) => {
    const forbiddenRatings: Rating[] = [
      'absolutely not suitable',
      'bad-fit',
      'uncomfortable',
    ];

    if (forbiddenRatings.includes(rating)) {
      return (
        <>
          <Icon icon={'redMark'} />
        </>
      );
    }

    return (
      <>
        <Icon icon={'checkMark'} />
      </>
    );
  };

  return (
    <article className={cn(styles.biomeArticle)}>
      <h3>Предпочтения по биомам</h3>

      <p className={cn(styles.biomeItem)}>
        Лес <MatchIcon rating={forest} />
      </p>

      <p className={cn(styles.biomeItem)}>
        Подземелье <MatchIcon rating={underground} />
      </p>

      <p className={cn(styles.biomeItem)}>
        Пустыня <MatchIcon rating={desert} />
      </p>

      <p className={cn(styles.biomeItem)}>
        Джунгли <MatchIcon rating={jungle} />
      </p>

      <p className={cn(styles.biomeItem)}>
        Океан <MatchIcon rating={ocean} />
      </p>

      <p className={cn(styles.biomeItem)}>
        Снежный биом <MatchIcon rating={tundra} />
      </p>

      <p className={cn(styles.biomeItem)}>
        Святой биом <MatchIcon rating={holy} />
      </p>

      <p className={cn(styles.biomeItem)}>
        Грибной биом <MatchIcon rating={glowingMushroomBiome} />
      </p>
    </article>
  );
};

export default BiomeArticle;
