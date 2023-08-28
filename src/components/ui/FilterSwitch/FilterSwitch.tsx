'use client';

import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { AppConstants } from '@/app/app.constants';
import { useAppDispatch, useTypedSelector } from '@/src/redux/hooks';
import { toggleFilter } from '@/src/redux/reducers/npc.slice';

import styles from './FilterSwitch.module.scss';
import type { FilterSwitchProps } from './FilterSwitch.props';

const FilterSwitch: FC<FilterSwitchProps> = ({ name }) => {
  const { formattedName, avatar } = AppConstants.npcData[name];
  const enabled = useTypedSelector(state => state.npc.filters[name]);
  const dispatch = useAppDispatch();

  return (
    <div
      className={cn(styles.switch, enabled && styles.enabled)}
      onClick={() => {
        dispatch(toggleFilter(name));
      }}
    >
      {formattedName}

      <Image src={avatar} alt={`${name}-avatar`} style={{}} />
    </div>
  );
};

export default FilterSwitch;
