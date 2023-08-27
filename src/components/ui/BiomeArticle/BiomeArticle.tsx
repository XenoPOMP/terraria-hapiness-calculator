import cn from 'classnames';
import { FC } from 'react';

import MatchIcon from '@/src/components/ui/MatchIcon/MatchIcon';

import styles from './BiomeArticle.module.scss';
import type { BiomeArticleProps } from './BiomeArticle.props';

const BiomeArticle: FC<BiomeArticleProps> = ({ biomes }) => {
  const { forest, underground, desert, jungle, ocean, tundra, holy } = biomes;
  const glowingMushroomBiome = biomes['glowing-mushroom-biome'];

  return (
    <article className={cn(styles.biomeArticle)}>
      <h3>Предпочтения по биомам</h3>

      <div className={cn(styles.biomeItem)}>
        Лес <MatchIcon rating={forest} />
      </div>

      <div className={cn(styles.biomeItem)}>
        Подземелье <MatchIcon rating={underground} />
      </div>

      <div className={cn(styles.biomeItem)}>
        Пустыня <MatchIcon rating={desert} />
      </div>

      <div className={cn(styles.biomeItem)}>
        Джунгли <MatchIcon rating={jungle} />
      </div>

      <div className={cn(styles.biomeItem)}>
        Океан <MatchIcon rating={ocean} />
      </div>

      <div className={cn(styles.biomeItem)}>
        Снежный биом <MatchIcon rating={tundra} />
      </div>

      <div className={cn(styles.biomeItem)}>
        Святой биом <MatchIcon rating={holy} />
      </div>

      <div className={cn(styles.biomeItem)}>
        Грибной биом <MatchIcon rating={glowingMushroomBiome} />
      </div>
    </article>
  );
};

export default BiomeArticle;
