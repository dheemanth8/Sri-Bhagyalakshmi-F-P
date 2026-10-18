export interface ContactConfig {
  phone: string | null;
  phoneDisplay: string | null;
  whatsapp: string | null;
  whatsappDisplay: string | null;
  addressEnglish: string | null;
  addressTelugu: string | null;
  openingHoursEnglish: string | null;
  openingHoursTelugu: string | null;
  email: string | null;
}

export interface BusinessInfo {
  name: {
    en: string;
    te: string;
  };
  shortName: string;
  establishedYear: number;
  industry: {
    en: string;
    te: string;
  };
  devotionalSubtitle: {
    en: string;
    te: string;
  };
  location: {
    latitude: number;
    longitude: number;
    mapsUrl: string;
    embedUrl: string;
    regionEn: string;
    regionTe: string;
  };
  leadership: {
    founder1: {
      name: { en: string; te: string };
      role: { en: string; te: string };
      image?: string;
    };
    founder2: {
      name: { en: string; te: string };
      role: { en: string; te: string };
      relation: { en: string; te: string };
      image?: string;
    };
  };
  contact: ContactConfig;
}

export const businessData: BusinessInfo = {
  name: {
    en: 'Sri Bhagyalakshmi Fertilizers & Pesticides',
    te: 'శ్రీ భాగ్యలక్ష్మి ఫర్టిలైజర్స్ & పెస్టిసైడ్స్',
  },
  shortName: 'Sri Bhagyalakshmi',
  establishedYear: 1995,
  leadership: {
    founder1: {
      name: {
        en: 'Annem Balarama Subba Reddy',
        te: 'అన్నెం బలరామ సుబ్బారెడ్డి',
      },
      role: {
        en: 'Founder & Owner',
        te: 'వ్యవస్థాపకులు & యజమాని',
      },
      image: '/images/annem_balarama_subba_reddy.webp',
    },
    founder2: {
      name: {
        en: 'Annem Chandra Sekhar Reddy',
        te: 'అన్నెం చంద్రశేఖర్ రెడ్డి',
      },
      role: {
        en: 'Founder & Owner',
        te: 'వ్యవస్థాపకులు & యజమాని',
      },
      relation: {
        en: 'Son of Annem Balarama Subba Reddy',
        te: 'అన్నెం బలరామ సుబ్బారెడ్డి గారి కుమారుడు',
      },
      image: '/images/annem_chandra_sekhar_reddy.webp',
    },
  },
  industry: {
    en: 'Fertilizers, Pesticides & Agricultural Inputs',
    te: 'ఎరువులు, పురుగుమందులు మరియు వ్యవసాయ ఉత్పత్తులు',
  },
  devotionalSubtitle: {
    en: 'Authorized Agricultural Fertilizers & Pesticides Retailer',
    te: 'రైతులకు నమ్మకమైన వ్యవసాయ ఎరువులు & పురుగుమందులు',
  },
  location: {
    latitude: 15.1345254,
    longitude: 78.504194,
    mapsUrl: 'https://maps.app.goo.gl/tARrftEVWdgZXEAa6',
    embedUrl: 'https://maps.google.com/maps?q=15.1345254,78.504194+(Sri+Bhagyalakshmi+Fertilizers+%26+Pesticides)&t=&z=17&ie=UTF8&iwloc=B&output=embed',
    regionEn: 'SRI BHAGYALAKSHMI F&P, Allagadda TB road opposite to KVB bank 518543',
    regionTe: 'శ్రీ భాగ్యలక్ష్మి ఎఫ్&పి, ఆళ్లగడ్డ టి.బి రోడ్డు, కె.వి.బి బ్యాంక్ ఎదురుగా, 518543',
  },
  contact: {
    phone: '+918500264499',
    phoneDisplay: '+91 85002 64499',
    whatsapp: '+918500264499',
    whatsappDisplay: '+91 85002 64499',
    addressEnglish: 'SRI BHAGYALAKSHMI F&P, Allagadda TB road opposite to KVB bank 518543',
    addressTelugu: 'శ్రీ భాగ్యలక్ష్మి ఎఫ్&పి, ఆళ్లగడ్డ టి.బి రోడ్డు, కె.వి.బి బ్యాంక్ ఎదురుగా, 518543',
    openingHoursEnglish: 'Monday to Saturday: 8:00 AM – 8:00 PM (Sunday: Closed)',
    openingHoursTelugu: 'సోమవారం నుండి శనివారం: ఉదయం 8:00 – రాత్రి 8:00 (ఆదివారం: సెలవు)',
    email: null,
  },
};
