import Image from 'next/image';
import { ComponentProps } from 'react';

import { Npc } from '@/src/redux/reducers/npc.slice';

interface IAppConstants {
  appName: string;
  maxContainerWidth: string;
  npcData: Record<
    Npc,
    {
      avatar: ComponentProps<typeof Image>['src'];
      formattedName: string;
    }
  >;
}

export default IAppConstants;
