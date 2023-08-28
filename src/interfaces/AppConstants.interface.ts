import Image from 'next/image';
import { ComponentProps, ReactNode } from 'react';

import Icon from '@/src/components/ui/Icon/Icon';
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
      formattedName: string;
      icon: ComponentProps<typeof Icon>['icon'];
      previewImage: ComponentProps<typeof Image>['src'];
    }
  >;
  forbiddenRatings: Rating[];
}

export default IAppConstants;
