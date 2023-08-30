'use client';

import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { AppConstants } from '@/app/app.constants';
import { useAppDispatch, useTypedSelector } from '@/src/redux/hooks';
import {
  changeDisableStatus,
  toggleFilter,
} from '@/src/redux/reducers/npc.slice';
import getObjectKeys from '@/src/utils/getObjectKeys';

import styles from './FilterSwitch.module.scss';
import type { FilterSwitchProps } from './FilterSwitch.props';

const FilterSwitch: FC<FilterSwitchProps> = ({ name, isFilterReset }) => {
  const { formattedName, avatar } = AppConstants.npcData[name];
  const enabled = useTypedSelector(state => state.npc.filters[name]);
  const isFilterDisabled = useTypedSelector(
    state => state.npc.disabledFilters[name]
  );
  const filters = useTypedSelector(state => state.npc.filters);
  const npcNames = getObjectKeys(filters);
  const dispatch = useAppDispatch();

  return (
    <div
      className={cn(
        styles.switch,
        enabled && !isFilterReset && styles.enabled,
        isFilterReset && styles.filterReset,
        isFilterDisabled && styles.disabled
      )}
      onClick={ev => {
        const isCtrlKey = ev.ctrlKey;

        if (!isFilterReset) {
          if (isCtrlKey) {
            console.log('CTRL key pressed.');

            if (enabled) {
              dispatch(toggleFilter(name));
            }

            dispatch(
              changeDisableStatus({
                npc: name,
                newValue: !isFilterDisabled,
              })
            );

            return;
          }

          if (isFilterDisabled) {
            return;
          }

          dispatch(
            changeDisableStatus({
              npc: name,
              newValue: false,
            })
          );

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
