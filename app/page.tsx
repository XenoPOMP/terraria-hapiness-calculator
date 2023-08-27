import cn from 'classnames';

import NpcCard from '@/src/components/ui/NpcCard/NpcCard';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

export default function Home() {
  return (
    <main className={cn('pb-[2rem]')}>
      <NpcCard name={'guide'} />
    </main>
  );
}
