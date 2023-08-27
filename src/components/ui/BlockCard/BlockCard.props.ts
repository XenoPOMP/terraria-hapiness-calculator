import { ReactNode } from 'react';

export interface BlockCardProps {
  heading?: ReactNode;
  classnames?: Record<'block' | 'body', string>;
}
