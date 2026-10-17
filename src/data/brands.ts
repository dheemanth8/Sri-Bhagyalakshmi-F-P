// Visual Brand Logos (SVGs & PNGs)
import bayerLogo from '../assets/logos/bayer.svg';
import tataLogo from '../assets/logos/tata.svg';
import fmcLogo from '../assets/logos/fmc.svg';
import cortevaLogo from '../assets/logos/corteva.svg';
import adamaLogo from '../assets/logos/adama.svg';
import novaLogo from '../assets/logos/nova.png';
import prismLogo from '../assets/logos/prism.png';

// Newly Added Pesticides & Fertilizers Brands
import basfLogo from '../assets/logos/basf.svg';
import indofilLogo from '../assets/logos/indofil.png';
import naclLogo from '../assets/logos/nacl.png';
import garudhaLogo from '../assets/logos/garudha.png';
import nichinoLogo from '../assets/logos/nichino.png';
import ialLogo from '../assets/logos/ial.png';
import coramandalLogo from '../assets/logos/coramandal.svg';
import gspLogo from '../assets/logos/gsp.png';
import tropicalLogo from '../assets/logos/tropical.svg';
import spicLogo from '../assets/logos/spic.svg';
import nflLogo from '../assets/logos/nfl.svg';
import factLogo from '../assets/logos/fact.png';
import kribhcoLogo from '../assets/logos/kribhco.png';
import iffcoLogo from '../assets/logos/iffco.svg';
import mahadhanLogo from '../assets/logos/mahadhan.png';
import pplLogo from '../assets/logos/ppl.svg';
import iplLogo from '../assets/logos/ipl.jpg';

export interface Brand {
  id: string;
  name: string;
  fullName: {
    en: string;
    te: string;
  };
  logo: string;
  category: {
    en: string;
    te: string;
  };
  productType: 'pesticides' | 'fertilizers' | 'both';
  description: {
    en: string;
    te: string;
  };
  altText: string;
}

export const featuredBrands: Brand[] = [
  // 1. BASF
  {
    id: 'basf',
    name: 'BASF',
    fullName: {
      en: 'BASF Agricultural Solutions',
      te: 'బి.ఎ.ఎస్.ఎఫ్ అగ్రికల్చరల్ సొల్యూషన్స్',
    },
    logo: basfLogo,
    category: {
      en: 'Crop Protection & Pesticides',
      te: 'పంట సంరక్షణ & పురుగుమందులు',
    },
    productType: 'pesticides',
    description: {
      en: 'World-renowned agricultural science company delivering top-tier fungicides, herbicides, and insecticides.',
      te: 'అంతర్జాతీయ స్థాయి నాణ్యమైన శిలీంద్రనాశకాలు మరియు పురుగుమందుల ప్రసిద్ధ సంస్థ.',
    },
    altText: 'BASF Agricultural Solutions official logo',
  },
  // 2. INDOFILL
  {
    id: 'indofil',
    name: 'INDOFILL',
    fullName: {
      en: 'Indofil Industries Limited',
      te: 'ఇండోఫిల్ ఇండస్ట్రీస్ లిమిటెడ్',
    },
    logo: indofilLogo,
    category: {
      en: 'Pesticides & Crop Protection',
      te: 'పురుగుమందులు & పంట రక్షణ',
    },
    productType: 'pesticides',
    description: {
      en: 'Pioneering agricultural chemicals, fungicides, insecticides, and specialty plant care.',
      te: 'నాణ్యమైన శిలీంద్రనాశకాలు మరియు పంట సంరక్షణ రసాయనాలలో గుర్తింపు పొందిన సంస్థ.',
    },
    altText: 'Indofil Industries Limited official logo',
  },
  // 3. NACL
  {
    id: 'nacl',
    name: 'NACL',
    fullName: {
      en: 'NACL Industries Limited',
      te: 'ఎన్.ఎ.సి.ఎల్ ఇండస్ట్రీస్ లిమిటెడ్',
    },
    logo: naclLogo,
    category: {
      en: 'Pesticides & Agrochemicals',
      te: 'పురుగుమందులు & వ్యవసాయ రసాయనాలు',
    },
    productType: 'pesticides',
    description: {
      en: 'Trusted comprehensive crop protection formulations, technical insecticides, and herbicides.',
      te: 'రైతులకు నమ్మకమైన పురుగుమందులు మరియు కలుపు మందుల తయారీ సంస్థ.',
    },
    altText: 'NACL Industries Limited official logo',
  },
  // 4. GARUDHA
  {
    id: 'garudha',
    name: 'GARUDHA',
    fullName: {
      en: 'Garudha Chemicals & Fertilizers',
      te: 'గరుడ కెమికల్స్ & ఫర్టిలైజర్స్',
    },
    logo: garudhaLogo,
    category: {
      en: 'Pesticides & Fertilizers',
      te: 'పురుగుమందులు & ఎరువులు',
    },
    productType: 'both',
    description: {
      en: 'Effective agricultural pesticides, micronutrients, and crop yield enhancers.',
      te: 'రైతుల పంట దిగుబడిని పెంచే ప్రభావవంతమైన పురుగుమందులు మరియు పోషకాలు.',
    },
    altText: 'Garudha official logo',
  },
  // 5. NICHINO
  {
    id: 'nichino',
    name: 'NICHINO',
    fullName: {
      en: 'Nichino India (Nihon Nohyaku)',
      te: 'నిచినో ఇండియా',
    },
    logo: nichinoLogo,
    category: {
      en: 'Japanese Pesticides & Insecticides',
      te: 'జపనీస్ పురుగుమందులు & పంట సంరక్షణ',
    },
    productType: 'pesticides',
    description: {
      en: 'Advanced Japanese crop protection technology providing high-potency insecticides and mite-controllers.',
      te: 'అధునాతన జపనీస్ సాంకేతికతతో కూడిన శక్తివంతమైన పురుగుమందులు.',
    },
    altText: 'Nichino India official logo',
  },
  // 6. IAL
  {
    id: 'ial',
    name: 'IAL',
    fullName: {
      en: 'India Pesticides Limited (IAL)',
      te: 'ఇండియా పెస్టిసైడ్స్ లిమిటెడ్ (IAL)',
    },
    logo: ialLogo,
    category: {
      en: 'Pesticides & Fungicides',
      te: 'పురుగుమందులు & శిలీంద్రనాశకాలు',
    },
    productType: 'pesticides',
    description: {
      en: 'Leading technical manufacturer of quality fungicides, insecticides, and crop formulations.',
      te: 'విశ్వసనీయమైన సాంకేతిక పురుగుమందులు మరియు పంట రక్షణ ఉత్పత్తుల తయారీదారులు.',
    },
    altText: 'IAL India Pesticides Limited official logo',
  },
  // 7. CORAMANDAL
  {
    id: 'coramandal',
    name: 'CORAMANDAL',
    fullName: {
      en: 'Coromandel International (Gromor)',
      te: 'కోరమాండల్ ఇంటర్నేషనల్ (గ్రోమోర్)',
    },
    logo: coramandalLogo,
    category: {
      en: 'Fertilizers & Crop Nutrition',
      te: 'ఎరువులు & గ్రోమోర్ పోషకాలు',
    },
    productType: 'fertilizers',
    description: {
      en: 'India’s premier phosphatic fertilizer giant, makers of legendary GROMOR NPK fertilizers.',
      te: 'రైతుల నమ్మకమైన గ్రోమోర్ ఎన్.పి.కె కాంప్లెక్స్ ఎరువుల అగ్రగామి సంస్థ.',
    },
    altText: 'Coromandel International Gromor official logo',
  },
  // 8. GSP
  {
    id: 'gsp',
    name: 'GSP',
    fullName: {
      en: 'GSP Crop Science',
      te: 'జి.ఎస్.పి క్రాప్ సైన్స్',
    },
    logo: gspLogo,
    category: {
      en: 'Pesticides & Agrochemicals',
      te: 'పురుగుమందులు & వ్యవసాయ రసాయనాలు',
    },
    productType: 'pesticides',
    description: {
      en: 'Specialized crop health solutions, innovative insecticides, and pest defense formulations.',
      te: 'పంటల తెగుళ్లు మరియు పురుగుల నివారణకు విశిష్ట రసాయన ఉత్పత్తులు.',
    },
    altText: 'GSP Crop Science official logo',
  },
  // 9. TROPICAL
  {
    id: 'tropical',
    name: 'TROPICAL',
    fullName: {
      en: 'Tropical Agrosystem',
      te: 'ట్రాపికల్ ఆగ్రోసిస్టమ్',
    },
    logo: tropicalLogo,
    category: {
      en: 'Bio-Fertilizers & Crop Care',
      te: 'బయో ఎరువులు & పంట సంరక్షణ',
    },
    productType: 'both',
    description: {
      en: 'Eco-effective plant nutrition, biological fertilizers, and eco-friendly crop protection inputs.',
      te: 'సేంద్రీయ పోషకాలు మరియు పర్యావరణహిత పంట రక్షణ ఉత్పత్తులు.',
    },
    altText: 'Tropical Agrosystem official logo',
  },
  // 10. SPIC
  {
    id: 'spic',
    name: 'SPIC',
    fullName: {
      en: 'Southern Petrochemical Industries (SPIC)',
      te: 'స్పిక్ ఫర్టిలైజర్స్ (SPIC)',
    },
    logo: spicLogo,
    category: {
      en: 'Fertilizers & Soil Nutrition',
      te: 'ఎరువులు & నేల పోషకాలు',
    },
    productType: 'fertilizers',
    description: {
      en: 'South India’s iconic producer of high-grade Urea, complex fertilizers, and plant nutrients.',
      te: 'దక్షిణ భారతదేశంలో విశేష ప్రాచుర్యం పొందిన యూరియా మరియు కాంప్లెక్స్ ఎరువులు.',
    },
    altText: 'SPIC Fertilizers official logo',
  },
  // 11. NFL
  {
    id: 'nfl',
    name: 'NFL',
    fullName: {
      en: 'National Fertilizers Limited (Kisan)',
      te: 'నేషనల్ ఫర్టిలైజర్స్ లిమిటెడ్ (కిసాన్)',
    },
    logo: nflLogo,
    category: {
      en: 'Fertilizers & Kisan Urea',
      te: 'ఎరువులు & కిసాన్ యూరియా',
    },
    productType: 'fertilizers',
    description: {
      en: 'Premier PSU manufacturer of Kisan Urea, bio-fertilizers, and plant nutrients.',
      te: 'భారత ప్రభుత్వ రంగ సంస్థ తయారీ కిసాన్ బ్రాండ్ యూరియా మరియు నాణ్యమైన ఎరువులు.',
    },
    altText: 'National Fertilizers Limited official logo',
  },
  // 12. FACT
  {
    id: 'fact',
    name: 'FACT',
    fullName: {
      en: 'Fertilisers and Chemicals Travancore',
      te: 'ఫ్యాక్ట్ ఫర్టిలైజర్స్ (ఫ్యాక్టమ్‌ఫాస్)',
    },
    logo: factLogo,
    category: {
      en: 'Fertilizers & Factamfos',
      te: 'ఎరువులు & ఫ్యాక్టమ్‌ఫాస్',
    },
    productType: 'fertilizers',
    description: {
      en: 'Famous makers of FACTAMFOS (20:20:0:13) ammonium phosphate sulphate fertilizer.',
      te: 'రైతులలో అత్యంత ఆదరణ పొందిన ఫ్యాక్టమ్‌ఫాస్ ఎరువుల ప్రసిద్ధ తయారీదారులు.',
    },
    altText: 'FACT Fertilizers official logo',
  },
  // 13. KRIBHCO
  {
    id: 'kribhco',
    name: 'KRIBHCO',
    fullName: {
      en: 'Krishak Bharati Cooperative Limited',
      te: 'క్రిబ్కో (కృషక్ భారతి కో-ఆపరేటివ్)',
    },
    logo: kribhcoLogo,
    category: {
      en: 'Fertilizers & Bio-Nutrients',
      te: 'ఎరువులు & సహకార పోషకాలు',
    },
    productType: 'fertilizers',
    description: {
      en: 'National farmer cooperative providing premium urea, bio-fertilizers, and certified inputs.',
      te: 'రైతు సహకార రంగంలో అగ్రశ్రేణి యూరియా మరియు సేంద్రీయ ఎరువుల సంస్థ.',
    },
    altText: 'KRIBHCO official logo',
  },
  // 14. IFFCO
  {
    id: 'iffco',
    name: 'IFFCO',
    fullName: {
      en: 'Indian Farmers Fertiliser Cooperative',
      te: 'ఇఫ్కో (IFFCO)',
    },
    logo: iffcoLogo,
    category: {
      en: 'Fertilizers & Nano Urea',
      te: 'ఎరువులు & నానో యూరియా',
    },
    productType: 'fertilizers',
    description: {
      en: 'World’s largest fertilizer cooperative, innovators of revolutionary Nano Urea and complex fertilizers.',
      te: 'ప్రపంచంలోనే అతిపెద్ద ఎరువుల సహకార సంస్థ, నానో యూరియా ఆవిష్కర్తలు.',
    },
    altText: 'IFFCO official logo',
  },
  // 15. MAHADHAN
  {
    id: 'mahadhan',
    name: 'MAHADHAN',
    fullName: {
      en: 'Mahadhan (Deepak Fertilisers)',
      te: 'మహాధన్ (దీపక్ ఫర్టిలైజర్స్)',
    },
    logo: mahadhanLogo,
    category: {
      en: 'Fertilizers & Smart Nutrition',
      te: 'ఎరువులు & స్మార్ట్ పోషకాలు',
    },
    productType: 'fertilizers',
    description: {
      en: 'Pioneers in high-yield specialty fertilizers, Bensulf, and water-soluble fertigation grades.',
      te: 'అధిక దిగుబడుల కొరకు ప్రత్యేకమైన నీటిలో కరిగే ఎరువులు మరియు సల్ఫర్ పోషకాలు.',
    },
    altText: 'Mahadhan official logo',
  },
  // 16. PPL
  {
    id: 'ppl',
    name: 'PPL',
    fullName: {
      en: 'Paradeep Phosphates Limited (Navratna)',
      te: 'పారదీప్ ఫాస్ఫేట్స్ లిమిటెడ్ (నవరత్న)',
    },
    logo: pplLogo,
    category: {
      en: 'Fertilizers & DAP / NPK',
      te: 'ఎరువులు & డి.ఎ.పి / ఎన్.పి.కె',
    },
    productType: 'fertilizers',
    description: {
      en: 'Major phosphatic fertilizer manufacturer known for Navratna DAP and tailored NPK complex fertilizers.',
      te: 'ప్రసిద్ధ నవరత్న డి.ఎ.పి మరియు సంక్లిష్ట ఎరువుల భారీ తయారీ సంస్థ.',
    },
    altText: 'PPL Paradeep Phosphates Limited official logo',
  },
  // 17. IPL
  {
    id: 'ipl',
    name: 'IPL',
    fullName: {
      en: 'Indian Potash Limited',
      te: 'ఇండియన్ పొటాష్ లిమిటెడ్ (IPL)',
    },
    logo: iplLogo,
    category: {
      en: 'Fertilizers & MOP Potash',
      te: 'ఎరువులు & పొటాష్ పోషకాలు',
    },
    productType: 'fertilizers',
    description: {
      en: 'India’s foremost supplier of Muriate of Potash (MOP), DAP, and balanced soil nutrients.',
      te: 'దేశవ్యాప్తంగా పంటలకు అవసరమైన పొటాష్ మరియు సమగ్ర నేల పోషకాల సరఫరాదారులు.',
    },
    altText: 'Indian Potash Limited official logo',
  },
  // Additional Recognized Brands Sold in Store
  {
    id: 'bayer',
    name: 'BAYER',
    fullName: {
      en: 'Bayer Crop Science',
      te: 'బేయర్ క్రాప్ సైన్స్',
    },
    logo: bayerLogo,
    category: {
      en: 'Crop Protection & Pesticides',
      te: 'పంట సంరక్షణ & పురుగుమందులు',
    },
    productType: 'pesticides',
    description: {
      en: 'Global leader in innovative agricultural science, insecticides, and fungicides.',
      te: 'వినూత్న వ్యవసాయ శాస్త్రం మరియు పురుగుమందులలో ప్రపంచ ప్రసిద్ధ సంస్థ.',
    },
    altText: 'Bayer Crop Science official logo',
  },
  {
    id: 'tata',
    name: 'TATA',
    fullName: {
      en: 'Tata Chemicals / Rallis India',
      te: 'టాటా కెమికల్స్ / రాలీస్ ఇండియా',
    },
    logo: tataLogo,
    category: {
      en: 'Fertilizers & Pesticides',
      te: 'ఎరువులు & పురుగుమందులు',
    },
    productType: 'both',
    description: {
      en: 'India’s trusted pioneer in quality fertilizers, plant nutrition, and crop protection.',
      te: 'నాణ్యమైన ఎరువులు, నేల ఆరోగ్యం మరియు పంట రక్షణలో భారతదేశపు నమ్మకమైన సంస్థ.',
    },
    altText: 'Tata official logo',
  },
  {
    id: 'fmc',
    name: 'FMC',
    fullName: {
      en: 'FMC India',
      te: 'ఎఫ్.ఎమ్.సి ఇండియా',
    },
    logo: fmcLogo,
    category: {
      en: 'Pesticides & Insecticides',
      te: 'పురుగుమందులు & కీటకనాశకాలు',
    },
    productType: 'pesticides',
    description: {
      en: 'World-renowned crop protection company providing advanced pest defense formulations.',
      te: 'అధునాతన పంట రక్షణ మరియు కీటకనాశకాల తయారీలో అగ్రగామి.',
    },
    altText: 'FMC Corporation official logo',
  },
  {
    id: 'corteva',
    name: 'CORTEVA',
    fullName: {
      en: 'Corteva Agriscience',
      te: 'కోర్టెవా అగ్రిసైన్స్',
    },
    logo: cortevaLogo,
    category: {
      en: 'Pesticides & Crop Protection',
      te: 'పురుగుమందులు & పంట సంరక్షణ',
    },
    productType: 'pesticides',
    description: {
      en: 'Global agricultural science company helping farmers maximize yield and shield harvests.',
      te: 'రైతుల దిగుబడులను పెంచే అంతర్జాతీయ స్థాయి పంట రక్షణ సాంకేతికతలు.',
    },
    altText: 'Corteva Agriscience official logo',
  },
  {
    id: 'adama',
    name: 'ADAMA',
    fullName: {
      en: 'ADAMA India',
      te: 'అడామా ఇండియా',
    },
    logo: adamaLogo,
    category: {
      en: 'Pesticides & Crop Protection',
      te: 'పురుగుమందులు & పంట రక్షణ',
    },
    productType: 'pesticides',
    description: {
      en: 'Global leader in proven farmer-centric crop protection solutions and effective pest control.',
      te: 'రైతులకు నమ్మకమైన మరియు సులభమైన పంట రక్షణ పరిష్కారాలు అందించే సంస్థ.',
    },
    altText: 'ADAMA official logo',
  },
  {
    id: 'nova',
    name: 'NOVA',
    fullName: {
      en: 'Nova AgriTech Limited',
      te: 'నోవా అగ్రిటెక్ లిమిటెడ్',
    },
    logo: novaLogo,
    category: {
      en: 'Fertilizers & Bio-stimulants',
      te: 'ఎరువులు & బయో పోషకాలు',
    },
    productType: 'fertilizers',
    description: {
      en: 'Innovative soil health, plant nutrition, and bio-stimulants tailored for Indian soil.',
      te: 'భారతీయ నేలలకు అనువైన నేల ఆరోగ్యం మరియు జీవ ఉత్ప్రేరకాల తయారీ సంస్థ.',
    },
    altText: 'Nova AgriTech Limited official logo',
  },
  {
    id: 'prism',
    name: 'PRISM',
    fullName: {
      en: 'Prism Crop Science',
      te: 'ప్రిజమ్ క్రాప్ సైన్స్',
    },
    logo: prismLogo,
    category: {
      en: 'Pesticides & Crop Care',
      te: 'పురుగుమందులు & పంట రక్షణ',
    },
    productType: 'pesticides',
    description: {
      en: 'Targeted agricultural crop solutions enhancing immunity, pest resistance, and harvest vitality.',
      te: 'పంటల రోగనిరోధక శక్తిని పెంచే విశిష్ట ఉత్పత్తుల తయారీ సంస్థ.',
    },
    altText: 'Prism Crop Science official logo',
  },
];
