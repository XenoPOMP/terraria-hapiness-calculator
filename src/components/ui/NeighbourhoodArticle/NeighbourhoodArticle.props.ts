import { Npc, NpcState } from '@/src/redux/reducers/npc.slice';

export interface NeighbourhoodArticleProps
  extends Pick<NpcState['npc']['guide'], 'neighbourhood'> {
  name: Npc;
}
