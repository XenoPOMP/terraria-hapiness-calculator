import { FC } from 'react';

import { AppConstants } from '@/app/app.constants';
import Icon from '@/src/components/ui/Icon/Icon';
import { Rating } from '@/src/redux/reducers/npc.slice';

const MatchIcon: FC<{ rating: Rating }> = ({ rating }) => {
  if (AppConstants.forbiddenRatings.includes(rating)) {
    return (
      <>
        <Icon icon={'redMark'} />
      </>
    );
  }

  if (rating === 'very-suitable') {
    return (
      <>
        <Icon icon={'heart'} />
      </>
    );
  }

  return (
    <>
      <Icon icon={'checkMark'} />
    </>
  );
};

export default MatchIcon;
