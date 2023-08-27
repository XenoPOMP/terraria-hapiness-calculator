import cn from 'classnames';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

import checkMarkIcon from '@/public/icons/Check mark.svg';
import redMarkIcon from '@/public/icons/Red mark-spli.svg';

import styles from './Icon.module.scss';
import type { IconProps } from './Icon.props';

const Icon: FC<IconProps> = ({ icon }) => {
  const iconList: Record<IconProps['icon'], ReactNode> = {
    checkMark: (
      <>
        <Image src={checkMarkIcon} alt={'check-mark-icon'} />
      </>
    ),
    redMark: (
      <>
        <Image src={redMarkIcon} alt={'red-mark-icon'} />
      </>
    ),
  };

  return <div className={cn(styles.iconPlaceholder)}>{iconList[icon]}</div>;
};

export default Icon;
