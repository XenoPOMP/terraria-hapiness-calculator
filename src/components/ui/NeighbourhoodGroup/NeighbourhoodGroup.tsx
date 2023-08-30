import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { AppConstants } from '@/app/app.constants';

import styles from './NeighbourhoodGroup.module.scss';
import type { NeighbourhoodGroupProps } from './NeighbourhoodGroup.props';

const NeighbourhoodGroup: FC<NeighbourhoodGroupProps> = ({ type, names }) => {
  const getHeadingText = (): Record<'multiple' | 'single', string> => {
    switch (type) {
      case 'very-suitable': {
        return {
          multiple: 'Отличные соседи',
          single: 'Отличный сосед',
        };
      }

      case 'fits-well': {
        return {
          multiple: 'Хорошие соседи',
          single: 'Хороший сосед',
        };
      }

      case 'bad-fit': {
        return {
          multiple: 'Плохие соседи',
          single: 'Плохой сосед',
        };
      }

      case 'absolutely not suitable': {
        return {
          multiple: 'Худшие соседи',
          single: 'Худший сосед',
        };
      }
    }

    return {
      multiple: '',
      single: '',
    };
  };

  const getInlineClasses = (): string => {
    let typeClass = '';

    switch (type) {
      case 'very-suitable': {
        return styles.verySuitable;
      }

      case 'fits-well': {
        return styles.fitWell;
      }

      case 'bad-fit': {
        return styles.badFit;
      }

      case 'absolutely not suitable': {
        return styles.absolutelyNotSuitable;
      }
    }

    return cn(typeClass);
  };

  return (
    <div className={cn(styles.group, getInlineClasses())}>
      <h4>
        {names.length === 1
          ? getHeadingText().single
          : getHeadingText().multiple}
      </h4>

      <div className={cn(styles.npcBlock)}>
        {names.length === 0 && <>-</>}

        {names.map((name, index) => {
          return (
            <Image
              src={AppConstants.npcData[name].avatar}
              alt={`${name}-avatar)`}
              key={`${name}-avatar-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NeighbourhoodGroup;
