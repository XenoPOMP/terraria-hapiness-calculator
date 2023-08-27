import cn from 'classnames';
import { FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './MatcherSection.module.scss';
import type { MatcherSectionProps } from './MatcherSection.props';

const MatcherSection: FC<MatcherSectionProps> = ({}) => {
  return (
    <UiContainer className={cn('my-[1.25em]', styles.matcher)}>
      <h2 className={cn('text-[1.35em] font-semibold')}>
        Вот, что удалось найти
      </h2>
    </UiContainer>
  );
};

export default MatcherSection;
