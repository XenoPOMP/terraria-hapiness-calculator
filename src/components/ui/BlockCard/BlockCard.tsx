import { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { AppConstants } from '@/app/app.constants';

import styles from './BlockCard.module.scss';
import type { BlockCardProps } from './BlockCard.props';

const BlockCard: FC<PropsWith<'children', BlockCardProps>> = ({
  heading,
  children,
  classnames,
}) => {
  return (
    <div className={cn(styles.group, classnames?.block)}>
      <h4>{heading}</h4>

      <div className={cn(styles.body, classnames?.body)}>{children}</div>
    </div>
  );
};

export default BlockCard;
