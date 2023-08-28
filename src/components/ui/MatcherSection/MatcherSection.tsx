'use client';

import cn from 'classnames';
import Image from 'next/image';
import { FC, useEffect } from 'react';

import { AppConstants } from '@/app/app.constants';
import Icon from '@/src/components/ui/Icon/Icon';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { useTypedSelector } from '@/src/redux/hooks';
import { Npc, Rating } from '@/src/redux/reducers/npc.slice';
import getObjectKeys from '@/src/utils/getObjectKeys';
import { isUndefined } from '@/src/utils/type-checks';

import styles from './MatcherSection.module.scss';
import type { MatcherSectionProps } from './MatcherSection.props';

const MatcherSection: FC<MatcherSectionProps> = ({}) => {
  const { filters, mostProperBiomes, relationShipRating } = useTypedSelector(
    state => state.npc
  );

  const totalBiomeCount = getObjectKeys(
    useTypedSelector(state => state.npc.npc.guide.biomes)
  ).length;

  const npcNames: Npc[] = Object.keys(filters).map(name => {
    return name as Npc;
  });

  const isAnyFilterEnabled: boolean = !isUndefined(
    npcNames.find(name => filters[name])
  );

  const activatedNames: Npc[] = npcNames.filter(name => filters[name]);

  const mostProperBiomeRating: Rating =
    mostProperBiomes !== undefined ? mostProperBiomes[0].rating : 'no-data';

  useEffect(() => {
    console.log({
      mostProperBiomeRating,
    });
  }, [mostProperBiomes]);

  return (
    <>
      {isAnyFilterEnabled && (
        <UiContainer className={cn('mt-[1.25em] mb-[2.5em]', styles.matcher)}>
          <h2 className={cn('text-[1.35em] font-semibold')}>
            Вот, что удалось найти
          </h2>

          <article className={cn(styles.npcList)}>
            {activatedNames.map((name, index) => (
              <Image
                src={AppConstants.npcData[name].avatar}
                alt={`${name}-avatar`}
                key={`npc-${index}`}
              />
            ))}
          </article>

          <article className={cn(styles.info)}>
            <div
              className={cn(
                styles.block,
                mostProperBiomeRating === 'very-suitable' &&
                  styles.verySuitable,
                (mostProperBiomeRating === 'fits-well' ||
                  mostProperBiomeRating === undefined) &&
                  styles.fitsWell,
                mostProperBiomeRating === 'bad-fit' && styles.badFit,
                mostProperBiomeRating === 'absolutely not suitable' &&
                  styles.absolutelyNotSuitable,
                'flex gap-[1em] flex-wrap'
              )}
              style={{
                alignItems: 'start',
              }}
            >
              {mostProperBiomes?.length === totalBiomeCount ? (
                <div>Любой</div>
              ) : (
                mostProperBiomes?.map(biome => {
                  return (
                    <div
                      className={cn(
                        // 'border-2 border-red-600',
                        styles.biomePreview,
                        'flex items-center gap-[.3em]'
                      )}
                    >
                      <Icon
                        icon={AppConstants.biomeData[biome.name].icon}
                        width={'.8em'}
                      />

                      {AppConstants.biomeData[biome.name].formattedName}
                    </div>
                  );
                })
              )}

              <div className={cn(styles.iconPreview)}>
                {mostProperBiomeRating === 'very-suitable' && (
                  <Icon icon={'heart'} />
                )}

                {(mostProperBiomeRating === 'fits-well' ||
                  mostProperBiomeRating === undefined) && (
                  <Icon icon={'checkMark'} />
                )}

                {mostProperBiomeRating === 'bad-fit' && <Icon icon={'warn'} />}

                {mostProperBiomeRating === 'absolutely not suitable' && (
                  <Icon icon={'redMark'} />
                )}
              </div>
            </div>

            <div
              className={cn(
                styles.block,
                relationShipRating === 'very-suitable' && styles.verySuitable,
                (relationShipRating === 'fits-well' ||
                  relationShipRating === undefined) &&
                  styles.fitsWell,
                relationShipRating === 'bad-fit' && styles.badFit,
                relationShipRating === 'absolutely not suitable' &&
                  styles.absolutelyNotSuitable
              )}
            >
              <div>
                {/*Relation: {relationShipRating}*/}
                {relationShipRating === 'very-suitable' && <>Отличные соседи</>}

                {(relationShipRating === 'fits-well' ||
                  relationShipRating === undefined) && <>Хорошие соседи</>}

                {relationShipRating === 'bad-fit' && <>Плохие соседи</>}

                {relationShipRating === 'absolutely not suitable' && (
                  <>Худшие соседи</>
                )}
              </div>

              <div className={cn(styles.iconPreview)}>
                {relationShipRating === 'very-suitable' && (
                  <Icon icon={'heart'} />
                )}

                {(relationShipRating === 'fits-well' ||
                  relationShipRating === undefined) && (
                  <Icon icon={'checkMark'} />
                )}

                {relationShipRating === 'bad-fit' && <Icon icon={'warn'} />}

                {relationShipRating === 'absolutely not suitable' && (
                  <Icon icon={'redMark'} />
                )}
              </div>
            </div>
          </article>
        </UiContainer>
      )}
    </>
  );
};

export default MatcherSection;
