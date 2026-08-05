export const siteData = {
  phone: "(716) 274-9576",
  phoneFormatted: "7162749576",
  email: "info@cityrootstreeservices.com",
  address: "9950 County Rd, Clarence Center, NY 14032",
  hours: [
    { days: "Monday - Friday", time: "7:00 AM - 6:00 PM" },
    { days: "Saturday", time: "8:00 AM - 4:00 PM" },
    { days: "Sunday", time: "Emergency Only" }
  ],
  emergencyText: "24/7 Emergency Tree Service Available",
  socials: {
    facebook: "https://facebook.com/cityrootstree",
    instagram: "https://instagram.com/cityrootstree",
    yelp: "https://yelp.com/biz/city-roots-tree-service"
  },
  
  // All 6 main services
  services: [
    {
      id: "tree-removal",
      title: "Tree Removal",
      shortDescription: "Safe, efficient, and precise removal of hazardous or unwanted trees of any size using modern rigging equipment.",
      longDescription: "Our professional tree removal service utilizes state-of-the-art rigging techniques and crane operations to safely dismantle trees in tight spaces or challenging environments. Whether a tree is dead, diseased, structurally compromised, or interfering with construction, our team prioritizes property safety and clean execution.",
      benefits: [
        "Eliminates hazards to homes, power lines, and pedestrians.",
        "Prevents spread of tree disease to nearby flora.",
        "Clears space for landscaping, additions, or new builds.",
        "Complete structural assessment before every cut."
      ],
      process: [
        "On-site site inspection and obstacle planning.",
        "Setting up safe perimeter borders and advanced rigging lines.",
        "Sectional, controlled removal from top down.",
        "Thorough ground crew debris clearing and property walkthrough."
      ],
      icon: "ShieldAlert",
      imageName: "tree_removal"
    },
    {
      id: "tree-trimming",
      title: "Tree Trimming & Pruning",
      shortDescription: "Enhance your trees' health, appearance, and safety with precision pruning and deadwood removal.",
      longDescription: "Proper tree trimming is both an art and a science. Our certified arborists use strategic pruning guidelines to eliminate deadwood, improve structural integrity, allow wind/sunlight passage, and enhance the overall aesthetic appeal of your landscape trees.",
      benefits: [
        "Improves tree health by removing decaying branches.",
        "Reduces wind resistance during severe storms.",
        "Promotes better sunlight penetration and air circulation.",
        "Encourages proper growth patterns and fruit production."
      ],
      process: [
        "Identifying structurally weak and dead branches.",
        "Crown cleaning, thinning, and raising based on arborist standards.",
        "Directional pruning to steer limbs away from structures.",
        "Fine-tuning tree shape while preserving natural form."
      ],
      icon: "Scissors",
      imageName: "tree_trimming"
    },
    {
      id: "stump-grinding",
      title: "Stump Grinding & Removal",
      shortDescription: "Complete removal of unsightly tree stumps to reclaim your lawn and prevent pest infestations.",
      longDescription: "Leaving a stump in your yard creates a tripping hazard and attracts termites, carpenter ants, and fungi. We use high-powered, turf-friendly stump grinders to pulverize stumps 6 to 12 inches below the grade, leaving you with clean soil ready for seed or sod.",
      benefits: [
        "Eliminates tripping hazards and mowing obstacles.",
        "Prevents pests like termites and wood-boring beetles.",
        "Prevents unsightly stump sprouts and shoots.",
        "Reclaims valuable space for lawn, patios, or flowerbeds."
      ],
      process: [
        "Digging around the stump base to expose buried stones.",
        "Precision grinding using specialized, narrow-profile machinery.",
        "Grinding main root flares and lateral surface roots.",
        "Filling the void with mulch/topsoil and site leveling."
      ],
      icon: "Sparkles",
      imageName: "stump_grinding"
    },
    {
      id: "emergency-service",
      title: "24/7 Emergency Tree Service",
      shortDescription: "Rapid response storm damage cleanup and hazardous tree stabilization when every second counts.",
      longDescription: "When storms hit, falling branches and uprooted trees can compromise your home and safety. Our dedicated emergency crews are on standby 24/7. Equipped with cranes, heavy rigging, and specialized lighting, we respond immediately to secure your property.",
      benefits: [
        "24/7 immediate response dispatch.",
        "Hazard stabilization to protect your roof and utility lines.",
        "Coordination with homeowners insurance providers.",
        "Safety-first operations in severe weather conditions."
      ],
      process: [
        "Immediate phone dispatch and hazard triage.",
        "Rapid site containment and utility safety verification.",
        "Careful lifting and removal of fallen timber from structures.",
        "Debris cleanup and tarping damaged roof structures."
      ],
      icon: "AlertTriangle",
      imageName: "emergency_tree"
    },
    {
      id: "health-assessment",
      title: "Tree Health Assessment",
      shortDescription: "Arborist diagnostics, soil testing, decay detection, and custom treatment plans to save sick trees.",
      longDescription: "Protect your green assets. Our Certified Arborists perform comprehensive assessments to identify root rot, fungal infections, wood-boring pests, and structural decay. We use advanced diagnostic tools to design custom fertilization and pest management programs.",
      benefits: [
        "Early detection of hidden structural decay.",
        "Custom nutritional plans to restore leaves and vitality.",
        "Accurate pest and fungal diagnosis.",
        "Official arborist reports for legal and permit needs."
      ],
      process: [
        "Visual soil, bark, and canopy inspection.",
        "Core sampling or decay testing where necessary.",
        "Diagnosing insects, pathogens, or nutrient deficiencies.",
        "Creating a detailed treatment schedule or action plan."
      ],
      icon: "Heart",
      imageName: "health_assessment"
    },
    {
      id: "land-clearing",
      title: "Land Clearing & Underbrushing",
      shortDescription: "Transform overgrown acreage or thick brush into clean, usable, development-ready land.",
      longDescription: "From single-acre lots to multi-acre developments, we provide comprehensive land clearing, forestry mulching, and brush clearing services. We selectively preserve healthy legacy trees while removing underbrush, invasive species, and problematic trees.",
      benefits: [
        "Clears overgrown brush, brambles, and invasive weeds.",
        "Prepares sites for homes, driveways, or fencing.",
        "Reduces wildfire fuels and improves property access.",
        "Forestry mulching prevents soil erosion."
      ],
      process: [
        "Surveying property lines and identifying trees to preserve.",
        "Clearing underbrush using heavy-duty forestry mulchers.",
        "Tree removal, grubbing, and large stump extraction.",
        "Final grading, debris management, or site seeding."
      ],
      icon: "Trees",
      imageName: "land_clearing"
    }
  ],

  // Why choose us points
  whyChooseUs: [
    {
      title: "Licensed & Insured",
      description: "Fully licensed by the state and carrying comprehensive $2M liability and workers' comp insurance to protect you and your property.",
      icon: "ShieldCheck"
    },
    {
      title: "Certified Arborists",
      description: "Our work is supervised by ISA Certified Arborists who understand the biology and structural mechanics of native trees.",
      icon: "Award"
    },
    {
      title: "Modern Equipment",
      description: "We utilize compact lifts, turf-friendly track machinery, and advanced rigging to perform tasks cleanly without tearing up your lawn.",
      icon: "Wrench"
    },
    {
      title: "Eco-Friendly Practices",
      description: "100% of our wood waste is recycled into organic garden mulch or firewood. We use biodegradable bar oils and plant native trees.",
      icon: "Leaf"
    },
    {
      title: "Fast Response Times",
      description: "We show up on schedule for estimates and jobs, and offer round-the-clock rapid dispatch for dangerous tree emergencies.",
      icon: "Clock"
    },
    {
      title: "100% Satisfaction",
      description: "We don't consider the job complete until we do a final walk-around with you to ensure your property is spotless and your trees look perfect.",
      icon: "ThumbsUp"
    }
  ],

  // Compare layout stats
  comparison: {
    title: "Nature Wise vs. Typical Tree Company",
    description: "See why homeowners and commercial property managers throughout the region trust Nature Wise Tree Service with their valuable landscapes.",
    headers: ["Feature/Standard", "Nature Wise Tree Service", "Typical Tree Company"],
    rows: [
      { feature: "Certified Arborists", natureWise: true, typical: false, detail: "ISA Certified Arborists supervise all crew planning and technical pruning operations." },
      { feature: "Full Insurance Cover", natureWise: true, typical: "Sometimes", detail: "$2M general liability plus complete workers' compensation. Check verify certificates." },
      { feature: "Low-Impact Turf Equipment", natureWise: true, typical: false, detail: "Compact track machinery and protective lawn mats prevent deep ruts and lawn damage." },
      { feature: "100% Zero-Waste Recycling", natureWise: true, typical: false, detail: "Every branch is chipped for mulch; logs are split for firewood or milled into lumber." },
      { feature: "Safety First Practices", natureWise: true, typical: false, detail: "All crews wear proper PPE, use certified climbing systems, and follow OSHA/ANSI Z133 standards." },
      { feature: "Spotless Site Cleanup", natureWise: true, typical: "Rarely", detail: "We rake twigs, blow sawdust, and vacuum lawn areas. We leave your yard cleaner than we found it." },
      { feature: "Written Satisfaction Guarantee", natureWise: true, typical: false, detail: "No deposits required for standard residential work. You pay only after successful final walkthrough." }
    ]
  },

  // 5 Step Process
  process: [
    {
      step: "01",
      title: "On-Site Inspection",
      description: "An ISA Certified Arborist visits your property to evaluate tree health, assess structural risks, and inspect physical surroundings."
    },
    {
      step: "02",
      title: "Strategic Planning",
      description: "We compile a detailed, itemized quote and outline safety measures, rigging configurations, and equipment choices."
    },
    {
      step: "03",
      title: "Safe Work Execution",
      description: "Our highly trained crew arrives on schedule. Using proper safety gear, they execute the plan with precision, limb by limb."
    },
    {
      step: "04",
      title: "Meticulous Cleanup",
      description: "We process all branches, grind stumps if requested, rake up all organic debris, and blow away remaining sawdust from your walkways."
    },
    {
      step: "05",
      title: "Final Walkthrough",
      description: "The crew lead reviews the completed project with you to ensure every detail matches our agreement and your expectations."
    }
  ],

  // FAQ Accordion Data
  faqs: [
    {
      id: "faq-1",
      question: "Are you fully licensed and insured?",
      answer: "Yes, Nature Wise Tree Service is fully licensed (Lic # NATURWT802DD) and carries $2,000,000 in general liability insurance along with comprehensive workers' compensation. We are happy to provide copies of our certificates of insurance directly from our agent upon request."
    },
    {
      id: "faq-2",
      question: "How do I know if a tree needs to be removed?",
      answer: "Key warning signs include significant dead branches in the upper canopy, deep vertical cracks in the trunk, decay fungi (like mushrooms) growing near the base, leaning trunks, or damaged root systems from nearby construction. A certified arborist assessment is the best way to determine if a tree can be saved or needs to be removed."
    },
    {
      id: "faq-3",
      question: "When is the best time of year to prune trees?",
      answer: "For most species in Western New York, late winter or early spring (dormant season) is optimal for pruning. This promotes vigorous growth in the spring and makes it easier to inspect the branch architecture. However, deadwood removal and hazard pruning can and should be done at any time of year for safety."
    },
    {
      id: "faq-4",
      question: "Do I need a permit to remove a tree on my property?",
      answer: "Permit requirements vary significantly by municipality (e.g., Buffalo, Clarence, Amherst, and Williamsville each have different codes). Factors include the tree's diameter (DSH), species, and whether your property is in a critical area. We handle the local municipality research and help you navigate the permit application process."
    },
    {
      id: "faq-5",
      question: "Will your heavy equipment damage my lawn?",
      answer: "We take extreme care to protect your landscape. We use specialized lightweight, articulated track machines that distribute weight evenly, and we lay down heavy-duty protective AlturnaMATS over grass, flowerbeds, and driveways to prevent ruts and cracked concrete."
    },
    {
      id: "faq-6",
      question: "What do you do with the wood and waste after tree removal?",
      answer: "We are committed to a 100% zero-waste policy. All branches are chipped on-site and recycled as landscape mulch. Large trunks are either cut into firewood blocks for the local community, transported to local mills for lumber, or left for the homeowner in neat, manageable rounds if requested."
    }
  ],

  // Google style Reviews
  reviews: {
    rating: 4.9,
    count: 148,
    list: [
      {
        id: "rev-1",
        author: "Sarah Jenkins",
        location: "Clarence, NY",
        rating: 5,
        date: "2 weeks ago",
        text: "Nature Wise removed a huge, dying Douglas Fir that was leaning directly over our garage. Their team was incredibly professional, set up complex rigging, and brought the tree down section by section with absolute precision. Their cleanup was so thorough they even swept our driveway and blew leaves off the deck! Highly recommend.",
        service: "Tree Removal"
      },
      {
        id: "rev-2",
        author: "David Chen",
        location: "Buffalo, NY",
        rating: 5,
        date: "1 month ago",
        text: "We had them out to trim several old Maples and assess a sick Birch tree. The arborist was extremely knowledgeable, explaining exactly why some branches needed to go and how to treat the Birch instead of immediately suggesting removal. Outstanding customer service and ecological focus.",
        service: "Tree Trimming & Health Assessment"
      },
      {
        id: "rev-3",
        author: "Marcus Brody",
        location: "Amherst, NY",
        rating: 5,
        date: "2 months ago",
        text: "After a severe windstorm knocked a large branch onto our roof, Nature Wise sent an emergency crew out in under two hours. They secured the branch, cleared it off without causing further damage, and tarped the roof for us in the middle of the rain. Super fast response and reasonable pricing under pressure.",
        service: "24/7 Emergency Tree Service"
      },
      {
        id: "rev-4",
        author: "Elena Rostova",
        location: "Williamsville, NY",
        rating: 5,
        date: "3 months ago",
        text: "Excellent stump grinding service. They ground down five large cedar stumps in our backyard, went deep enough that we could plant grass immediately, and left the area neat. Very courteous crew and clean equipment.",
        service: "Stump Grinding"
      },
      {
        id: "rev-5",
        author: "Robert Miller",
        location: "Orchard Park, NY",
        rating: 5,
        date: "4 months ago",
        text: "I hired Nature Wise for a land clearing project to prepare my lot for building. They cleared a massive amount of dense underbrush and brambles in just two days while leaving all the beautiful Douglas Firs and Maples completely intact. Fantastic machinery and hard workers.",
        service: "Land Clearing & Underbrushing"
      }
    ]
  },

  // Service Areas
  serviceAreas: {
    description: "Nature Wise Tree Service proudly serves Erie and Niagara counties in Western New York. We optimize tree health and property safety across Buffalo, Clarence Center, and surrounding areas with our expert crews.",
    cities: [
      {
        name: "Clarence Center",
        description: "Our home base. We provide comprehensive tree removal, permits navigation, and aesthetic crown pruning for Clarence Center homeowners and corporate campuses.",
        zipCodes: ["14031", "14032", "14221"],
        services: ["Tree Removal", "Tree Trimming", "Stump Grinding", "Emergency Service", "Arborist Diagnostics"]
      },
      {
        name: "Buffalo",
        description: "Serving Buffalo neighborhoods with low-impact equipment. Specializing in high-value maple pruning, root evaluations, and tight-space hazardous removals.",
        zipCodes: ["14209", "14222", "14214", "14201", "14202"],
        services: ["Tree Removal", "Fine Pruning", "Stump Grinding", "Emergency Services", "Tree Preservation"]
      },
      {
        name: "Amherst",
        description: "Helping Amherst residents protect their views and maintain tree safety in compliance with local tree ordinances.",
        zipCodes: ["14226", "14228", "14051", "14068"],
        services: ["Permit Consultations", "Tree Removal", "Stump Grinding", "Deadwood Trimming"]
      },
      {
        name: "Williamsville",
        description: "Managing dense suburban tree canopies in Williamsville. Expert care for towering evergreens, storm prevention trimming, and prompt emergency response.",
        zipCodes: ["14221"],
        services: ["Tree Removal", "Storm Trimming", "Stump Grinding", "Wind Mitigation Pruning"]
      },
      {
        name: "Orchard Park",
        description: "Providing estate tree care, land clearing, stump grinding, and large acreage tree health surveys for Orchard Park's wooded properties.",
        zipCodes: ["14127"],
        services: ["Land Clearing", "Tree Removal", "Stump Grinding", "Arborist Inspections"]
      },
      {
        name: "Lancaster",
        description: "Protecting properties tucked against the mountain foothills from wind damage and storm hazards with selective clearing and hazard tree mitigation.",
        zipCodes: ["14086"],
        services: ["Hazard Tree Removal", "Brush Clearing", "Pruning", "Emergency Dispatch"]
      }
    ]
  },

  // Team
  team: [
    {
      name: "Marcus Thorne",
      role: "Founder & Lead Arborist",
      bio: "ISA Certified Arborist with over 15 years of climbing and forestry experience. Passionate about urban forest conservation and safety education.",
      certId: "ISA # PN-8432A"
    },
    {
      name: "Dustin Vance",
      role: "Rigging Specialist & Crew Lead",
      bio: "An expert in high-altitude rigging and heavy crane removals. Dustin ensures complex removals are executed safely near homes and buildings.",
      certId: "TCIA Certified Treecare Safety Professional"
    },
    {
      name: "Elena Gusev",
      role: "Tree Health Consultant",
      bio: "Specializes in soil microbiology, plant pathology, and organic insect treatments. Elena creates custom recovery plans for distressed native species.",
      certId: "MS in Forestry & Plant Pathology"
    }
  ]
};
