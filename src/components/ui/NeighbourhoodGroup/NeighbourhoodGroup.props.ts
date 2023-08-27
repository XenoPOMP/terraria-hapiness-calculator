import { Npc, Rating } from '@/src/redux/reducers/npc.slice';

export interface NeighbourhoodGroupProps {
  names: Npc[];
  type: Exclude<Rating, 'uncomfortable'>;
}
