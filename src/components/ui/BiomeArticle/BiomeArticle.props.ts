import { Defined } from '@xenopomp/advanced-types';

import { NpcState } from '@/src/redux/reducers/npc.slice';

export interface BiomeArticleProps
  extends Pick<Defined<NpcState['npc']['guide']>, 'biomes'> {}
