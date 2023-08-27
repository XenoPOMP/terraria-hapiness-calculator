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

import { Biome, Rating } from '@/src/redux/reducers/npc.slice';

import styles from './BiomeArticle.module.scss';
import type { BiomeArticleProps } from './BiomeArticle.props';

const BiomeArticle: FC<BiomeArticleProps> = ({ biomes }) => {
  const { forest, underground, desert, jungle, ocean, tundra, holy } = biomes;
  const glowingMushroomBiome = biomes['glowing-mushroom-biome'];

  const MatchIcon: FC<{ rating: Rating; targetRating: Rating }> = ({
    rating,
    targetRating,
  }) => {
    if (rating === 'no-data' || rating !== targetRating) {
      return <></>;
    }

    return (
      <div className={cn('w-full h-full flex justify-center items-center')}>
        <div
          className={cn('w-[.75em] aspect-square bg-[black]')}
          style={{
            borderRadius: '50%',
          }}
        ></div>
      </div>
    );
  };

  const Row: FC<{ rating: Rating; displayingName: string }> = ({
    rating,
    displayingName,
  }) => {
    return (
      <TableRow>
        <TableCell align={'right'}>{displayingName}</TableCell>

        <TableCell align={'center'}>
          <MatchIcon rating={rating} targetRating={'very-suitable'} />
        </TableCell>

        <TableCell align={'center'}>
          <MatchIcon rating={rating} targetRating={'fits-well'} />
        </TableCell>

        <TableCell align={'center'}>
          <MatchIcon rating={rating} targetRating={'uncomfortable'} />
        </TableCell>

        <TableCell align={'center'}>
          <MatchIcon rating={rating} targetRating={'bad-fit'} />
        </TableCell>

        <TableCell align={'center'}>
          <MatchIcon rating={rating} targetRating={'absolutely not suitable'} />
        </TableCell>
      </TableRow>
    );
  };

  return (
    <article className={cn(styles.biomeArticle)}>
      <TableContainer component={Paper}>
        <Table
          sx={{
            td: {
              borderWidth: 1,
            },
            th: {
              borderWidth: 1,
            },
          }}
        >
          <TableHead
            sx={{
              background: '#bfcde4',
            }}
          >
            <TableRow>
              <TableCell align={'center'} component={'th'}>
                <b>Биом</b>
              </TableCell>

              <TableCell align={'center'} component={'th'}>
                <b>Очень хорошо</b>
              </TableCell>

              <TableCell align={'center'} component={'th'}>
                <b>Хорошо</b>
              </TableCell>

              <TableCell align={'center'} component={'th'}>
                <b>Некомфортно</b>
              </TableCell>

              <TableCell align={'center'} component={'th'}>
                <b>Плохо</b>
              </TableCell>

              <TableCell align={'center'} component={'th'}>
                <b>Не может жить</b>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <Row rating={forest} displayingName={'Лес'} />
            <Row rating={underground} displayingName={'Подземелье'} />
            <Row rating={desert} displayingName={'Пустыня'} />
            <Row rating={jungle} displayingName={'Джунгли'} />
            <Row rating={ocean} displayingName={'Океан'} />
            <Row rating={tundra} displayingName={'Снежный биом'} />
            <Row rating={holy} displayingName={'Святой биом'} />
            <Row
              rating={glowingMushroomBiome}
              displayingName={'Грибной биом'}
            />
          </TableBody>
        </Table>
      </TableContainer>
    </article>
  );
};

export default BiomeArticle;
