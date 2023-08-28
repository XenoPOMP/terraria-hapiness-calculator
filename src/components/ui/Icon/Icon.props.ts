import { CSSProperties } from 'react';

type GlobalIcons = 'checkMark' | 'redMark' | 'heart' | 'warn';

type TerrariaIcons =
  | 'glowing-mushroom'
  | 'unicorn-on-stick'
  | 'snow-zombie'
  | 'seagull'
  | 'turtle'
  | 'cactus'
  | 'mining-helmet'
  | 'terraria-logo';

export interface IconProps extends Pick<CSSProperties, 'width'> {
  icon: GlobalIcons | TerrariaIcons;
}
