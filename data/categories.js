/* ══════════════════════════════════════════════════════════════
   ALL FIVERR PRO APPLICATION CATEGORIES
   Each with skills, techStack, projects (matching Shreyansh
   Singh's quality standard), experience templates, certifications
   ══════════════════════════════════════════════════════════════ */

const CATEGORIES = [
  // ─── PROGRAMMING & TECH ───
  {
    id: "mobile-app-dev",
    name: "Mobile App Development",
    group: "Programming & Tech",
    icon: "📱",
    salary: "$80–$200/hr",
    banner: "assets/banners/mobile-app-dev.jpg",
    gradient: "linear-gradient(135deg, #0f1629, #1a1040)",
    skills: [
      { name: "Flutter / Dart", level: 98 },
      { name: "React Native / JS", level: 97 },
      { name: "Swift / SwiftUI", level: 96 },
      { name: "Kotlin / Jetpack", level: 95 },
      { name: "Firebase / Supabase", level: 94 },
      { name: "App Architecture", level: 97 }
    ],
    techStack: {
      "Mobile": ["Flutter", "React Native", "Swift", "Kotlin", "SwiftUI", "Jetpack Compose"],
      "Backend & Cloud": ["Firebase", "Node.js", "Supabase", "AWS Amplify", "GraphQL", "REST"],
      "Tools & CI/CD": ["Fastlane", "Codemagic", "Figma", "TestFlight", "Crashlytics", "RevenueCat"]
    },
    certifications: [
      { name: "Google Associate Android Developer", issuer: "Google", year: "2023" },
      { name: "AWS Certified Solutions Architect — Associate", issuer: "Amazon Web Services", year: "2022" },
      { name: "Meta React Native Specialization", issuer: "Meta (Coursera)", year: "2021" },
      { name: "Apple Certified iOS Developer", issuer: "Apple", year: "2020" }
    ],
    projects: [
      {
        name: "NidhiPay — AI-Powered UPI & Banking App",
        tech: "Flutter, Dart, Firebase, Razorpay SDK, ML Kit | 628K+ Downloads",
        client: "Sole Developer & Architect — Built for KisanCredit (YC W23)",
        desc: "Full-featured fintech super-app with UPI payments, AI expense categorization, and biometric security. Handles ₹800 Cr+ monthly transaction volume with 99.97% uptime. Rated 4.9 stars on Google Play."
      },
      {
        name: "VitalSync — Cross-Platform Health & Fitness Tracker",
        tech: "React Native, HealthKit, Google Fit, Node.js | 1.52M+ Active Users",
        client: "Lead React Native Developer — Built for HealthifyMe",
        desc: "Comprehensive health platform syncing with Apple HealthKit, Google Fit, and 15+ wearables. Features AI workout recommendations, meal planning, and sleep analysis with 60fps animations."
      },
      {
        name: "LiveKart — Live Commerce & Video Shopping Platform",
        tech: "Flutter, WebRTC, Agora SDK, Firebase, Stripe | ₹50 Cr+ GMV",
        client: "Lead Flutter Developer — Built for Meesho",
        desc: "Live commerce platform with low-latency streaming (<300ms), in-stream checkout, and AI product recognition. Handles 50K+ concurrent viewers per stream."
      }
    ],
    experience: [
      {
        role: "Freelance Mobile App Developer & Architect",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Deliver end-to-end mobile development for 12+ clients across fintech, health, and e-commerce verticals",
          "Architected and shipped 8 production apps with Flutter and React Native for iOS & Android",
          "Built cross-platform SDKs adopted by 3 enterprise clients for payment integration",
          "Provide mobile architecture consulting for startup engineering teams of 5-15 engineers"
        ]
      },
      {
        role: "Lead Mobile App Developer",
        company: "Flipkart (Walmart Inc.) — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led mobile checkout redesign increasing conversion rate by 18% across 200M+ user base",
          "Architected offline-first cart sync engine reducing order failures by 35%",
          "Built Flutter-based seller app used by 500K+ merchants for real-time inventory",
          "Mentored team of 6 mobile developers and established code review standards"
        ]
      }
    ]
  },

  {
    id: "web-development",
    name: "Web Development",
    group: "Programming & Tech",
    icon: "🌐",
    salary: "$70–$180/hr",
    banner: "assets/banners/web-dev.jpg",
    gradient: "linear-gradient(135deg, #0a1628, #1a0f40)",
    skills: [
      { name: "React / Next.js", level: 98 },
      { name: "TypeScript / JavaScript", level: 97 },
      { name: "Node.js / Express", level: 96 },
      { name: "PostgreSQL / MongoDB", level: 95 },
      { name: "AWS / GCP / Azure", level: 94 },
      { name: "System Architecture", level: 97 }
    ],
    techStack: {
      "Frontend": ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Three.js"],
      "Backend": ["Node.js", "Python/Django", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      "DevOps & Cloud": ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Vercel"]
    },
    certifications: [
      { name: "AWS Certified Solutions Architect — Professional", issuer: "Amazon Web Services", year: "2023" },
      { name: "Google Cloud Professional Cloud Developer", issuer: "Google", year: "2022" },
      { name: "Meta Front-End Developer Professional Certificate", issuer: "Meta (Coursera)", year: "2021" }
    ],
    projects: [
      {
        name: "FinanceHub — Enterprise SaaS Analytics Dashboard",
        tech: "Next.js 14, TypeScript, PostgreSQL, Redis, D3.js | 45K+ Enterprise Users",
        client: "Lead Full-Stack Developer — Built for Razorpay Business",
        desc: "Real-time financial analytics platform processing 2M+ transactions daily. Features interactive D3.js visualizations, role-based access control, and automated reporting. Reduced client reporting time by 85%."
      },
      {
        name: "ShopStream — Headless E-Commerce Platform",
        tech: "React, Node.js, GraphQL, Stripe, Algolia | $12M+ Annual GMV",
        client: "Sole Architect — Built for Limeroad",
        desc: "Headless commerce platform with sub-200ms page loads, AI-powered product recommendations, and multi-currency checkout. Handles 100K+ concurrent users during flash sales with zero downtime."
      },
      {
        name: "MedConnect — Telemedicine & Patient Portal",
        tech: "Vue.js, Django, WebRTC, AWS, HL7 FHIR | 280K+ Patients Served",
        client: "Senior Full-Stack Developer — Built for Practo",
        desc: "HIPAA-compliant telemedicine platform with HD video consultations, e-prescriptions, and lab integration. Processes 15K+ consultations daily across 8 medical specialties."
      }
    ],
    experience: [
      {
        role: "Freelance Full-Stack Web Developer",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Deliver production-grade web applications for 15+ clients across SaaS, fintech, and healthcare",
          "Architected microservices platforms handling 5M+ requests daily for enterprise clients",
          "Built custom CMS and admin dashboards reducing operational overhead by 60%",
          "Provide technical architecture consulting for Series A–C startups"
        ]
      },
      {
        role: "Senior Full-Stack Developer",
        company: "Infosys — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led a team of 8 developers building Next.js enterprise dashboards for banking clients",
          "Designed API gateway handling 10M+ requests/day with 99.99% uptime SLA",
          "Migrated legacy monolith to microservices reducing deployment time from 4 hours to 12 minutes",
          "Established front-end design system adopted across 5 product teams"
        ]
      }
    ]
  },

  {
    id: "website-design",
    name: "Website Design",
    group: "Design & Creative",
    icon: "🎨",
    salary: "$60–$150/hr",
    banner: "assets/banners/website-design.jpg",
    gradient: "linear-gradient(135deg, #1a0f29, #0f1a29)",
    skills: [
      { name: "UI/UX Design", level: 98 },
      { name: "Figma / Adobe XD", level: 97 },
      { name: "Responsive Design", level: 96 },
      { name: "Design Systems", level: 95 },
      { name: "Interaction Design", level: 94 },
      { name: "Brand Identity", level: 96 }
    ],
    techStack: {
      "Design Tools": ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"],
      "Frontend": ["HTML5/CSS3", "Tailwind CSS", "GSAP", "Lottie", "Webflow", "Framer Motion"],
      "Research & Testing": ["Hotjar", "Maze", "UserTesting", "Google Analytics", "A/B Testing", "Accessibility Audits"]
    },
    certifications: [
      { name: "Google UX Design Professional Certificate", issuer: "Google (Coursera)", year: "2023" },
      { name: "Interaction Design Foundation — UX Master Track", issuer: "IDF", year: "2022" },
      { name: "Adobe Certified Expert — Web Design", issuer: "Adobe", year: "2021" }
    ],
    projects: [
      {
        name: "Luxe Realty — Premium Real Estate Platform Redesign",
        tech: "Figma, Webflow, GSAP, Three.js | 3.2M+ Monthly Visitors",
        client: "Lead UX/UI Designer — Redesigned for Housing.com",
        desc: "Complete UX overhaul of India's leading real estate platform. Redesigned property listings, virtual tours, and mortgage calculator. Increased user engagement by 42% and reduced bounce rate by 28%."
      },
      {
        name: "Mindful — Mental Wellness App Design System",
        tech: "Figma, Principle, Lottie, Design Tokens | Used by 12 Product Teams",
        client: "Senior Product Designer — Built for Cure.fit",
        desc: "Comprehensive design system with 200+ components, micro-interactions, and accessibility guidelines. Reduced design-to-development handoff time by 65% and ensured WCAG 2.1 AA compliance."
      },
      {
        name: "TravelCraft — Immersive Travel Booking Experience",
        tech: "Figma, Framer, WebGL, Mapbox | 890K+ Monthly Bookings",
        client: "UX/UI Design Lead — Built for MakeMyTrip",
        desc: "Reimagined the travel booking flow with immersive destination previews, AI itinerary builder, and interactive maps. Conversion rate increased by 35% with average session duration up 52%."
      }
    ],
    experience: [
      {
        role: "Freelance UI/UX Designer & Brand Strategist",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Design premium websites and brand identities for 20+ clients across luxury, tech, and healthcare",
          "Created design systems adopted by engineering teams of 10-30 developers",
          "Conduct UX research and usability testing driving measurable conversion improvements",
          "Specialize in accessible, responsive design with WCAG 2.1 compliance"
        ]
      },
      {
        role: "Senior UI/UX Designer",
        company: "Swiggy — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led redesign of Swiggy's restaurant discovery experience for 50M+ monthly active users",
          "Built and maintained the Swiggy Design System with 300+ reusable components",
          "Conducted 100+ user research sessions and A/B tests driving 22% improvement in order conversion",
          "Mentored 4 junior designers and established design review processes"
        ]
      }
    ]
  },

  {
    id: "cybersecurity",
    name: "Cybersecurity",
    group: "Programming & Tech",
    icon: "🛡️",
    salary: "$100–$250/hr",
    banner: "assets/banners/cybersecurity.jpg",
    gradient: "linear-gradient(135deg, #0a1a0a, #0f2912)",
    skills: [
      { name: "Penetration Testing", level: 98 },
      { name: "SIEM & Threat Intel", level: 97 },
      { name: "Cloud Security (AWS/GCP)", level: 96 },
      { name: "Incident Response", level: 95 },
      { name: "Network Security", level: 94 },
      { name: "Compliance (SOC 2/ISO 27001)", level: 96 }
    ],
    techStack: {
      "Offensive Security": ["Metasploit", "Burp Suite", "OWASP ZAP", "Nmap", "Wireshark", "Kali Linux"],
      "Defensive Security": ["Splunk", "CrowdStrike", "Snort", "Suricata", "ELK Stack", "YARA"],
      "Cloud & Compliance": ["AWS Security Hub", "GCP Security Command Center", "Terraform", "Vault", "SOC 2", "ISO 27001"]
    },
    certifications: [
      { name: "OSCP — Offensive Security Certified Professional", issuer: "Offensive Security", year: "2023" },
      { name: "CISSP — Certified Information Systems Security Professional", issuer: "(ISC)²", year: "2022" },
      { name: "AWS Certified Security — Specialty", issuer: "Amazon Web Services", year: "2022" },
      { name: "CEH — Certified Ethical Hacker", issuer: "EC-Council", year: "2021" }
    ],
    projects: [
      {
        name: "SecureVault — Enterprise Zero-Trust Security Platform",
        tech: "Python, Go, AWS, Terraform, Vault | Protected 2.5M+ Identities",
        client: "Lead Security Architect — Built for Zoho Corporation",
        desc: "Zero-trust identity and access management platform with MFA, SSO, and behavioral analytics. Reduced unauthorized access attempts by 94% and achieved SOC 2 Type II certification in 6 months."
      },
      {
        name: "ThreatHunter — AI-Powered Threat Detection Engine",
        tech: "Python, TensorFlow, ELK Stack, Splunk, MITRE ATT&CK | 15M+ Events/Day",
        client: "Senior Security Engineer — Built for Tata Consultancy Services",
        desc: "ML-based threat detection platform analyzing 15M+ security events daily. Achieved 99.2% detection rate with <0.1% false positives. Reduced mean time to detect (MTTD) from 45 hours to 12 minutes."
      },
      {
        name: "BugBounty Pro — Automated Vulnerability Assessment Suite",
        tech: "Go, Python, Docker, Nuclei, Burp Suite API | 800+ Vulnerabilities Found",
        client: "Lead Penetration Tester — Built for HackerOne Program",
        desc: "Automated vulnerability scanning and reporting platform combining 20+ security tools. Discovered 800+ vulnerabilities across Fortune 500 companies including 12 critical RCE flaws."
      }
    ],
    experience: [
      {
        role: "Freelance Cybersecurity Consultant & Penetration Tester",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Conduct penetration testing and security audits for 18+ enterprise clients",
          "Perform red team engagements identifying critical vulnerabilities before exploitation",
          "Design and implement zero-trust security architectures for cloud-native organizations",
          "Provide incident response and forensics consulting for breach investigations"
        ]
      },
      {
        role: "Senior Security Engineer",
        company: "Wipro Cybersecurity — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led security operations for 15+ enterprise clients protecting $2B+ in digital assets",
          "Built automated threat detection reducing incident response time by 78%",
          "Conducted 50+ penetration tests across web, mobile, and cloud infrastructure",
          "Achieved SOC 2, ISO 27001, and GDPR compliance for 8 client organizations"
        ]
      }
    ]
  },

  {
    id: "game-development",
    name: "Game Development",
    group: "Programming & Tech",
    icon: "🎮",
    salary: "$70–$180/hr",
    banner: "assets/banners/game-dev.jpg",
    gradient: "linear-gradient(135deg, #1a1005, #291505)",
    skills: [
      { name: "Unity / C#", level: 98 },
      { name: "Unreal Engine / C++", level: 96 },
      { name: "3D Math & Physics", level: 95 },
      { name: "Shader Programming", level: 94 },
      { name: "Multiplayer Networking", level: 93 },
      { name: "Game Design & UX", level: 96 }
    ],
    techStack: {
      "Game Engines": ["Unity", "Unreal Engine 5", "Godot", "Cocos2d-x", "Phaser", "PlayCanvas"],
      "Graphics & Audio": ["HLSL/GLSL", "Blender", "Substance Painter", "FMOD", "Wwise", "Spine2D"],
      "Backend & Services": ["Photon", "PlayFab", "Firebase", "Mirror Networking", "Steamworks", "Epic Online Services"]
    },
    certifications: [
      { name: "Unity Certified Expert: Programmer", issuer: "Unity Technologies", year: "2023" },
      { name: "Unreal Authorized Instructor", issuer: "Epic Games", year: "2022" },
      { name: "AWS GameTech Certified", issuer: "Amazon Web Services", year: "2021" }
    ],
    projects: [
      {
        name: "ShadowRealm — AAA-Quality Action RPG",
        tech: "Unreal Engine 5, C++, Nanite, Lumen, Wwise | 2.8M+ Downloads",
        client: "Lead Game Developer — Built for Nazara Technologies",
        desc: "Open-world action RPG with photorealistic Nanite environments, Lumen global illumination, and 40+ hours of gameplay. Features procedural dungeon generation and real-time multiplayer co-op for up to 4 players."
      },
      {
        name: "CricketStars — Competitive Mobile Cricket Game",
        tech: "Unity, C#, Photon, Firebase, FMOD | 8.5M+ Active Players",
        client: "Senior Unity Developer — Built for Dream11",
        desc: "Real-time multiplayer cricket game with physics-based bowling, batting, and fielding mechanics. Features ranked matchmaking, seasonal tournaments, and live commentary. Peaked at 500K+ concurrent players."
      },
      {
        name: "MetaWorld — Blockchain-Powered Virtual World",
        tech: "Unity, WebGL, Solidity, PlayFab, Three.js | $4.2M+ Virtual Economy",
        client: "Lead Technical Artist & Developer — Built for Polygon Studios",
        desc: "Persistent virtual world with user-generated content, real-time economy, and cross-platform play. Built custom LOD system supporting 10K+ concurrent users with 60fps on mobile devices."
      }
    ],
    experience: [
      {
        role: "Freelance Game Developer & Technical Director",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Develop indie and enterprise game projects across Unity and Unreal Engine",
          "Shipped 6 commercial titles on Steam, App Store, and Google Play",
          "Specialize in multiplayer networking, shader programming, and performance optimization",
          "Provide game architecture consulting for studios with 5-20 person teams"
        ]
      },
      {
        role: "Lead Game Developer",
        company: "Nazara Technologies — Mumbai, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led a team of 12 developers building ShadowRealm, an AAA-quality mobile action RPG",
          "Optimized Unreal Engine 5 rendering pipeline achieving 60fps on mid-range Android devices",
          "Implemented custom physics engine reducing server tick rate by 40%",
          "Managed full game development lifecycle from concept to live operations"
        ]
      }
    ]
  },

  {
    id: "coding-lessons",
    name: "Coding Lessons & Mentoring",
    group: "Programming & Tech",
    icon: "👨‍🏫",
    salary: "$50–$120/hr",
    banner: "assets/banners/coding-lessons.jpg",
    gradient: "linear-gradient(135deg, #1a1800, #291f05)",
    skills: [
      { name: "Curriculum Design", level: 98 },
      { name: "Python / JavaScript", level: 97 },
      { name: "Data Structures & Algo", level: 96 },
      { name: "System Design", level: 95 },
      { name: "Career Mentoring", level: 94 },
      { name: "Technical Communication", level: 97 }
    ],
    techStack: {
      "Languages": ["Python", "JavaScript", "Java", "C++", "TypeScript", "Go"],
      "Teaching Platforms": ["LeetCode", "HackerRank", "Udemy", "Coursera", "YouTube", "Zoom"],
      "Tools & Frameworks": ["VS Code", "Jupyter Notebook", "Git/GitHub", "Docker", "React", "Django"]
    },
    certifications: [
      { name: "Google Certified Professional Cloud Developer", issuer: "Google", year: "2023" },
      { name: "AWS Certified Developer — Associate", issuer: "Amazon Web Services", year: "2022" },
      { name: "Udemy Verified Instructor (Top 1%)", issuer: "Udemy", year: "2021" }
    ],
    projects: [
      {
        name: "CodeMaster Pro — Full-Stack Bootcamp Curriculum",
        tech: "Python, JavaScript, React, Node.js, PostgreSQL | 15,000+ Students Enrolled",
        client: "Lead Instructor & Curriculum Designer — Built for Scaler Academy",
        desc: "Comprehensive 6-month bootcamp covering DSA, system design, and full-stack development. 92% of graduates placed at MAANG companies with average 180% salary increase. Created 400+ coding exercises and 50+ projects."
      },
      {
        name: "AlgoViz — Interactive Algorithm Visualization Platform",
        tech: "React, TypeScript, D3.js, Canvas API, Firebase | 850K+ Monthly Users",
        client: "Sole Developer & Educator — Self-Published on Udemy",
        desc: "Interactive platform for learning data structures and algorithms through visual animations. Features step-by-step code execution, complexity analysis, and 200+ curated problems. Rated 4.9/5 on Udemy with 25K+ reviews."
      },
      {
        name: "TechPrep — AI-Powered Interview Coaching Platform",
        tech: "Next.js, GPT-4, WebRTC, Redis, PostgreSQL | 4,200+ Offers Generated",
        client: "Co-Founder & Lead Developer — Built for InterviewBit",
        desc: "AI-powered mock interview platform with real-time feedback, behavioral analysis, and personalized study plans. Conducts 5K+ mock interviews monthly with 89% user success rate at target companies."
      }
    ],
    experience: [
      {
        role: "Freelance Coding Instructor & Technical Mentor",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Mentor 50+ students monthly in DSA, system design, and full-stack development",
          "Create and sell online courses with 30K+ total enrollments across Udemy and Coursera",
          "Conduct live coding workshops for corporate teams at companies like Infosys and Wipro",
          "Provide 1-on-1 career coaching helping 200+ engineers transition to FAANG companies"
        ]
      },
      {
        role: "Senior Technical Instructor",
        company: "Scaler Academy — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Designed and delivered curriculum for 3,000+ students across 6 cohorts",
          "Achieved 92% placement rate at top tech companies with average ₹28 LPA packages",
          "Created 400+ coding exercises and 50+ hands-on projects with automated grading",
          "Mentored 15 teaching assistants and established quality standards for instruction"
        ]
      }
    ]
  },

  // ─── ADDITIONAL FIVERR PRO CATEGORIES ───

  {
    id: "data-science",
    name: "Data Science & Analytics",
    group: "Programming & Tech",
    icon: "📊",
    salary: "$80–$200/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #0a1a2a, #102040)",
    skills: [
      { name: "Python / Pandas / NumPy", level: 98 },
      { name: "Machine Learning / Deep Learning", level: 97 },
      { name: "SQL / Data Modeling", level: 96 },
      { name: "Tableau / Power BI", level: 95 },
      { name: "NLP / Computer Vision", level: 93 },
      { name: "Statistical Analysis", level: 96 }
    ],
    techStack: {
      "ML & AI": ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "OpenCV", "SpaCy"],
      "Data Engineering": ["Apache Spark", "Airflow", "dbt", "Snowflake", "BigQuery", "Kafka"],
      "Visualization": ["Tableau", "Power BI", "Plotly", "D3.js", "Matplotlib", "Streamlit"]
    },
    certifications: [
      { name: "Google Professional Machine Learning Engineer", issuer: "Google", year: "2023" },
      { name: "AWS Certified Machine Learning — Specialty", issuer: "Amazon Web Services", year: "2022" },
      { name: "TensorFlow Developer Certificate", issuer: "Google", year: "2021" }
    ],
    projects: [
      {
        name: "PredictEngine — Real-Time Demand Forecasting Platform",
        tech: "Python, TensorFlow, Apache Spark, Airflow, Snowflake | $45M+ Revenue Impact",
        client: "Lead Data Scientist — Built for BigBasket",
        desc: "ML-powered demand forecasting system processing 50M+ SKU data points daily. Reduced inventory waste by 32% and stockouts by 45%. Deployed across 400+ dark stores with real-time inference (<50ms latency)."
      },
      {
        name: "SentimentPulse — Brand Intelligence & Social Listening",
        tech: "Python, BERT, SpaCy, Kafka, Elasticsearch | 10M+ Posts Analyzed/Day",
        client: "Senior ML Engineer — Built for Sprinklr",
        desc: "NLP pipeline analyzing 10M+ social media posts daily across 12 languages. Provides real-time brand sentiment, competitor analysis, and crisis detection. Achieved 94.7% sentiment accuracy."
      },
      {
        name: "FraudShield — Real-Time Transaction Fraud Detection",
        tech: "Python, XGBoost, Kafka, Redis, PostgreSQL | ₹500 Cr+ Fraud Prevented",
        client: "Data Science Lead — Built for PhonePe",
        desc: "Real-time fraud detection system processing 25M+ transactions daily. Ensemble model combining XGBoost, LSTM, and graph neural networks achieving 99.4% precision with <200ms inference time."
      }
    ],
    experience: [
      {
        role: "Freelance Data Scientist & ML Engineer",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Build production ML systems for 10+ enterprise clients across fintech, retail, and healthcare",
          "Design end-to-end data pipelines processing 100M+ records daily on cloud infrastructure",
          "Develop custom NLP and computer vision solutions with >95% accuracy benchmarks",
          "Provide data strategy consulting for Series A–C startups and Fortune 500 companies"
        ]
      },
      {
        role: "Senior Data Scientist",
        company: "Flipkart (Walmart Inc.) — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led personalization ML team driving 15% increase in average order value",
          "Built real-time recommendation engine serving 200M+ users with <100ms latency",
          "Designed A/B testing framework used by 20+ product teams for data-driven decisions",
          "Mentored 5 junior data scientists and established model governance standards"
        ]
      }
    ]
  },

  {
    id: "ai-development",
    name: "AI & Machine Learning",
    group: "Programming & Tech",
    icon: "🤖",
    salary: "$100–$300/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #0f0a2a, #1a1040)",
    skills: [
      { name: "LLM / Generative AI", level: 98 },
      { name: "PyTorch / TensorFlow", level: 97 },
      { name: "RAG / Vector Databases", level: 96 },
      { name: "MLOps / Model Deployment", level: 95 },
      { name: "Computer Vision", level: 93 },
      { name: "AI Architecture", level: 97 }
    ],
    techStack: {
      "AI/ML": ["GPT-4/Claude API", "LangChain", "Hugging Face", "PyTorch", "TensorFlow", "ONNX"],
      "Infrastructure": ["Pinecone", "Weaviate", "MLflow", "Kubeflow", "SageMaker", "Vertex AI"],
      "Data & Processing": ["Apache Spark", "Ray", "DVC", "Weights & Biases", "Label Studio", "Unstructured"]
    },
    certifications: [
      { name: "Google Professional Machine Learning Engineer", issuer: "Google", year: "2023" },
      { name: "AWS Certified Machine Learning — Specialty", issuer: "Amazon Web Services", year: "2023" },
      { name: "DeepLearning.AI Deep Learning Specialization", issuer: "DeepLearning.AI (Coursera)", year: "2022" }
    ],
    projects: [
      {
        name: "DocuMind — Enterprise RAG Knowledge Assistant",
        tech: "LangChain, GPT-4, Pinecone, Next.js, FastAPI | 25K+ Enterprise Users",
        client: "AI Architect — Built for Freshworks",
        desc: "Enterprise-grade RAG system ingesting 5M+ documents across PDF, DOCX, and Confluence. Features hybrid search (BM25 + vector), citation tracking, and role-based access. Achieved 96.8% answer accuracy."
      },
      {
        name: "VisionForge — Custom Computer Vision Pipeline Builder",
        tech: "PyTorch, ONNX, FastAPI, Docker, Kubernetes | 500+ Models Deployed",
        client: "Lead ML Engineer — Built for Qualcomm AI Research",
        desc: "End-to-end CV pipeline from data labeling to edge deployment. Supports object detection, segmentation, and OCR with automated model optimization for mobile (TFLite) and edge (ONNX) inference."
      },
      {
        name: "ConvoBot — Multi-Turn Conversational AI Platform",
        tech: "Fine-tuned LLaMA, RLHF, Rasa, Redis, PostgreSQL | 2M+ Conversations/Month",
        client: "Senior AI Developer — Built for Haptik (Reliance Jio)",
        desc: "Conversational AI platform with fine-tuned LLMs, sentiment-aware routing, and human-in-the-loop escalation. Handles 2M+ conversations monthly across 8 languages with 91% resolution rate."
      }
    ],
    experience: [
      {
        role: "Freelance AI/ML Engineer & Consultant",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Build custom LLM applications and RAG systems for enterprise clients",
          "Fine-tune foundation models (LLaMA, Mistral) for domain-specific use cases",
          "Design MLOps pipelines handling model training, versioning, and deployment at scale",
          "Provide AI strategy consulting for C-suite executives at Fortune 500 companies"
        ]
      },
      {
        role: "Senior AI Engineer",
        company: "Google Research India — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led development of multilingual NLP models serving 500M+ Indian language users",
          "Built efficient inference pipelines reducing LLM serving costs by 65%",
          "Published 3 papers at top-tier ML conferences (NeurIPS, ICML, EMNLP)",
          "Collaborated with Google DeepMind on responsible AI evaluation frameworks"
        ]
      }
    ]
  },

  {
    id: "blockchain-dev",
    name: "Blockchain & Web3",
    group: "Programming & Tech",
    icon: "⛓️",
    salary: "$100–$250/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #1a1000, #2a1a05)",
    skills: [
      { name: "Solidity / Smart Contracts", level: 98 },
      { name: "Ethereum / EVM Chains", level: 97 },
      { name: "DeFi Protocol Design", level: 96 },
      { name: "Smart Contract Auditing", level: 95 },
      { name: "Rust / Solana", level: 93 },
      { name: "Tokenomics Design", level: 94 }
    ],
    techStack: {
      "Smart Contracts": ["Solidity", "Rust", "Vyper", "Hardhat", "Foundry", "OpenZeppelin"],
      "Blockchain": ["Ethereum", "Solana", "Polygon", "Arbitrum", "Base", "Cosmos"],
      "Web3 Frontend": ["ethers.js", "wagmi", "RainbowKit", "The Graph", "IPFS", "Ceramic"]
    },
    certifications: [
      { name: "Certified Blockchain Developer — Ethereum", issuer: "Blockchain Council", year: "2023" },
      { name: "ConsenSys Certified Ethereum Developer", issuer: "ConsenSys Academy", year: "2022" },
      { name: "Solana Foundation Developer Bootcamp", issuer: "Solana Foundation", year: "2022" }
    ],
    projects: [
      {
        name: "YieldVault — DeFi Yield Optimization Protocol",
        tech: "Solidity, Hardhat, The Graph, React, ethers.js | $180M+ TVL",
        client: "Lead Smart Contract Developer — Built for Polygon DeFi",
        desc: "Auto-compounding yield aggregator supporting 50+ DeFi strategies across Ethereum, Polygon, and Arbitrum. Features flash loan protection, time-locked governance, and gas-optimized vault contracts."
      },
      {
        name: "NFT Marketplace — Cross-Chain Digital Art Platform",
        tech: "Solidity, Rust, IPFS, Next.js, Wormhole | $25M+ Trading Volume",
        client: "Blockchain Architect — Built for WazirX NFT",
        desc: "Cross-chain NFT marketplace supporting Ethereum, Polygon, and Solana. Features lazy minting, royalty enforcement (EIP-2981), and on-chain provenance tracking with 50K+ listed artworks."
      },
      {
        name: "GovDAO — On-Chain Governance & Treasury Management",
        tech: "Solidity, Safe, Snapshot, Next.js, The Graph | $45M+ Treasury Managed",
        client: "Senior Solidity Developer — Built for Instadapp",
        desc: "Decentralized governance platform with delegated voting, proposal lifecycle management, and multi-sig treasury. Manages $45M+ in protocol treasury with time-locked execution and veto mechanisms."
      }
    ],
    experience: [
      {
        role: "Freelance Blockchain Developer & Smart Contract Auditor",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Develop and audit smart contracts for DeFi protocols with $500M+ combined TVL",
          "Perform security audits identifying critical vulnerabilities before mainnet deployment",
          "Design tokenomics and governance mechanisms for Web3 startups",
          "Build cross-chain bridges and interoperability solutions for enterprise clients"
        ]
      },
      {
        role: "Senior Blockchain Developer",
        company: "Polygon Labs — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Core team member building Polygon zkEVM — the first EVM-equivalent ZK rollup",
          "Developed gas-optimized smart contracts saving users $2M+ in transaction fees",
          "Led smart contract audit program reviewing 100+ protocols before mainnet deployment",
          "Contributed to EIP proposals improving Ethereum's ERC token standards"
        ]
      }
    ]
  },

  {
    id: "devops-cloud",
    name: "DevOps & Cloud Engineering",
    group: "Programming & Tech",
    icon: "☁️",
    salary: "$90–$220/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #0a1520, #0f2530)",
    skills: [
      { name: "AWS / GCP / Azure", level: 98 },
      { name: "Kubernetes / Docker", level: 97 },
      { name: "Terraform / IaC", level: 96 },
      { name: "CI/CD Pipelines", level: 95 },
      { name: "Monitoring & SRE", level: 94 },
      { name: "Linux / Networking", level: 96 }
    ],
    techStack: {
      "Cloud Platforms": ["AWS", "Google Cloud", "Azure", "DigitalOcean", "Cloudflare", "Vercel"],
      "Infrastructure": ["Kubernetes", "Docker", "Terraform", "Ansible", "Pulumi", "Helm"],
      "CI/CD & Monitoring": ["GitHub Actions", "Jenkins", "ArgoCD", "Prometheus", "Grafana", "Datadog"]
    },
    certifications: [
      { name: "AWS Solutions Architect — Professional", issuer: "Amazon Web Services", year: "2023" },
      { name: "Certified Kubernetes Administrator (CKA)", issuer: "CNCF", year: "2023" },
      { name: "Google Cloud Professional Cloud Architect", issuer: "Google", year: "2022" },
      { name: "HashiCorp Certified: Terraform Associate", issuer: "HashiCorp", year: "2021" }
    ],
    projects: [
      {
        name: "CloudScale — Multi-Cloud Infrastructure Platform",
        tech: "Terraform, Kubernetes, AWS/GCP, Prometheus, ArgoCD | 500+ Microservices",
        client: "Lead DevOps Engineer — Built for Ola Cabs",
        desc: "Multi-cloud Kubernetes platform running 500+ microservices across AWS and GCP. Features auto-scaling handling 10x traffic spikes, GitOps deployment with ArgoCD, and 99.99% uptime SLA."
      },
      {
        name: "PipelineForge — Enterprise CI/CD Automation Platform",
        tech: "GitHub Actions, ArgoCD, Terraform, Docker, Vault | 200+ Pipelines/Day",
        client: "Senior DevOps Engineer — Built for Razorpay",
        desc: "Unified CI/CD platform managing 200+ daily deployments across 80+ microservices. Reduced deployment time from 45 minutes to 3 minutes with zero-downtime blue-green deployments."
      },
      {
        name: "ObserveAll — Full-Stack Observability Platform",
        tech: "Prometheus, Grafana, ELK, OpenTelemetry, PagerDuty | Monitoring 1000+ Services",
        client: "SRE Lead — Built for Paytm",
        desc: "Comprehensive observability platform with metrics, logs, and traces for 1000+ services. Custom alerting engine with ML-based anomaly detection reducing false alerts by 85% and MTTR by 60%."
      }
    ],
    experience: [
      {
        role: "Freelance DevOps & Cloud Architect",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Design and implement cloud infrastructure for 15+ enterprise clients on AWS and GCP",
          "Build Kubernetes platforms supporting 100+ microservices with 99.99% uptime",
          "Automate CI/CD pipelines reducing deployment time by 90% for engineering teams",
          "Provide cloud cost optimization saving clients $500K+ annually in infrastructure spend"
        ]
      },
      {
        role: "Senior DevOps Engineer",
        company: "Amazon India — Hyderabad, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Managed AWS infrastructure handling 50M+ daily requests for Amazon India marketplace",
          "Built self-healing Kubernetes clusters with automated scaling and recovery",
          "Reduced cloud infrastructure costs by 35% through right-sizing and spot instances",
          "Led SRE practices achieving 99.995% availability across critical payment services"
        ]
      }
    ]
  },

  {
    id: "shopify-dev",
    name: "Shopify & E-Commerce",
    group: "Programming & Tech",
    icon: "🛒",
    salary: "$60–$150/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #0a2010, #0f3018)",
    skills: [
      { name: "Shopify / Liquid", level: 98 },
      { name: "Shopify Plus / Scripts", level: 97 },
      { name: "Custom Theme Dev", level: 96 },
      { name: "Shopify Apps (Node.js)", level: 95 },
      { name: "Headless Commerce", level: 94 },
      { name: "Conversion Optimization", level: 96 }
    ],
    techStack: {
      "Shopify": ["Liquid", "Shopify CLI", "Polaris", "Hydrogen", "Oxygen", "Shopify Functions"],
      "Frontend": ["React", "Next.js", "Tailwind CSS", "Alpine.js", "GSAP", "TypeScript"],
      "Integrations": ["Klaviyo", "ReCharge", "Yotpo", "ShipStation", "Zapier", "Google Analytics 4"]
    },
    certifications: [
      { name: "Shopify App Development Certification", issuer: "Shopify Partners", year: "2023" },
      { name: "Shopify Theme Development Certification", issuer: "Shopify Partners", year: "2023" },
      { name: "Google Analytics 4 Certification", issuer: "Google", year: "2022" }
    ],
    projects: [
      {
        name: "LuxeBeauty — Premium D2C Shopify Plus Store",
        tech: "Shopify Plus, Liquid, React, Klaviyo, ReCharge | $8.5M+ Annual Revenue",
        client: "Lead Shopify Developer — Built for Mamaearth",
        desc: "Custom Shopify Plus store with subscription management, personalized product quizzes, and AR try-on. Achieved 4.2% conversion rate (2x industry average) with 85% repeat purchase rate."
      },
      {
        name: "FashionHub — Multi-Store Headless Commerce",
        tech: "Hydrogen, Oxygen, Storefront API, Next.js, Algolia | 3 Brands, $15M+ GMV",
        client: "Shopify Architect — Built for Myntra Brands",
        desc: "Headless commerce architecture powering 3 fashion brands from a single Shopify Plus backend. Sub-100ms page loads, personalized recommendations, and unified inventory across 500+ SKUs."
      },
      {
        name: "ShopAutomate — Custom Shopify App Suite",
        tech: "Node.js, Polaris, GraphQL Admin API, Shopify Functions | 2,500+ Merchants",
        client: "Sole Developer — Published on Shopify App Store",
        desc: "Suite of 4 Shopify apps for automated inventory sync, dynamic pricing, bulk order management, and shipping optimization. Used by 2,500+ merchants generating $50M+ in processed orders."
      }
    ],
    experience: [
      {
        role: "Freelance Shopify Developer & E-Commerce Consultant",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Build custom Shopify stores and apps for 25+ D2C brands and enterprises",
          "Develop headless commerce solutions using Hydrogen and Storefront API",
          "Optimize stores for conversion, achieving average 3.5% conversion rates",
          "Provide Shopify Plus migration consulting for brands scaling past $1M revenue"
        ]
      },
      {
        role: "Senior Shopify Developer",
        company: "Shopify (Remote, India Office) — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Built Shopify Functions and Extensions adopted by 10K+ merchants globally",
          "Led development of custom checkout extensibility features for Shopify Plus",
          "Created internal tooling reducing theme development time by 50%",
          "Mentored 5 junior developers and conducted 100+ code reviews"
        ]
      }
    ]
  },

  {
    id: "wordpress-dev",
    name: "WordPress Development",
    group: "Programming & Tech",
    icon: "📝",
    salary: "$50–$120/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #0a1028, #152040)",
    skills: [
      { name: "WordPress / PHP", level: 98 },
      { name: "Custom Theme Dev", level: 97 },
      { name: "WooCommerce", level: 96 },
      { name: "Plugin Development", level: 95 },
      { name: "Performance & SEO", level: 94 },
      { name: "Headless WordPress", level: 93 }
    ],
    techStack: {
      "WordPress": ["PHP 8", "ACF Pro", "Elementor", "WooCommerce", "Gutenberg Blocks", "WP CLI"],
      "Frontend": ["JavaScript", "React", "GSAP", "Tailwind CSS", "REST API", "GraphQL (WPGraphQL)"],
      "Infrastructure": ["WP Engine", "Cloudflare", "Redis", "Varnish", "Docker", "GitHub Actions"]
    },
    certifications: [
      { name: "WordPress Certified Developer", issuer: "WordPress.org", year: "2023" },
      { name: "Google Search Central SEO Certification", issuer: "Google", year: "2022" },
      { name: "WooCommerce Expert Certification", issuer: "Automattic", year: "2021" }
    ],
    projects: [
      {
        name: "NewsForge — High-Traffic Media Publishing Platform",
        tech: "WordPress, PHP 8, Redis, Cloudflare, ElasticPress | 25M+ Monthly Pageviews",
        client: "Lead WordPress Developer — Built for The Print",
        desc: "Custom WordPress theme and plugins for India's fastest-growing news platform. Handles 25M+ monthly pageviews with sub-2s load times. Features custom AMP pages, real-time breaking news ticker, and automated SEO."
      },
      {
        name: "EduLearn — LMS & Course Marketplace",
        tech: "WordPress, LearnDash, WooCommerce, BuddyPress, Zoom API | 50K+ Students",
        client: "Senior WordPress Developer — Built for Unacademy",
        desc: "Learning management system with live classes, course marketplace, and gamification. Integrates Zoom for live sessions, Razorpay for payments, and custom analytics dashboard for instructors."
      },
      {
        name: "StorePro — WooCommerce Multi-Vendor Marketplace",
        tech: "WooCommerce, Dokan, PHP, React, Stripe Connect | ₹20 Cr+ GMV",
        client: "WordPress Architect — Built for Limeroad",
        desc: "Multi-vendor marketplace with 5,000+ sellers, automated commission system, and vendor dashboards. Custom checkout with 15+ payment methods and real-time inventory sync across vendors."
      }
    ],
    experience: [
      {
        role: "Freelance WordPress Developer & Consultant",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Build custom WordPress themes and plugins for 30+ enterprise clients",
          "Develop WooCommerce stores generating $5M+ annual revenue for D2C brands",
          "Optimize WordPress performance achieving 90+ PageSpeed scores consistently",
          "Provide WordPress security hardening and maintenance for mission-critical sites"
        ]
      },
      {
        role: "Senior WordPress Developer",
        company: "WP Engine — Remote, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led development of enterprise WordPress solutions for Fortune 500 clients",
          "Built custom Gutenberg blocks and Full Site Editing themes for enterprise use",
          "Optimized hosting infrastructure handling 100M+ monthly requests",
          "Contributed to WordPress core and published 5 plugins with 50K+ combined installs"
        ]
      }
    ]
  },

  // ─── DESIGN & CREATIVE ───

  {
    id: "logo-design",
    name: "Logo & Brand Identity",
    group: "Design & Creative",
    icon: "✨",
    salary: "$60–$150/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #2a0f1a, #1a0f29)",
    skills: [
      { name: "Logo Design", level: 98 },
      { name: "Brand Strategy", level: 97 },
      { name: "Typography", level: 96 },
      { name: "Adobe Illustrator", level: 98 },
      { name: "Visual Identity Systems", level: 95 },
      { name: "Brand Guidelines", level: 96 }
    ],
    techStack: {
      "Design": ["Adobe Illustrator", "Figma", "Adobe Photoshop", "Affinity Designer", "Procreate", "Cinema 4D"],
      "Branding": ["Brand Strategy", "Typography Systems", "Color Theory", "Style Guides", "Asset Libraries", "Mockups"],
      "Print & Digital": ["Adobe InDesign", "Canva Pro", "Blender", "After Effects", "Pantone", "Print Production"]
    },
    certifications: [
      { name: "Adobe Certified Expert — Illustrator", issuer: "Adobe", year: "2023" },
      { name: "Brand Strategy Masterclass Certificate", issuer: "The Futur", year: "2022" },
      { name: "Typography Specialization", issuer: "CalArts (Coursera)", year: "2021" }
    ],
    projects: [
      {
        name: "TechNova — Complete Brand Identity System",
        tech: "Illustrator, Figma, After Effects, Cinema 4D | 50+ Brand Assets",
        client: "Lead Brand Designer — Built for Razorpay Rebrand",
        desc: "Complete brand overhaul including logo, typography system, color palette, iconography, and 100-page brand guidelines. Delivered 50+ assets for digital, print, and motion applications."
      },
      {
        name: "AuraHealth — Healthcare Brand Identity",
        tech: "Illustrator, Figma, InDesign, Photoshop | Used Across 200+ Clinics",
        client: "Brand Designer — Built for Practo Health",
        desc: "Comprehensive healthcare brand system with approachable visual language. Logo, environmental signage, digital assets, and patient-facing materials deployed across 200+ clinic locations."
      },
      {
        name: "CraftBrew — Artisanal F&B Brand Collection",
        tech: "Illustrator, Procreate, Photoshop, InDesign | 12 Sub-Brands",
        client: "Creative Director — Built for Bira 91",
        desc: "Full brand ecosystem for craft beverage company including 12 sub-brand identities, packaging design, and retail experience. Won Kyoorius Design Award 2023 for brand identity excellence."
      }
    ],
    experience: [
      {
        role: "Freelance Brand Designer & Visual Strategist",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Create brand identities for 30+ clients across tech, healthcare, and consumer brands",
          "Develop comprehensive brand guidelines with typography, color, and asset systems",
          "Specialize in startup-to-scale brand evolution for Series A–C companies",
          "Win 5+ design awards including Kyoorius and Communication Arts recognition"
        ]
      },
      {
        role: "Senior Brand Designer",
        company: "Pentagram — Mumbai, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led brand identity projects for 15+ Fortune 500 and high-growth startup clients",
          "Developed visual identity systems adopted across 1000+ touchpoints",
          "Mentored 6 junior designers and established brand review process standards",
          "Won D&AD Yellow Pencil for brand identity work (2023)"
        ]
      }
    ]
  },

  {
    id: "video-editing",
    name: "Video Editing & Production",
    group: "Design & Creative",
    icon: "🎬",
    salary: "$50–$150/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #1a0505, #2a0f12)",
    skills: [
      { name: "Premiere Pro / DaVinci", level: 98 },
      { name: "After Effects / Motion", level: 97 },
      { name: "Color Grading", level: 96 },
      { name: "Sound Design", level: 94 },
      { name: "Storytelling & Narrative", level: 96 },
      { name: "4K/8K Workflow", level: 95 }
    ],
    techStack: {
      "Editing": ["Premiere Pro", "DaVinci Resolve", "Final Cut Pro", "Avid Media Composer", "CapCut Pro", "Frame.io"],
      "Motion & VFX": ["After Effects", "Nuke", "Fusion", "Cinema 4D", "Blender", "Houdini"],
      "Audio & Color": ["Audition", "Logic Pro", "DaVinci Color", "FilmConvert", "iZotope RX", "Dolby Atmos"]
    },
    certifications: [
      { name: "Adobe Certified Expert — Premiere Pro", issuer: "Adobe", year: "2023" },
      { name: "DaVinci Resolve Certified Colorist", issuer: "Blackmagic Design", year: "2022" },
      { name: "Avid Media Composer Professional", issuer: "Avid", year: "2021" }
    ],
    projects: [
      {
        name: "BrandFilms — Corporate Documentary Series",
        tech: "Premiere Pro, DaVinci Resolve, After Effects, Audition | 50M+ Views",
        client: "Lead Editor — Produced for Google India",
        desc: "12-episode documentary series showcasing Google's impact in India. Shot in 4K across 8 cities. Complex multi-cam editing with motion graphics, color grading, and 5.1 surround sound mix."
      },
      {
        name: "ViralFactory — Social Media Content Engine",
        tech: "Premiere Pro, After Effects, CapCut, Canva, Frame.io | 500M+ Total Views",
        client: "Senior Video Editor — Built for T-Series Digital",
        desc: "Content production pipeline delivering 200+ videos monthly across YouTube, Instagram, and TikTok. Developed templated workflows reducing production time by 70% while maintaining premium quality."
      },
      {
        name: "CinematicPro — Wedding & Event Film Studio",
        tech: "DaVinci Resolve, After Effects, Cinema 4D, Logic Pro | 300+ Films Delivered",
        client: "Founder & Lead Editor — Independent Studio",
        desc: "Premium cinematic wedding and event films with drone footage, time-lapses, and custom soundtracks. Shot in 6K RAW with Hollywood-grade color grading. Average client satisfaction: 4.98/5."
      }
    ],
    experience: [
      {
        role: "Freelance Video Editor & Post-Production Specialist",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Edit and produce content for 20+ brands including corporate, commercial, and social media",
          "Deliver 50+ video projects monthly across documentary, commercial, and social formats",
          "Specialize in color grading, VFX compositing, and motion graphics integration",
          "Manage remote post-production teams of 3-8 editors for large-scale projects"
        ]
      },
      {
        role: "Senior Video Editor",
        company: "Yash Raj Films — Mumbai, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Edited promotional content and behind-the-scenes features for 8 major film releases",
          "Developed color grading LUTs adopted as studio standard across 15+ productions",
          "Built automated transcoding and delivery pipeline saving 20 hours weekly",
          "Trained 10 junior editors on advanced editing and color grading techniques"
        ]
      }
    ]
  },

  {
    id: "illustration",
    name: "Illustration & Digital Art",
    group: "Design & Creative",
    icon: "🖌️",
    salary: "$50–$130/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #1a0f20, #0f1a25)",
    skills: [
      { name: "Digital Illustration", level: 98 },
      { name: "Character Design", level: 97 },
      { name: "Concept Art", level: 96 },
      { name: "Procreate / Photoshop", level: 98 },
      { name: "Vector Illustration", level: 95 },
      { name: "Editorial Illustration", level: 96 }
    ],
    techStack: {
      "Digital Art": ["Procreate", "Adobe Photoshop", "Clip Studio Paint", "Krita", "Corel Painter", "MediBang"],
      "Vector & 3D": ["Adobe Illustrator", "Affinity Designer", "Blender", "ZBrush", "Cinema 4D", "Figma"],
      "Animation": ["After Effects", "Spine2D", "Rive", "Lottie", "TVPaint", "Toon Boom"]
    },
    certifications: [
      { name: "Adobe Certified Expert — Photoshop", issuer: "Adobe", year: "2023" },
      { name: "Character Design Masterclass Certificate", issuer: "Schoolism", year: "2022" },
      { name: "Concept Art for Games & Film", issuer: "CGMA", year: "2021" }
    ],
    projects: [
      {
        name: "MythicTales — Children's Book Illustration Series",
        tech: "Procreate, Photoshop, InDesign | 12-Book Series, 500K+ Copies Sold",
        client: "Lead Illustrator — Published by Penguin Random House India",
        desc: "12-book mythology series with 200+ full-color illustrations. Created character designs, environment art, and cover illustrations. Series became Amazon India #1 bestseller in children's books."
      },
      {
        name: "GameForge — AAA Game Concept Art Pipeline",
        tech: "Photoshop, ZBrush, Blender, Substance Painter | 500+ Assets Created",
        client: "Senior Concept Artist — Created for Supercell",
        desc: "Complete visual development pipeline for mobile game with 100+ character designs, 80+ environment concepts, and 300+ prop/weapon designs. Art style guide adopted by team of 40 artists."
      },
      {
        name: "BrandVerse — Editorial Illustration Portfolio",
        tech: "Procreate, Illustrator, After Effects | Published in 50+ Publications",
        client: "Freelance Editorial Illustrator — Published in Forbes India, Mint, The Ken",
        desc: "Editorial illustrations for India's leading business publications covering tech, finance, and culture. Created 200+ illustrations with unique mixed-media style combining digital painting and collage."
      }
    ],
    experience: [
      {
        role: "Freelance Illustrator & Concept Artist",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Create illustrations for 25+ clients across publishing, gaming, and editorial verticals",
          "Develop character and environment concepts for mobile and console games",
          "Produce editorial illustrations for Forbes India, Mint, and The Economic Times",
          "License art for merchandise generating $100K+ in passive income annually"
        ]
      },
      {
        role: "Senior Illustrator & Visual Designer",
        company: "Amar Chitra Katha — Mumbai, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led illustration team of 8 artists creating content for iconic Indian comic series",
          "Developed new digital art pipeline increasing production speed by 40%",
          "Created 300+ character designs and 150+ cover illustrations",
          "Won Society of Illustrators Award for editorial illustration (2023)"
        ]
      }
    ]
  },

  // ─── DIGITAL MARKETING ───

  {
    id: "seo",
    name: "SEO & Digital Marketing",
    group: "Digital Marketing",
    icon: "📈",
    salary: "$60–$150/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #0a2010, #102a18)",
    skills: [
      { name: "Technical SEO", level: 98 },
      { name: "Content Strategy", level: 97 },
      { name: "Google Analytics / GA4", level: 96 },
      { name: "PPC / Google Ads", level: 95 },
      { name: "Link Building", level: 94 },
      { name: "Conversion Optimization", level: 96 }
    ],
    techStack: {
      "SEO Tools": ["Ahrefs", "SEMrush", "Screaming Frog", "Surfer SEO", "Google Search Console", "Schema.org"],
      "Analytics": ["Google Analytics 4", "Google Tag Manager", "Hotjar", "Mixpanel", "Looker Studio", "BigQuery"],
      "Marketing": ["Google Ads", "Meta Business Suite", "Mailchimp", "HubSpot", "Zapier", "WordPress SEO"]
    },
    certifications: [
      { name: "Google Analytics 4 Certification", issuer: "Google", year: "2023" },
      { name: "HubSpot Inbound Marketing Certification", issuer: "HubSpot", year: "2023" },
      { name: "Google Ads Search Certification", issuer: "Google", year: "2022" },
      { name: "SEMrush SEO Toolkit Certification", issuer: "SEMrush", year: "2022" }
    ],
    projects: [
      {
        name: "TrafficBoost — Enterprise SEO Transformation",
        tech: "Ahrefs, Screaming Frog, GA4, Schema.org, Surfer SEO | 380% Traffic Growth",
        client: "SEO Strategist — Executed for Nykaa",
        desc: "Complete technical SEO overhaul for India's largest beauty e-commerce platform. Implemented structured data, Core Web Vitals optimization, and content hub strategy resulting in 380% organic traffic growth in 12 months."
      },
      {
        name: "LeadGen Pro — B2B SaaS Growth Engine",
        tech: "Google Ads, LinkedIn Ads, HubSpot, GA4, Zapier | $8M+ Pipeline Generated",
        client: "Growth Marketing Lead — Built for Freshworks",
        desc: "Full-funnel B2B growth strategy combining SEO, PPC, and content marketing. Generated $8M+ qualified pipeline with 45% reduction in customer acquisition cost across 15 global markets."
      },
      {
        name: "LocalDominate — Multi-Location Local SEO System",
        tech: "Google Business Profile, BrightLocal, Schema.org, GA4 | 500+ Locations",
        client: "SEO Director — Implemented for Apollo Hospitals",
        desc: "Local SEO strategy for 500+ hospital and clinic locations across India. Achieved top-3 Map Pack rankings for 85% of target keywords with 200% increase in appointment bookings from organic search."
      }
    ],
    experience: [
      {
        role: "Freelance SEO Consultant & Growth Strategist",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Drive organic growth for 20+ enterprise clients across e-commerce, SaaS, and healthcare",
          "Manage $500K+ monthly ad budgets across Google Ads, Meta, and LinkedIn",
          "Conduct technical SEO audits and implement strategies driving 200%+ traffic growth",
          "Provide fractional CMO services for growth-stage startups"
        ]
      },
      {
        role: "Head of SEO & Growth",
        company: "Urban Company — Gurugram, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Grew organic traffic from 2M to 8M monthly sessions across 50+ service categories",
          "Built SEO team of 8 specialists managing strategy across 6 international markets",
          "Reduced customer acquisition cost by 55% through organic channel optimization",
          "Implemented programmatic SEO generating 100K+ landing pages at scale"
        ]
      }
    ]
  },

  {
    id: "social-media",
    name: "Social Media Marketing",
    group: "Digital Marketing",
    icon: "📱",
    salary: "$50–$120/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #1a0520, #250f30)",
    skills: [
      { name: "Content Strategy", level: 98 },
      { name: "Instagram / TikTok", level: 97 },
      { name: "Community Management", level: 96 },
      { name: "Paid Social (Meta/LinkedIn)", level: 95 },
      { name: "Influencer Marketing", level: 94 },
      { name: "Analytics & Reporting", level: 96 }
    ],
    techStack: {
      "Platforms": ["Instagram", "TikTok", "LinkedIn", "YouTube", "Twitter/X", "Pinterest"],
      "Tools": ["Later", "Sprout Social", "Canva Pro", "CapCut", "Hootsuite", "Creator Studio"],
      "Ads & Analytics": ["Meta Business Suite", "TikTok Ads Manager", "LinkedIn Campaign Manager", "Google Analytics", "Sprinklr", "Brandwatch"]
    },
    certifications: [
      { name: "Meta Certified Digital Marketing Associate", issuer: "Meta", year: "2023" },
      { name: "HubSpot Social Media Marketing Certification", issuer: "HubSpot", year: "2023" },
      { name: "Google Digital Marketing & E-Commerce Certificate", issuer: "Google (Coursera)", year: "2022" }
    ],
    projects: [
      {
        name: "ViralGrowth — D2C Brand Social Strategy",
        tech: "Instagram, TikTok, Meta Ads, Sprout Social, Canva | 2.5M+ Followers Gained",
        client: "Social Media Strategist — Executed for boAt Lifestyle",
        desc: "Built social media presence from 500K to 3M followers across Instagram and TikTok. Created viral content strategy with 15 posts exceeding 10M views. Drove 35% of total e-commerce revenue through social channels."
      },
      {
        name: "InfluencerHub — Creator Partnership Platform",
        tech: "HubSpot, Sprinklr, Google Sheets API, Zapier | 500+ Influencer Partnerships",
        client: "Influencer Marketing Lead — Built for Mamaearth",
        desc: "End-to-end influencer marketing program managing 500+ creator relationships across beauty and wellness. Generated 1B+ impressions with 8.5x average ROI on influencer spend."
      },
      {
        name: "CommunityForge — B2B LinkedIn Growth Engine",
        tech: "LinkedIn, Shield Analytics, Notion, Canva, Descript | 150K+ B2B Leads",
        client: "LinkedIn Growth Strategist — Executed for Zoho",
        desc: "LinkedIn thought leadership and lead generation strategy for B2B SaaS. Grew company page from 200K to 800K followers with employee advocacy program generating 150K+ qualified leads annually."
      }
    ],
    experience: [
      {
        role: "Freelance Social Media Strategist & Content Creator",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Manage social media strategy for 15+ brands across D2C, SaaS, and lifestyle verticals",
          "Create and execute content calendars generating 100M+ monthly impressions",
          "Run paid social campaigns with $300K+ monthly budgets across Meta and TikTok",
          "Build influencer partnerships driving measurable revenue and brand awareness"
        ]
      },
      {
        role: "Senior Social Media Manager",
        company: "Dentsu Creative — Mumbai, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led social strategy for 8 major brands including Samsung, Unilever, and Bajaj",
          "Managed team of 12 content creators producing 500+ pieces of content monthly",
          "Achieved 300% average engagement growth across client portfolios",
          "Won Social Samosa Superstars Award for best social media campaign (2023)"
        ]
      }
    ]
  },

  // ─── WRITING & CONTENT ───

  {
    id: "copywriting",
    name: "Copywriting & Content",
    group: "Writing & Translation",
    icon: "✍️",
    salary: "$50–$120/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #1a1510, #2a2015)",
    skills: [
      { name: "Conversion Copywriting", level: 98 },
      { name: "SEO Content Writing", level: 97 },
      { name: "Brand Voice Development", level: 96 },
      { name: "Email Marketing Copy", level: 95 },
      { name: "Technical Writing", level: 94 },
      { name: "Storytelling", level: 97 }
    ],
    techStack: {
      "Writing": ["Google Docs", "Notion", "Grammarly", "Hemingway Editor", "Jasper AI", "Surfer SEO"],
      "Marketing": ["Mailchimp", "ConvertKit", "HubSpot", "WordPress", "Webflow", "Unbounce"],
      "Research": ["Ahrefs", "SEMrush", "BuzzSumo", "Google Trends", "SparkToro", "AnswerThePublic"]
    },
    certifications: [
      { name: "HubSpot Content Marketing Certification", issuer: "HubSpot", year: "2023" },
      { name: "Google UX Writing Professional Certificate", issuer: "Google", year: "2022" },
      { name: "Copyblogger Certified Content Marketer", issuer: "Copyblogger", year: "2021" }
    ],
    projects: [
      {
        name: "ConvertWords — SaaS Landing Page Copy System",
        tech: "Unbounce, Google Optimize, Hotjar, GA4 | 45% Avg Conversion Lift",
        client: "Lead Copywriter — Written for Freshworks Products",
        desc: "Complete copy overhaul for 12 SaaS product landing pages. A/B tested 100+ headline and CTA variations achieving average 45% conversion lift. Developed brand voice guide adopted by 30-person marketing team."
      },
      {
        name: "ContentEngine — SEO Blog Strategy & Execution",
        tech: "WordPress, Surfer SEO, Ahrefs, Notion, GA4 | 500K+ Monthly Organic Visits",
        client: "Content Strategist — Executed for Razorpay Blog",
        desc: "Built content strategy generating 500K+ monthly organic visits from zero. Created 200+ SEO-optimized articles, 50+ pillar pages, and comprehensive content briefs. 85% of articles rank on page 1 for target keywords."
      },
      {
        name: "EmailCraft — Email Marketing Copy Framework",
        tech: "Mailchimp, ConvertKit, Litmus, Google Sheets | $2.5M+ Revenue Attributed",
        client: "Email Marketing Specialist — Written for Myntra",
        desc: "End-to-end email marketing copy for India's largest fashion e-commerce platform. Created 500+ email campaigns including welcome sequences, cart recovery, and seasonal promotions. Achieved 28% average open rate."
      }
    ],
    experience: [
      {
        role: "Freelance Copywriter & Content Strategist",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Write conversion copy for 20+ SaaS and D2C brands driving measurable revenue",
          "Develop content strategies generating 100K+ monthly organic visits",
          "Create email marketing sequences with 25%+ open rates and 5%+ click-through rates",
          "Provide brand voice consulting for startups and enterprise marketing teams"
        ]
      },
      {
        role: "Senior Content Strategist",
        company: "Razorpay — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led content team of 8 writers producing 50+ pieces monthly for fintech audience",
          "Grew organic blog traffic from 50K to 500K monthly sessions in 18 months",
          "Developed product messaging framework adopted across all GTM materials",
          "Created sales enablement content contributing to 25% increase in enterprise deals"
        ]
      }
    ]
  },

  // ─── BUSINESS & CONSULTING ───

  {
    id: "business-consulting",
    name: "Business & Strategy Consulting",
    group: "Business",
    icon: "💼",
    salary: "$80–$250/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #0a1520, #102030)",
    skills: [
      { name: "Business Strategy", level: 98 },
      { name: "Financial Modeling", level: 97 },
      { name: "Market Research", level: 96 },
      { name: "Pitch Deck Design", level: 95 },
      { name: "Operations Consulting", level: 94 },
      { name: "GTM Strategy", level: 96 }
    ],
    techStack: {
      "Strategy": ["McKinsey 7S", "Porter's Five Forces", "Blue Ocean Strategy", "OKR Framework", "SWOT", "BCG Matrix"],
      "Finance": ["Excel / Google Sheets", "Tableau", "QuickBooks", "Stripe Atlas", "Financial Modeling", "DCF Analysis"],
      "Tools": ["Notion", "Miro", "Pitch", "Canva", "Airtable", "Zapier"]
    },
    certifications: [
      { name: "Wharton Business Strategy Certificate", issuer: "Wharton (Coursera)", year: "2023" },
      { name: "McKinsey Forward Program", issuer: "McKinsey & Company", year: "2022" },
      { name: "CFA Level II Candidate", issuer: "CFA Institute", year: "2022" }
    ],
    projects: [
      {
        name: "ScaleUp — Series B Growth Strategy",
        tech: "Financial Modeling, Market Analysis, Pitch Deck, Notion | $25M Series B Raised",
        client: "Strategy Consultant — Advised Delhivery Pre-IPO",
        desc: "Comprehensive growth strategy including market sizing, competitive positioning, and financial projections. Built 5-year financial model and investor pitch deck contributing to $25M Series B raise."
      },
      {
        name: "MarketEntry — International Expansion Framework",
        tech: "Market Research, Financial Analysis, Regulatory Mapping | 6 Countries Launched",
        client: "Business Strategy Lead — Executed for Ola International",
        desc: "Go-to-market strategy for international expansion across 6 countries. Conducted regulatory analysis, competitive mapping, and partnership strategy. Achieved profitability in 4 markets within 18 months."
      },
      {
        name: "OptiOps — Operational Excellence Program",
        tech: "Process Mapping, Six Sigma, Lean, Automation Tools | 40% Cost Reduction",
        client: "Operations Consultant — Delivered for Swiggy",
        desc: "End-to-end operational restructuring reducing delivery costs by 40%. Redesigned warehouse operations, route optimization, and vendor management processes across 500+ cities."
      }
    ],
    experience: [
      {
        role: "Freelance Business & Strategy Consultant",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Advise 12+ startups and enterprises on growth strategy, fundraising, and operations",
          "Build financial models and pitch decks contributing to $50M+ cumulative fundraising",
          "Conduct market research and competitive analysis for international expansion",
          "Provide fractional COO services for growth-stage startups"
        ]
      },
      {
        role: "Senior Strategy Consultant",
        company: "McKinsey & Company — Mumbai, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led strategy engagements for 10+ Fortune 500 and high-growth Indian companies",
          "Developed growth strategies driving $200M+ in incremental revenue for clients",
          "Built operational transformation programs reducing costs by 30-40%",
          "Mentored 8 junior consultants and led recruiting for IIM campus placements"
        ]
      }
    ]
  },

  {
    id: "ux-research",
    name: "UX Research & Strategy",
    group: "Design & Creative",
    icon: "🔬",
    salary: "$70–$160/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #0f1a20, #152530)",
    skills: [
      { name: "User Research", level: 98 },
      { name: "Usability Testing", level: 97 },
      { name: "Information Architecture", level: 96 },
      { name: "Wireframing / Prototyping", level: 95 },
      { name: "Design Thinking", level: 96 },
      { name: "Accessibility (WCAG)", level: 94 }
    ],
    techStack: {
      "Research": ["Maze", "UserTesting", "Lookback", "Optimal Workshop", "Dovetail", "Hotjar"],
      "Design": ["Figma", "Miro", "FigJam", "Whimsical", "Balsamiq", "Axure"],
      "Analytics": ["Mixpanel", "Amplitude", "FullStory", "Google Analytics", "Heap", "Pendo"]
    },
    certifications: [
      { name: "Google UX Design Professional Certificate", issuer: "Google (Coursera)", year: "2023" },
      { name: "Nielsen Norman Group UX Research Certificate", issuer: "NN/g", year: "2022" },
      { name: "Interaction Design Foundation — UX Management", issuer: "IDF", year: "2022" }
    ],
    projects: [
      {
        name: "HealthUX — Patient Experience Redesign",
        tech: "Figma, Maze, UserTesting, Miro, Mixpanel | 1.2M+ Patients Impacted",
        client: "Lead UX Researcher — Redesigned for Apollo 24/7",
        desc: "Complete UX research and redesign of digital health platform. Conducted 200+ user interviews, 50+ usability tests, and card sorting studies. Redesign increased appointment bookings by 55% and reduced support tickets by 40%."
      },
      {
        name: "FinUX — Banking App Accessibility Overhaul",
        tech: "Figma, Axure, JAWS, VoiceOver, Lighthouse | WCAG 2.1 AAA Compliance",
        client: "Senior UX Researcher — Delivered for HDFC Bank",
        desc: "Accessibility-first redesign of mobile banking app serving 50M+ users. Conducted research with 100+ users including people with disabilities. Achieved WCAG 2.1 AAA compliance and RBI digital accessibility standards."
      },
      {
        name: "EduPath — Learning Platform IA Restructure",
        tech: "Optimal Workshop, Miro, Figma, Amplitude, A/B Testing | 68% Task Completion Improvement",
        client: "UX Research Lead — Executed for BYJU'S",
        desc: "Information architecture restructuring based on tree testing and card sorting with 500+ participants. Simplified navigation reducing time-to-content by 45% and improving course completion rates by 68%."
      }
    ],
    experience: [
      {
        role: "Freelance UX Researcher & Design Strategist",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Conduct UX research for 15+ enterprise clients across fintech, health, and education",
          "Lead usability studies with 500+ participants annually across diverse user groups",
          "Create research-driven design strategies improving key metrics by 30-60%",
          "Specialize in accessibility research ensuring WCAG 2.1 compliance"
        ]
      },
      {
        role: "Senior UX Researcher",
        company: "Flipkart (Walmart Inc.) — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led UX research team of 6 researchers supporting 200M+ user product decisions",
          "Established research operations framework reducing study time from 4 weeks to 10 days",
          "Conducted 300+ user sessions across Tier 1, 2, and 3 cities in India",
          "Research insights directly influenced $50M+ in product investment decisions"
        ]
      }
    ]
  },

  {
    id: "motion-graphics",
    name: "Motion Graphics & Animation",
    group: "Design & Creative",
    icon: "🎞️",
    salary: "$60–$150/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #1a1020, #251530)",
    skills: [
      { name: "After Effects", level: 98 },
      { name: "Cinema 4D / Blender", level: 97 },
      { name: "2D Animation", level: 96 },
      { name: "3D Motion Design", level: 95 },
      { name: "UI Animation / Lottie", level: 94 },
      { name: "Explainer Videos", level: 96 }
    ],
    techStack: {
      "Animation": ["After Effects", "Lottie/Bodymovin", "Rive", "Spine2D", "Animate CC", "Toon Boom"],
      "3D & VFX": ["Cinema 4D", "Blender", "Houdini", "Octane Render", "Redshift", "Element 3D"],
      "Design & Audio": ["Illustrator", "Figma", "Premiere Pro", "Audition", "Frame.io", "Storyboarder"]
    },
    certifications: [
      { name: "School of Motion — Animation Bootcamp", issuer: "School of Motion", year: "2023" },
      { name: "Maxon Certified Cinema 4D Instructor", issuer: "Maxon", year: "2022" },
      { name: "Adobe Certified Expert — After Effects", issuer: "Adobe", year: "2021" }
    ],
    projects: [
      {
        name: "BrandMotion — Product Launch Animation Suite",
        tech: "After Effects, Cinema 4D, Octane, Audition | 100M+ Views Across Campaigns",
        client: "Lead Motion Designer — Created for OnePlus India",
        desc: "Complete motion design package for 4 product launches including 3D product animations, social media assets, and retail display content. Hero video achieved 25M+ views on YouTube in first week."
      },
      {
        name: "ExplainIt — SaaS Explainer Video Factory",
        tech: "After Effects, Illustrator, Lottie, Rive | 200+ Videos Produced",
        client: "Motion Design Lead — Produced for Freshworks",
        desc: "Explainer video production system with reusable character rigs, scene templates, and automated rendering. Produced 200+ videos reducing per-video cost by 60% while maintaining premium quality."
      },
      {
        name: "UIMotion — Design System Animation Library",
        tech: "Lottie, Rive, After Effects, Figma, React | Used by 15+ Product Teams",
        client: "UI Animation Specialist — Built for PhonePe Design System",
        desc: "Comprehensive animation library with 500+ Lottie animations for onboarding, transitions, micro-interactions, and loading states. Reduced development time for animated UI by 80%."
      }
    ],
    experience: [
      {
        role: "Freelance Motion Designer & Animator",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Create motion graphics and animations for 20+ brands across tech, entertainment, and D2C",
          "Produce explainer videos, product animations, and social media motion content",
          "Build Lottie animation libraries for design systems used by engineering teams",
          "Specialize in 3D motion design using Cinema 4D and Blender for product visualization"
        ]
      },
      {
        role: "Senior Motion Designer",
        company: "CRED — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led motion design for CRED's award-winning brand campaigns with 500M+ impressions",
          "Created the signature CRED animation style adopted across all brand touchpoints",
          "Built automated rendering pipeline producing 100+ social assets per campaign",
          "Won Cannes Lions Bronze for CRED's animated brand film (2023)"
        ]
      }
    ]
  },

  {
    id: "voice-over",
    name: "Voice Over & Audio Production",
    group: "Design & Creative",
    icon: "🎙️",
    salary: "$40–$100/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #150a1a, #200f25)",
    skills: [
      { name: "Voice Acting", level: 98 },
      { name: "Audio Engineering", level: 97 },
      { name: "Podcast Production", level: 96 },
      { name: "Sound Design", level: 95 },
      { name: "Music Production", level: 93 },
      { name: "Script Writing", level: 94 }
    ],
    techStack: {
      "Recording": ["Pro Tools", "Logic Pro", "Audition", "Reaper", "RX iZotope", "Source-Connect"],
      "Production": ["Ableton Live", "FL Studio", "Descript", "Riverside.fm", "Squadcast", "Anchor"],
      "Distribution": ["Spotify for Podcasters", "Apple Podcasts Connect", "YouTube Studio", "Podbean", "Transistor", "RSS"]
    },
    certifications: [
      { name: "Pro Tools Certified Operator", issuer: "Avid", year: "2023" },
      { name: "Audio Engineering Society Member", issuer: "AES", year: "2022" },
      { name: "Berklee Online — Music Production Certificate", issuer: "Berklee College of Music", year: "2021" }
    ],
    projects: [
      {
        name: "BrandVoice — Corporate Narration Studio",
        tech: "Pro Tools, RX iZotope, Source-Connect, Adobe Audition | 500+ Projects",
        client: "Lead Voice Artist — Narrated for Google, Microsoft, Adobe",
        desc: "Professional voice-over for 500+ corporate videos, e-learning modules, and product demos. Clients include Google India, Microsoft, and Adobe. Delivered in English and Hindi with 48-hour turnaround."
      },
      {
        name: "PodcastPro — Top-Ranked Business Podcast",
        tech: "Riverside.fm, Descript, Logic Pro, Spotify, Apple Podcasts | 5M+ Downloads",
        client: "Producer & Host — Independent Production",
        desc: "Weekly business podcast with 200+ episodes and 5M+ total downloads. Features interviews with founders and CXOs from India's top tech companies. Consistently ranked in Apple Podcasts Top 10 Business."
      },
      {
        name: "SoundScape — Immersive Audio Experience",
        tech: "Ableton Live, Logic Pro, Dolby Atmos, Unity FMOD | 3 Award-Winning Projects",
        client: "Sound Designer — Created for National Gallery of Modern Art",
        desc: "Immersive audio installations combining spatial audio, generative soundscapes, and interactive elements. Created 3 award-winning projects for museums and cultural events with 200K+ visitors."
      }
    ],
    experience: [
      {
        role: "Freelance Voice Artist & Audio Producer",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Provide professional voice-over for 50+ clients across corporate, e-learning, and entertainment",
          "Produce and edit podcasts generating 500K+ monthly downloads across 5 shows",
          "Create sound design and audio branding for apps, games, and brand campaigns",
          "Deliver bilingual (English/Hindi) narration with professional studio quality"
        ]
      },
      {
        role: "Senior Audio Producer",
        company: "Spotify India — Mumbai, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led audio production for Spotify India's original podcast slate of 15+ shows",
          "Built production workflows reducing episode turnaround from 5 days to 2 days",
          "Trained 10 junior producers on audio engineering and storytelling techniques",
          "Won Podcast Academy Award for Best Produced Show (2023)"
        ]
      }
    ]
  }
];

// Export for browser and Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CATEGORIES };
}
