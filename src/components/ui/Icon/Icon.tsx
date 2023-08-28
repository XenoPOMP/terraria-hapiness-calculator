import cn from 'classnames';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

import heartIcon from '@/public/icons/832664_pixel-hearts-png.png';
//import redMarkIcon from '@/public/icons/Red mark-spli.svg';
import redMarkIcon from '@/public/icons/Red mark-2.svg';
// import checkMarkIcon from '@/public/icons/Check mark.svg';
import checkMarkIcon from '@/public/icons/check-mark-2.svg';
import { useUniqueId } from '@/src/hooks/useUniqueId';

import styles from './Icon.module.scss';
import type { IconProps } from './Icon.props';

const Icon: FC<IconProps> = ({ icon }) => {
  const id = useUniqueId();

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
    heart: (
      <>
        <Image src={heartIcon} alt={'heart-icon'} />
      </>
    ),
  };

  return (
    <div className={cn(styles.iconPlaceholder)} key={id}>
      {iconList[icon]}
    </div>
  );
};

export default Icon;
