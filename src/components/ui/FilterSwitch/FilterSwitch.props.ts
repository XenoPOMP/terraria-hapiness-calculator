import { Npc } from '@/src/redux/reducers/npc.slice';

export type FilterSwitchProps = {
  name: Npc;
  isFilterReset?: boolean;
};
