import organicImg from '../assets/images/cat_organic.jpg';
import organicWebp from '../assets/images/cat_organic.webp';
import fertilizersImg from '../assets/images/cat_fertilizers.jpg';
import fertilizersWebp from '../assets/images/cat_fertilizers.webp';
import cropProtectionImg from '../assets/images/cat_crop_protection.jpg';
import cropProtectionWebp from '../assets/images/cat_crop_protection.webp';
import insecticidesImg from '../assets/images/cat_insecticides.jpg';
import insecticidesWebp from '../assets/images/cat_insecticides.webp';
import fungicidesImg from '../assets/images/cat_fungicides.jpg';
import fungicidesWebp from '../assets/images/cat_fungicides.webp';
import herbicidesImg from '../assets/images/cat_herbicides.jpg';
import herbicidesWebp from '../assets/images/cat_herbicides.webp';

export interface ProductCategory {
  id: string;
  title: {
    en: string;
    te: string;
  };
  subtitle: {
    en: string;
    te: string;
  };
  description: {
    en: string;
    te: string;
  };
  image: string;
  imageWebp: string;
  width: number;
  height: number;
  keyBenefits: {
    en: string[];
    te: string[];
  };
  iconName: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'organic-production',
    title: {
      en: 'Organic Production',
      te: 'సేంద్రీయ ఉత్పత్తులు',
    },
    subtitle: {
      en: 'Natural & Bio-Fertilizers',
      te: 'సహజ & జీవ పోషకాలు',
    },
    description: {
      en: 'Eco-friendly organic manures, bio-stimulants, and natural soil conditioners to rejuvenate soil fertility and cultivate chemical-free, sustainable yields.',
      te: 'నేల సారాన్ని పెంచే సహజ సేంద్రీయ ఎరువులు, బయో-స్టిమ్యులెంట్స్ మరియు పర్యావరణహిత జీవ పోషకాలు.',
    },
    image: organicImg,
    imageWebp: organicWebp,
    width: 800,
    height: 600,
    keyBenefits: {
      en: ['Bio-fertilizers & compost', 'Improves soil microbes', '100% eco-friendly & sustainable'],
      te: ['జీవ ఎరువులు & సేంద్రీయ ఎరువు', 'నేలలో సూక్ష్మజీవుల పెంపు', '100% పర్యావరణ హితం'],
    },
    iconName: 'Leaf',
  },
  {
    id: 'fertilizers',
    title: {
      en: 'Fertilizers',
      te: 'రసాయన & కాంప్లెక్స్ ఎరువులు',
    },
    subtitle: {
      en: 'Soil Health & Plant Nutrition',
      te: 'నేల ఆరోగ్యం & మొక్కల పోషణ',
    },
    description: {
      en: 'Granular, water-soluble, and micro-nutrient fertilizers formulated to promote root development and boost harvest yields.',
      te: 'వేర్లు దృఢంగా ఎదగడానికి మరియు అధిక దిగుబడులు సాధించడానికి అవసరమైన రసాయన, నీటిలో కరిగే మరియు సూక్ష్మ పోషక ఎరువులు.',
    },
    image: fertilizersImg,
    imageWebp: fertilizersWebp,
    width: 800,
    height: 597,
    keyBenefits: {
      en: ['Balanced N-P-K blends', 'Organic soil conditioners', 'Micronutrient supplements'],
      te: ['సమతుల్య ఎన్-పి-కె ఎరువులు', 'సేంద్రీయ నేల పోషకాలు', 'సూక్ష్మ పోషక మిశ్రమాలు'],
    },
    iconName: 'Sprout',
  },
  {
    id: 'crop-protection',
    title: {
      en: 'Crop Protection',
      te: 'సమగ్ర పంట రక్షణ',
    },
    subtitle: {
      en: 'Holistic Plant Health',
      te: 'సంపూర్ణ మొక్కల రక్షణ',
    },
    description: {
      en: 'Integrated crop care solutions designed to protect vital crops against environmental stress and pests from sowing to harvest.',
      te: 'పంట ప్రారంభం నుండి కోత వరకు వాతావరణ ఒత్తిడులు మరియు చీడపీడల నుండి రక్షణ కల్పించే సమగ్ర పరిష్కారాలు.',
    },
    image: cropProtectionImg,
    imageWebp: cropProtectionWebp,
    width: 800,
    height: 597,
    keyBenefits: {
      en: ['Broad-spectrum defense', 'Weather resilience', 'Certified brand safety'],
      te: ['విస్తృత స్థాయి రక్షణ', 'వాతావరణ తట్టుకునే శక్తి', 'ధృవీకరించబడిన నాణ్యత'],
    },
    iconName: 'ShieldCheck',
  },
  {
    id: 'insecticides',
    title: {
      en: 'Insecticides',
      te: 'పురుగుల నివారణ మందులు',
    },
    subtitle: {
      en: 'Targeted Pest Control',
      te: 'లక్షిత కీటక నియంత్రణ',
    },
    description: {
      en: 'Specialized insect control formulations engineered to safeguard crops against chewing, sucking, and boring agricultural pests.',
      te: 'రసం పీల్చే పురుగులు, కాండం తొలిచే పురుగులు మరియు గొంగళి పురుగుల నుండి పంటలను కాపాడే ప్రత్యేక మందులు.',
    },
    image: insecticidesImg,
    imageWebp: insecticidesWebp,
    width: 800,
    height: 334,
    keyBenefits: {
      en: ['Fast action knockdown', 'Systemic & contact solutions', 'Extended crop coverage'],
      te: ['శీఘ్ర ఫలితాలు', 'అంతర్వాహిక & స్పర్శ మందులు', 'ఎక్కువ కాలం రక్షణ'],
    },
    iconName: 'Bug',
  },
  {
    id: 'fungicides',
    title: {
      en: 'Fungicides',
      te: 'శిలీంద్ర సంహారిణులు (తెగుళ్ల మందులు)',
    },
    subtitle: {
      en: 'Disease Prevention & Cure',
      te: 'తెగుళ్ల నివారణ & నియంత్రణ',
    },
    description: {
      en: 'Curative and preventive fungal treatments providing robust protection against blast, blight, rust, and powdery mildew.',
      te: 'అగ్గి తెగులు, బూడిద తెగులు, మాడు తెగులు మరియు తుప్పు తెగుళ్ల నుండి పంటలను రక్షించే నివారణ మరియు నియంత్రణ మందులు.',
    },
    image: fungicidesImg,
    imageWebp: fungicidesWebp,
    width: 800,
    height: 597,
    keyBenefits: {
      en: ['Preventive & curative action', 'Safe foliar coverage', 'Enhances green leaf area'],
      te: ['నివారణ మరియు నివారణ చర్య', 'సురక్షితమైన ఆకుల స్ప్రే', 'పచ్చని ఆకుల రక్షణ'],
    },
    iconName: 'Sparkles',
  },
  {
    id: 'herbicides',
    title: {
      en: 'Herbicides',
      te: 'కలుపు నివారణ మందులు',
    },
    subtitle: {
      en: 'Weed Management',
      te: 'కలుపు యాజమాన్యం',
    },
    description: {
      en: 'Pre-emergence and post-emergence weed control products to keep crop fields clean and prevent nutrient competition.',
      te: 'మొలక రాకముందు మరియు మొలక వచ్చిన తర్వాత పంటలలో కలుపు మొక్కలను సమర్థవంతంగా అరికట్టే పరిష్కారాలు.',
    },
    image: herbicidesImg,
    imageWebp: herbicidesWebp,
    width: 800,
    height: 533,
    keyBenefits: {
      en: ['Selective weed eradication', 'Pre & post-emergence options', 'Reduced labor expense'],
      te: ['ఎంపిక చేసిన కలుపు నాశనం', 'మొలక పూర్వ & తర్వాతి రకాలు', 'కూలీల ఖర్చు ఆదా'],
    },
    iconName: 'Scissors',
  },
];
