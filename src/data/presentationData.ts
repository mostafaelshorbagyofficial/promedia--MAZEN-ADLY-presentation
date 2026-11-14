export type Language = 'en' | 'ar';

export interface SocialStat {
  id: string;
  platform: 'facebook' | 'instagram' | 'tiktok';
  nameEn: string;
  nameAr: string;
  value: string;
  numericValue: number;
  labelEn: string;
  labelAr: string;
  status: 'verified' | 'preliminary';
  sourceEn: string;
  sourceAr: string;
  url: string;
}

export interface PortfolioItem {
  id: string;
  reelId: string;
  url: string;
  category: 'sports' | 'retail' | 'tourism' | 'restaurants' | 'ads';
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  highlightEn: string;
  highlightAr: string;
  thumbnailUrl?: string;
  isDuplicate?: boolean;
}

export interface AdvertisingOpportunity {
  id: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  deliverablesEn: string[];
  deliverablesAr: string[];
  icon: string;
  focusEn: string;
  focusAr: string;
}

export interface CommercialPackage {
  id: string;
  nameEn: string;
  nameAr: string;
  tierEn: string;
  tierAr: string;
  priceAmount: number;
  currencyEn: string;
  currencyAr: string;
  priceDisplayEn: string;
  priceDisplayAr: string;
  platforms: ('facebook' | 'instagram' | 'tiktok')[];
  descriptionEn: string;
  descriptionAr: string;
  recommended?: boolean;
}

export interface PresentationData {
  meta: {
    agencyName: string;
    agencyWebsite: string;
    agencyLogo: string;
    creatorNameEn: string;
    creatorNameAr: string;
    creatorPhotos: {
      photo1: string;
      photo2: string;
    };
    socialLinks: {
      instagram: string;
      facebook: string;
      tiktok: string;
    };
    contact: {
      email: string;
      whatsapp: string;
      whatsappNumber?: string;
      whatsappInternational?: string;
      salesOfficeEn: string;
      salesOfficeAr: string;
    };
  };
  hero: {
    overtitleEn: string;
    overtitleAr: string;
    titleEn: string;
    titleAr: string;
    headlineEn: string;
    headlineAr: string;
    supportingEn: string;
    supportingAr: string;
    ctaPrimaryEn: string;
    ctaPrimaryAr: string;
    ctaSecondaryEn: string;
    ctaSecondaryAr: string;
    viewsHighlight: {
      number: string;
      labelEn: string;
      labelAr: string;
      subtextEn: string;
      subtextAr: string;
      periodEn: string;
      periodAr: string;
    };
  };
  meetCreators: {
    titleEn: string;
    titleAr: string;
    subtitleEn: string;
    subtitleAr: string;
    bioParagraphsEn: string[];
    bioParagraphsAr: string[];
    corePillarsEn: { title: string; desc: string }[];
    corePillarsAr: { title: string; desc: string }[];
  };
  socialStats: SocialStat[];
  portfolioCategories: {
    sports: {
      titleEn: string;
      titleAr: string;
      descriptionEn: string;
      descriptionAr: string;
      items: PortfolioItem[];
    };
    retail: {
      titleEn: string;
      titleAr: string;
      descriptionEn: string;
      descriptionAr: string;
      items: PortfolioItem[];
    };
    tourism: {
      titleEn: string;
      titleAr: string;
      descriptionEn: string;
      descriptionAr: string;
      items: PortfolioItem[];
    };
    restaurants: {
      titleEn: string;
      titleAr: string;
      descriptionEn: string;
      descriptionAr: string;
      items: PortfolioItem[];
    };
    ads: {
      titleEn: string;
      titleAr: string;
      descriptionEn: string;
      descriptionAr: string;
      items: PortfolioItem[];
    };
  };
  opportunities: AdvertisingOpportunity[];
  packages: CommercialPackage[];
  contactSection: {
    titleEn: string;
    titleAr: string;
    subtitleEn: string;
    subtitleAr: string;
    actionPromptEn: string;
    actionPromptAr: string;
    ctaButtonEn: string;
    ctaButtonAr: string;
  };
}

export const presentationData: PresentationData = {
  meta: {
    agencyName: "ProMedia",
    agencyWebsite: "www.pro-media.com",
    agencyLogo: "/assets/promedia-logo.png",
    creatorNameEn: "Mazen Adly",
    creatorNameAr: "مازن عدلي",
    creatorPhotos: {
      photo1: "/assets/mazen-photo-1.jpg",
      photo2: "/assets/mazen-photo-2.jpg",
    },
    socialLinks: {
      instagram: "https://www.instagram.com/mazen.adly?obrf=dGMyYTJ6aGIzYnQz",
      facebook: "https://www.facebook.com/share/1DMrw2WiZH/",
      tiktok: "https://www.tiktok.com/@mazenadly?_r=1&_t=ZS-9BP43mcZi5c",
    },
    contact: {
      email: "info@pro-media.com",
      whatsapp: "https://wa.me/201110070072?text=Hello%20ProMedia%20Team%2C%20I%20am%20interested%20in%20an%20advertising%20partnership%20with%20Mazen%20Adly",
      whatsappNumber: "01110070072",
      whatsappInternational: "+20 11 10070072",
      salesOfficeEn: "ProMedia Official Partnerships Representation",
      salesOfficeAr: "التمثيل التجاري والشراكات الحصرية — بروميديا",
    }
  },
  hero: {
    overtitleEn: "PROMEDIA PRESENTS",
    overtitleAr: "بروميديا تُقدّم",
    titleEn: "MEET MAZEN ADLY",
    titleAr: "تعرّف على مازن عدلي",
    headlineEn: "A POWERFUL CREATOR PRESENCE. MILLIONS OF OPPORTUNITIES.",
    headlineAr: "حضور إبداعي استثنائي. وملايين الفرص التسويقية.",
    supportingEn: "Discover the power of authentic lifestyle storytelling, athletic excellence, travel exploration, and an engaged audience of millions across Egypt and the Arab world.",
    supportingAr: "اكتشف قوة المحتوى الواقعي، والشغف الرياضي والترفيه الراقي، وتواصل مع جمهور نشط يضم الملايين عبر مصر والمنطقة العربية.",
    ctaPrimaryEn: "EXPLORE THE CREATOR",
    ctaPrimaryAr: "استكشف المحتوى والإحصائيات",
    ctaSecondaryEn: "COMMERCIAL OPPORTUNITIES",
    ctaSecondaryAr: "فرص التعاون الإعلاني",
    viewsHighlight: {
      number: "100M+",
      labelEn: "VIDEO VIEWS",
      labelAr: "مشاهدة فيديو",
      subtextEn: "Across Facebook, Instagram & TikTok combined",
      subtextAr: "عبر فيسبوك وإنستغرام وتيك توك مجتمعة",
      periodEn: "During the last 90 days (ProMedia Verified)",
      periodAr: "خلال الـ 90 يوماً الماضية (موثّقة من بروميديا)",
    }
  },
  meetCreators: {
    titleEn: "MEET MAZEN ADLY",
    titleAr: "من هو مازن عدلي؟",
    subtitleEn: "Authentic, relatable, and culturally connected content creator driving massive organic engagement across lifestyle, sports, and commercial storytelling.",
    subtitleAr: "صانع محتوى متميز يجمع بين العفوية والروح الرياضية والشغف اليومي، محققاً نسب تفاعل استثنائية وقاعدة جماهيرية وفية.",
    bioParagraphsEn: [
      "Mazen Adly (مازن عدلي) is one of the most dynamic, engaging, and rapidly rising digital creators in the contemporary Middle Eastern media scene. Known for his charismatic presence, relatable everyday humor, and inspiring athletic discipline, he captures the daily attention of millions.",
      "As a competitive swimmer who made an inspiring return to open-water ocean racing, Mazen seamlessly bridges athletic motivation, world travel exploration, retail activations, and culinary discovery—delivering content that feels genuinely authentic and culturally resonant.",
      "Through official commercial representation by ProMedia, Mazen Adly provides leading brands with high-impact organic exposure, driving both deep brand affinity and measurable consumer conversion."
    ],
    bioParagraphsAr: [
      "يُعد 'مازن عدلي' من أبرز صناع المحتوى الأكثر تميزاً وتأثيراً في المشهد الرقمي العربي المعاصر، حيث استطاع بعفويته وروحه المرحة وشغفه الرياضي الحقيقي بناء قاعدة جماهيرية وفية تتجاوز الملايين عبر مختلف المنصات.",
      "يتميز مازن بخلفيته الرياضية كسباح محترف ومشارك في بطولات المياه المفتوحة في البحر، مما يضفي على محتواه طابعاً تحفيزياً استثنائياً يتكامل مع جولاته السياحية وتجاربه التجارية واستعراضه للمطاعم والمنتجات بأسلوب واقعي جذاب.",
      "ومن خلال هذه الشراكة الحصرية التي تُقدّمها بروميديا، يمنح مازن عدلي العلامات التجارية فرصة فريدة للوصول إلى قلوب وعقول المستهلكين بحملات إبداعية تترسخ في الذاكرة وتحقق أعلى عائد استثماري ممكن."
    ],
    corePillarsEn: [
      { title: "Athletic Discipline", desc: "Inspiring swimming journeys, open-water championships, and fitness motivation." },
      { title: "Authentic Lifestyle", desc: "Spontaneous, relatable moments connecting deeply with modern youth and families." },
      { title: "Commercial Versatility", desc: "Seamless product placements across Sports, Retail, Tourism, and Gastronomy." },
      { title: "High Retention", desc: "Above-average watch completion rates driven by charismatic, trustworthy storytelling." }
    ],
    corePillarsAr: [
      { title: "شغف وانضباط رياضي", desc: "رحلة ملهمة في بطولات السباحة واللياقة البدنية تحفز المتابعين على النشاط والصحة." },
      { title: "عفوية وأسلوب حياة راقٍ", desc: "مواقف يومية واقعية وتواصل وثيق مع شريحة الشباب والعائلات في مصر والعالم العربي." },
      { title: "مرونة تسويقية شاملة", desc: "قدرة استثنائية على تمثيل العلامات في قطاعات الرياضة، التجزئة، السياحة، والمطاعم." },
      { title: "معدلات مشاهدة قياسية", desc: "نسب احتفاظ مرتفعة بالمشاهدين وتفاعل فيروسي يعزز وصول الرسائل الإعلانية." }
    ]
  },
  socialStats: [
    {
      id: "views-90d",
      platform: "facebook",
      nameEn: "Total 90-Day Reach",
      nameAr: "المشاهدات المجمعة (90 يوماً)",
      value: "100M+",
      numericValue: 100000000,
      labelEn: "Video Views (90 Days)",
      labelAr: "مشاهدة فيديو (آخر 90 يوماً)",
      status: "verified",
      sourceEn: "Supplied & Verified by ProMedia across all 3 platforms",
      sourceAr: "موثّقة من بروميديا عبر المنصات الثلاث مجتمعة",
      url: "https://www.pro-media.com"
    },
    {
      id: "facebook",
      platform: "facebook",
      nameEn: "Facebook",
      nameAr: "فيسبوك",
      value: "1.2M",
      numericValue: 1203349,
      labelEn: "Followers",
      labelAr: "متابع",
      status: "verified",
      sourceEn: "Verified official Facebook profile (1.2M+ followers)",
      sourceAr: "بيانات رسمية موثقة من الصفحة الرسمية (أكثر من 1.2 مليون متابع)",
      url: "https://www.facebook.com/share/1DMrw2WiZH/"
    },
    {
      id: "instagram",
      platform: "instagram",
      nameEn: "Instagram",
      nameAr: "إنستغرام",
      value: "1.0M",
      numericValue: 1000000,
      labelEn: "Followers (Verified)",
      labelAr: "متابع (موثّق رسمي)",
      status: "verified",
      sourceEn: "Verified official Instagram profile (@mazen.adly)",
      sourceAr: "الحساب الرسمي الموثّق بالعلامة الزرقاء على إنستغرام (@mazen.adly)",
      url: "https://www.instagram.com/mazen.adly?obrf=dGMyYTJ6aGIzYnQz"
    },
    {
      id: "tiktok",
      platform: "tiktok",
      nameEn: "TikTok",
      nameAr: "تيك توك",
      value: "634K",
      numericValue: 634000,
      labelEn: "Followers",
      labelAr: "متابع",
      status: "verified",
      sourceEn: "Official TikTok profile (@mazenadly)",
      sourceAr: "الحساب الرسمي المعتمد على تيك توك (@mazenadly)",
      url: "https://www.tiktok.com/@mazenadly?_r=1&_t=ZS-9BP43mcZi5c"
    }
  ],
  portfolioCategories: {
    sports: {
      titleEn: "Sports, Fitness & Swimming",
      titleAr: "الرياضة واللياقة والسباحة",
      descriptionEn: "Inspiring athletic journeys, open-water swimming championships, workout motivation, and active lifestyle storytelling that energizes millions.",
      descriptionAr: "رحلات رياضية ملهمة، بطولات سباحة المياه المفتوحة، وتجارب تحفيزية للياقة البدنية وأسلوب الحياة الرياضي تنال إعجاب وتفاعل الملايين.",
      items: [
        {
          id: "sports-1",
          reelId: "DeucJNxxnih",
          url: "https://www.instagram.com/reel/DeucJNxxnih/?vrfl=MXhvaGZ6emgzY2p5dQ==",
          category: "sports",
          thumbnailUrl: "/assets/thumbnails/sports/sports-1.jpg",
          titleEn: "Fitness Motivation: Breaking Workout Excuses",
          titleAr: "تنظيم الوقت والتغلب على الكسل الرياضي",
          descriptionEn: "High-energy motivation talk with Coach Mohamed Elbakly on workout consistency, overcoming fitness excuses, and swimming.",
          descriptionAr: "حوار تحفيزي شيق حول الرياضة والسباحة وأهمية الاستمرارية، وكيفية تنظيم الوقت للتدريب وتجاوز الأعذار اليومية.",
          highlightEn: "Sports Motivation & Discipline",
          highlightAr: "تحفيز رياضي وانضباط"
        },
        {
          id: "sports-2",
          reelId: "Dd9cvq3RNF2",
          url: "https://www.instagram.com/reel/Dd9cvq3RNF2/?vrfl=MXA0OTV2dmM1M29rMQ==",
          category: "sports",
          thumbnailUrl: "/assets/thumbnails/sports/sports-2.jpg",
          titleEn: "Comeback to Swimming: 1KM Open Water Championship",
          titleAr: "رحلة العودة للسباحة وبطولات المياه المفتوحة",
          descriptionEn: "A deeply authentic athletic story chronicling Mazen's return to competitive swimming and competing in his first 1KM open water ocean race after a 9-year hiatus.",
          descriptionAr: "توثيق شخصي ومؤثر لرحلة العودة للسباحة التنافسية بعد انقطاع 9 سنوات، وخوض أول بطولة سباق 1 كم في مياه البحر المفتوحة.",
          highlightEn: "Authentic Athletic Journey",
          highlightAr: "إصرار وقصة نجاح ملهمة"
        }
      ]
    },
    retail: {
      titleEn: "Retail & Commercial Showcases",
      titleAr: "التجزئة والعلامات التجارية",
      descriptionEn: "Dynamic in-store experiences, consumer electronics, fashion, and commercial launches translated into high-impact viral entertainment.",
      descriptionAr: "تجارب تسوق تفاعلية، استعراض أحدث الأجهزة والأزياء والعروض التجارية بأسلوب تشويقي يحفز حركة الشراء.",
      items: [
        {
          id: "retail-1",
          reelId: "DfnQTmEM92u",
          url: "https://www.instagram.com/reel/DfnQTmEM92u/?mdxt=MTAxOTd0bG5sZ3RyNw==",
          category: "retail",
          thumbnailUrl: "/assets/thumbnails/retail/retail-1.jpg",
          titleEn: "Retail Activation Showcase 01",
          titleAr: "تغطية تسوق وتجربة تجارية 01",
          descriptionEn: "In-store product discovery and engaging shopping experience connecting commercial shoppers with brand offers.",
          descriptionAr: "تجربة تسوق مرحة واستعراض منتجات بطريقة عفوية جذبت تفاعل المتسوقين.",
          highlightEn: "High Consumer Engagement",
          highlightAr: "تفاعل استهلاكي مرتفع"
        },
        {
          id: "retail-2",
          reelId: "DehtmEDsh9W",
          url: "https://www.instagram.com/reel/DehtmEDsh9W/?cplk=Y3pib2wzcngyeXBh",
          category: "retail",
          thumbnailUrl: "/assets/thumbnails/retail/retail-2.jpg",
          titleEn: "Retail Experience & Offer Highlights",
          titleAr: "استعراض العروض التجارية المميزة",
          descriptionEn: "Highlighting seasonal promotions with entertaining creative delivery.",
          descriptionAr: "تسليط الضوء على العروض والميزات التجارية بقالب فكاهي سريع الانتشار.",
          highlightEn: "Viral Shareability",
          highlightAr: "معدل مشاركة مرتفع"
        },
        {
          id: "retail-3",
          reelId: "DecqyiDs4mf",
          url: "https://www.instagram.com/reel/DecqyiDs4mf/?mdxt=NjQ3cDh2czEyYWZn",
          category: "retail",
          thumbnailUrl: "/assets/thumbnails/retail/retail-3.jpg",
          titleEn: "Commercial Campaign Feature",
          titleAr: "حملة ترويجية لمنتجات استهلاكية",
          descriptionEn: "Natural integration of consumer products into a relatable daily scenario.",
          descriptionAr: "دمج طبيعي للمنتج ضمن سيناريو يومي مرح يرسخ اسم العلامة في الأذهان.",
          highlightEn: "Brand Recall Focus",
          highlightAr: "ترسيخ اسم العلامة"
        },
        {
          id: "retail-4",
          reelId: "DeZzTaLMMLw",
          url: "https://www.instagram.com/reel/DeZzTaLMMLw/?srtk=MTR3a3ZraHpicWRlaw==",
          category: "retail",
          thumbnailUrl: "/assets/thumbnails/retail/retail-4.jpg",
          titleEn: "Store Walkthrough & Product Review",
          titleAr: "جولة حصرية وتجربة المنتجات",
          descriptionEn: "Engaging branch exploration highlighting variety and customer atmosphere.",
          descriptionAr: "جولة ميدانية داخل المتجر تستعرض تنوع المنتجات وأجواء المكان الحيوية.",
          highlightEn: "Foot-Traffic Driver",
          highlightAr: "تحفيز الزيارات الميدانية"
        },
        {
          id: "retail-5",
          reelId: "DdtitGssHtw",
          url: "https://www.instagram.com/reel/DdtitGssHtw/?xtok=eW1jNnFiaWtlcDBt",
          category: "retail",
          thumbnailUrl: "/assets/thumbnails/retail/retail-5.jpg",
          titleEn: "Special Launch & Shopping Challenge",
          titleAr: "تحدي التسوق وإطلاق العروض الخاصة",
          descriptionEn: "High-energy shopping challenge driving comments and audience shares.",
          descriptionAr: "تحدي مشوّق مليء بالحماس والفكاهة يحفز التعليقات والمشاركات الكثيفة.",
          highlightEn: "High Comment Rate",
          highlightAr: "تفاعل تعليقات قياسي"
        }
      ]
    },
    tourism: {
      titleEn: "Tourism & Destination Experiences",
      titleAr: "السياحة والوجهات الترفيهية",
      descriptionEn: "Captivating travel journeys, luxury resorts, scenic escapades, and city explorations that put destinations in front of millions of active travelers.",
      descriptionAr: "رحلات استكشافية ساحرة، منتجعات سياحية، ومغامرات ممتعة تنقل جمال الوجهات إلى ملايين المتابعين الشغوفين بالسفر.",
      items: [
        {
          id: "tourism-1",
          reelId: "DTvvnLZDKFW",
          url: "https://www.instagram.com/reel/DTvvnLZDKFW/?cplk=MW9vNTE2cHFrOWQ5YQ==",
          category: "tourism",
          thumbnailUrl: "/assets/thumbnails/tourism/tourism-1.jpg",
          titleEn: "Scenic Destination Discovery",
          titleAr: "استكشاف الوجهات الساحرة 01",
          descriptionEn: "Breathtaking landscapes and travel commentary inspiring wanderlust.",
          descriptionAr: "مناظر طبيعية خلابة مع تعليقات ممتعة تحفز الرغبة في خوض تجربة السفر.",
          highlightEn: "Travel Inspiration",
          highlightAr: "إلهام السفر والاستكشاف"
        },
        {
          id: "tourism-2",
          reelId: "DTYm26djLAn",
          url: "https://www.instagram.com/reel/DTYm26djLAn/?srtk=MTVveDNsazI0MDl0Mg==",
          category: "tourism",
          thumbnailUrl: "/assets/thumbnails/tourism/tourism-2.jpg",
          titleEn: "Adventure & Outdoor Experience",
          titleAr: "مغامرات وأنشطة خارجية مشوقة",
          descriptionEn: "High-energy travel adventure showcasing activities and local charm.",
          descriptionAr: "مغامرة سياحية مفعمة بالحيوية تبرز الأنشطة الترفيهية وجمال المكان.",
          highlightEn: "Youth Audience Appeal",
          highlightAr: "جاذبية عالية للشباب"
        },
        {
          id: "tourism-3",
          reelId: "DTJWaQajAsI",
          url: "https://www.instagram.com/reel/DTJWaQajAsI/?exln=MWg2ZzN3dzN5Ym4zag==",
          category: "tourism",
          thumbnailUrl: "/assets/thumbnails/tourism/tourism-3.jpg",
          titleEn: "Resort & Hospitality Spotlight",
          titleAr: "تغطية الضيافة والمنتجعات الفندقية",
          descriptionEn: "Comprehensive review of accommodations, amenities, and guest experience.",
          descriptionAr: "استعراض شامل لمرافق الإقامة والخدمات الفندقية والأجواء الاستجمامية.",
          highlightEn: "Hospitality Focus",
          highlightAr: "تسليط الضوء على الضيافة"
        },
        {
          id: "tourism-4",
          reelId: "DTGAyh0jIub",
          url: "https://www.instagram.com/reel/DTGAyh0jIub/?dlrf=MTYxNGQ2dzJ1dXIwMg==",
          category: "tourism",
          thumbnailUrl: "/assets/thumbnails/tourism/tourism-4.jpg",
          titleEn: "City Landmarks & Cultural Tour",
          titleAr: "جولة المعالم الشهيرة والأجواء التراثية",
          descriptionEn: "Exploring signature sights with engaging, authentic storytelling.",
          descriptionAr: "استكشاف أهم معالم المدينة بأسلوب يجمع بين المعرفة والترفيه العفوي.",
          highlightEn: "Cultural Connection",
          highlightAr: "ارتباط ثقافي وسياحي"
        },
        {
          id: "tourism-5",
          reelId: "DTEHFcRDC1C",
          url: "https://www.instagram.com/reel/DTEHFcRDC1C/?psln=dXpwaG5sNDEwdGkx",
          category: "tourism",
          thumbnailUrl: "/assets/thumbnails/tourism/tourism-5.jpg",
          titleEn: "Travel Diary & Leisure Moments",
          titleAr: "يوميات سياحية ولحظات ترفيهية",
          descriptionEn: "Spontaneous vacation moments capturing relaxation and authentic excitement.",
          descriptionAr: "لحظات استرخاء ومرح عفوية تعكس روعة التجربة السياحية المتكاملة.",
          highlightEn: "Organic Atmosphere",
          highlightAr: "أجواء عفوية آسرة"
        },
        {
          id: "tourism-6",
          reelId: "DTBjTeCjHM5",
          url: "https://www.instagram.com/reel/DTBjTeCjHM5/?obrf=dm5lMDBvN2drcDhk",
          category: "tourism",
          thumbnailUrl: "/assets/thumbnails/tourism/tourism-6.jpg",
          titleEn: "Destination Highlights & Activities",
          titleAr: "أبرز فعاليات الوجهة والأنشطة المميزة",
          descriptionEn: "Dynamic highlights recap showcasing why this destination is a must-visit.",
          descriptionAr: "ملخص لأبرز معالم الوجهة ولماذا تستحق أن تكون الخيار الأول للمسافرين.",
          highlightEn: "High Save Rate",
          highlightAr: "معدل حفظ ومشاركة عالٍ"
        }
      ]
    },
    restaurants: {
      titleEn: "Restaurants & Culinary Experiences",
      titleAr: "المطاعم وتجارب الضيافة الغذائية",
      descriptionEn: "Mouth-watering tastings, vibrant dining reviews, menu highlights, and lively kitchen interactions that generate immediate cravings and foot traffic.",
      descriptionAr: "تجارب تذوق شهية، مراجعات حية لقوائم الأطعمة، وتقييمات عفوية تثير شهية المتابعين وتزيد من الإقبال المباشر على المطاعم.",
      items: [
        {
          id: "restaurant-1",
          reelId: "DHZHs-JSv4z",
          url: "https://www.instagram.com/reel/DHZHs-JSv4z/?exln=NXF1dzJ0NjFyZGRi",
          category: "restaurants",
          thumbnailUrl: "/assets/thumbnails/restaurants/restaurant-1.jpg",
          titleEn: "Signature Dish Tasting & Review",
          titleAr: "تذوق الأطباق المميزة وتقييم النكهات",
          descriptionEn: "Genuine first-bite reactions and detailed tasting of signature menu items.",
          descriptionAr: "انطباعات وتفاعل فوري مع أول قضمة وتذوق لأبرز أطباق القائمة الحصرية.",
          highlightEn: "Appetite Driver",
          highlightAr: "محفز قوي لطلب الطعام"
        },
        {
          id: "restaurant-2",
          reelId: "DQ402FGDNkB",
          url: "https://www.instagram.com/reel/DQ402FGDNkB/?psln=MXc0amhkazJxZHUzdQ==",
          category: "restaurants",
          thumbnailUrl: "/assets/thumbnails/restaurants/restaurant-2.jpg",
          titleEn: "Full Dining Experience & Atmosphere",
          titleAr: "تجربة طعام متكاملة وأجواء الضيافة",
          descriptionEn: "Exploring restaurant decor, service speed, and dish variety with natural humor.",
          descriptionAr: "استعراض ديكورات المطعم وسرعة الخدمة وتنوع الأطباق بروح مرحة.",
          highlightEn: "Atmosphere & Dining",
          highlightAr: "تجربة متكاملة للأجواء"
        },
        {
          id: "restaurant-3",
          reelId: "DDNM_6rN_EH",
          url: "https://www.instagram.com/reel/DDNM_6rN_EH/?psln=eXNzbDQ3cnNyaWMx",
          category: "restaurants",
          thumbnailUrl: "/assets/thumbnails/restaurants/restaurant-3.jpg",
          titleEn: "Gourmet Challenge & Feast",
          titleAr: "وليمة استثنائية وتحدي النكهات الشهية",
          descriptionEn: "Generous table spread showcase triggering intense audience food cravings.",
          descriptionAr: "طاولة طعام عامرة بأشهى الأصناف تثير الرغبة الفورية في التجربة والزيارة.",
          highlightEn: "Viral Food Attraction",
          highlightAr: "جاذبية بصرية للطعام"
        },
        {
          id: "restaurant-4",
          reelId: "DGGyOJJNkQb",
          url: "https://www.instagram.com/reel/DGGyOJJNkQb/?obrf=MTN3OXh1dWM4bnV1Zw==",
          category: "restaurants",
          thumbnailUrl: "/assets/thumbnails/restaurants/restaurant-4.jpg",
          titleEn: "Special Menu & Dessert Showcase",
          titleAr: "قائمة خاصة واستعراض أطباق الحلويات",
          descriptionEn: "Focus on signature dessert and drink items with energetic presentation.",
          descriptionAr: "التركيز على أصناف الحلويات والمشروبات المنعشة بأسلوب مبهج وشيّق.",
          highlightEn: "Craving Conversion",
          highlightAr: "تحويل المشاهدة إلى زيارة"
        },
        {
          id: "restaurant-5-duplicate",
          reelId: "DDNM_6rN_EH",
          url: "https://www.instagram.com/reel/DDNM_6rN_EH/?dlrf=eXNzbDQ3cnNyaWMx",
          category: "restaurants",
          thumbnailUrl: "/assets/thumbnails/restaurants/restaurant-3.jpg",
          titleEn: "Gourmet Challenge & Feast (Alternate Tracking Variant)",
          titleAr: "وليمة استثنائية (رابط تتبع إضافي)",
          descriptionEn: "Supplied alternate tracking parameter URL preserved for reference.",
          descriptionAr: "رابط التتبع الإضافي المحفوظ للمرجعية.",
          highlightEn: "Tracking Variant",
          highlightAr: "رابط تتبع إضافي",
          isDuplicate: true
        }
      ]
    },
    ads: {
      titleEn: "Ads & Commercial Campaigns",
      titleAr: "الإعلانات والحملات التجارية",
      descriptionEn: "Proven commercial collaborations showcasing Mazen Adly's ability to deliver authentic, high-engagement branded content across diverse industries — from food and fashion to lifestyle and wellness.",
      descriptionAr: "تعاونات تجارية ناجحة تثبت قدرة مازن عدلي على تقديم محتوى إعلاني أصيل وعالي التفاعل عبر قطاعات متنوعة — من الأغذية والأزياء إلى أسلوب الحياة والصحة.",
      items: [
        {
          id: "ad-1",
          reelId: "Db8x1HOtRhB",
          url: "https://www.instagram.com/reel/Db8x1HOtRhB/?exln=M2FwcWl4Y3piNXY5",
          category: "ads",
          thumbnailUrl: "/assets/thumbnails/ads/ad-1.jpg",
          titleEn: "Life Hack You Need to Try",
          titleAr: "جربوا الهاك ديه وقولولي رأيكم",
          descriptionEn: "Fun and engaging life hack video that drives massive audience interaction and shareability.",
          descriptionAr: "فيديو حيل وأفكار مرحة يحقق تفاعلاً ومشاركات ضخمة من الجمهور.",
          highlightEn: "High Shareability",
          highlightAr: "معدل مشاركة عالي"
        },
        {
          id: "ad-2",
          reelId: "DcTOJ6SNZCh",
          url: "https://www.instagram.com/reel/DcTOJ6SNZCh/?rpxt=MWZ5NmN1amJlMWJ5cQ==",
          category: "ads",
          thumbnailUrl: "/assets/thumbnails/ads/ad-2.jpg",
          titleEn: "A Day in My Life",
          titleAr: "يوم في حياتي",
          descriptionEn: "Authentic day-in-the-life vlog with natural brand integrations, 1.5K+ likes and 64 comments.",
          descriptionAr: "فلوج يوم كامل بأسلوب عفوي مع دمج طبيعي للعلامات التجارية، أكثر من 1500 إعجاب و64 تعليق.",
          highlightEn: "Authentic Lifestyle Integration",
          highlightAr: "دمج طبيعي مع أسلوب الحياة"
        },
        {
          id: "ad-3",
          reelId: "Dcb2S3oRdos",
          url: "https://www.instagram.com/reel/Dcb2S3oRdos/?srtk=MWowaTdxcjd5c2I0bg==",
          category: "ads",
          thumbnailUrl: "/assets/thumbnails/ads/ad-3.jpg",
          titleEn: "Kitchen Restock Together",
          titleAr: "هنعمل ريستوك للمطبخ مع بعض",
          descriptionEn: "Engaging kitchen restock video seamlessly integrating food and kitchen product placements.",
          descriptionAr: "فيديو تنظيم وتجهيز المطبخ بأسلوب ممتع مع دمج طبيعي لمنتجات الأغذية والمطبخ.",
          highlightEn: "Product Placement Excellence",
          highlightAr: "دمج منتجات احترافي"
        },
        {
          id: "ad-4",
          reelId: "Dc_v8lGxoUD",
          url: "https://www.instagram.com/reel/Dc_v8lGxoUD/?mdxt=MXF6ZnY4MDByNm5uZg==",
          category: "ads",
          thumbnailUrl: "/assets/thumbnails/ads/ad-4.jpg",
          titleEn: "This Invention You Must Try — Domty & Kitchenista",
          titleAr: "اللي مجربش الاختراع ده فايته كتير — دومتي وكيتشنيستا",
          descriptionEn: "Sponsored collaboration with Domty Bakery & Kitchenista — creative product discovery driving high engagement.",
          descriptionAr: "تعاون إعلاني مع دومتي بيكري وكيتشنيستا — اكتشاف منتجات بأسلوب إبداعي يحقق تفاعل عالي.",
          highlightEn: "Brand Collaboration",
          highlightAr: "تعاون تجاري ناجح"
        },
        {
          id: "ad-5",
          reelId: "DdHT8mytvMa",
          url: "https://www.instagram.com/reel/DdHT8mytvMa/?cplk=NHB6cXVwdTBhNmpi",
          category: "ads",
          thumbnailUrl: "/assets/thumbnails/ads/ad-5.jpg",
          titleEn: "1 Pants = 5 Outfits — Fashion Styling",
          titleAr: "بنطلون واحد = 5 إطلالات — تنسيق أزياء",
          descriptionEn: "Fashion styling content showing versatile outfit combinations — 511 likes, 28 comments.",
          descriptionAr: "محتوى تنسيق أزياء يعرض 5 إطلالات مختلفة من بنطلون واحد — 511 إعجاب و28 تعليق.",
          highlightEn: "Fashion & Retail Impact",
          highlightAr: "تأثير في الموضة والتجزئة"
        },
        {
          id: "ad-6",
          reelId: "DYSgeFeNRpk",
          url: "https://www.instagram.com/reel/DYSgeFeNRpk/?dlrf=MWhjdHBmNTl6bWllNA==",
          category: "ads",
          thumbnailUrl: "/assets/thumbnails/ads/ad-6.jpg",
          titleEn: "Comedy & Entertainment Branded Skit",
          titleAr: "سكتش كوميدي ترفيهي إعلاني",
          descriptionEn: "Hilarious comedy skit with seamless commercial messaging — maximum entertainment value.",
          descriptionAr: "سكتش كوميدي مضحك مع رسائل إعلانية مدمجة بسلاسة — ترفيه بأعلى مستوى.",
          highlightEn: "Viral Entertainment",
          highlightAr: "محتوى فيروسي ممتع"
        },
        {
          id: "ad-7",
          reelId: "DUUAbkuDZBO",
          url: "https://www.instagram.com/reel/DUUAbkuDZBO/?exln=eXc0dmRzamo1bWZj",
          category: "ads",
          thumbnailUrl: "/assets/thumbnails/ads/ad-7.jpg",
          titleEn: "Hopefully Orders Come In! — E-commerce Ad",
          titleAr: "يارب يجيلو أوردرات — إعلان تجارة إلكترونية",
          descriptionEn: "Relatable e-commerce promotional content that drives audience engagement and purchase intent.",
          descriptionAr: "محتوى إعلاني للتجارة الإلكترونية بأسلوب واقعي يحفز التفاعل ونية الشراء.",
          highlightEn: "E-Commerce Conversion",
          highlightAr: "تحفيز الشراء الإلكتروني"
        },
        {
          id: "ad-8",
          reelId: "DTYOHTZjRY6",
          url: "https://www.instagram.com/reel/DTYOHTZjRY6/?cplk=MWt4OTV6Nmlocnp2Ng==",
          category: "ads",
          thumbnailUrl: "/assets/thumbnails/ads/ad-8.jpg",
          titleEn: "My Engagement Prep — Elmenus Collaboration",
          titleAr: "خطوبتي اللي بحضرلها — تعاون مع المنيوز",
          descriptionEn: "Personal story-driven Elmenus food platform collaboration blending life moments with brand exposure.",
          descriptionAr: "تعاون مع منصة المنيوز يدمج لحظات حياتية شخصية مع ظهور العلامة التجارية بشكل طبيعي.",
          highlightEn: "Story-Driven Branding",
          highlightAr: "إعلان عبر القصص الشخصية"
        },
        {
          id: "ad-9",
          reelId: "DRh-ACfDSeg",
          url: "https://www.instagram.com/reel/DRh-ACfDSeg/?mdxt=eG4zNDk3amRnMGR3",
          category: "ads",
          thumbnailUrl: "/assets/thumbnails/ads/ad-9.jpg",
          titleEn: "Online Shopping Quality Review — Local Brand Support",
          titleAr: "مراجعة جودة التسوق الإلكتروني — دعم العلامات المحلية",
          descriptionEn: "Authentic product quality review supporting local brands — 1.8K+ likes, 32 comments. Genuine testimonial driving trust and conversions.",
          descriptionAr: "مراجعة حقيقية لجودة المنتجات ودعم العلامات المحلية — أكثر من 1800 إعجاب و32 تعليق. شهادة صادقة تعزز الثقة وتحفز الشراء.",
          highlightEn: "Trust & Credibility",
          highlightAr: "ثقة ومصداقية عالية"
        },
        {
          id: "ad-10",
          reelId: "DQ9_yJ7DbmW",
          url: "https://www.instagram.com/reel/DQ9_yJ7DbmW/?vrfl=MWI3dDVwZTczcnNqag==",
          category: "ads",
          thumbnailUrl: "/assets/thumbnails/ads/ad-10.jpg",
          titleEn: "Siblings' Surprise — Emotional Viral Moment",
          titleAr: "مفاجأة إخواتي — لحظة عاطفية فيروسية",
          descriptionEn: "Heartfelt surprise from siblings going mega-viral — 12K+ likes, 72 comments. Emotional content with massive organic reach.",
          descriptionAr: "مفاجأة مؤثرة من الأخوات حققت انتشاراً واسعاً — أكثر من 12 ألف إعجاب و72 تعليق. محتوى عاطفي بوصول عضوي ضخم.",
          highlightEn: "Mega Viral — 12K+ Likes",
          highlightAr: "انتشار فيروسي — 12K+ إعجاب"
        },
        {
          id: "ad-11",
          reelId: "DNv6D_s2vSy",
          url: "https://www.instagram.com/reel/DNv6D_s2vSy/?obrf=cXJzdmxod2F2ejQ=",
          category: "ads",
          thumbnailUrl: "/assets/thumbnails/ads/ad-11.jpg",
          titleEn: "Ashwagandha KSM-66 — Dozova Health Supplement Ad",
          titleAr: "أشواجندا KSM-66 — إعلان مكمل صحي من دوزوفا",
          descriptionEn: "Health & wellness supplement collaboration with Dozova Egypt — Ashwagandha KSM-66. 2.1K+ likes, 36 comments. Professional sponsored content.",
          descriptionAr: "تعاون إعلاني مع دوزوفا مصر لمكمل أشواجندا KSM-66 — أكثر من 2100 إعجاب و36 تعليق. محتوى إعلاني احترافي في قطاع الصحة.",
          highlightEn: "Health & Wellness Sector",
          highlightAr: "قطاع الصحة والعافية"
        }
      ]
    }
  },
  opportunities: [
    {
      id: "instagram-reels",
      titleEn: "Dedicated Instagram Reels",
      titleAr: "فيديوهات ريلز مخصصة على إنستغرام",
      subtitleEn: "High-production vertical storytelling with organic product integration.",
      subtitleAr: "سرد قصصي رأسي عالي الجودة مع دمج انسيابي وطبيعي للمنتج أو العلامة.",
      deliverablesEn: [
        "Full creative concept & script aligned with brand guidelines",
        "Direct creator integration with authentic lifestyle and sports energy",
        "Permanent video post on official Mazen Adly profile",
        "Brand tag & collaborative post capability where approved",
        "Detailed performance metric reporting post-campaign"
      ],
      deliverablesAr: [
        "ابتكار الفكرة الإبداعية وكتابة السيناريو بما يتوافق مع هوية العلامة",
        "ظهور مازن المباشر ودمج الرسائل التسويقية بطاقة رياضية وحيوية",
        "نشر دائم للفيديو على الحساب الرسمي لمازن عدلي",
        "إشارة مباشرة لحساب العلامة وإمكانية النشر التعاوني (Collab)",
        "تقرير تحليلي مفصل لأداء الحملة ونسب التفاعل بعد النشر"
      ],
      icon: "Film",
      focusEn: "Viral Discovery, Youth Reach & Brand Association",
      focusAr: "انتشار فيروسي، وصول للشباب وترسيخ العلامة"
    },
    {
      id: "tiktok-verticals",
      titleEn: "TikTok Content Series & Sound Trends",
      titleAr: "سلاسل محتوى تيك توك والتريندات الصوتية",
      subtitleEn: "Trend-driven short-form videos designed for peak virality and rapid sharing.",
      subtitleAr: "محتوى إيقاعي سريع متزامن مع أحدث التريندات لتحقيق أوسع انتشار.",
      deliverablesEn: [
        "Creative hook engineered for sub-3-second retention",
        "Native TikTok style, trending audio selection, and on-screen pacing",
        "Multi-asset publishing format (Reel + TikTok synced)",
        "Call-to-action driving bio clicks, downloads, or store footfall"
      ],
      deliverablesAr: [
        "افتتاحية تشويقية مدروسة تجذب الانتباه خلال أول 3 ثوانٍ",
        "استخدام صيغ تيك توك الرائجة والأصوات المتصدرة للإكسبلور",
        "نشر متزامن احترافي يعزز استكشاف المحتوى عبر المنصات",
        "توجيه مباشر لاتخاذ إجراء (رابط البايو، تحميل تطبيق، أو زيارة متجر)"
      ],
      icon: "TrendingUp",
      focusEn: "Gen Z velocity, dynamic trends & rapid virality",
      focusAr: "انتشار فيروسي فائق وسرعة وصول للجيل الجديد"
    },
    {
      id: "multi-platform",
      titleEn: "Omni-Platform Syndication (All 3 Networks)",
      titleAr: "البث الشامل المتزامن عبر كافة المنصات الثلاث",
      subtitleEn: "Cross-pollinated multi-platform release across Facebook, Instagram, and TikTok.",
      subtitleAr: "نشر متزامن عبر فيسبوك، إنستغرام، وتيك توك لتغطية جميع الشرائح العمرية.",
      deliverablesEn: [
        "Single hero production adapted with platform-native aspect ratios",
        "Simultaneous launch coordinated by ProMedia production team",
        "Cross-platform comment community management and moderation",
        "Consolidated cross-platform reach and engagement analytical report"
      ],
      deliverablesAr: [
        "إنتاج عمل إعلاني رئيسي مهيأ فنياً لخصائص كل منصة على حدة",
        "إطلاق متزامن تشرف عليه غرفة عمليات الإنتاج في بروميديا",
        "إدارة وتفاعل مهني مع التعليقات لتعزيز صورة وموثوقية العلامة",
        "تقرير إحصائي موحد وشامل يجمع مؤشرات الأداء من المنصات الثلاث"
      ],
      icon: "Share2",
      focusEn: "Complete market saturation across all demographics",
      focusAr: "تغطية تسويقية متكاملة واستحواذ شامل على الجمهور"
    },
    {
      id: "facebook-community",
      titleEn: "Facebook Content & Community Reach",
      titleAr: "محتوى فيسبوك والوصول المجتمعي الواسع",
      subtitleEn: "Capturing a massive, highly engaged 4.7M+ follower base across broad demographics.",
      subtitleAr: "استثمار القاعدة الجماهيرية الضخمة (4.7 مليون متابع) للوصول لكافة فئات المجتمع.",
      deliverablesEn: [
        "High-definition video upload directly into Facebook Watch",
        "Engaging post copy with direct links and tracked URLs",
        "High family and community shareability",
        "Access to broader household decision-makers"
      ],
      deliverablesAr: [
        "رفع الفيديو بجودة عالية مع تحسينات المشاهدة عبر فيسبوك",
        "صياغة نص منشور مشوق مع روابط الشراء المباشرة",
        "معدلات مشاركة عائلية ومجتمعية مرتفعة عبر المجموعات",
        "الوصول إلى متخذي قرارات الشراء داخل الأسرة"
      ],
      icon: "Users",
      focusEn: "Massive scale & household purchasing power",
      focusAr: "انتشار جماهيري وقوة شرائية عائلية واسعة"
    },
    {
      id: "campaign-packages",
      titleEn: "Customized Campaign Packages",
      titleAr: "حملات تسويقية متكاملة ومخصصة",
      subtitleEn: "Multi-episode story arcs and seasonal campaign takeovers tailored to brand KPIs.",
      subtitleAr: "سلاسل إعلانية متعددة الحلقات ورعاية مواسم وعروض متكاملة حسب أهداف علامتك.",
      deliverablesEn: [
        "Custom creative ideation workshops with ProMedia directors",
        "Multi-video episodic concepts (teaser, launch, conclusion)",
        "Omni-platform synchronized publishing calendar",
        "Rights for digital advertising whitelisting / dark posting"
      ],
      deliverablesAr: [
        "ورش عمل إبداعية مخصصة مع فريق الإخراج والإنتاج في بروميديا",
        "أفكار سينمائية متعددة المراحل (تشويق، إطلاق رسمي، ختام)",
        "جدول نشر متزامن عبر كافة المنصات الرقمية لتعظيم الأثر",
        "حقوق استخدام المحتوى في الإعلانات الممولة (Whitelisting)"
      ],
      icon: "Award",
      focusEn: "Complete brand transformation & narrative depth",
      focusAr: "بناء حضور تسويقي راسخ وحملات متكاملة الأركان"
    },
    {
      id: "on-ground-activations",
      titleEn: "Cross-Platform & Experiential Activations",
      titleAr: "افتتاح الفروع والتغطيات الميدانية والرياضية",
      subtitleEn: "On-site celebrity appearances, athletic events, branch grand openings, and live fan engagements.",
      subtitleAr: "حضور ميداني، فعاليات رياضية وتنافسية، تغطيات افتتاح الفروع، وتفاعل جماهيري مباشر.",
      deliverablesEn: [
        "In-person creator presence at store opening, tournament, or event",
        "Live on-the-ground stories and behind-the-scenes content",
        "Direct fan interactions and customer photo moments",
        "Post-event highlight reel produced for ongoing brand use"
      ],
      deliverablesAr: [
        "حضور شخصي لمازن في موقع الافتتاح أو الفعالية الرياضية والتسويقية",
        "تغطية فورية حية وكواليس تجذب الجمهور للموقع الجغرافي",
        "تفاعل مباشر مع الزوار وجلسات تصوير تزيد ولاء العملاء",
        "إنتاج فيديو توثيقي احترافي متكامل للحدث يُسلّم للعلامة"
      ],
      icon: "Globe",
      focusEn: "Footfall surge, live buzz & athletic community presence",
      focusAr: "حشود جماهيرية وتغطية إعلامية تفاعلية مباشرة"
    }
  ],
  packages: [
    {
      id: "full-social-media",
      nameEn: "Full Social Media Package (3 Platforms)",
      nameAr: "باقة السوشيال ميديا الشاملة (تيك توك + فيسبوك + إنستغرام)",
      tierEn: "Complete Presence: TikTok, Facebook & Instagram",
      tierAr: "التغطية الشاملة: تيك توك، فيسبوك، وإنستغرام",
      priceAmount: 150000,
      currencyEn: "EGP",
      currencyAr: "جنيه مصري",
      priceDisplayEn: "150,000 EGP",
      priceDisplayAr: "150,000 جنيه مصري",
      platforms: ["tiktok", "facebook", "instagram"],
      descriptionEn: "Comprehensive campaign published across TikTok, Facebook, and Instagram for maximum scale and complete audience reach across all demographics.",
      descriptionAr: "حملة إعلانية شاملة تُنشر عبر تيك توك، فيسبوك، وإنستغرام لتحقيق أعلى وصول جماهيري وتغطية كافة الفئات العمرية والمنصات.",
      recommended: true
    },
    {
      id: "two-platform",
      nameEn: "Two-Platform Package (Instagram & TikTok)",
      nameAr: "باقة المنصتين (إنستغرام وتيك توك)",
      tierEn: "Instagram & TikTok",
      tierAr: "إنستغرام وتيك توك",
      priceAmount: 120000,
      currencyEn: "EGP",
      currencyAr: "جنيه مصري",
      priceDisplayEn: "120,000 EGP",
      priceDisplayAr: "120,000 جنيه مصري",
      platforms: ["instagram", "tiktok"],
      descriptionEn: "High-impact short-form vertical video package tailored for rapid virality, visual storytelling, and maximum youth and active audience engagement.",
      descriptionAr: "باقة مركزة للفيديوهات الرأسية القصيرة عبر إنستغرام وتيك توك تضمن سرعة الانتشار الفيروسي والتفاعل المرتفع لدى فئة الشباب والجمهور الحيوي.",
      recommended: false
    },
    {
      id: "single-platform",
      nameEn: "Single Platform Package",
      nameAr: "باقة المنصة الواحدة",
      tierEn: "Single Platform (Instagram, TikTok, or Facebook)",
      tierAr: "منصة واحدة (إنستغرام أو تيك توك أو فيسبوك)",
      priceAmount: 100000,
      currencyEn: "EGP",
      currencyAr: "جنيه مصري",
      priceDisplayEn: "100,000 EGP",
      priceDisplayAr: "100,000 جنيه مصري",
      platforms: ["instagram"],
      descriptionEn: "Dedicated commercial video activation published on a single chosen platform (Instagram, TikTok, or Facebook) targeting an engaged, high-intent audience.",
      descriptionAr: "تغطية إعلانية مخصصة تُنشر على منصة واحدة من اختيارك (إنستغرام، تيك توك، أو فيسبوك) لاستهداف جمهور متفاعل عالي الاهتمام بما يخدم أهداف حملتك.",
      recommended: false
    }
  ],
  contactSection: {
    titleEn: "LET'S CREATE SOMETHING POWERFUL.",
    titleAr: "لنصنع معاً نجاحاً استثنائياً.",
    subtitleEn: "Connect your brand with Mazen Adly's powerful creator presence through ProMedia.",
    subtitleAr: "اربط علامتك التجارية بحضور مازن عدلي الاستثنائي وتأثيره الواسع من خلال بروميديا.",
    actionPromptEn: "ProMedia is the official exclusive management and representation agency for Mazen Adly commercial partnerships. Our team handles creative strategy, campaign structuring, and seamless production delivery.",
    actionPromptAr: "بروميديا هي الجهة الرسمية المعتمدة والوكيل الحصري لإدارة الشراكات والتعاقدات التجارية الخاصة بمازن عدلي. يتولى فريقنا تطوير الاستراتيجية الإبداعية، هيكلة الحملات، وضمان أعلى معايير الإنتاج الاحترافي.",
    ctaButtonEn: "Request Collaboration Rate Card",
    ctaButtonAr: "طلب بطاقة الأسعار وحجز الحملة"
  }
};
