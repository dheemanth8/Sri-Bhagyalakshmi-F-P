import fertilizersImg from '../assets/images/cat_fertilizers.jpg';
import cropProtectionImg from '../assets/images/cat_crop_protection.jpg';
import insecticidesImg from '../assets/images/cat_insecticides.jpg';
import fungicidesImg from '../assets/images/cat_fungicides.jpg';
import herbicidesImg from '../assets/images/cat_herbicides.jpg';

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
  keyBenefits: {
    en: string[];
    te: string[];
  };
  iconName: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'fertilizers',
    title: {
      en: 'Fertilizers',
      te: 'రసాయన & సేంద్రీయ ఎరువులు',
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
    keyBenefits: {
      en: ['Selective weed eradication', 'Pre & post-emergence options', 'Reduced labor expense'],
      te: ['ఎంపిక చేసిన కలుపు నాశనం', 'మొలక పూర్వ & తర్వాతి రకాలు', 'కూలీల ఖర్చు ఆదా'],
    },
    iconName: 'Scissors',
  },
];
