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
import steamPunkerAvatar from '@/public/avatars/2101028106_preview_Steampunker.png';
import stylistAvatar from '@/public/avatars/2101028106_preview_Stylist.png';
import tavernKeeperAvatar from '@/public/avatars/2101028106_preview_Tavernkeep.png';
import taxCollectorAvatar from '@/public/avatars/2101028106_preview_Tax_Collector.png';
import truffleAvatar from '@/public/avatars/2101028106_preview_Truffle.png';
import witchDoctorAvatar from '@/public/avatars/2101028106_preview_Witch_Doctor.png';
import magicianAvatar from '@/public/avatars/2101028106_preview_Wizard.png';
import zoologistAvatar from '@/public/avatars/2101028106_preview_Zoologist.png';
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
      formattedName: 'Продавец оружия',
    },
    'paint-seller': {
      avatar: dyeTraderAvatar,
      formattedName: 'Продавец красок',
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
  },

  forbiddenRatings: ['absolutely not suitable', 'bad-fit', 'uncomfortable'],
};
