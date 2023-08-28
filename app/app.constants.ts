import anglerAvatar from '@/public/avatars/2101028106_preview_Angler.png';
import gunnerAvatar from '@/public/avatars/2101028106_preview_Arms_Dealer.png';
import tailorAvatar from '@/public/avatars/2101028106_preview_Clothier.png';
import cyborgAvatar from '@/public/avatars/2101028106_preview_Cyborg.png';
import bomberAvatar from '@/public/avatars/2101028106_preview_Demolitionist.png';
import triadAvatar from '@/public/avatars/2101028106_preview_Dryad.png';
import dyeTraderAvatar from '@/public/avatars/2101028106_preview_Dye_Trader.png';
import goblinAvatar from '@/public/avatars/2101028106_preview_Goblin_Tinkerer.png';
import golferAvatar from '@/public/avatars/2101028106_preview_Golfer.png';
import guideAvatar from '@/public/avatars/2101028106_preview_Guide.png';
import mechanicAvatar from '@/public/avatars/2101028106_preview_Mechanic.png';
import sellerAvatar from '@/public/avatars/2101028106_preview_Merchant.png';
import nurseAvatar from '@/public/avatars/2101028106_preview_Nurse.png';
import painterAvatar from '@/public/avatars/2101028106_preview_Painter.png';
import partyGirlAvatar from '@/public/avatars/2101028106_preview_Party_Girl.png';
import pirateAvatar from '@/public/avatars/2101028106_preview_Pirate.png';
import santaAvatar from '@/public/avatars/2101028106_preview_Santa_Claus.png';
import steamPunkerAvatar from '@/public/avatars/2101028106_preview_Steampunker.png';
import stylistAvatar from '@/public/avatars/2101028106_preview_Stylist.png';
import tavernKeeperAvatar from '@/public/avatars/2101028106_preview_Tavernkeep.png';
import taxCollectorAvatar from '@/public/avatars/2101028106_preview_Tax_Collector.png';
import truffleAvatar from '@/public/avatars/2101028106_preview_Truffle.png';
import witchDoctorAvatar from '@/public/avatars/2101028106_preview_Witch_Doctor.png';
import magicianAvatar from '@/public/avatars/2101028106_preview_Wizard.png';
import zoologistAvatar from '@/public/avatars/2101028106_preview_Zoologist.png';
import desertPreview from '@/public/backgrounds/2101028106_preview_BiomeBannerDesert.png';
import forestPreview from '@/public/backgrounds/2101028106_preview_BiomeBannerForest.png';
import glowingMushroomPreview from '@/public/backgrounds/2101028106_preview_BiomeBannerGlowingMushroom.png';
import holyPreview from '@/public/backgrounds/2101028106_preview_BiomeBannerHallow.png';
import junglePreview from '@/public/backgrounds/2101028106_preview_BiomeBannerJungle.png';
import oceanPreview from '@/public/backgrounds/2101028106_preview_BiomeBannerOcean (1).png';
import tundraPreview from '@/public/backgrounds/2101028106_preview_BiomeBannerSnow.png';
import underGroundPreview from '@/public/backgrounds/2101028106_preview_BiomeBannerUnderground.png';
import IAppConstants from '@/src/interfaces/AppConstants.interface';

export const AppConstants: IAppConstants = {
  appName: 'Таблица счастья НИПов Terraria',
  maxContainerWidth: '1680px',

  npcData: {
    guide: {
      avatar: guideAvatar,
      formattedName: 'Гид',
    },

    seller: {
      avatar: sellerAvatar,
      formattedName: 'Продавец',
    },
    zoologist: {
      avatar: zoologistAvatar,
      formattedName: 'Зоолог',
    },
    golfer: {
      avatar: golferAvatar,
      formattedName: 'Голфист',
    },
    bomber: {
      avatar: bomberAvatar,
      formattedName: 'Подрывник',
    },
    tailor: {
      avatar: tailorAvatar,
      formattedName: 'Портной',
    },
    'goblin-engineer': {
      avatar: goblinAvatar,
      formattedName: 'Гоблин-инженер',
    },
    gunner: {
      avatar: gunnerAvatar,
      formattedName: 'Торговец оружием',
    },
    'paint-seller': {
      avatar: dyeTraderAvatar,
      formattedName: 'Торговец Красителями',
    },
    steampunker: {
      avatar: steamPunkerAvatar,
      formattedName: 'Паромеханик',
    },
    triad: {
      avatar: triadAvatar,
      formattedName: 'Дриада',
    },
    painter: {
      avatar: painterAvatar,
      formattedName: 'Маляр',
    },
    'witch-doctor': {
      avatar: witchDoctorAvatar,
      formattedName: 'Знахарь',
    },
    stylist: {
      avatar: stylistAvatar,
      formattedName: 'Стилист',
    },
    angler: {
      avatar: anglerAvatar,
      formattedName: 'Рыбак',
    },
    pirate: {
      avatar: pirateAvatar,
      formattedName: 'Пират',
    },
    mechanic: {
      avatar: mechanicAvatar,
      formattedName: 'Механик',
    },
    cyborg: {
      avatar: cyborgAvatar,
      formattedName: 'Киборг',
    },
    'tax-collector': {
      avatar: taxCollectorAvatar,
      formattedName: 'Сборщик налогов',
    },
    nurse: {
      avatar: nurseAvatar,
      formattedName: 'Медсестра',
    },
    'party-girl': {
      avatar: partyGirlAvatar,
      formattedName: 'Тусовщица',
    },
    tavernkeep: {
      avatar: tavernKeeperAvatar,
      formattedName: 'Трактирщик',
    },
    magician: {
      avatar: magicianAvatar,
      formattedName: 'Волшебник',
    },
    truffle: {
      avatar: truffleAvatar,
      formattedName: 'Трюфель',
    },
    santa: {
      avatar: santaAvatar,
      formattedName: 'Санта-Клаус',
    },
  },

  biomeData: {
    forest: {
      previewImage: forestPreview,
      formattedName: 'Лес',
      icon: 'terraria-logo',
    },
    underground: {
      previewImage: underGroundPreview,
      formattedName: 'Подземелье',
      icon: 'mining-helmet',
    },
    desert: {
      previewImage: desertPreview,
      formattedName: 'Пустыня',
      icon: 'cactus',
    },
    jungle: {
      previewImage: junglePreview,
      formattedName: 'Джунгли',
      icon: 'turtle',
    },
    ocean: {
      previewImage: oceanPreview,
      formattedName: 'Океан',
      icon: 'seagull',
    },
    tundra: {
      previewImage: tundraPreview,
      formattedName: 'Снежный биом',
      icon: 'snow-zombie',
    },
    holy: {
      previewImage: holyPreview,
      formattedName: 'Святой биом',
      icon: 'unicorn-on-stick',
    },
    'glowing-mushroom-biome': {
      previewImage: glowingMushroomPreview,
      formattedName: 'Грибной биом',
      icon: 'glowing-mushroom',
    },
  },

  forbiddenRatings: ['absolutely not suitable', 'bad-fit', 'uncomfortable'],
};
