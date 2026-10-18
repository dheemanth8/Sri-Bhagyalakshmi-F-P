export type Language = 'en' | 'te';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    brands: string;
    products: string;
    about: string;
    location: string;
    contact: string;
    getDirections: string;
    callNow: string;
    menu: string;
    closeMenu: string;
  };
  // Top bar / Devotional
  devotional: {
    blessing: string;
    estdBadge: string;
    tagline: string;
  };
  // Hero
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    exploreBrandsCta: string;
    getDirectionsCta: string;
    viewProductsCta: string;
    experienceYears: string;
    experienceLabel: string;
    trustedBrandsCount: string;
    trustedBrandsLabel: string;
    localCommitment: string;
    localCommitmentLabel: string;
  };
  // Brands Section
  brandsSection: {
    badge: string;
    title: string;
    subtitle: string;
    note: string;
    viewAll: string;
    viewProducts: string;
    productsAvailable: string;
    searchBrands: string;
    allBrands: string;
    pesticidesFilter: string;
    fertilizersFilter: string;
    searchInsideBrand: string;
    filterByCategory: string;
    noProductsFound: string;
    resetFilters: string;
    authorizedDealerNotice: string;
    callForPricing: string;
    whatsappInquiry: string;
  };
  // Product Categories
  categoriesSection: {
    badge: string;
    title: string;
    subtitle: string;
    enquireBtn: string;
    enquirySuccess: string;
    keyFeatures: string;
    disclaimer: string;
  };
  // About Us
  aboutSection: {
    badge: string;
    title: string;
    subtitle: string;
    storyParagraph1: string;
    storyParagraph2: string;
    storyParagraph3: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
    foundersBadge: string;
    foundersTitle: string;
    foundersSub: string;
    founder1Role: string;
    founder1Name: string;
    founder1Desc: string;
    founder2Role: string;
    founder2Name: string;
    founder2Relation: string;
    founder2Desc: string;
    simpleNote: string;
    commitment1: string;
    commitment2: string;
    commitment3: string;
  };
  // Location
  locationSection: {
    badge: string;
    title: string;
    subtitle: string;
    coordinatesLabel: string;
    directionsBtn: string;
    openInGoogleMaps: string;
    directionsHint: string;
    mapUnavailable: string;
  };
  // Contact
  contactSection: {
    badge: string;
    title: string;
    subtitle: string;
    callCardTitle: string;
    callCardDesc: string;
    callAction: string;
    whatsappCardTitle: string;
    whatsappCardDesc: string;
    whatsappAction: string;
    addressCardTitle: string;
    addressPendingNotice: string;
    hoursCardTitle: string;
    hoursPendingNotice: string;
    enquiryFormTitle: string;
    enquiryFormSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    categoryLabel: string;
    categorySelectDefault: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitEnquiry: string;
    formSuccessTitle: string;
    formSuccessMsg: string;
    formConfigNotice: string;
  };
  // Footer
  footer: {
    aboutText: string;
    quickLinks: string;
    brandPartners: string;
    shopLocation: string;
    establishedYearNotice: string;
    allRightsReserved: string;
    designedForFarmers: string;
  };
  // Common
  common: {
    pendingConfiguration: string;
    established: string;
    learnMore: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      brands: 'Brands',
      products: 'Products',
      about: 'About Us',
      location: 'Location',
      contact: 'Contact',
      getDirections: 'Get Directions',
      callNow: 'Call Us',
      menu: 'Open Menu',
      closeMenu: 'Close Menu',
    },
    devotional: {
      blessing: 'Authorized Agricultural Fertilizers & Pesticides Retailer',
      estdBadge: 'ESTD 1995 • 30+ Years of Farmer Trust',
      tagline: 'Supporting farmers with agricultural inputs & trusted brands',
    },
    hero: {
      badge: 'Serving Farmers Since 1995',
      headline: 'Trusted Agricultural Solutions Since 1995',
      subheadline: 'Supporting farmers with high-quality agricultural inputs, genuine crop protection, and premier fertilizer brands for all your seasonal farming needs.',
      exploreBrandsCta: 'Explore Our Brands',
      getDirectionsCta: 'Get Directions',
      viewProductsCta: 'View Categories',
      experienceYears: '30+ Years',
      experienceLabel: 'Dedicated Farming Retail Experience',
      trustedBrandsCount: '7 Premier',
      trustedBrandsLabel: 'Recognized Agricultural Brands',
      localCommitment: '100% Genuine',
      localCommitmentLabel: 'Agricultural Inputs & Advice',
    },
    brandsSection: {
      badge: 'Authorized Brand Partners & Products',
      title: 'Explore Products by Leading Agricultural Brands',
      subtitle: 'Click any brand below to view all genuine products, pack sizes, and technical specifications available in our Duggirala store.',
      note: 'All brand logos and trademarks belong to their respective corporations. Sri Bhagyalakshmi Fertilizers & Pesticides is an authorized dealer offering 100% genuine sealed stock.',
      viewAll: 'Explore All Brands',
      viewProducts: 'View Products',
      productsAvailable: 'Products in Store',
      searchBrands: 'Search brands (e.g. Bayer, Syngenta, Coromandel, FMC, IFFCO)...',
      allBrands: 'All Brands',
      pesticidesFilter: 'Pesticides & Crop Protection',
      fertilizersFilter: 'Fertilizers & Nutrition',
      searchInsideBrand: 'Search inside this brand...',
      filterByCategory: 'Filter by category',
      noProductsFound: 'No products found matching your search.',
      resetFilters: 'Reset Search',
      authorizedDealerNotice: 'Authorized Dealership • 100% Genuine Certified Stock',
      callForPricing: 'Call for Pricing & Advice',
      whatsappInquiry: 'WhatsApp Enquiry',
    },
    categoriesSection: {
      badge: 'Comprehensive Range',
      title: 'Agricultural Product Categories',
      subtitle: 'From balanced soil fertilization to insect control, disease prevention, and weed management, discover our complete range of farming inputs.',
      enquireBtn: 'Enquire for Shop Availability',
      enquirySuccess: 'Opening enquiry form...',
      keyFeatures: 'Key Highlights',
      disclaimer: 'Product availability is subject to seasonal stock at the retail store. Visit our shop or submit an enquiry for direct assistance.',
    },
    aboutSection: {
      badge: 'About Our Shop',
      title: 'Serving Local Farmers Since 1995',
      subtitle: 'A family-run shop providing genuine fertilizers and pesticides to local farmers for over 30 years.',
      storyParagraph1: 'Sri Bhagyalakshmi Fertilizers & Pesticides was started in 1995 by Annem Balarama Subba Reddy and his son Annem Chandra Sekhar Reddy. We set up our shop to help local farmers easily get original, good-quality fertilizers and pesticides at fair prices.',
      storyParagraph2: 'For over 30 years, we have been running the shop together as father and son, serving farmers in our area. Having worked closely with regional crops and seasonal changes for decades, we help farmers choose the right products and advice for their fields.',
      storyParagraph3: 'We believe in straightforward, honest business. We only stock sealed products from trusted companies so farmers can buy with complete peace of mind.',
      stat1Number: '1995',
      stat1Label: 'Year Started',
      stat2Number: '30+',
      stat2Label: 'Years Serving Farmers',
      stat3Number: '100%',
      stat3Label: 'Original Products',
      foundersBadge: 'Founders & Owners',
      foundersTitle: 'Founders & Owners',
      foundersSub: 'Serving local farmers together as father and son since 1995.',
      founder1Role: 'Founder & Owner',
      founder1Name: 'Annem Balarama Subba Reddy',
      founder1Desc: 'Started the shop in 1995 and has been serving local farmers with reliable products and friendly service ever since.',
      founder2Role: 'Founder & Owner',
      founder2Name: 'Annem Chandra Sekhar Reddy',
      founder2Relation: 'Son of Annem Balarama Subba Reddy',
      founder2Desc: 'Co-founded and manages day-to-day shop operations, stock from top brand companies, and customer assistance.',
      simpleNote: 'Family-owned & operated • 100% genuine agricultural products',
      commitment1: 'Only sealed, original products from reputable brand companies',
      commitment2: 'Helpful and practical advice for local crops and pest problems',
      commitment3: 'Fair, transparent prices and friendly customer support',
    },
    locationSection: {
      badge: 'Visit Our Shop',
      title: 'Store Location & Directions',
      subtitle: 'Conveniently located for farmers in Andhra Pradesh. Click below to launch navigation directly in Google Maps.',
      coordinatesLabel: 'GPS Coordinates',
      directionsBtn: 'Get Directions on Google Maps',
      openInGoogleMaps: 'Open Navigation Link',
      directionsHint: 'Tap to open turnkey navigation directly in the Google Maps app on your phone or browser.',
      mapUnavailable: 'Interactive map preview is available below.',
    },
    contactSection: {
      badge: 'Get in Touch',
      title: 'Contact Our Agricultural Store',
      subtitle: 'Reach out to enquire about brand availability, seasonal agricultural inputs, or store visit details.',
      callCardTitle: 'Phone Contact',
      callCardDesc: 'Official phone line for retail enquiries and product confirmation.',
      callAction: 'Call Shop',
      whatsappCardTitle: 'WhatsApp Support',
      whatsappCardDesc: 'Send quick message enquiries regarding product stock and store timings.',
      whatsappAction: 'Open WhatsApp',
      addressCardTitle: 'Retail Store Address',
      addressPendingNotice: 'SRI BHAGYALAKSHMI F&P, Allagadda TB road opposite to KVB bank 518543',
      hoursCardTitle: 'Opening Hours',
      hoursPendingNotice: 'Monday to Saturday 8am to 8pm (Sunday: Closed)',
      enquiryFormTitle: 'Send a Direct Retail Enquiry',
      enquiryFormSubtitle: 'Have a question about fertilizer availability or brand inputs? Send us your message.',
      nameLabel: 'Farmer / Customer Name',
      namePlaceholder: 'Enter your full name',
      phoneLabel: 'Mobile Number',
      phonePlaceholder: 'Enter 10-digit mobile number',
      categoryLabel: 'Product Category of Interest',
      categorySelectDefault: 'Select a category...',
      messageLabel: 'Enquiry Message',
      messagePlaceholder: 'Specify the brand, crop, or agricultural input you are looking for...',
      submitEnquiry: 'Submit Enquiry',
      formSuccessTitle: 'Enquiry Received!',
      formSuccessMsg: 'Thank you for reaching out to Sri Bhagyalakshmi Fertilizers & Pesticides. We will review your query promptly.',
      formConfigNotice: 'Contact actions will connect to verified store lines once configured.',
    },
    footer: {
      aboutText: 'Sri Bhagyalakshmi Fertilizers & Pesticides has been supporting farmers with genuine agricultural inputs, fertilizers, and crop protection since 1995.',
      quickLinks: 'Quick Links',
      brandPartners: 'Featured Brands',
      shopLocation: 'Store Location',
      establishedYearNotice: 'Established in 1995. Built for farmers with trust and dedication.',
      allRightsReserved: 'All rights reserved.',
      designedForFarmers: 'Sri Bhagyalakshmi Fertilizers & Pesticides — Serving Cultivators Since 1995',
    },
    common: {
      pendingConfiguration: 'Configuration Pending',
      established: 'Estd. 1995',
      learnMore: 'Learn More',
    },
  },
  te: {
    nav: {
      home: 'ప్రారంభం',
      brands: 'బ్రాండ్లు',
      products: 'ఉత్పత్తులు',
      about: 'మా గురించి',
      location: 'స్థానం & రూట్',
      contact: 'సంప్రదించండి',
      getDirections: 'రూట్ మ్యాప్',
      callNow: 'కాల్ చేయండి',
      menu: 'మెనూ తెరవండి',
      closeMenu: 'మెనూ మూసివేయండి',
    },
    devotional: {
      blessing: 'రైతులకు నమ్మకమైన వ్యవసాయ ఎరువులు & పురుగుమందులు',
      estdBadge: 'స్థాపన 1995 • 30+ ఏళ్ల రైతుల విశ్వాసం',
      tagline: 'రైతుల శ్రేయస్సు కోసం నాణ్యమైన వ్యవసాయ ఉత్పత్తులు & ప్రముఖ బ్రాండ్లు',
    },
    hero: {
      badge: '1995 నుండి రైతు సేవలో',
      headline: '1995 నుండి రైతులకు విశ్వసనీయ సేవలు',
      subheadline: 'రైతుల వ్యవసాయ అవసరాల కోసం నాణ్యమైన వ్యవసాయ ఉత్పత్తులు, రసాయన ఎరువులు, సమగ్ర పంట రక్షణ మందులు మరియు ప్రముఖ జాతీయ, అంతర్జాతీయ బ్రాండ్లను అందిస్తున్నాము.',
      exploreBrandsCta: 'మా బ్రాండ్లను చూడండి',
      getDirectionsCta: 'రూట్ మ్యాప్ పొందండి',
      viewProductsCta: 'ఉత్పత్తుల వివరాలు',
      experienceYears: '30+ సంవత్సరాలు',
      experienceLabel: 'రైతు సేవలో సుదీర్ఘ అనుభవం',
      trustedBrandsCount: '7 ప్రముఖ',
      trustedBrandsLabel: 'ధృవీకరించబడిన వ్యవసాయ బ్రాండ్లు',
      localCommitment: '100% నమ్మకం',
      localCommitmentLabel: 'అసలైన ఉత్పత్తులు & సలహాలు',
    },
    brandsSection: {
      badge: 'అధికారిక బ్రాండ్లు & ఉత్పత్తులు',
      title: 'ప్రముఖ వ్యవసాయ బ్రాండ్లు & ఉత్పత్తులు',
      subtitle: 'దుకాణంలో లభించే అసలైన ఉత్పత్తులు, ప్యాకింగ్ సైజులు మరియు పూర్తి వివరాలను చూడటానికి క్రింది ఏదైనా బ్రాండ్‌పై క్లిక్ చేయండి.',
      note: 'శ్రీ భాగ్యలక్ష్మి ఫర్టిలైజర్స్ & పెస్టిసైడ్స్ ద్వారా ఈ ప్రముఖ బ్రాండ్ల నాణ్యమైన ఉత్పత్తులు లభించును. బ్రాండ్ చిహ్నాలు ఆయా సంస్థలకు చెందినవి.',
      viewAll: 'అన్ని బ్రాండ్లను చూడండి',
      viewProducts: 'ఉత్పత్తులు చూడండి',
      productsAvailable: 'ఉత్పత్తులు అందుబాటులో ఉన్నాయి',
      searchBrands: 'బ్రాండ్లను వెతకండి (ఉదా: బేయర్, సింజెంటా, కోరమాండల్, FMC)...',
      allBrands: 'అన్ని బ్రాండ్లు',
      pesticidesFilter: 'పురుగుమందులు & పంట రక్షణ',
      fertilizersFilter: 'ఎరువులు & పంట పోషణ',
      searchInsideBrand: 'ఈ బ్రాండ్ ఉత్పత్తులలో వెతకండి...',
      filterByCategory: 'విభాగం వారీగా ఫిల్టర్ చేయండి',
      noProductsFound: 'మీరు వెతికిన ఉత్పత్తులు ఏవీ కనుగొనబడలేదు.',
      resetFilters: 'మళ్లీ చూడండి',
      authorizedDealerNotice: 'అధికారిక డీలర్‌షిప్ • 100% అసలైన ధృవీకరించిన స్టాక్',
      callForPricing: 'ధరలు & సలహాల కోసం కాల్ చేయండి',
      whatsappInquiry: 'వాట్సాప్ విచారణ',
    },
    categoriesSection: {
      badge: 'సమగ్ర ఉత్పత్తులు',
      title: 'వ్యవసాయ ఉత్పత్తుల విభాగాలు',
      subtitle: 'నేల సారవంతత నుండి క్రిమిసంహారకాలు, తెగుళ్ల నివారణ మరియు కలుపు యాజమాన్యం వరకు మీ పంటల సమగ్ర సంరక్షణ ఉత్పత్తులు.',
      enquireBtn: 'దుకాణ లభ్యత తెలుసుకోండి',
      enquirySuccess: 'విచారణ ఫారం తెరవబడుతోంది...',
      keyFeatures: 'ముఖ్య ముఖ్యాంశాలు',
      disclaimer: 'ఉత్పత్తుల లభ్యత ప్రస్తుత సీజనల్ నిల్వలకు అనుగుణంగా ఉంటుంది. నేరుగా వివరాలు తెలుసుకోవడానికి మా దుకాణాన్ని సందర్శించండి.',
    },
    aboutSection: {
      badge: 'మా గురించి',
      title: '1995 నుండి రైతుల సేవలో',
      subtitle: '30 ఏళ్లకు పైగా రైతులకు అసలైన ఎరువులు, పురుగుమందులు అందిస్తున్న కుటుంబ దుకాణం.',
      storyParagraph1: 'శ్రీ భాగ్యలక్ష్మి ఫర్టిలైజర్స్ & పెస్టిసైడ్స్ దుకాణాన్ని 1995లో అన్నెం బలరామ సుబ్బారెడ్డి మరియు వారి కుమారుడు అన్నెం చంద్రశేఖర్ రెడ్డి కలిసి ప్రారంభించారు. స్థానిక రైతులకు నకిలీలు లేని అసలైన ఎరువులు మరియు పురుగుమందులు న్యాయమైన ధరలకే అందించాలనే ఉద్దేశంతో మా దుకాణం మొదలైంది.',
      storyParagraph2: 'గత 30 ఏళ్లుగా తండ్రీకొడుకులిద్దరం కలిసి ఈ వ్యాపారాన్ని నడుపుతూ రైతులకు సేవలందిస్తున్నాము. స్థానిక పంటలు, నేలలు మరియు చీడపీడల గురించి మంచి అవగాహన ఉండటంతో, రైతులు ఉత్పత్తులు కొనడమే కాకుండా సరైన సలహాల కోసం కూడా మా వద్దకు వస్తుంటారు.',
      storyParagraph3: 'నిజాయితీతో కూడిన వ్యాపారమే మాకు ముఖ్యం. నమ్మకమైన కంపెనీల అసలైన సీల్డ్ ఉత్పత్తులను మాత్రమే విక్రయిస్తూ రైతుల నమ్మకాన్ని కాపాడుకుంటున్నాము.',
      stat1Number: '1995',
      stat1Label: 'ప్రారంభించిన సంవత్సరం',
      stat2Number: '30+',
      stat2Label: 'ఏళ్లుగా రైతుల సేవలో',
      stat3Number: '100%',
      stat3Label: 'అసలైన ఉత్పత్తులు',
      foundersBadge: 'వ్యవస్థాపకులు & యజమానులు',
      foundersTitle: 'మా యజమానులు',
      foundersSub: '1995 నుండి తండ్రీకొడుకులిద్దరం కలిసి నడుపుతున్న దుకాణం.',
      founder1Role: 'వ్యవస్థాపకులు & యజమాని',
      founder1Name: 'అన్నెం బలరామ సుబ్బారెడ్డి',
      founder1Desc: '1995లో దుకాణాన్ని ప్రారంభించి మూడు దశాబ్దాలుగా రైతులకు నాణ్యమైన ఉత్పత్తులను అందిస్తున్నారు.',
      founder2Role: 'వ్యవస్థాపకులు & యజమాని',
      founder2Name: 'అన్నెం చంద్రశేఖర్ రెడ్డి',
      founder2Relation: 'అన్నెం బలరామ సుబ్బారెడ్డి గారి కుమారుడు',
      founder2Desc: 'తండ్రితో కలిసి దుకాణాన్ని నడుపుతూ రోజువారీ వ్యాపారం, కంపెనీ స్టాక్ మరియు రైతులకు కావాల్సిన సలహాలను చూసుకుంటున్నారు.',
      simpleNote: 'కుటుంబ నిర్వహణ • 100% నమ్మకమైన నాణ్యమైన ఉత్పత్తులు',
      commitment1: 'ప్రముఖ కంపెనీల అసలైన సీల్డ్ ఉత్పత్తులు మాత్రమే',
      commitment2: 'పంటలు మరియు చీడపీడల నివారణకు సరైన సలహాలు',
      commitment3: 'సరసమైన ధరలు మరియు ఆత్మీయ రైతు సేవ',
    },
    locationSection: {
      badge: 'మా చిరునామా',
      title: 'దుకాణ స్థానం & మార్గం (రూట్ మ్యాప్)',
      subtitle: 'ఆంధ్రప్రదేశ్ లోని రైతులకు సులభంగా చేరుకోగల ప్రాంతంలో మా దుకాణం కలదు. క్రింది బటన్ నొక్కి గూగుల్ మ్యాప్స్ లో లైవ్ రూట్ పొందవచ్చు.',
      coordinatesLabel: 'జీపీఎస్ కోఆర్డినేట్స్',
      directionsBtn: 'గూగుల్ మ్యాప్స్ లో రూట్ చూడండి',
      openInGoogleMaps: 'గూగుల్ మ్యాప్స్ లింక్',
      directionsHint: 'ఈ బటన్ నొక్కడం ద్వారా మీ ఫోన్‌లోని గూగుల్ మ్యాప్స్ యాప్‌లో నేరుగా దుకాణానికి నావిగేషన్ ప్రారంభమవుతుంది.',
      mapUnavailable: 'ఇంటరాక్టివ్ గూగుల్ మ్యాప్ క్రింద అందుబాటులో ఉంది.',
    },
    contactSection: {
      badge: 'సంప్రదింపు వివరాలు',
      title: 'మా దుకాణాన్ని సంప్రదించండి',
      subtitle: 'ఉత్పత్తుల లభ్యత, బ్రాండ్ వివరాలు లేదా దుకాణ సమయాల గురించి తెలుసుకోవడానికి మమ్మల్ని సంప్రదించండి.',
      callCardTitle: 'ఫోన్ కాల్',
      callCardDesc: 'దుకాణం వివరాలు మరియు ఉత్పత్తుల గురించి ఫోన్ లో మాట్లాడండి.',
      callAction: 'కాల్ చేయండి',
      whatsappCardTitle: 'వాట్సాప్ సందేశం',
      whatsappCardDesc: 'ఉత్పత్తుల లభ్యత మరియు వివరాల కోసం వాట్సాప్ లో సందేశం పంపండి.',
      whatsappAction: 'వాట్సాప్ తెరవండి',
      addressCardTitle: 'దుకాణ చిరునామా',
      addressPendingNotice: 'శ్రీ భాగ్యలక్ష్మి ఎఫ్&పి, ఆళ్లగడ్డ టి.బి రోడ్డు, కె.వి.బి బ్యాంక్ ఎదురుగా 518543',
      hoursCardTitle: 'పనివేళలు',
      hoursPendingNotice: 'సోమవారం నుండి శనివారం: ఉదయం 8:00 – రాత్రి 8:00 (ఆదివారం: సెలవు)',
      enquiryFormTitle: 'నేరుగా విచారణ పంపండి',
      enquiryFormSubtitle: 'ఎరువులు లేదా మందుల గురించి మీకు ఏవైనా సందేహాలుంటే క్రింది ఫారంలో మీ వివరాలు పంపండి.',
      nameLabel: 'రైతు / కస్టమర్ పేరు',
      namePlaceholder: 'మీ పూర్తి పేరు నమోదు చేయండి',
      phoneLabel: 'మొబైల్ నంబర్',
      phonePlaceholder: '10 అంకెల మొబైల్ నంబర్',
      categoryLabel: 'కావలసిన ఉత్పత్తి విభాగం',
      categorySelectDefault: 'విభాగాన్ని ఎంచుకోండి...',
      messageLabel: 'మీ సందేశం / ప్రశ్న',
      messagePlaceholder: 'మీకు కావలసిన బ్రాండ్ లేదా పంట సమస్యల గురించి వివరించండి...',
      submitEnquiry: 'విచారణ పంపండి',
      formSuccessTitle: 'మీ విచారణ అందింది!',
      formSuccessMsg: 'శ్రీ భాగ్యలక్ష్మి ఫర్టిలైజర్స్ & పెస్టిసైడ్స్ ను సంప్రదించినందుకు ధన్యవాదాలు. మేము త్వరలోనే స్పందిస్తాము.',
      formConfigNotice: 'దుకాణ యజమాని ధృవీకరించిన వెంటనే సంప్రదింపు లైన్లు నేరుగా కనెక్ట్ చేయబడతాయి.',
    },
    footer: {
      aboutText: 'శ్రీ భాగ్యలక్ష్మి ఫర్టిలైజర్స్ & పెస్టిసైడ్స్ 1995 నుండి రైతులకు అసలైన నాణ్యమైన వ్యవసాయ ఎరువులు, పంట రక్షణ మందులను విశ్వసనీయంగా అందిస్తోంది.',
      quickLinks: 'ముఖ్యమైన లింకులు',
      brandPartners: 'ప్రముఖ బ్రాండ్లు',
      shopLocation: 'దుకాణ స్థానం',
      establishedYearNotice: '1995 లో స్థాపించబడింది. రైతు శ్రేయస్సే మా ధ్యేయం.',
      allRightsReserved: 'సర్వ హక్కులు ప్రత్యేకించబడినవి.',
      designedForFarmers: 'శ్రీ భాగ్యలక్ష్మి ఫర్టిలైజర్స్ & పెస్టిసైడ్స్ — 1995 నుండి రైతు సేవలో',
    },
    common: {
      pendingConfiguration: 'త్వరలో అప్‌డేట్ అవుతుంది',
      established: 'స్థాపన 1995',
      learnMore: 'మరిన్ని వివరాలు',
    },
  },
};
