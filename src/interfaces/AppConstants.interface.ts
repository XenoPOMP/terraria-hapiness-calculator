import Image from 'next/image';
import { ComponentProps } from 'react';

import { Biome, Npc, Rating } from '@/src/redux/reducers/npc.slice';

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
  biomeData: Record<
    Biome,
    {
      previewImage: ComponentProps<typeof Image>['src'];
    }
  >;
  forbiddenRatings: Rating[];
}

export default IAppConstants;
