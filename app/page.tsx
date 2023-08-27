import cn from 'classnames';

import NpcCard from '@/src/components/ui/NpcCard/NpcCard';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

export default function Home() {
  return (
    <main className={cn('pb-[2rem]')}>
      <NpcCard name={'guide'} />
      <NpcCard name={'seller'} />
      <NpcCard name={'zoologist'} />
      <NpcCard name={'golfer'} />
      <NpcCard name={'bomber'} />
      <NpcCard name={'tailor'} />
      <NpcCard name={'goblin-engineer'} />
      <NpcCard name={'gunner'} />
      <NpcCard name={'paint-seller'} />
      <NpcCard name={'steampunker'} />
      <NpcCard name={'triad'} />
      <NpcCard name={'painter'} />
      <NpcCard name={'witch-doctor'} />
      <NpcCard name={'stylist'} />
      <NpcCard name={'angler'} />
      <NpcCard name={'pirate'} />
      <NpcCard name={'mechanic'} />
      <NpcCard name={'cyborg'} />
      <NpcCard name={'tax-collector'} />
      <NpcCard name={'nurse'} />
      <NpcCard name={'party-girl'} />
      <NpcCard name={'tavernkeep'} />
      <NpcCard name={'magician'} />
      <NpcCard name={'truffle'} />
      <NpcCard name={'santa'} />
    </main>
  );
}
