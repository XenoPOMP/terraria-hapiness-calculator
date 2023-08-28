'use client';

import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { AppConstants } from '@/app/app.constants';
import { useAppDispatch, useTypedSelector } from '@/src/redux/hooks';
import { toggleFilter } from '@/src/redux/reducers/npc.slice';
import getObjectKeys from '@/src/utils/getObjectKeys';

import styles from './FilterSwitch.module.scss';
import type { FilterSwitchProps } from './FilterSwitch.props';

const FilterSwitch: FC<FilterSwitchProps> = ({ name, isFilterReset }) => {
  const { formattedName, avatar } = AppConstants.npcData[name];
  const enabled = useTypedSelector(state => state.npc.filters[name]);
  const filters = useTypedSelector(state => state.npc.filters);
  const npcNames = getObjectKeys(filters);
  const dispatch = useAppDispatch();

  return (
    <div
      className={cn(
        styles.switch,
        enabled && !isFilterReset && styles.enabled,
        isFilterReset && styles.filterReset
      )}
      onClick={() => {
        if (!isFilterReset) {
          dispatch(toggleFilter(name));
          return;
        }

        npcNames
          .filter(npc => filters[npc])
          .forEach(npcName => {
            dispatch(toggleFilter(npcName));
          });
      }}
    >
      {isFilterReset ? (
        <>Сбросить выбор</>
      ) : (
        <>
          {formattedName}

          <Image src={avatar} alt={`${name}-avatar`} style={{}} />
        </>
      )}
    </div>
  );
};

export default FilterSwitch;
