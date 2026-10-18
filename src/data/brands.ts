// Visual Brand Logos (SVGs & PNGs)
import bayerLogo from '../assets/logos/bayer.svg';
import tataLogo from '../assets/logos/tata.svg';
import fmcLogo from '../assets/logos/fmc.svg';
import cortevaLogo from '../assets/logos/corteva.svg';
import adamaLogo from '../assets/logos/adama.svg';
import novaLogo from '../assets/logos/nova.png';
import prismLogo from '../assets/logos/prism.png';
import basfLogo from '../assets/logos/basf.svg';
import indofilLogo from '../assets/logos/indofil.png';
import naclLogo from '../assets/logos/nacl.png';
import garudhaLogo from '../assets/logos/garudha.png';
import nichinoLogo from '../assets/logos/nichino.png';
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
import syngentaLogo from '../assets/logos/syngenta.svg';
import uplLogo from '../assets/logos/upl.png';
import dhanukaLogo from '../assets/logos/dhanuka.png';
import sumitomoLogo from '../assets/logos/sumitomo.png';
import piIndustriesLogo from '../assets/logos/pi_industries.svg';
import agrishineLogo from '../assets/logos/agrishine.jpg';
import ariesAgroLogo from '../assets/logos/aries_agro.svg';

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
  // 1. Bayer
  {
    id: 'bayer',
    name: 'Bayer',
    fullName: {
      en: 'Bayer Crop Science India',
      te: 'బేయర్ క్రాప్ సైన్స్ ఇండియా',
    },
    logo: bayerLogo,
    category: {
      en: 'Crop Protection & Pesticides',
      te: 'పంట సంరక్షణ & పురుగుమందులు',
    },
    productType: 'pesticides',
    description: {
      en: 'Global leader in crop science, providing cutting-edge fungicides, herbicides, and insecticides for high-yield farming.',
      te: 'నాణ్యమైన శిలీంద్రనాశకాలు, కలుపుమందులు మరియు పురుగుమందులలో అంతర్జాతీయ ప్రసిద్ధి చెందిన సంస్థ.',
    },
    altText: 'Bayer Crop Science official logo',
  },

  // 2. Syngenta
  {
    id: 'syngenta',
    name: 'Syngenta',
    fullName: {
      en: 'Syngenta India Limited',
      te: 'సింజెంటా ఇండియా లిమిటెడ్',
    },
    logo: syngentaLogo,
    category: {
      en: 'Crop Protection & Plant Health',
      te: 'పంట రక్షణ & మొక్కల ఆరోగ్యం',
    },
    productType: 'pesticides',
    description: {
      en: 'World-renowned agricultural technology innovator providing premium insecticides, fungicides, and bio-stimulants.',
      te: 'అంతర్జాతీయ గుర్తింపు పొందిన పురుగుమందులు, శిలీంద్రనాశకాలు మరియు బయో-స్టిమ్యులెంట్ల సంస్థ.',
    },
    altText: 'Syngenta India Limited official logo',
  },

  // 3. Coromandel (Gromor)
  {
    id: 'coromandel',
    name: 'Coromandel',
    fullName: {
      en: 'Coromandel International Limited (Gromor)',
      te: 'కోరమాండల్ ఇంటర్నేషనల్ (గ్రోమోర్)',
    },
    logo: coramandalLogo,
    category: {
      en: 'Fertilizers & Crop Nutrition',
      te: 'ఎరువులు & పంట పోషణ',
    },
    productType: 'both',
    description: {
      en: 'India’s premier agricultural solutions provider, famous for Gromor complex fertilizers, NPK, and specialized plant nutrition.',
      te: 'గ్రోమోర్ కాంప్లెక్స్ ఎరువులు మరియు వ్యవసాయ పోషకాలలో భారతదేశంలో అత్యంత ప్రసిద్ధ సంస్థ.',
    },
    altText: 'Coromandel Gromor official logo',
  },

  // 4. FMC
  {
    id: 'fmc',
    name: 'FMC',
    fullName: {
      en: 'FMC India',
      te: 'ఎఫ్.ఎమ్.సి ఇండియా',
    },
    logo: fmcLogo,
    category: {
      en: 'Crop Protection & Pesticides',
      te: 'పంట సంరక్షణ & పురుగుమందులు',
    },
    productType: 'pesticides',
    description: {
      en: 'Pioneering agricultural sciences company bringing innovative pest control solutions, including Coragen and Benevia.',
      te: 'కోరాజెన్, బెనెవియాతో సహా అగ్రశ్రేణి పురుగుమందులను అందించే అంతర్జాతీయ సంస్థ.',
    },
    altText: 'FMC India official logo',
  },

  // 5. Corteva
  {
    id: 'corteva',
    name: 'Corteva',
    fullName: {
      en: 'Corteva Agriscience',
      te: 'కోర్టెవా అగ్రిసైన్స్',
    },
    logo: cortevaLogo,
    category: {
      en: 'Crop Protection & Agroscience',
      te: 'పంట సంరక్షణ & వ్యవసాయ శాస్త్రం',
    },
    productType: 'pesticides',
    description: {
      en: 'Global agricultural science company helping farmers maximize yield and shield harvests with Delegate and Tracer.',
      te: 'రైతుల దిగుబడులను పెంచే డెలిగేట్ మరియు అత్యాధునిక పంట రక్షణ సాంకేతికతలు అందించే సంస్థ.',
    },
    altText: 'Corteva Agriscience official logo',
  },

  // 6. UPL
  {
    id: 'upl',
    name: 'UPL',
    fullName: {
      en: 'UPL Limited',
      te: 'యు.పి.ఎల్ లిమిటెడ్',
    },
    logo: uplLogo,
    category: {
      en: 'Crop Protection & Biosolutions',
      te: 'పంట రక్షణ & బయో పరిష్కారాలు',
    },
    productType: 'pesticides',
    description: {
      en: 'Leading sustainable agricultural solutions provider delivering famous formulations like Saaf, Ulala, and Lancer Gold.',
      te: 'సాఫ్, ఉలాల వంటి ప్రసిద్ధ పురుగుమందులు మరియు పంట రక్షణ పరిష్కారాల ప్రముఖ సంస్థ.',
    },
    altText: 'UPL Limited official logo',
  },

  // 7. Tata Rallis
  {
    id: 'tata',
    name: 'Tata Rallis',
    fullName: {
      en: 'Tata Chemicals / Rallis India',
      te: 'టాటా కెమికల్స్ / రాలీస్ ఇండియా',
    },
    logo: tataLogo,
    category: {
      en: 'Crop Care & Agrochemicals',
      te: 'పంట సంరక్షణ & వ్యవసాయ రసాయనాలు',
    },
    productType: 'pesticides',
    description: {
      en: 'Decades of Indian agricultural trust delivering proven fungicides like Contaf Plus and advanced crop care.',
      te: 'కొంటాఫ్ ప్లస్ వంటి నమ్మకమైన శిలీంద్రనాశకాలు మరియు పంట సంరక్షణ మందుల విశ్వసనీయ టాటా బ్రాండ్.',
    },
    altText: 'Tata Rallis official logo',
  },

  // 8. Dhanuka
  {
    id: 'dhanuka',
    name: 'Dhanuka',
    fullName: {
      en: 'Dhanuka Agritech Limited',
      te: 'ధనుక అగ్రిటెక్ లిమిటెడ్',
    },
    logo: dhanukaLogo,
    category: {
      en: 'Pesticides & Plant Protection',
      te: 'పురుగుమందులు & పంట రక్షణ',
    },
    productType: 'pesticides',
    description: {
      en: 'Leading Indian agrochemicals manufacturer delivering Konika, Targa Super, Omite, and advanced crop solutions.',
      te: 'కోనికా, టార్గా సూపర్ వంటి ఆధునిక పురుగుమందులు మరియు కలుపు మందులను అందించే సంస్థ.',
    },
    altText: 'Dhanuka Agritech Limited official logo',
  },

  // 9. BASF
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
      en: 'World-renowned agricultural science company delivering top-tier fungicides like Cabritop, Priaxor, and Basta herbicide.',
      te: 'అంతర్జాతీయ స్థాయి నాణ్యమైన శిలీంద్రనాశకాలు, బాస్టా కలుపుమందు మరియు పురుగుమందుల ప్రసిద్ధ సంస్థ.',
    },
    altText: 'BASF Agricultural Solutions official logo',
  },

  // 10. ADAMA
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
      en: 'Global leader in proven farmer-centric crop protection solutions including Rimon and Custodia.',
      te: 'రైతులకు నమ్మకమైన రిమోన్ మరియు కుస్టోడియా వంటి ప్రభావవంతమైన పంట రక్షణ మందులు.',
    },
    altText: 'ADAMA official logo',
  },

  // 11. Nova AgriTech
  {
    id: 'nova',
    name: 'Nova',
    fullName: {
      en: 'Nova Agri Tech Limited',
      te: 'నోవా అగ్రిటెక్ లిమిటెడ్',
    },
    logo: novaLogo,
    category: {
      en: 'Fertilizers & Bio-stimulants',
      te: 'ఎరువులు & బయో పోషకాలు',
    },
    productType: 'both',
    description: {
      en: 'Innovative soil health, plant nutrition, and bio-stimulants tailored for Andhra Pradesh & Telangana crops.',
      te: 'తెలుగు నేలలకు అనువైన నేల ఆరోగ్యం, సూక్ష్మ పోషకాలు మరియు జీవ ఉత్ప్రేరకాల తయారీ సంస్థ.',
    },
    altText: 'Nova AgriTech Limited official logo',
  },

  // 12. IFFCO
  {
    id: 'iffco',
    name: 'IFFCO',
    fullName: {
      en: 'Indian Farmers Fertiliser Cooperative (IFFCO)',
      te: 'ఇఫ్కో (IFFCO)',
    },
    logo: iffcoLogo,
    category: {
      en: 'Fertilizers & Nano Technology',
      te: 'ఎరువులు & నానో టెక్నాలజీ',
    },
    productType: 'fertilizers',
    description: {
      en: 'India’s largest cooperative fertilizer giant and pioneer of breakthrough Nano Urea and Nano DAP liquid.',
      te: 'భారతదేశపు అతిపెద్ద ఎరువుల సహకార సంస్థ మరియు నానో యూరియా, నానో డీఏపీ ఆవిష్కర్త.',
    },
    altText: 'IFFCO official logo',
  },

  // 13. Mahadhan
  {
    id: 'mahadhan',
    name: 'Mahadhan',
    fullName: {
      en: 'Mahadhan (Smartchem Technologies)',
      te: 'మహాధన్ (స్మార్ట్‌కెమ్)',
    },
    logo: mahadhanLogo,
    category: {
      en: 'High-Yield Fertilizers',
      te: 'అధిక దిగుబడి ఎరువులు',
    },
    productType: 'fertilizers',
    description: {
      en: 'Renowned for high-analysis specialty fertilizers, Mahadhan 24:24:0, and Croptek balanced nutrition blends.',
      te: 'మహాధన్ 24:24:0 మరియు క్రాప్‌టెక్ సమతుల్య పోషక ఎరువులలో విశేష గుర్తింపు పొందిన సంస్థ.',
    },
    altText: 'Mahadhan official logo',
  },

  // 14. KRIBHCO
  {
    id: 'kribhco',
    name: 'KRIBHCO',
    fullName: {
      en: 'Krishak Bharati Cooperative Limited (KRIBHCO)',
      te: 'క్రిబ్కో (KRIBHCO)',
    },
    logo: kribhcoLogo,
    category: {
      en: 'Fertilizers & Farmer Welfare',
      te: 'ఎరువులు & రైతు సంక్షేమం',
    },
    productType: 'fertilizers',
    description: {
      en: 'National cooperative premier manufacturing high-grade Neem Coated Urea and certified DAP.',
      te: 'రైతులకు నాణ్యమైన వేప పూత పూసిన యూరియా మరియు డీఏపీ అందించే జాతీయ సహకార సంస్థ.',
    },
    altText: 'KRIBHCO official logo',
  },

  // 15. FACT
  {
    id: 'fact',
    name: 'FACT',
    fullName: {
      en: 'The Fertilisers and Chemicals Travancore (FACT)',
      te: 'ఫాక్ట్ (FACT)',
    },
    logo: factLogo,
    category: {
      en: 'Fertilizers & Sulphate Complex',
      te: 'ఎరువులు & సల్ఫేట్ కాంప్లెక్స్',
    },
    productType: 'fertilizers',
    description: {
      en: 'Historic fertilizer pioneer famous for Factamfos 20:20:0:13, Ammonium Sulphate, and organic manures.',
      te: 'ఫాక్టమ్‌ఫాస్ 20:20:0:13 మరియు అమ్మోనియం సల్ఫేట్ వంటి నాణ్యమైన ఎరువుల ప్రసిద్ధ ప్రభుత్వ సంస్థ.',
    },
    altText: 'FACT official logo',
  },

  // 16. IPL
  {
    id: 'ipl',
    name: 'IPL',
    fullName: {
      en: 'Indian Potash Limited (IPL)',
      te: 'ఇండియన్ పొటాష్ లిమిటెడ్ (IPL)',
    },
    logo: iplLogo,
    category: {
      en: 'Potash & Primary Fertilizers',
      te: 'పొటాష్ & ముఖ్య ఎరువులు',
    },
    productType: 'fertilizers',
    description: {
      en: 'India’s foremost potash and primary fertilizer provider, supplying MOP, DAP, Urea, and 16-16-16.',
      te: 'పొటాష్ (MOP), డీఏపీ మరియు యూరియా సరఫరాలో భారతదేశంలో అగ్రగామి సంస్థ.',
    },
    altText: 'IPL official logo',
  },

  // 17. PPL
  {
    id: 'ppl',
    name: 'PPL',
    fullName: {
      en: 'Paradeep Phosphates Limited (PPL)',
      te: 'పారాదీప్ ఫాస్ఫేట్స్ లిమిటెడ్ (PPL)',
    },
    logo: pplLogo,
    category: {
      en: 'Phosphatic & Complex Fertilizers',
      te: 'భాస్వరం & కాంప్లెక్స్ ఎరువులు',
    },
    productType: 'fertilizers',
    description: {
      en: 'Major phosphatic fertilizer manufacturer providing Navratna complex fertilizers, DAP, and Urea.',
      te: 'నవరత్న కాంప్లెక్స్ ఎరువులు మరియు నాణ్యమైన యూరియా, డీఏపీ ఉత్పత్తిదారు.',
    },
    altText: 'PPL official logo',
  },

  // 18. Indofil
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
      en: 'Pioneering agricultural chemicals, famous for Indofil M-45, Z-78, Baan, and specialty fungicides.',
      te: 'ఇండోఫిల్ ఎమ్-45, జెడ్-78 వంటి నాణ్యమైన శిలీంద్రనాశకాలు మరియు పురుగుమందుల సంస్థ.',
    },
    altText: 'Indofil Industries Limited official logo',
  },

  // 19. NACL
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
      en: 'Trusted comprehensive crop protection formulations, technical insecticides like MIDA, and fungicides.',
      te: 'రైతులకు నమ్మకమైన పురుగుమందులు మరియు పంట రక్షణ మందుల తయారీ సంస్థ.',
    },
    altText: 'NACL Industries Limited official logo',
  },

  // 20. Sumitomo
  {
    id: 'sumitomo',
    name: 'Sumitomo',
    fullName: {
      en: 'Sumitomo Chemical India Limited',
      te: 'సుమిటోమో కెమికల్ ఇండియా లిమిటెడ్',
    },
    logo: sumitomoLogo,
    category: {
      en: 'Japanese Crop Protection & PGR',
      te: 'జపనీస్ పంట రక్షణ & పీజీఆర్',
    },
    productType: 'pesticides',
    description: {
      en: 'Japanese innovation bringing high-quality plant growth regulators like ProGibb Easy and specialty herbicides.',
      te: 'జపనీస్ సాంకేతికతతో కూడిన ప్రోగిబ్ ఈజీ మరియు ఆధునిక పంట సంరక్షణ మందులు.',
    },
    altText: 'Sumitomo Chemical India official logo',
  },

  // 21. PI Industries
  {
    id: 'pi_industries',
    name: 'PI Industries',
    fullName: {
      en: 'PI Industries Limited',
      te: 'పి.ఐ ఇండస్ట్రీస్ లిమిటెడ్',
    },
    logo: piIndustriesLogo,
    category: {
      en: 'Advanced Agrochemicals & Herbicides',
      te: 'అధునాతన రసాయనాలు & కలుపు మందులు',
    },
    productType: 'pesticides',
    description: {
      en: 'Premium agrochemical leader delivering celebrated products like Nominee Gold and Keefun.',
      te: 'నామినీ గోల్డ్ వంటి అగ్రగామి వరి కలుపు మందులు మరియు కీఫున్ పురుగుమందుల సంస్థ.',
    },
    altText: 'PI Industries Limited official logo',
  },

  // 22. Gharda Chemicals
  {
    id: 'gharda',
    name: 'Gharda Chemicals',
    fullName: {
      en: 'Gharda Chemicals Limited',
      te: 'ఘర్దా కెమికల్స్ లిమిటెడ్',
    },
    logo: garudhaLogo,
    category: {
      en: 'Pesticides & Crop Protection',
      te: 'పురుగుమందులు & పంట సంరక్షణ',
    },
    productType: 'pesticides',
    description: {
      en: 'Indian chemical synthesis pioneer producing high-potency technical insecticides like King Doxa and Maheveer.',
      te: 'కింగ్ డోక్సా, మహావీర్ వంటి ప్రభావవంతమైన పురుగుమందులను అందించే భారతీయ పరిశోధక సంస్థ.',
    },
    altText: 'Gharda Chemicals official logo',
  },

  // 23. SPIC
  {
    id: 'spic',
    name: 'SPIC',
    fullName: {
      en: 'Southern Petrochemical Industries Corporation (SPIC)',
      te: 'స్పిక్ (SPIC)',
    },
    logo: spicLogo,
    category: {
      en: 'Fertilizers & Organic Manures',
      te: 'ఎరువులు & సేంద్రీయ పోషకాలు',
    },
    productType: 'fertilizers',
    description: {
      en: 'Renowned fertilizer manufacturer providing high-grade SPIC PROM phosphate-rich organic manures.',
      te: 'స్పిక్ ప్రామ్ వంటి నాణ్యమైన సేంద్రీయ మరియు రసాయన ఎరువుల తయారీ సంస్థ.',
    },
    altText: 'SPIC official logo',
  },

  // 24. Tropical Agro
  {
    id: 'tropical',
    name: 'Tropical Agro',
    fullName: {
      en: 'Tropical Agrosystem India',
      te: 'ట్రాపికల్ ఆగ్రోసిస్టమ్ ఇండియా',
    },
    logo: tropicalLogo,
    category: {
      en: 'Biologicals & Crop Nutrition',
      te: 'జీవ నియంత్రకాలు & పంట పోషణ',
    },
    productType: 'both',
    description: {
      en: 'Pioneer in crop protection, biological nutrients, and micro-nutrients for sustainable agriculture.',
      te: 'సుస్థిర వ్యవసాయానికి అవసరమైన జీవ పోషకాలు మరియు పంట సంరక్షణ పరిష్కారాలు.',
    },
    altText: 'Tropical Agrosystem India official logo',
  },

  // 25. Nichino
  {
    id: 'nichino',
    name: 'Nichino',
    fullName: {
      en: 'Nichino India Pvt Ltd',
      te: 'నిచినో ఇండియా ప్రైవేట్ లిమిటెడ్',
    },
    logo: nichinoLogo,
    category: {
      en: 'Japanese Insecticides & Acaricides',
      te: 'జపనీస్ పురుగుమందులు & కీటక నియంత్రణ',
    },
    productType: 'pesticides',
    description: {
      en: 'Advanced Japanese crop protection technology providing high-potency insecticides and mite-controllers.',
      te: 'అధునాతన జపనీస్ సాంకేతికతతో కూడిన శక్తివంతమైన పురుగుమందులు.',
    },
    altText: 'Nichino India official logo',
  },

  // 26. Agrishine
  {
    id: 'agrishine',
    name: 'Agrishine',
    fullName: {
      en: 'Agrishine Crop Sciences',
      te: 'అగ్రిషైన్ క్రాప్ సైన్సెస్',
    },
    logo: agrishineLogo,
    category: {
      en: 'Specialty Crop Protection',
      te: 'విశిష్ట పంట సంరక్షణ',
    },
    productType: 'pesticides',
    description: {
      en: 'High-efficacy specialty agrochemicals and targeted crop pest protection formulations.',
      te: 'రైతుల పంటల రక్షణ కోసం నాణ్యమైన విశిష్ట వ్యవసాయ రసాయనాలు.',
    },
    altText: 'Agrishine Crop Sciences official logo',
  },

  // 27. GSP Crop Science
  {
    id: 'gsp',
    name: 'GSP',
    fullName: {
      en: 'GSP Crop Science Pvt Ltd',
      te: 'జి.ఎస్.పి క్రాప్ సైన్స్',
    },
    logo: gspLogo,
    category: {
      en: 'Specialty Pesticides',
      te: 'ప్రత్యేక పురుగుమందులు',
    },
    productType: 'pesticides',
    description: {
      en: 'Quality agrochemical solutions and effective crop formulations, including SLR 525.',
      te: 'రైతులకు నమ్మకమైన పురుగుమందులు మరియు పంట రక్షణ మందుల తయారీ సంస్థ.',
    },
    altText: 'GSP Crop Science official logo',
  },

  // 28. NFL
  {
    id: 'nfl',
    name: 'NFL',
    fullName: {
      en: 'National Fertilizers Limited',
      te: 'నేషనల్ ఫెర్టిలైజర్స్ లిమిటెడ్',
    },
    logo: nflLogo,
    category: {
      en: 'Fertilizers & Kisan Urea',
      te: 'ఎరువులు & కిసాన్ యూరియా',
    },
    productType: 'fertilizers',
    description: {
      en: 'Major public-sector enterprise providing Kisan brand Neem Coated Urea and certified bio-fertilizers.',
      te: 'కిసాన్ బ్రాండ్ వేప పూత పూసిన యూరియా మరియు సర్టిఫైడ్ బయో ఎరువుల తయారీదారు.',
    },
    altText: 'National Fertilizers Limited official logo',
  },

  // 29. Prism
  {
    id: 'prism',
    name: 'Prism',
    fullName: {
      en: 'Prism Crop Science',
      te: 'ప్రిజమ్ క్రాప్ సైన్స్',
    },
    logo: prismLogo,
    category: {
      en: 'Crop Vitality & Nutrition',
      te: 'పంట బలం & పోషణ',
    },
    productType: 'both',
    description: {
      en: 'Targeted agricultural crop solutions enhancing immunity, pest resistance, and harvest vitality.',
      te: 'పంటల రోగనిరోధక శక్తిని పెంచే విశిష్ట పోషక ఉత్పత్తుల తయారీ సంస్థ.',
    },
    altText: 'Prism Crop Science official logo',
  },

  // 30. Aries Agro
  {
    id: 'aries_agro',
    name: 'Aries Agro',
    fullName: {
      en: 'Aries Agro Ltd',
      te: 'ఏరీస్ ఆగ్రో లిమిటెడ్',
    },
    logo: ariesAgroLogo,
    category: {
      en: 'Chelated Micronutrients & Plant Nutrition',
      te: 'చిలేటెడ్ సూక్ష్మపోషకాలు & పంట పోషణ',
    },
    productType: 'both',
    description: {
      en: 'Pioneer in chelated micronutrients, secondary nutrients, and specialized plant nutrition solutions.',
      te: 'భారతదేశంలో ప్రసిద్ధి చెందిన చిలేటెడ్ సూక్ష్మపోషకాలు మరియు మొక్కల పోషణ ఉత్పత్తుల సంస్థ.',
    },
    altText: 'Aries Agro Ltd official logo',
  },
];
