import { createSlice } from '@reduxjs/toolkit';
import { RecordKey, RecordValue } from '@xenopomp/advanced-types';

import { type ReduxAction } from '@/src/redux/types';
import getObjectKeys from '@/src/utils/getObjectKeys';
import { isHighest } from '@/src/utils/isHighest';
import { isUndefined } from '@/src/utils/type-checks';

export type Npc =
  | 'guide'
  | 'seller'
  | 'zoologist'
  | 'golfer'
  | 'bomber'
  | 'tailor'
  | 'goblin-engineer'
  | 'gunner'
  | 'paint-seller'
  | 'steampunker'
  | 'triad'
  | 'painter'
  | 'witch-doctor'
  | 'stylist'
  | 'angler'
  | 'pirate'
  | 'mechanic'
  | 'cyborg'
  | 'tax-collector'
  | 'nurse'
  | 'party-girl'
  | 'tavernkeep'
  | 'magician'
  | 'truffle'
  | 'santa';

export type Biome =
  | 'forest'
  | 'underground'
  | 'desert'
  | 'jungle'
  | 'ocean'
  | 'tundra'
  | 'holy'
  | 'glowing-mushroom-biome';

export type Rating =
  | 'very-suitable'
  | 'fits-well'
  | 'uncomfortable'
  | 'bad-fit'
  | 'absolutely not suitable'
  | 'no-data';

export type NpcState = {
  npc: Record<
    Npc,
    {
      biomes: Record<Biome, Rating>;
      neighbourhood: Record<Npc, Rating>;
    }
  >;

  filters: Record<Npc, boolean>;
  disabledFilters: Record<Npc, boolean>;

  mostProperBiomes?: Array<{
    name: Biome;
    rating: Rating;
  }>;

  relationShipRating?: Rating;
};

const initialState: NpcState = {
  npc: {
    guide: {
      biomes: {
        forest: 'very-suitable',
        underground: 'no-data',
        desert: 'no-data',
        jungle: 'no-data',
        ocean: 'absolutely not suitable',
        tundra: 'no-data',
        holy: 'no-data',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'no-data',
        zoologist: 'fits-well',
        golfer: 'no-data',
        bomber: 'no-data',
        tailor: 'fits-well',
        'goblin-engineer': 'no-data',
        gunner: 'no-data',
        'paint-seller': 'no-data',
        steampunker: 'bad-fit',
        triad: 'no-data',
        painter: 'absolutely not suitable',
        'witch-doctor': 'no-data',
        stylist: 'no-data',
        angler: 'no-data',
        pirate: 'no-data',
        mechanic: 'no-data',
        cyborg: 'no-data',
        'tax-collector': 'no-data',
        nurse: 'no-data',
        'party-girl': 'no-data',
        tavernkeep: 'no-data',
        magician: 'no-data',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    seller: {
      biomes: {
        forest: 'very-suitable',
        underground: 'no-data',
        desert: 'absolutely not suitable',
        jungle: 'no-data',
        ocean: 'no-data',
        tundra: 'no-data',
        holy: 'no-data',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'no-data',
        zoologist: 'no-data',
        golfer: 'fits-well',
        bomber: 'no-data',
        tailor: 'no-data',
        'goblin-engineer': 'no-data',
        gunner: 'no-data',
        'paint-seller': 'no-data',
        steampunker: 'no-data',
        triad: 'no-data',
        painter: 'no-data',
        'witch-doctor': 'no-data',
        stylist: 'no-data',
        angler: 'absolutely not suitable',
        pirate: 'no-data',
        mechanic: 'no-data',
        cyborg: 'no-data',
        'tax-collector': 'bad-fit',
        nurse: 'fits-well',
        'party-girl': 'no-data',
        tavernkeep: 'no-data',
        magician: 'no-data',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    zoologist: {
      biomes: {
        forest: 'very-suitable',
        underground: 'no-data',
        desert: 'absolutely not suitable',
        jungle: 'no-data',
        ocean: 'no-data',
        tundra: 'no-data',
        holy: 'no-data',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'no-data',
        zoologist: 'no-data',
        golfer: 'fits-well',
        bomber: 'no-data',
        tailor: 'no-data',
        'goblin-engineer': 'no-data',
        gunner: 'absolutely not suitable',
        'paint-seller': 'no-data',
        steampunker: 'no-data',
        triad: 'no-data',
        painter: 'no-data',
        'witch-doctor': 'very-suitable',
        stylist: 'no-data',
        angler: 'bad-fit',
        pirate: 'no-data',
        mechanic: 'no-data',
        cyborg: 'no-data',
        'tax-collector': 'no-data',
        nurse: 'no-data',
        'party-girl': 'no-data',
        tavernkeep: 'no-data',
        magician: 'no-data',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    golfer: {
      biomes: {
        forest: 'very-suitable',
        underground: 'absolutely not suitable',
        desert: 'no-data',
        jungle: 'no-data',
        ocean: 'no-data',
        tundra: 'no-data',
        holy: 'no-data',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'absolutely not suitable',
        zoologist: 'fits-well',
        golfer: 'no-data',
        bomber: 'no-data',
        tailor: 'no-data',
        'goblin-engineer': 'no-data',
        gunner: 'no-data',
        'paint-seller': 'no-data',
        steampunker: 'no-data',
        triad: 'no-data',
        painter: 'fits-well',
        'witch-doctor': 'no-data',
        stylist: 'no-data',
        angler: 'very-suitable',
        pirate: 'bad-fit',
        mechanic: 'no-data',
        cyborg: 'no-data',
        'tax-collector': 'no-data',
        nurse: 'no-data',
        'party-girl': 'no-data',
        tavernkeep: 'no-data',
        magician: 'no-data',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    bomber: {
      biomes: {
        forest: 'no-data',
        underground: 'very-suitable',
        desert: 'no-data',
        jungle: 'no-data',
        ocean: 'absolutely not suitable',
        tundra: 'no-data',
        holy: 'no-data',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'no-data',
        zoologist: 'no-data',
        golfer: 'no-data',
        bomber: 'no-data',
        tailor: 'no-data',
        'goblin-engineer': 'bad-fit',
        gunner: 'bad-fit',
        'paint-seller': 'no-data',
        steampunker: 'no-data',
        triad: 'no-data',
        painter: 'no-data',
        'witch-doctor': 'no-data',
        stylist: 'no-data',
        angler: 'no-data',
        pirate: 'no-data',
        mechanic: 'fits-well',
        cyborg: 'no-data',
        'tax-collector': 'no-data',
        nurse: 'no-data',
        'party-girl': 'no-data',
        tavernkeep: 'very-suitable',
        magician: 'no-data',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    tailor: {
      biomes: {
        forest: 'no-data',
        underground: 'very-suitable',
        desert: 'no-data',
        jungle: 'no-data',
        ocean: 'no-data',
        tundra: 'no-data',
        holy: 'absolutely not suitable',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'no-data',
        zoologist: 'no-data',
        golfer: 'no-data',
        bomber: 'no-data',
        tailor: 'no-data',
        'goblin-engineer': 'no-data',
        gunner: 'no-data',
        'paint-seller': 'no-data',
        steampunker: 'no-data',
        triad: 'no-data',
        painter: 'no-data',
        'witch-doctor': 'no-data',
        stylist: 'no-data',
        angler: 'no-data',
        pirate: 'no-data',
        mechanic: 'absolutely not suitable',
        cyborg: 'no-data',
        'tax-collector': 'fits-well',
        nurse: 'bad-fit',
        'party-girl': 'no-data',
        tavernkeep: 'no-data',
        magician: 'no-data',
        truffle: 'very-suitable',
        santa: 'no-data',
      },
    },
    'goblin-engineer': {
      biomes: {
        forest: 'no-data',
        underground: 'very-suitable',
        desert: 'no-data',
        jungle: 'absolutely not suitable',
        ocean: 'no-data',
        tundra: 'no-data',
        holy: 'no-data',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'no-data',
        zoologist: 'no-data',
        golfer: 'no-data',
        bomber: 'no-data',
        tailor: 'bad-fit',
        'goblin-engineer': 'no-data',
        gunner: 'no-data',
        'paint-seller': 'fits-well',
        steampunker: 'no-data',
        triad: 'no-data',
        painter: 'no-data',
        'witch-doctor': 'no-data',
        stylist: 'absolutely not suitable',
        angler: 'no-data',
        pirate: 'no-data',
        mechanic: 'very-suitable',
        cyborg: 'no-data',
        'tax-collector': 'no-data',
        nurse: 'no-data',
        'party-girl': 'no-data',
        tavernkeep: 'no-data',
        magician: 'no-data',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    gunner: {
      biomes: {
        forest: 'no-data',
        underground: 'no-data',
        desert: 'very-suitable',
        jungle: 'no-data',
        ocean: 'no-data',
        tundra: 'absolutely not suitable',
        holy: 'no-data',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'no-data',
        zoologist: 'no-data',
        golfer: 'bad-fit',
        bomber: 'absolutely not suitable',
        tailor: 'no-data',
        'goblin-engineer': 'no-data',
        gunner: 'no-data',
        'paint-seller': 'no-data',
        steampunker: 'fits-well',
        triad: 'no-data',
        painter: 'no-data',
        'witch-doctor': 'no-data',
        stylist: 'no-data',
        angler: 'no-data',
        pirate: 'no-data',
        mechanic: 'no-data',
        cyborg: 'no-data',
        'tax-collector': 'no-data',
        nurse: 'very-suitable',
        'party-girl': 'no-data',
        tavernkeep: 'no-data',
        magician: 'no-data',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    'paint-seller': {
      biomes: {
        forest: 'absolutely not suitable',
        underground: 'no-data',
        desert: 'very-suitable',
        jungle: 'no-data',
        ocean: 'no-data',
        tundra: 'no-data',
        holy: 'no-data',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'no-data',
        zoologist: 'no-data',
        golfer: 'no-data',
        bomber: 'no-data',
        tailor: 'no-data',
        'goblin-engineer': 'no-data',
        gunner: 'fits-well',
        'paint-seller': 'no-data',
        steampunker: 'bad-fit',
        triad: 'no-data',
        painter: 'fits-well',
        'witch-doctor': 'no-data',
        stylist: 'no-data',
        angler: 'no-data',
        pirate: 'absolutely not suitable',
        mechanic: 'no-data',
        cyborg: 'no-data',
        'tax-collector': 'no-data',
        nurse: 'no-data',
        'party-girl': 'no-data',
        tavernkeep: 'no-data',
        magician: 'no-data',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    steampunker: {
      biomes: {
        forest: 'no-data',
        underground: 'no-data',
        desert: 'very-suitable',
        jungle: 'absolutely not suitable',
        ocean: 'no-data',
        tundra: 'no-data',
        holy: 'no-data',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'no-data',
        zoologist: 'no-data',
        golfer: 'no-data',
        bomber: 'no-data',
        tailor: 'no-data',
        'goblin-engineer': 'no-data',
        gunner: 'no-data',
        'paint-seller': 'no-data',
        steampunker: 'no-data',
        triad: 'bad-fit',
        painter: 'fits-well',
        'witch-doctor': 'no-data',
        stylist: 'no-data',
        angler: 'no-data',
        pirate: 'no-data',
        mechanic: 'no-data',
        cyborg: 'very-suitable',
        'tax-collector': 'no-data',
        nurse: 'no-data',
        'party-girl': 'bad-fit',
        tavernkeep: 'no-data',
        magician: 'bad-fit',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    triad: {
      biomes: {
        forest: 'no-data',
        underground: 'no-data',
        desert: 'absolutely not suitable',
        jungle: 'very-suitable',
        ocean: 'no-data',
        tundra: 'no-data',
        holy: 'no-data',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'no-data',
        zoologist: 'bad-fit',
        golfer: 'absolutely not suitable',
        bomber: 'no-data',
        tailor: 'no-data',
        'goblin-engineer': 'no-data',
        gunner: 'no-data',
        'paint-seller': 'no-data',
        steampunker: 'no-data',
        triad: 'no-data',
        painter: 'no-data',
        'witch-doctor': 'fits-well',
        stylist: 'no-data',
        angler: 'bad-fit',
        pirate: 'no-data',
        mechanic: 'no-data',
        cyborg: 'no-data',
        'tax-collector': 'no-data',
        nurse: 'no-data',
        'party-girl': 'no-data',
        tavernkeep: 'no-data',
        magician: 'no-data',
        truffle: 'fits-well',
        santa: 'no-data',
      },
    },
    painter: {
      biomes: {
        forest: 'absolutely not suitable',
        underground: 'no-data',
        desert: 'no-data',
        jungle: 'very-suitable',
        ocean: 'no-data',
        tundra: 'no-data',
        holy: 'no-data',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'no-data',
        zoologist: 'no-data',
        golfer: 'no-data',
        bomber: 'no-data',
        tailor: 'no-data',
        'goblin-engineer': 'no-data',
        gunner: 'no-data',
        'paint-seller': 'no-data',
        steampunker: 'no-data',
        triad: 'very-suitable',
        painter: 'no-data',
        'witch-doctor': 'no-data',
        stylist: 'no-data',
        angler: 'no-data',
        pirate: 'no-data',
        mechanic: 'no-data',
        cyborg: 'bad-fit',
        'tax-collector': 'no-data',
        nurse: 'no-data',
        'party-girl': 'fits-well',
        tavernkeep: 'no-data',
        magician: 'no-data',
        truffle: 'bad-fit',
        santa: 'no-data',
      },
    },
    'witch-doctor': {
      biomes: {
        forest: 'no-data',
        underground: 'no-data',
        desert: 'no-data',
        jungle: 'very-suitable',
        ocean: 'no-data',
        tundra: 'no-data',
        holy: 'absolutely not suitable',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'fits-well',
        seller: 'no-data',
        zoologist: 'no-data',
        golfer: 'no-data',
        bomber: 'no-data',
        tailor: 'no-data',
        'goblin-engineer': 'no-data',
        gunner: 'no-data',
        'paint-seller': 'no-data',
        steampunker: 'no-data',
        triad: 'fits-well',
        painter: 'no-data',
        'witch-doctor': 'no-data',
        stylist: 'no-data',
        angler: 'no-data',
        pirate: 'no-data',
        mechanic: 'no-data',
        cyborg: 'no-data',
        'tax-collector': 'no-data',
        nurse: 'bad-fit',
        'party-girl': 'no-data',
        tavernkeep: 'no-data',
        magician: 'no-data',
        truffle: 'absolutely not suitable',
        santa: 'no-data',
      },
    },
    stylist: {
      biomes: {
        forest: 'no-data',
        underground: 'no-data',
        desert: 'no-data',
        jungle: 'no-data',
        ocean: 'very-suitable',
        tundra: 'absolutely not suitable',
        holy: 'no-data',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'no-data',
        zoologist: 'no-data',
        golfer: 'no-data',
        bomber: 'no-data',
        tailor: 'no-data',
        'goblin-engineer': 'absolutely not suitable',
        gunner: 'no-data',
        'paint-seller': 'very-suitable',
        steampunker: 'no-data',
        triad: 'no-data',
        painter: 'no-data',
        'witch-doctor': 'no-data',
        stylist: 'no-data',
        angler: 'no-data',
        pirate: 'fits-well',
        mechanic: 'no-data',
        cyborg: 'no-data',
        'tax-collector': 'no-data',
        nurse: 'no-data',
        'party-girl': 'no-data',
        tavernkeep: 'bad-fit',
        magician: 'no-data',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    angler: {
      biomes: {
        forest: 'no-data',
        underground: 'no-data',
        desert: 'absolutely not suitable',
        jungle: 'no-data',
        ocean: 'very-suitable',
        tundra: 'no-data',
        holy: 'no-data',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'no-data',
        zoologist: 'no-data',
        golfer: 'no-data',
        bomber: 'fits-well',
        tailor: 'no-data',
        'goblin-engineer': 'no-data',
        gunner: 'no-data',
        'paint-seller': 'no-data',
        steampunker: 'no-data',
        triad: 'no-data',
        painter: 'no-data',
        'witch-doctor': 'no-data',
        stylist: 'no-data',
        angler: 'no-data',
        pirate: 'no-data',
        mechanic: 'no-data',
        cyborg: 'no-data',
        'tax-collector': 'fits-well',
        nurse: 'no-data',
        'party-girl': 'fits-well',
        tavernkeep: 'absolutely not suitable',
        magician: 'no-data',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    pirate: {
      biomes: {
        forest: 'no-data',
        underground: 'absolutely not suitable',
        desert: 'no-data',
        jungle: 'no-data',
        ocean: 'very-suitable',
        tundra: 'no-data',
        holy: 'no-data',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'absolutely not suitable',
        seller: 'no-data',
        zoologist: 'no-data',
        golfer: 'no-data',
        bomber: 'no-data',
        tailor: 'no-data',
        'goblin-engineer': 'no-data',
        gunner: 'no-data',
        'paint-seller': 'no-data',
        steampunker: 'no-data',
        triad: 'no-data',
        painter: 'no-data',
        'witch-doctor': 'no-data',
        stylist: 'bad-fit',
        angler: 'very-suitable',
        pirate: 'no-data',
        mechanic: 'no-data',
        cyborg: 'no-data',
        'tax-collector': 'no-data',
        nurse: 'no-data',
        'party-girl': 'no-data',
        tavernkeep: 'fits-well',
        magician: 'no-data',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    mechanic: {
      biomes: {
        forest: 'no-data',
        underground: 'absolutely not suitable',
        desert: 'no-data',
        jungle: 'no-data',
        ocean: 'no-data',
        tundra: 'very-suitable',
        holy: 'no-data',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'no-data',
        zoologist: 'no-data',
        golfer: 'no-data',
        bomber: 'no-data',
        tailor: 'absolutely not suitable',
        'goblin-engineer': 'very-suitable',
        gunner: 'bad-fit',
        'paint-seller': 'no-data',
        steampunker: 'no-data',
        triad: 'no-data',
        painter: 'no-data',
        'witch-doctor': 'no-data',
        stylist: 'no-data',
        angler: 'no-data',
        pirate: 'no-data',
        mechanic: 'no-data',
        cyborg: 'fits-well',
        'tax-collector': 'no-data',
        nurse: 'no-data',
        'party-girl': 'no-data',
        tavernkeep: 'no-data',
        magician: 'no-data',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    cyborg: {
      biomes: {
        forest: 'no-data',
        underground: 'no-data',
        desert: 'no-data',
        jungle: 'absolutely not suitable',
        ocean: 'no-data',
        tundra: 'very-suitable',
        holy: 'no-data',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'no-data',
        zoologist: 'bad-fit',
        golfer: 'no-data',
        bomber: 'no-data',
        tailor: 'no-data',
        'goblin-engineer': 'no-data',
        gunner: 'no-data',
        'paint-seller': 'no-data',
        steampunker: 'fits-well',
        triad: 'no-data',
        painter: 'no-data',
        'witch-doctor': 'no-data',
        stylist: 'fits-well',
        angler: 'no-data',
        pirate: 'fits-well',
        mechanic: 'no-data',
        cyborg: 'no-data',
        'tax-collector': 'no-data',
        nurse: 'no-data',
        'party-girl': 'no-data',
        tavernkeep: 'no-data',
        magician: 'absolutely not suitable',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    'tax-collector': {
      biomes: {
        forest: 'no-data',
        underground: 'no-data',
        desert: 'no-data',
        jungle: 'no-data',
        ocean: 'no-data',
        tundra: 'very-suitable',
        holy: 'absolutely not suitable',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'very-suitable',
        zoologist: 'no-data',
        golfer: 'no-data',
        bomber: 'bad-fit',
        tailor: 'no-data',
        'goblin-engineer': 'no-data',
        gunner: 'no-data',
        'paint-seller': 'no-data',
        steampunker: 'no-data',
        triad: 'no-data',
        painter: 'no-data',
        'witch-doctor': 'no-data',
        stylist: 'no-data',
        angler: 'no-data',
        pirate: 'no-data',
        mechanic: 'bad-fit',
        cyborg: 'no-data',
        'tax-collector': 'no-data',
        nurse: 'no-data',
        'party-girl': 'fits-well',
        tavernkeep: 'no-data',
        magician: 'no-data',
        truffle: 'no-data',
        santa: 'absolutely not suitable',
      },
    },
    nurse: {
      biomes: {
        forest: 'no-data',
        underground: 'no-data',
        desert: 'no-data',
        jungle: 'no-data',
        ocean: 'no-data',
        tundra: 'absolutely not suitable',
        holy: 'very-suitable',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'no-data',
        zoologist: 'absolutely not suitable',
        golfer: 'no-data',
        bomber: 'no-data',
        tailor: 'no-data',
        'goblin-engineer': 'no-data',
        gunner: 'very-suitable',
        'paint-seller': 'no-data',
        steampunker: 'no-data',
        triad: 'bad-fit',
        painter: 'no-data',
        'witch-doctor': 'no-data',
        stylist: 'no-data',
        angler: 'no-data',
        pirate: 'no-data',
        mechanic: 'no-data',
        cyborg: 'no-data',
        'tax-collector': 'no-data',
        nurse: 'no-data',
        'party-girl': 'bad-fit',
        tavernkeep: 'no-data',
        magician: 'fits-well',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    'party-girl': {
      biomes: {
        forest: 'no-data',
        underground: 'absolutely not suitable',
        desert: 'no-data',
        jungle: 'no-data',
        ocean: 'no-data',
        tundra: 'no-data',
        holy: 'very-suitable',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'bad-fit',
        zoologist: 'no-data',
        golfer: 'no-data',
        bomber: 'no-data',
        tailor: 'no-data',
        'goblin-engineer': 'no-data',
        gunner: 'no-data',
        'paint-seller': 'no-data',
        steampunker: 'no-data',
        triad: 'no-data',
        painter: 'no-data',
        'witch-doctor': 'no-data',
        stylist: 'fits-well',
        angler: 'no-data',
        pirate: 'no-data',
        mechanic: 'no-data',
        cyborg: 'no-data',
        'tax-collector': 'absolutely not suitable',
        nurse: 'no-data',
        'party-girl': 'no-data',
        tavernkeep: 'no-data',
        magician: 'very-suitable',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    tavernkeep: {
      biomes: {
        forest: 'no-data',
        underground: 'no-data',
        desert: 'no-data',
        jungle: 'no-data',
        ocean: 'no-data',
        tundra: 'absolutely not suitable',
        holy: 'very-suitable',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'bad-fit',
        seller: 'no-data',
        zoologist: 'no-data',
        golfer: 'no-data',
        bomber: 'very-suitable',
        tailor: 'no-data',
        'goblin-engineer': 'fits-well',
        gunner: 'no-data',
        'paint-seller': 'absolutely not suitable',
        steampunker: 'no-data',
        triad: 'no-data',
        painter: 'no-data',
        'witch-doctor': 'no-data',
        stylist: 'no-data',
        angler: 'no-data',
        pirate: 'no-data',
        mechanic: 'no-data',
        cyborg: 'no-data',
        'tax-collector': 'no-data',
        nurse: 'no-data',
        'party-girl': 'no-data',
        tavernkeep: 'no-data',
        magician: 'no-data',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    magician: {
      biomes: {
        forest: 'no-data',
        underground: 'no-data',
        desert: 'no-data',
        jungle: 'no-data',
        ocean: 'absolutely not suitable',
        tundra: 'no-data',
        holy: 'very-suitable',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'fits-well',
        zoologist: 'no-data',
        golfer: 'very-suitable',
        bomber: 'no-data',
        tailor: 'no-data',
        'goblin-engineer': 'no-data',
        gunner: 'no-data',
        'paint-seller': 'no-data',
        steampunker: 'no-data',
        triad: 'no-data',
        painter: 'no-data',
        'witch-doctor': 'bad-fit',
        stylist: 'no-data',
        angler: 'no-data',
        pirate: 'no-data',
        mechanic: 'no-data',
        cyborg: 'absolutely not suitable',
        'tax-collector': 'no-data',
        nurse: 'no-data',
        'party-girl': 'no-data',
        tavernkeep: 'no-data',
        magician: 'no-data',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    truffle: {
      biomes: {
        forest: 'absolutely not suitable',
        underground: 'absolutely not suitable',
        desert: 'absolutely not suitable',
        jungle: 'absolutely not suitable',
        ocean: 'absolutely not suitable',
        tundra: 'absolutely not suitable',
        holy: 'absolutely not suitable',
        'glowing-mushroom-biome': 'very-suitable',
      },

      neighbourhood: {
        guide: 'very-suitable',
        seller: 'no-data',
        zoologist: 'no-data',
        golfer: 'no-data',
        bomber: 'no-data',
        tailor: 'bad-fit',
        'goblin-engineer': 'no-data',
        gunner: 'no-data',
        'paint-seller': 'no-data',
        steampunker: 'no-data',
        triad: 'fits-well',
        painter: 'no-data',
        'witch-doctor': 'absolutely not suitable',
        stylist: 'no-data',
        angler: 'no-data',
        pirate: 'no-data',
        mechanic: 'no-data',
        cyborg: 'no-data',
        'tax-collector': 'no-data',
        nurse: 'no-data',
        'party-girl': 'no-data',
        tavernkeep: 'no-data',
        magician: 'no-data',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
    santa: {
      biomes: {
        forest: 'no-data',
        underground: 'no-data',
        desert: 'no-data',
        jungle: 'no-data',
        ocean: 'no-data',
        tundra: 'no-data',
        holy: 'no-data',
        'glowing-mushroom-biome': 'no-data',
      },

      neighbourhood: {
        guide: 'no-data',
        seller: 'no-data',
        zoologist: 'no-data',
        golfer: 'no-data',
        bomber: 'no-data',
        tailor: 'no-data',
        'goblin-engineer': 'no-data',
        gunner: 'no-data',
        'paint-seller': 'no-data',
        steampunker: 'no-data',
        triad: 'no-data',
        painter: 'no-data',
        'witch-doctor': 'no-data',
        stylist: 'no-data',
        angler: 'no-data',
        pirate: 'no-data',
        mechanic: 'no-data',
        cyborg: 'no-data',
        'tax-collector': 'absolutely not suitable',
        nurse: 'no-data',
        'party-girl': 'no-data',
        tavernkeep: 'no-data',
        magician: 'no-data',
        truffle: 'no-data',
        santa: 'no-data',
      },
    },
  },

  filters: {
    guide: false,
    seller: false,
    zoologist: false,
    golfer: false,
    bomber: false,
    tailor: false,
    'goblin-engineer': false,
    gunner: false,
    'paint-seller': false,
    steampunker: false,
    triad: false,
    painter: false,
    'witch-doctor': false,
    stylist: false,
    angler: false,
    pirate: false,
    mechanic: false,
    cyborg: false,
    'tax-collector': false,
    nurse: false,
    'party-girl': false,
    tavernkeep: false,
    magician: false,
    truffle: false,
    santa: false,
  },

  disabledFilters: {
    guide: false,
    seller: false,
    zoologist: false,
    golfer: false,
    bomber: false,
    tailor: false,
    'goblin-engineer': false,
    gunner: false,
    'paint-seller': false,
    steampunker: false,
    triad: false,
    painter: false,
    'witch-doctor': false,
    stylist: false,
    angler: false,
    pirate: false,
    mechanic: false,
    cyborg: false,
    'tax-collector': false,
    nurse: false,
    'party-girl': false,
    tavernkeep: false,
    magician: false,
    truffle: false,
    santa: false,
  },
};

const npcSlice = createSlice({
  name: 'npc',
  initialState,
  reducers: {
    toggleFilter(state, action: ReduxAction<Npc>) {
      state.filters[action.payload] = !state.filters[action.payload];

      const activeNpcs: Npc[] = getObjectKeys(state.filters).filter(
        npc => state.filters[npc]
      );

      const filterNeighbours = activeNpcs.flatMap(name => {
        const targetNpc = state.npc[name];

        return getObjectKeys(targetNpc.neighbourhood)
          .filter(neighbourName => activeNpcs.includes(neighbourName))
          .flatMap(neighbour => targetNpc.neighbourhood[neighbour]);
      });

      const calculateRelationshipRating = () => {
        const isAnyNoData = filterNeighbours.includes('no-data');
        const isAnyVerySuitable = filterNeighbours.includes('very-suitable');
        const isAnyFitsWell = filterNeighbours.includes('fits-well');
        const isAnyBadFit = filterNeighbours.includes('bad-fit');
        const isAnyHate = filterNeighbours.includes('absolutely not suitable');

        state.relationShipRating = undefined;

        if (isAnyVerySuitable) {
          state.relationShipRating = 'very-suitable';
        }

        if (isAnyFitsWell) {
          state.relationShipRating = 'fits-well';
        }

        if (isAnyBadFit) {
          state.relationShipRating = 'bad-fit';
        }

        if (isAnyHate) {
          state.relationShipRating = 'absolutely not suitable';
        }
      };

      const calculateProperBiomeData = () => {
        const filterBiome = (
          biome: Biome
        ): Record<Exclude<Rating, 'uncomfortable' | 'no-data'>, Npc[]> => {
          const allRatings = activeNpcs.flatMap(npc => {
            const rating = state.npc[npc].biomes[biome];

            return {
              npc,
              rating,
            };
          });

          const verySuitableRatings: Npc[] = allRatings
            .filter(rating => rating.rating === 'very-suitable')
            .map(rating => rating.npc);

          const fitWellRatings: Npc[] = allRatings
            .filter(
              rating =>
                rating.rating === 'fits-well' || rating.rating === 'no-data'
            )
            .map(rating => rating.npc);

          const badFitRatings: Npc[] = allRatings
            .filter(rating => rating.rating === 'bad-fit')
            .map(rating => rating.npc);

          const absolutelyNotSuitableRatings: Npc[] = allRatings
            .filter(rating => rating.rating === 'absolutely not suitable')
            .map(rating => rating.npc);

          return {
            'very-suitable': verySuitableRatings,
            'fits-well': fitWellRatings,

            'bad-fit': badFitRatings,
            'absolutely not suitable': absolutelyNotSuitableRatings,
          };
        };

        const data: Record<
          Biome,
          Record<Exclude<Rating, 'uncomfortable' | 'no-data'>, Npc[]>
        > = {
          forest: filterBiome('forest'),
          underground: filterBiome('underground'),
          desert: filterBiome('desert'),
          jungle: filterBiome('jungle'),
          ocean: filterBiome('ocean'),
          tundra: filterBiome('tundra'),
          holy: filterBiome('holy'),
          'glowing-mushroom-biome': filterBiome('glowing-mushroom-biome'),
        };

        const finalRatings: Record<Biome, Rating> = {
          forest: 'no-data',
          underground: 'no-data',
          desert: 'no-data',
          jungle: 'no-data',
          ocean: 'no-data',
          tundra: 'no-data',
          holy: 'no-data',
          'glowing-mushroom-biome': 'no-data',
        };

        getObjectKeys(data).map(biomeName => {
          const targetBiome = data[biomeName];

          const verySuitableRatingsCount = targetBiome['very-suitable'].length;
          const fitsWellCount = targetBiome['fits-well'].length;
          const badFitCount = targetBiome['bad-fit'].length;
          const absolutelyNotSuitableCount =
            targetBiome['absolutely not suitable'].length;

          if (absolutelyNotSuitableCount > 0) {
            finalRatings[biomeName] = 'absolutely not suitable';
            return;
          }

          if (badFitCount > 0) {
            finalRatings[biomeName] = 'bad-fit';
            return;
          }

          if (
            isHighest(fitsWellCount, [verySuitableRatingsCount, fitsWellCount])
          ) {
            finalRatings[biomeName] = 'fits-well';
          }

          if (
            isHighest(verySuitableRatingsCount, [
              verySuitableRatingsCount,
              fitsWellCount,
            ])
          ) {
            finalRatings[biomeName] = 'very-suitable';
          }
        });

        const verySuitableBiomes: Biome[] = getObjectKeys(finalRatings).filter(
          biome => finalRatings[biome] === 'very-suitable'
        );

        const fitsWellBiomes: Biome[] = getObjectKeys(finalRatings).filter(
          biome => finalRatings[biome] === 'fits-well'
        );

        const badFitBiomes: Biome[] = getObjectKeys(finalRatings).filter(
          biome => finalRatings[biome] === 'bad-fit'
        );

        const absolutelyNotSuitableBiomes: Biome[] = getObjectKeys(
          finalRatings
        ).filter(biome => finalRatings[biome] === 'absolutely not suitable');

        if (verySuitableBiomes.length > 0) {
          state.mostProperBiomes = verySuitableBiomes.map(biomeName => {
            return {
              name: biomeName,
              rating: 'very-suitable',
            };
          });

          return;
        }

        if (fitsWellBiomes.length > 0) {
          state.mostProperBiomes = fitsWellBiomes.map(biomeName => {
            return {
              name: biomeName,
              rating: 'fits-well',
            };
          });

          return;
        }

        state.mostProperBiomes = undefined;
      };

      calculateRelationshipRating();
      calculateProperBiomeData();
    },

    changeDisableStatus(
      state,
      action: ReduxAction<{
        npc: RecordKey<NpcState['disabledFilters']>;
        newValue: RecordValue<NpcState['disabledFilters']>;
      }>
    ) {
      state.disabledFilters[action.payload.npc] = action.payload.newValue;
    },
  },
});

export default npcSlice.reducer;
export const { toggleFilter, changeDisableStatus } = npcSlice.actions;
export const initialNpcState = npcSlice.getInitialState();
