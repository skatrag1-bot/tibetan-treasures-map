import encheyImage from '@/assets/enchey-monastery.jpg';
import pemayangtseImage from '@/assets/pemayangtse-monastery.jpg';
import tashidingImage from '@/assets/tashiding-monastery.jpg';
import phensangImage from '@/assets/phensang-monastery.jpg';

export interface MonasteryData {
  id: string;
  name: string;
  location: string;
  description: string;
  founded: string;
  sect: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  images: string[];
  quickFacts: {
    founded: string;
    sect: string;
    standoutFeature: string;
    monks: string;
    altitude?: string;
  };
  visitorInfo: {
    openingHours: string;
    entryFee: string;
    dressCode: string;
    accessibility: string;
    bestTime: string;
    photography: string;
  };
  features: string[];
  festivals: Array<{
    name: string;
    date: string;
    description: string;
  }>;
  highlights: string[];
  history: string;
}

export const monasteryData: Record<string, MonasteryData> = {
  enchey: {
    id: 'enchey',
    name: 'Enchey Monastery',
    location: 'Gangtok, Sikkim',
    description: 'Enchey Monastery stands majestically on a hilltop overlooking Gangtok, serving as one of the most important religious sites in Sikkim. Built in 1909, this sacred monastery belongs to the Nyingma order of Tibetan Buddhism and is dedicated to Guru Padmasambhava.',
    founded: '1909',
    sect: 'Nyingma',
    coordinates: { lat: 27.3314, lng: 88.6138 },
    images: [encheyImage, encheyImage, encheyImage, encheyImage, encheyImage],
    quickFacts: {
      founded: '1909',
      sect: 'Nyingma Order',
      standoutFeature: 'Annual Cham Festival',
      monks: '90 resident monks',
      altitude: '6,200 feet',
    },
    visitorInfo: {
      openingHours: '6:00 AM - 6:00 PM',
      entryFee: 'Free',
      dressCode: 'Modest clothing required',
      accessibility: 'Partial wheelchair access',
      bestTime: 'October to March',
      photography: 'Allowed in courtyard only',
    },
    features: [
      'Ancient prayer wheels',
      'Colorful Buddhist murals',
      'Traditional Tibetan architecture',
      'Meditation halls',
      'Sacred relics collection',
      'Annual masked dance festival',
    ],
    festivals: [
      { name: 'Cham Festival', date: 'December/January', description: 'Sacred masked dance performances' },
      { name: 'Losar', date: 'February/March', description: 'Tibetan New Year celebrations' },
    ],
    highlights: [
      'Stunning views of Gangtok city',
      'Home to rare Buddhist manuscripts',
      'Annual Cham dance festival',
      'Sacred to Guru Padmasambhava',
    ],
    history: 'Founded in 1909 by Lama Druptob Karpo, Enchey Monastery has been a beacon of Nyingma Buddhism in Sikkim. The monastery was built on a site blessed by Lama Druptob Karpo, who was known for his flying powers.',
  },
  pemayangtse: {
    id: 'pemayangtse',
    name: 'Pemayangtse Monastery',
    location: 'Pelling, West Sikkim',
    description: 'One of the oldest and most premier monasteries of Sikkim, Pemayangtse offers breathtaking views of the Himalayan range including Kanchenjunga. Founded in 1705, it serves as the head monastery of the Nyingma order in Sikkim.',
    founded: '1705',
    sect: 'Nyingma',
    coordinates: { lat: 27.2951, lng: 88.2207 },
    images: [pemayangtseImage, pemayangtseImage, pemayangtseImage, pemayangtseImage, pemayangtseImage],
    quickFacts: {
      founded: '1705',
      sect: 'Nyingma Order',
      standoutFeature: 'Kanchenjunga Views',
      monks: '108 resident monks',
      altitude: '6,840 feet',
    },
    visitorInfo: {
      openingHours: '7:00 AM - 5:00 PM',
      entryFee: '₹10 for Indians, ₹20 for foreigners',
      dressCode: 'Conservative dress required',
      accessibility: 'Limited wheelchair access',
      bestTime: 'March to June, October to December',
      photography: 'Permitted with restrictions',
    },
    features: [
      'Spectacular mountain views',
      'Ancient Buddhist sculptures',
      'Seven-tiered wooden structure',
      'Traditional Sikkimese architecture',
      'Rare manuscripts collection',
      'Meditation caves nearby',
    ],
    festivals: [
      { name: 'Chaang Festival', date: 'February', description: 'Traditional harvest celebration' },
      { name: 'Buddha Jayanti', date: 'May', description: 'Buddha\'s birthday celebration' },
    ],
    highlights: [
      'Panoramic Himalayan views',
      'Head monastery of Nyingma order',
      'Traditional wooden architecture',
      'Sacred tantric sculptures',
    ],
    history: 'Established in 1705 by Lama Lhatsun Chempo, Pemayangtse is considered the premier monastery of Sikkim. It has played a crucial role in the religious and political history of the kingdom.',
  },
  tashiding: {
    id: 'tashiding',
    name: 'Tashiding Monastery',
    location: 'Tashiding, West Sikkim',
    description: 'Revered as one of the most sacred Buddhist pilgrimage sites in Sikkim, Tashiding Monastery is believed to wash away sins of devotees. Located on a hilltop between the Rathong and Rangeet rivers.',
    founded: '1641',
    sect: 'Nyingma',
    coordinates: { lat: 27.3417, lng: 88.2708 },
    images: [tashidingImage, tashidingImage, tashidingImage, tashidingImage, tashidingImage],
    quickFacts: {
      founded: '1641',
      sect: 'Nyingma Order',
      standoutFeature: 'Sacred pilgrimage site',
      monks: '50 resident monks',
      altitude: '4,920 feet',
    },
    visitorInfo: {
      openingHours: '6:00 AM - 6:00 PM',
      entryFee: 'Free',
      dressCode: 'Respectful attire required',
      accessibility: 'Steps required to reach',
      bestTime: 'March to November',
      photography: 'Allowed in designated areas',
    },
    features: [
      'Sacred chortens and stupas',
      'Holy water spring',
      'Ancient prayer flags',
      'Meditation chambers',
      'Sacred Bumchu ceremony',
      'Panoramic valley views',
    ],
    festivals: [
      { name: 'Bumchu Festival', date: 'February/March', description: 'Sacred water vessel opening ceremony' },
      { name: 'Bhumchu', date: 'January', description: 'Holy water blessing ritual' },
    ],
    highlights: [
      'Most sacred monastery in Sikkim',
      'Sacred Bumchu water vessel',
      'Confluence of two rivers',
      'Ancient meditation caves',
    ],
    history: 'Founded in 1641 by Ngadak Sempa Chempo, Tashiding holds the distinction of being the most sacred monastery in Sikkim. Legend says that even viewing the monastery from afar can cleanse sins.',
  },
  phensang: {
    id: 'phensang',
    name: 'Phensang Monastery',
    location: 'Kabi, North Sikkim',
    description: 'A significant monastery housing a large community of monks and famous for its elaborate mask dance festivals. Phensang represents the rich cultural heritage of North Sikkim.',
    founded: '1721',
    sect: 'Nyingma',
    coordinates: { lat: 27.4167, lng: 88.5833 },
    images: [phensangImage, phensangImage, phensangImage, phensangImage, phensangImage],
    quickFacts: {
      founded: '1721',
      sect: 'Nyingma Order',
      standoutFeature: 'Mask Dance Festival',
      monks: '75 resident monks',
      altitude: '5,200 feet',
    },
    visitorInfo: {
      openingHours: '6:00 AM - 5:30 PM',
      entryFee: 'Free',
      dressCode: 'Traditional modest wear',
      accessibility: 'Moderate terrain access',
      bestTime: 'April to October',
      photography: 'Permitted with monk approval',
    },
    features: [
      'Elaborate mask collections',
      'Traditional dance performances',
      'Ancient Buddhist texts',
      'Monastery school',
      'Handicraft workshops',
      'Organic gardens',
    ],
    festivals: [
      { name: 'Phang Lhabsol', date: 'August/September', description: 'Guardian deity festival' },
      { name: 'Dashain', date: 'September/October', description: 'Hindu-Buddhist celebration' },
    ],
    highlights: [
      'Famous mask dance performances',
      'Traditional monastic education',
      'Unique architectural style',
      'Cultural preservation center',
    ],
    history: 'Established in 1721, Phensang Monastery has been instrumental in preserving the cultural traditions of North Sikkim. It serves as both a religious center and cultural hub for the local community.',
  },
  rumtek: {
    id: 'rumtek',
    name: 'Rumtek Monastery',
    location: 'Rumtek, East Sikkim',
    description: 'The largest monastery in Sikkim, known as the Dharma Chakra Centre. Built in the 1960s, it serves as the main seat of the Karma Kagyu lineage in exile.',
    founded: '1966',
    sect: 'Karma Kagyu',
    coordinates: { lat: 27.2833, lng: 88.5667 },
    images: [encheyImage, encheyImage, encheyImage, encheyImage, encheyImage],
    quickFacts: {
      founded: '1966',
      sect: 'Karma Kagyu Order',
      standoutFeature: 'Seat of Karmapa',
      monks: '300 resident monks',
      altitude: '5,800 feet',
    },
    visitorInfo: {
      openingHours: '6:00 AM - 5:00 PM',
      entryFee: '₹5 for Indians, ₹10 for foreigners',
      dressCode: 'Formal modest clothing',
      accessibility: 'Good road access',
      bestTime: 'March to December',
      photography: 'Restricted in prayer halls',
    },
    features: [
      'Golden Stupa',
      'Monastery Institute',
      'Sacred relics of Karmapa',
      'Traditional thangka paintings',
      'Monastery museum',
      'Modern amenities',
    ],
    festivals: [
      { name: 'Tibetan New Year', date: 'February/March', description: 'Losar celebrations' },
      { name: 'Kagyu Monlam', date: 'December', description: 'Prayer festival' },
    ],
    highlights: [
      'Largest monastery in Sikkim',
      'Seat of 16th Karmapa',
      'Modern monastic education',
      'Important pilgrimage site',
    ],
    history: 'Built in the 1960s by the 16th Karmapa, Rumtek is a modern reconstruction of the original Rumtek monastery. It has become one of the most important Tibetan Buddhist centers outside Tibet.',
  },
  labrang: {
    id: 'labrang',
    name: 'Labrang Monastery',
    location: 'Lachen, North Sikkim',
    description: 'One of the important monasteries in North Sikkim, known for its serene environment and traditional Buddhist practices. It offers insights into the monastic life of the Himalayas.',
    founded: '1709',
    sect: 'Gelug',
    coordinates: { lat: 27.7833, lng: 88.5833 },
    images: [phensangImage, phensangImage, phensangImage, phensangImage, phensangImage],
    quickFacts: {
      founded: '1709',
      sect: 'Gelug Order',
      standoutFeature: 'Mountain meditation',
      monks: '60 resident monks',
      altitude: '8,800 feet',
    },
    visitorInfo: {
      openingHours: '7:00 AM - 4:00 PM',
      entryFee: 'Free',
      dressCode: 'Warm modest clothing',
      accessibility: 'High altitude location',
      bestTime: 'May to September',
      photography: 'Allowed with permission',
    },
    features: [
      'High altitude location',
      'Mountain meditation retreats',
      'Traditional architecture',
      'Yak herding community',
      'Alpine monastery gardens',
      'Snow-capped mountain views',
    ],
    festivals: [
      { name: 'Lachen Festival', date: 'July', description: 'Local community celebration' },
      { name: 'Ganden Nga Choe', date: 'October', description: 'Tsongkhapa anniversary' },
    ],
    highlights: [
      'Highest monastery in Sikkim',
      'Alpine meditation center',
      'Traditional yak herding',
      'Pristine mountain environment',
    ],
    history: 'Founded in 1709, Labrang Monastery represents the Gelug tradition in the high altitudes of North Sikkim. It has adapted to the harsh mountain environment while maintaining its spiritual practices.',
  },
  dubdi: {
    id: 'dubdi',
    name: 'Dubdi Monastery',
    location: 'Yuksom, West Sikkim',
    description: 'The first monastery built in Sikkim, offering panoramic views of the surrounding valleys. This historic monastery marks the beginning of Buddhism in the kingdom.',
    founded: '1701',
    sect: 'Nyingma',
    coordinates: { lat: 27.3667, lng: 88.2167 },
    images: [tashidingImage, tashidingImage, tashidingImage, tashidingImage, tashidingImage],
    quickFacts: {
      founded: '1701',
      sect: 'Nyingma Order',
      standoutFeature: 'First monastery in Sikkim',
      monks: '25 resident monks',
      altitude: '6,900 feet',
    },
    visitorInfo: {
      openingHours: '6:30 AM - 5:30 PM',
      entryFee: 'Free',
      dressCode: 'Simple modest wear',
      accessibility: '45-minute trek required',
      bestTime: 'October to May',
      photography: 'Freely allowed',
    },
    features: [
      'Historical significance',
      'Trekking destination',
      'Ancient stupas',
      'Forest monastery setting',
      'Traditional ceremonies',
      'Peaceful meditation spots',
    ],
    festivals: [
      { name: 'Yuksom Festival', date: 'April', description: 'Historical celebration' },
      { name: 'Guru Rinpoche Day', date: 'Monthly', description: 'Padmasambhava celebration' },
    ],
    highlights: [
      'First monastery in Sikkim',
      'Historical trekking site',
      'Forest monastery setting',
      'Connection to three lamas',
    ],
    history: 'Established in 1701 by Lama Lhatsun Chempo, Dubdi holds the honor of being the first monastery built in Sikkim. It was here that the three great lamas met and established Buddhism in the region.',
  },
  ralong: {
    id: 'ralong',
    name: 'Ralong Monastery',
    location: 'Ralong, South Sikkim',
    description: 'Known for its annual masked dance festival and beautiful traditional architecture, Ralong Monastery serves as an important cultural center in South Sikkim.',
    founded: '1768',
    sect: 'Kagyu',
    coordinates: { lat: 27.1167, lng: 88.3833 },
    images: [pemayangtseImage, pemayangtseImage, pemayangtseImage, pemayangtseImage, pemayangtseImage],
    quickFacts: {
      founded: '1768',
      sect: 'Kagyu Order',
      standoutFeature: 'Hot springs nearby',
      monks: '45 resident monks',
      altitude: '5,500 feet',
    },
    visitorInfo: {
      openingHours: '6:00 AM - 6:00 PM',
      entryFee: 'Free',
      dressCode: 'Comfortable modest clothing',
      accessibility: 'Easy road access',
      bestTime: 'Year round',
      photography: 'Allowed in most areas',
    },
    features: [
      'Hot springs complex',
      'Traditional dance performances',
      'Therapeutic treatments',
      'Monastery guesthouse',
      'Organic farming',
      'Community programs',
    ],
    festivals: [
      { name: 'Ralong Festival', date: 'November', description: 'Annual masked dance festival' },
      { name: 'Sonam Losar', date: 'December', description: 'Tamang New Year' },
    ],
    highlights: [
      'Natural hot springs',
      'Therapeutic monastery',
      'Traditional healing practices',
      'Community engagement center',
    ],
    history: 'Founded in 1768, Ralong Monastery is unique for combining spiritual practices with natural healing through its nearby hot springs. It has become a center for both religious and wellness tourism.',
  },
};