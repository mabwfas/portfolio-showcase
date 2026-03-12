/* ══════════════════════════════════════════════════════════════
   FIVERR PRO APPLICATION CATEGORIES (Exact 19 from Fiverr dropdown)
   Each with skills, techStack, projects, experience, certifications
   ══════════════════════════════════════════════════════════════ */

const CATEGORIES = [
  {
    id: "ai-development",
    name: "AI Development",
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
      "AI/ML": ["GPT-4/Claude API","LangChain","Hugging Face","PyTorch","TensorFlow","ONNX"],
      "Infrastructure": ["Pinecone","Weaviate","MLflow","Kubeflow","SageMaker","Vertex AI"],
      "Data & Processing": ["Apache Spark","Ray","DVC","Weights & Biases","Label Studio","Unstructured"]
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
    name: "Blockchain Development & Solutions",
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
      "Smart Contracts": ["Solidity","Rust","Vyper","Hardhat","Foundry","OpenZeppelin"],
      "Blockchain": ["Ethereum","Solana","Polygon","Arbitrum","Base","Cosmos"],
      "Web3 Frontend": ["ethers.js","wagmi","RainbowKit","The Graph","IPFS","Ceramic"]
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
    id: "chatbot-development",
    name: "Chatbot Development",
    group: "Programming & Tech",
    icon: "💬",
    salary: "$80–$200/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #0f1a2a, #1a1045)",
    skills: [
      { name: "NLP / LLM Integration", level: 98 },
      { name: "Dialogflow / Rasa", level: 97 },
      { name: "GPT / Claude API", level: 97 },
      { name: "Python / Node.js", level: 96 },
      { name: "Webhook & API Design", level: 95 },
      { name: "Conversation Design", level: 96 }
    ],
    techStack: {
      "AI & NLP": ["GPT-4 API","Claude API","Dialogflow CX","Rasa","LangChain","Hugging Face"],
      "Platforms": ["WhatsApp Business API","Telegram Bot API","Slack SDK","Microsoft Bot Framework","Twilio","Intercom"],
      "Backend": ["Node.js","Python/FastAPI","Redis","PostgreSQL","Firebase","WebSockets"]
    },
    certifications: [
      { name: "Google Cloud Dialogflow CX Certification", issuer: "Google", year: "2023" },
      { name: "DeepLearning.AI NLP Specialization", issuer: "DeepLearning.AI (Coursera)", year: "2022" },
      { name: "Microsoft Azure AI Engineer Associate", issuer: "Microsoft", year: "2022" }
    ],
    projects: [
      {
        name: "SupportGenie — Enterprise AI Customer Support Bot",
        tech: "GPT-4, LangChain, Pinecone, Node.js, WhatsApp API | 5M+ Conversations/Month",
        client: "Lead AI Developer — Built for Freshdesk",
        desc: "Enterprise-grade AI chatbot handling 5M+ customer conversations monthly across WhatsApp, Web, and Slack. RAG-powered knowledge base with 94% first-contact resolution rate. Reduced support ticket volume by 68%."
      },
      {
        name: "CommerceBot — AI Shopping Assistant",
        tech: "Dialogflow CX, Node.js, Shopify API, Firebase, Twilio | ₹25 Cr+ Revenue Driven",
        client: "Senior Chatbot Developer — Built for Myntra",
        desc: "Conversational commerce bot with product recommendations, order tracking, and returns processing. Handles 2M+ shopping conversations monthly with 35% conversion rate on recommended products."
      },
      {
        name: "MedBot — HIPAA-Compliant Healthcare Chatbot",
        tech: "Rasa, Python, FastAPI, PostgreSQL, HL7 FHIR | 500K+ Patient Interactions",
        client: "AI Developer — Built for Apollo 24/7",
        desc: "HIPAA-compliant chatbot for symptom triage, appointment scheduling, and medication reminders. Multi-lingual support in 6 Indian languages. Reduced appointment no-show rate by 42%."
      }
    ],
    experience: [
      {
        role: "Freelance Chatbot Developer & Conversational AI Specialist",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Build custom AI chatbots for 15+ enterprise clients across healthcare, e-commerce, and fintech",
          "Develop LLM-powered conversational agents with RAG for knowledge-intensive use cases",
          "Integrate chatbots with WhatsApp, Slack, Telegram, and custom web platforms",
          "Provide conversation design consulting and NLU optimization for existing bot deployments"
        ]
      },
      {
        role: "Senior Conversational AI Engineer",
        company: "Haptik (Reliance Jio) — Mumbai, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led chatbot development for 10+ enterprise clients including Jio, HDFC, and ICICI",
          "Built conversational AI platform handling 20M+ conversations monthly",
          "Designed NLU pipelines achieving 96% intent recognition accuracy across 12 languages",
          "Mentored team of 6 developers and established chatbot development best practices"
        ]
      }
    ]
  },

  {
    id: "cloud-computing",
    name: "Cloud Computing",
    group: "Programming & Tech",
    icon: "☁️",
    salary: "$90–$220/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #081828, #0f2840)",
    skills: [
      { name: "AWS Architecture", level: 98 },
      { name: "Google Cloud Platform", level: 97 },
      { name: "Microsoft Azure", level: 96 },
      { name: "Serverless / Lambda", level: 95 },
      { name: "Cloud Migration", level: 94 },
      { name: "Cost Optimization", level: 96 }
    ],
    techStack: {
      "AWS": ["EC2","Lambda","S3","RDS","EKS","CloudFormation"],
      "GCP & Azure": ["Cloud Run","BigQuery","Azure Functions","Cosmos DB","App Engine","AKS"],
      "Infrastructure": ["Terraform","Pulumi","Ansible","Docker","Kubernetes","Serverless Framework"]
    },
    certifications: [
      { name: "AWS Solutions Architect — Professional", issuer: "Amazon Web Services", year: "2023" },
      { name: "Google Cloud Professional Cloud Architect", issuer: "Google", year: "2023" },
      { name: "Microsoft Azure Solutions Architect Expert", issuer: "Microsoft", year: "2022" },
      { name: "HashiCorp Certified: Terraform Associate", issuer: "HashiCorp", year: "2021" }
    ],
    projects: [
      {
        name: "CloudMigrate — Enterprise Multi-Cloud Migration Platform",
        tech: "AWS, GCP, Terraform, Kubernetes, Jenkins | 200+ Workloads Migrated",
        client: "Lead Cloud Architect — Built for Tata Consultancy Services",
        desc: "Multi-cloud migration framework migrating 200+ enterprise workloads from on-premise to AWS and GCP. Zero-downtime migration strategy with automated testing and rollback. Reduced infrastructure costs by 45%."
      },
      {
        name: "ServerlessHub — Event-Driven Microservices Platform",
        tech: "AWS Lambda, API Gateway, DynamoDB, SQS, EventBridge | 50M+ Events/Day",
        client: "Senior Cloud Engineer — Built for Razorpay",
        desc: "Serverless event-driven platform processing 50M+ payment events daily with 99.99% reliability. Auto-scaling from 0 to 10K+ concurrent executions. Reduced compute costs by 70% vs EC2-based architecture."
      },
      {
        name: "HybridCloud — Secure Hybrid Cloud Infrastructure",
        tech: "Azure, AWS, VPN, Terraform, Vault, Consul | 500+ VMs Managed",
        client: "Cloud Infrastructure Lead — Built for HDFC Bank",
        desc: "Hybrid cloud infrastructure connecting on-premise data centers with AWS and Azure. PCI-DSS compliant architecture with encrypted transit, key management, and automated compliance auditing."
      }
    ],
    experience: [
      {
        role: "Freelance Cloud Architect & Migration Specialist",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Design and implement cloud architectures for 12+ enterprise clients across AWS, GCP, and Azure",
          "Lead cloud migration projects moving legacy workloads with zero downtime",
          "Optimize cloud spending saving clients $800K+ annually through right-sizing and reserved instances",
          "Implement multi-cloud disaster recovery and business continuity strategies"
        ]
      },
      {
        role: "Senior Cloud Architect",
        company: "Amazon Web Services — Hyderabad, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Designed cloud architectures for 25+ enterprise customers in banking and e-commerce",
          "Led Well-Architected Reviews identifying $5M+ in optimization opportunities",
          "Built reference architectures adopted as templates for financial services vertical",
          "Trained 200+ developers through AWS workshops and certification programs"
        ]
      }
    ]
  },

  {
    id: "cryptocurrencies-tokens",
    name: "Cryptocurrencies & Tokens",
    group: "Programming & Tech",
    icon: "🪙",
    salary: "$100–$280/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #1a1505, #2a2008)",
    skills: [
      { name: "Token Engineering", level: 98 },
      { name: "Solidity / ERC Standards", level: 97 },
      { name: "DeFi Protocol Design", level: 96 },
      { name: "Tokenomics Modeling", level: 95 },
      { name: "Smart Contract Auditing", level: 94 },
      { name: "DEX / AMM Development", level: 95 }
    ],
    techStack: {
      "Token Development": ["Solidity","OpenZeppelin","Hardhat","Foundry","ERC-20/721/1155","Chainlink"],
      "DeFi": ["Uniswap V3 SDK","Aave Protocol","Compound","Curve Finance","The Graph","Gelato"],
      "Infrastructure": ["Ethereum","Polygon","Arbitrum","Base","Solana (SPL)","Alchemy/Infura"]
    },
    certifications: [
      { name: "Certified Blockchain Developer — Ethereum", issuer: "Blockchain Council", year: "2023" },
      { name: "ConsenSys Certified Ethereum Developer", issuer: "ConsenSys Academy", year: "2022" },
      { name: "DeFi Developer Certification", issuer: "Chainlink Labs", year: "2022" }
    ],
    projects: [
      {
        name: "GovernToken — DAO Governance & Utility Token Ecosystem",
        tech: "Solidity, Hardhat, OpenZeppelin, The Graph, React | $85M Market Cap at Peak",
        client: "Lead Token Engineer — Built for Polygon Ecosystem",
        desc: "Utility and governance token with vesting schedules, staking rewards, and DAO voting. Implemented ERC-20 with advanced features: anti-whale mechanics, reflection rewards, and time-locked team allocation. Audited by CertiK."
      },
      {
        name: "DeFiYield — Automated Yield Farming Aggregator",
        tech: "Solidity, Chainlink, Uniswap V3, Aave, Gelato | $120M+ TVL at Peak",
        client: "Senior DeFi Developer — Built for WazirX DeFi",
        desc: "Cross-chain yield farming aggregator auto-compounding across 40+ DeFi strategies on Ethereum, Polygon, and Arbitrum. Features flash loan protection, impermanent loss tracking, and gas-optimized vault contracts."
      },
      {
        name: "NFTLaunch — Token Launchpad & IDO Platform",
        tech: "Solidity, React, ethers.js, The Graph, IPFS | $30M+ Raised Across 50 Projects",
        client: "Blockchain Developer — Built for CoinDCX",
        desc: "Fair-launch token platform with tiered allocation, anti-bot measures, and vesting contracts. Launched 50+ token projects raising $30M+ with KYC/AML compliance and multi-chain support."
      }
    ],
    experience: [
      {
        role: "Freelance Token Engineer & DeFi Developer",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Design and deploy custom tokens (ERC-20/721/1155) with advanced tokenomics for 20+ projects",
          "Build DeFi protocols including AMMs, lending platforms, and yield aggregators",
          "Conduct smart contract security audits preventing $10M+ in potential exploits",
          "Provide tokenomics consulting and economic modeling for Web3 startups"
        ]
      },
      {
        role: "Senior Blockchain Developer — Token Engineering",
        company: "Polygon Labs — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Core team building token infrastructure for Polygon ecosystem (MATIC → POL migration)",
          "Developed token bridges and cross-chain interoperability solutions",
          "Audited 80+ token contracts ensuring security before Polygon mainnet deployment",
          "Created token development standards and templates used by 500+ ecosystem projects"
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
      "Offensive Security": ["Metasploit","Burp Suite","OWASP ZAP","Nmap","Wireshark","Kali Linux"],
      "Defensive Security": ["Splunk","CrowdStrike","Snort","Suricata","ELK Stack","YARA"],
      "Cloud & Compliance": ["AWS Security Hub","GCP Security Command Center","Terraform","Vault","SOC 2","ISO 27001"]
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
    id: "devops-cloud",
    name: "DevOps Engineering",
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
      "Cloud Platforms": ["AWS","Google Cloud","Azure","DigitalOcean","Cloudflare","Vercel"],
      "Infrastructure": ["Kubernetes","Docker","Terraform","Ansible","Pulumi","Helm"],
      "CI/CD & Monitoring": ["GitHub Actions","Jenkins","ArgoCD","Prometheus","Grafana","Datadog"]
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
      "Game Engines": ["Unity","Unreal Engine 5","Godot","Cocos2d-x","Phaser","PlayCanvas"],
      "Graphics & Audio": ["HLSL/GLSL","Blender","Substance Painter","FMOD","Wwise","Spine2D"],
      "Backend & Services": ["Photon","PlayFab","Firebase","Mirror Networking","Steamworks","Epic Online Services"]
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
      "Mobile": ["Flutter","React Native","Swift","Kotlin","SwiftUI","Jetpack Compose"],
      "Backend & Cloud": ["Firebase","Node.js","Supabase","AWS Amplify","GraphQL","REST"],
      "Tools & CI/CD": ["Fastlane","Codemagic","Figma","TestFlight","Crashlytics","RevenueCat"]
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
    id: "mobile-app-maintenance",
    name: "Mobile App Maintenance",
    group: "Programming & Tech",
    icon: "🔧",
    salary: "$60–$140/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #0f1225, #1a0f30)",
    skills: [
      { name: "Bug Fixing & Debugging", level: 98 },
      { name: "Performance Optimization", level: 97 },
      { name: "OS Version Updates", level: 96 },
      { name: "Crash Analytics", level: 95 },
      { name: "App Store Compliance", level: 94 },
      { name: "Legacy Code Refactoring", level: 96 }
    ],
    techStack: {
      "Mobile": ["Flutter","React Native","Swift","Kotlin","Objective-C","Java (Android)"],
      "Monitoring": ["Crashlytics","Sentry","New Relic","Firebase Analytics","AppDynamics","Instabug"],
      "Testing & CI": ["XCTest","Espresso","Detox","Appium","Fastlane","Bitrise"]
    },
    certifications: [
      { name: "Google Associate Android Developer", issuer: "Google", year: "2023" },
      { name: "Apple Certified iOS App Development", issuer: "Apple", year: "2022" },
      { name: "AWS Certified Developer — Associate", issuer: "Amazon Web Services", year: "2021" }
    ],
    projects: [
      {
        name: "FinApp Rescue — Critical Banking App Stabilization",
        tech: "React Native, Crashlytics, Sentry, Detox, Fastlane | 99.9% Crash-Free Rate Achieved",
        client: "Lead Mobile Maintenance Engineer — Contracted by ICICI Bank",
        desc: "Emergency stabilization of banking app with 15M+ users experiencing 12% crash rate. Identified and fixed 47 critical bugs including memory leaks, thread deadlocks, and API timeout handling. Achieved 99.9% crash-free rate in 6 weeks."
      },
      {
        name: "ShopLegacy — E-Commerce App Modernization",
        tech: "Kotlin, Swift, Firebase, REST to GraphQL Migration | 40% Performance Improvement",
        client: "Senior Mobile Developer — Contracted by Ajio",
        desc: "Complete modernization of legacy e-commerce app from Java/Objective-C to Kotlin/Swift. Migrated REST APIs to GraphQL reducing payload size by 60%. Improved app startup time by 40% and reduced ANR rate by 85%."
      },
      {
        name: "HealthTrack — Annual OS Compatibility Updates",
        tech: "Flutter, iOS 18/Android 15 SDK, Automated Testing, Fastlane | 2M+ Active Users Maintained",
        client: "Mobile Maintenance Lead — Ongoing Contract for HealthifyMe",
        desc: "Annual maintenance contract ensuring compatibility with iOS and Android OS releases. Managed 4 major OS update cycles, SDK migrations, and deprecated API replacements while maintaining 4.8+ app store rating."
      }
    ],
    experience: [
      {
        role: "Freelance Mobile App Maintenance Specialist",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Maintain and optimize 20+ production mobile apps for enterprise clients",
          "Perform emergency bug fixes with <4 hour response time for critical issues",
          "Manage OS version compatibility updates ensuring smooth transitions to new releases",
          "Conduct performance audits reducing app crashes by 90%+ for legacy applications"
        ]
      },
      {
        role: "Senior Mobile App Maintenance Engineer",
        company: "Flipkart (Walmart Inc.) — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led maintenance team for Flipkart's main shopping app serving 200M+ users",
          "Reduced crash rate from 2.5% to 0.1% through systematic debugging and monitoring",
          "Managed quarterly OS compatibility updates across iOS and Android platforms",
          "Built automated regression testing suite catching 95% of issues before release"
        ]
      }
    ]
  },

  {
    id: "coding-lessons",
    name: "Online Coding Lessons",
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
      "Languages": ["Python","JavaScript","Java","C++","TypeScript","Go"],
      "Teaching Platforms": ["LeetCode","HackerRank","Udemy","Coursera","YouTube","Zoom"],
      "Tools & Frameworks": ["VS Code","Jupyter Notebook","Git/GitHub","Docker","React","Django"]
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

  {
    id: "qa-review",
    name: "QA & Review",
    group: "Programming & Tech",
    icon: "✅",
    salary: "$50–$120/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #0a1a12, #0f2a1a)",
    skills: [
      { name: "Test Automation", level: 98 },
      { name: "Manual Testing / Exploratory", level: 97 },
      { name: "Selenium / Cypress", level: 96 },
      { name: "API Testing (Postman)", level: 95 },
      { name: "Performance Testing", level: 94 },
      { name: "CI/CD Test Integration", level: 96 }
    ],
    techStack: {
      "Automation": ["Selenium","Cypress","Playwright","Appium","Detox","TestCafe"],
      "API & Performance": ["Postman","REST Assured","k6","JMeter","Locust","Artillery"],
      "CI & Reporting": ["GitHub Actions","Jenkins","Allure","TestRail","Jira","Datadog"]
    },
    certifications: [
      { name: "ISTQB Certified Tester — Advanced Level", issuer: "ISTQB", year: "2023" },
      { name: "AWS Certified DevOps Engineer — Professional", issuer: "Amazon Web Services", year: "2022" },
      { name: "Selenium WebDriver Certification", issuer: "Selenium (LambdaTest)", year: "2021" }
    ],
    projects: [
      {
        name: "TestForge — Enterprise Test Automation Framework",
        tech: "Cypress, Playwright, TypeScript, Allure, GitHub Actions | 15,000+ Test Cases",
        client: "QA Architect — Built for Razorpay",
        desc: "Comprehensive test automation framework covering UI, API, and integration testing. 15,000+ automated test cases running in parallel across 20+ browsers. Reduced regression testing time from 3 days to 45 minutes."
      },
      {
        name: "PerfGuard — Real-Time Performance Testing Platform",
        tech: "k6, Grafana, InfluxDB, Docker, AWS | Load Tested 100+ Services",
        client: "Senior QA Engineer — Built for Flipkart",
        desc: "Continuous performance testing platform simulating 500K+ concurrent users. Automated load testing integrated into CI/CD pipelines. Identified 200+ performance bottlenecks preventing production incidents."
      },
      {
        name: "MobileQA — Cross-Device Mobile Testing Suite",
        tech: "Appium, BrowserStack, Detox, Firebase Test Lab | 500+ Device Configurations",
        client: "Mobile QA Lead — Built for Paytm",
        desc: "Mobile test automation suite running across 500+ device configurations on BrowserStack and Firebase Test Lab. Automated visual regression testing catching UI inconsistencies across Android and iOS fragmentation."
      }
    ],
    experience: [
      {
        role: "Freelance QA Engineer & Test Automation Consultant",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Design and implement test automation frameworks for 15+ enterprise clients",
          "Conduct comprehensive QA reviews covering functional, performance, and security testing",
          "Build CI/CD-integrated testing pipelines reducing manual QA effort by 80%",
          "Provide QA strategy consulting and test architecture design for engineering teams"
        ]
      },
      {
        role: "Senior QA Engineer",
        company: "Microsoft India — Hyderabad, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led QA for Azure DevOps features serving 10M+ developers worldwide",
          "Built test automation framework reducing test execution time by 75%",
          "Conducted security testing identifying 50+ vulnerabilities before release",
          "Mentored 8 QA engineers and established quality gates for CI/CD pipelines"
        ]
      }
    ]
  },

  {
    id: "software-development",
    name: "Software Development",
    group: "Programming & Tech",
    icon: "💻",
    salary: "$80–$200/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #0a0f20, #15102a)",
    skills: [
      { name: "Python / Java / C++", level: 98 },
      { name: "System Design", level: 97 },
      { name: "Microservices Architecture", level: 96 },
      { name: "Database Design", level: 95 },
      { name: "API Development", level: 96 },
      { name: "Agile / Scrum", level: 94 }
    ],
    techStack: {
      "Languages": ["Python","Java","C++","Go","Rust","TypeScript"],
      "Frameworks": ["Spring Boot","Django","FastAPI",".NET Core","Express.js","gRPC"],
      "Infrastructure": ["PostgreSQL","Redis","Kafka","Docker","Kubernetes","RabbitMQ"]
    },
    certifications: [
      { name: "AWS Certified Solutions Architect — Professional", issuer: "Amazon Web Services", year: "2023" },
      { name: "Oracle Certified Professional Java SE Developer", issuer: "Oracle", year: "2022" },
      { name: "Google Cloud Professional Cloud Developer", issuer: "Google", year: "2022" },
      { name: "Certified Kubernetes Application Developer (CKAD)", issuer: "CNCF", year: "2021" }
    ],
    projects: [
      {
        name: "PaymentCore — High-Throughput Payment Processing Engine",
        tech: "Java, Spring Boot, Kafka, PostgreSQL, Redis | ₹5,000 Cr+ Daily Transactions",
        client: "Lead Software Engineer — Built for PhonePe",
        desc: "Core payment processing engine handling ₹5,000 Cr+ daily UPI transactions with 99.99% uptime. Event-driven microservices architecture with Kafka processing 100M+ events daily. Sub-50ms P99 latency."
      },
      {
        name: "DataPipeline — Real-Time ETL & Analytics Platform",
        tech: "Python, Apache Spark, Airflow, Snowflake, dbt | 500TB+ Data Processed Daily",
        client: "Senior Software Developer — Built for Flipkart Data Platform",
        desc: "Enterprise data pipeline processing 500TB+ daily across 1000+ data sources. Real-time streaming with Kafka and batch processing with Spark. Powers ML models, analytics dashboards, and business intelligence."
      },
      {
        name: "InventoryOS — Distributed Inventory Management System",
        tech: "Go, gRPC, PostgreSQL, Redis, Kubernetes | Managing 50M+ SKUs",
        client: "Software Architect — Built for Amazon India",
        desc: "Distributed inventory system managing 50M+ SKUs across 400+ warehouses with real-time stock synchronization. Event sourcing architecture with CQRS handling 10K+ inventory updates per second."
      }
    ],
    experience: [
      {
        role: "Freelance Software Developer & Architect",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Design and build enterprise software systems for 15+ clients across fintech and e-commerce",
          "Architect microservices platforms handling 10M+ requests daily with 99.99% uptime",
          "Develop high-performance backends in Java, Python, Go, and Rust",
          "Provide technical leadership and architecture consulting for engineering teams of 10-50"
        ]
      },
      {
        role: "Senior Software Engineer",
        company: "Google India — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Built backend services for Google Pay India handling 500M+ monthly transactions",
          "Designed microservices architecture reducing latency by 40% and improving reliability",
          "Led system design reviews for 15+ engineering teams across Google Pay org",
          "Mentored 10 engineers and established code review standards for the team"
        ]
      }
    ]
  },

  {
    id: "support-it",
    name: "Support & IT",
    group: "Programming & Tech",
    icon: "🖥️",
    salary: "$40–$100/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #0a1018, #101a25)",
    skills: [
      { name: "IT Infrastructure", level: 98 },
      { name: "System Administration", level: 97 },
      { name: "Network Management", level: 96 },
      { name: "Help Desk / ITSM", level: 95 },
      { name: "Active Directory / IAM", level: 94 },
      { name: "Automation Scripting", level: 96 }
    ],
    techStack: {
      "Infrastructure": ["Windows Server","Linux (Ubuntu/RHEL)","VMware","Hyper-V","Active Directory","Azure AD"],
      "Monitoring": ["Nagios","Zabbix","ServiceNow","PagerDuty","JIRA Service Management","Freshservice"],
      "Automation": ["PowerShell","Bash","Ansible","Terraform","Python","Group Policy"]
    },
    certifications: [
      { name: "CompTIA Security+", issuer: "CompTIA", year: "2023" },
      { name: "Microsoft Certified: Azure Administrator Associate", issuer: "Microsoft", year: "2023" },
      { name: "ITIL 4 Foundation", issuer: "Axelos", year: "2022" },
      { name: "AWS Certified SysOps Administrator — Associate", issuer: "Amazon Web Services", year: "2021" }
    ],
    projects: [
      {
        name: "ITOps360 — Enterprise IT Operations Center",
        tech: "ServiceNow, Nagios, Ansible, PowerShell, Azure AD | 5,000+ Endpoints Managed",
        client: "IT Operations Lead — Built for Infosys BPO",
        desc: "Centralized IT operations platform managing 5,000+ endpoints across 12 offices. Automated 80% of routine IT tasks with Ansible and PowerShell. Reduced mean time to resolution (MTTR) from 4 hours to 25 minutes."
      },
      {
        name: "CloudMigrate IT — Office 365 & Azure Migration",
        tech: "Azure AD, Office 365, Exchange Online, Intune, PowerShell | 3,000+ Users Migrated",
        client: "Senior IT Consultant — Delivered for Wipro",
        desc: "Complete IT infrastructure migration from on-premise to Azure and Office 365 for 3,000+ users. Zero-downtime email migration, Azure AD integration, and Intune device management deployment."
      },
      {
        name: "SecureDesk — Automated IT Security & Help Desk",
        tech: "JIRA Service Management, CrowdStrike, Okta, Python, Zapier | 50K+ Tickets/Month",
        client: "IT Manager — Built for Tech Mahindra",
        desc: "Automated IT help desk handling 50K+ tickets monthly with AI-powered ticket classification and auto-routing. Integrated security monitoring with CrowdStrike and Okta for identity management."
      }
    ],
    experience: [
      {
        role: "Freelance IT Consultant & Systems Administrator",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Provide IT infrastructure management and support for 15+ SMB and enterprise clients",
          "Design and implement cloud migrations to Azure, AWS, and Google Workspace",
          "Build automated IT operations workflows reducing manual effort by 75%",
          "Conduct IT security audits and implement identity management solutions"
        ]
      },
      {
        role: "Senior IT Operations Engineer",
        company: "Accenture — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Managed IT infrastructure for 10K+ users across multiple enterprise clients",
          "Built automation scripts reducing repetitive IT tasks by 80%",
          "Led Office 365 and Azure migrations for 3 major enterprise clients",
          "Achieved 99.9% SLA compliance across all managed IT services"
        ]
      }
    ]
  },

  {
    id: "trading-bots",
    name: "Trading Bots Development",
    group: "Programming & Tech",
    icon: "📈",
    salary: "$100–$300/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #0a1a08, #15280f)",
    skills: [
      { name: "Algorithmic Trading", level: 98 },
      { name: "Python / C++ / Rust", level: 97 },
      { name: "Exchange APIs (Binance/FTX)", level: 96 },
      { name: "Quantitative Analysis", level: 95 },
      { name: "Risk Management Systems", level: 94 },
      { name: "Backtesting Frameworks", level: 96 }
    ],
    techStack: {
      "Trading": ["ccxt","Binance API","Interactive Brokers API","Alpaca","Zerodha Kite","MetaTrader 5"],
      "Analysis": ["pandas","NumPy","TA-Lib","Backtrader","Zipline","QuantConnect"],
      "Infrastructure": ["Redis","TimescaleDB","Kafka","AWS Lambda","Docker","WebSockets"]
    },
    certifications: [
      { name: "CFA Level II Candidate", issuer: "CFA Institute", year: "2023" },
      { name: "CMT — Chartered Market Technician Level 1", issuer: "CMT Association", year: "2022" },
      { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2022" }
    ],
    projects: [
      {
        name: "AlphaBot — Multi-Strategy Crypto Trading System",
        tech: "Python, Binance API, Redis, TimescaleDB, Docker | $2.5M+ Managed Volume/Day",
        client: "Lead Quantitative Developer — Built for CoinDCX Institutional",
        desc: "Multi-strategy algorithmic trading system executing 10K+ trades daily across 50+ crypto pairs. Implements momentum, mean-reversion, and arbitrage strategies. Achieved 47% annual return with max drawdown of 8.5%."
      },
      {
        name: "ArbitrageEngine — Cross-Exchange Arbitrage Bot",
        tech: "Rust, ccxt, WebSockets, Redis, Kafka | Sub-5ms Execution Latency",
        client: "Senior Trading Developer — Built for WazirX",
        desc: "High-frequency arbitrage system detecting and executing price discrepancies across 8 exchanges with sub-5ms latency. Processes 100K+ price ticks per second. Generated ₹15 Cr+ in arbitrage profit over 12 months."
      },
      {
        name: "EquityPilot — Indian Stock Market Algo Trading Platform",
        tech: "Python, Zerodha Kite API, TA-Lib, PostgreSQL, Grafana | ₹50 Cr+ Managed AUM",
        client: "Quantitative Developer — Built for Angel One",
        desc: "Automated equity trading platform with 20+ technical strategies, options Greeks calculator, and portfolio risk management. Manages ₹50 Cr+ across 500+ client accounts with SEBI-compliant reporting."
      }
    ],
    experience: [
      {
        role: "Freelance Quantitative Developer & Trading Bot Specialist",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Build custom trading bots for 10+ institutional and retail clients across crypto and equities",
          "Develop backtesting frameworks processing 10 years of historical data for strategy validation",
          "Design risk management systems with position sizing, stop-loss, and portfolio hedging",
          "Provide quantitative research and alpha generation consulting for trading firms"
        ]
      },
      {
        role: "Senior Quantitative Developer",
        company: "Tower Research Capital — Gurugram, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Built ultra-low-latency trading systems executing 50K+ orders daily on NSE/BSE",
          "Developed market-making algorithms generating consistent returns across volatility regimes",
          "Optimized C++ trading engine reducing order-to-execution latency from 50μs to 8μs",
          "Backtested and deployed 15+ quantitative strategies with positive Sharpe ratios"
        ]
      }
    ]
  },

  {
    id: "user-testing",
    name: "User Testing",
    group: "Programming & Tech",
    icon: "🧪",
    salary: "$50–$120/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #0f1520, #1a2030)",
    skills: [
      { name: "Usability Testing", level: 98 },
      { name: "A/B Testing & Analytics", level: 97 },
      { name: "User Interview Research", level: 96 },
      { name: "Heuristic Evaluation", level: 95 },
      { name: "Accessibility Testing", level: 94 },
      { name: "Survey Design & Analysis", level: 96 }
    ],
    techStack: {
      "Testing Tools": ["Maze","UserTesting.com","Lookback","Hotjar","Optimal Workshop","Loop11"],
      "Analytics": ["Google Analytics 4","Mixpanel","Amplitude","FullStory","Heap","Google Optimize"],
      "Research": ["Dovetail","Miro","FigJam","SurveyMonkey","Typeform","Notion"]
    },
    certifications: [
      { name: "Nielsen Norman Group UX Research Certificate", issuer: "NN/g", year: "2023" },
      { name: "Google UX Design Professional Certificate", issuer: "Google (Coursera)", year: "2022" },
      { name: "Certified Usability Analyst (CUA)", issuer: "Human Factors International", year: "2021" }
    ],
    projects: [
      {
        name: "TestHub — Enterprise Usability Testing Program",
        tech: "Maze, Lookback, Dovetail, Mixpanel, Miro | 1,000+ User Sessions Conducted",
        client: "Lead UX Researcher — Built for PhonePe",
        desc: "Continuous usability testing program conducting 1,000+ user sessions across 8 product features. Identified 200+ usability issues leading to redesigns that improved task completion rates by 45% and NPS by 22 points."
      },
      {
        name: "ABTestPro — Conversion Optimization Framework",
        tech: "Google Optimize, GA4, Hotjar, Mixpanel, Figma | $15M+ Revenue Impact",
        client: "Senior Testing Specialist — Implemented for Nykaa",
        desc: "Data-driven A/B testing program running 100+ experiments across checkout, product pages, and navigation. Achieved $15M+ incremental revenue through systematic conversion optimization with 95% statistical significance."
      },
      {
        name: "AccessCheck — Accessibility Compliance Testing Suite",
        tech: "axe-core, JAWS, VoiceOver, Lighthouse, WAVE | WCAG 2.1 AAA Certified",
        client: "Accessibility Testing Lead — Delivered for HDFC Bank",
        desc: "Comprehensive accessibility testing program for mobile banking app. Tested with 50+ users with disabilities using screen readers, switch access, and voice control. Achieved WCAG 2.1 AAA compliance and RBI accessibility standards."
      }
    ],
    experience: [
      {
        role: "Freelance User Testing Specialist & UX Researcher",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Conduct usability testing programs for 15+ enterprise clients across fintech and e-commerce",
          "Design and execute A/B tests driving measurable conversion improvements",
          "Perform accessibility audits ensuring WCAG 2.1 compliance for government and banking",
          "Create user research playbooks and testing frameworks for product teams"
        ]
      },
      {
        role: "Senior User Researcher",
        company: "Swiggy — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led user testing for Swiggy's core ordering experience serving 50M+ monthly users",
          "Conducted 500+ usability sessions across Tier 1, 2, and 3 Indian cities",
          "Built remote unmoderated testing infrastructure reducing study time by 60%",
          "Research insights drove product decisions impacting ₹500 Cr+ annual GMV"
        ]
      }
    ]
  },

  {
    id: "vibe-coding",
    name: "Vibe Coding",
    group: "Programming & Tech",
    icon: "✨",
    salary: "$60–$150/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #1a0f28, #0f1a28)",
    skills: [
      { name: "AI-Assisted Development", level: 98 },
      { name: "Cursor / Copilot / Claude", level: 97 },
      { name: "Prompt Engineering", level: 96 },
      { name: "Rapid Prototyping", level: 95 },
      { name: "Full-Stack Development", level: 96 },
      { name: "AI Code Review", level: 94 }
    ],
    techStack: {
      "AI Tools": ["Cursor IDE","GitHub Copilot","Claude Code","Windsurf","Cline","v0.dev"],
      "Frameworks": ["Next.js","React","Tailwind CSS","Supabase","Vercel","Prisma"],
      "Stack": ["TypeScript","Python","Node.js","PostgreSQL","Redis","OpenAI API"]
    },
    certifications: [
      { name: "GitHub Copilot for Business Certification", issuer: "GitHub", year: "2024" },
      { name: "DeepLearning.AI ChatGPT Prompt Engineering", issuer: "DeepLearning.AI", year: "2023" },
      { name: "Vercel Next.js Professional Certificate", issuer: "Vercel", year: "2023" }
    ],
    projects: [
      {
        name: "ShipFast — AI-Powered SaaS Starter Kit",
        tech: "Cursor, Next.js 14, Supabase, Stripe, Tailwind | 500+ Projects Bootstrapped",
        client: "Solo Developer — Open Source Product",
        desc: "Full-stack SaaS boilerplate built entirely with AI-assisted coding. Authentication, payments, dashboard, and API — shipped in 48 hours. Used by 500+ developers to launch production SaaS products. 2,500+ GitHub stars."
      },
      {
        name: "VibeUI — AI-Generated Component Library",
        tech: "Claude Code, v0.dev, React, TypeScript, Storybook | 200+ Components",
        client: "Lead Vibe Coder — Built for Startup Accelerator Y Combinator Batch",
        desc: "Production-grade React component library with 200+ components generated and refined through AI pair programming. Full accessibility, dark mode, and responsive design. Used across 15+ YC-backed startups."
      },
      {
        name: "InstaClone — Full App in 72 Hours",
        tech: "Cursor, Next.js, Supabase, Cloudflare R2, Vercel AI SDK | 10K+ Users in Week 1",
        client: "Vibe Coding Consultant — Demo Project for Enterprise Client",
        desc: "Complete social media platform with feed, stories, DMs, and AI content moderation — built in 72 hours using AI-assisted development. Demonstrated to enterprise clients how vibe coding accelerates development by 10x."
      }
    ],
    experience: [
      {
        role: "Freelance Vibe Coder & AI-Assisted Development Specialist",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Build full-stack applications 5-10x faster using AI-assisted development tools",
          "Deliver MVPs in days instead of weeks for 20+ startup and enterprise clients",
          "Train engineering teams on AI pair programming with Cursor, Copilot, and Claude Code",
          "Create AI-powered development workflows reducing development costs by 70%"
        ]
      },
      {
        role: "Senior Software Engineer — AI-Augmented Development",
        company: "Vercel — Remote",
        date: "Apr 2023 — Dec 2023",
        bullets: [
          "Pioneered AI-assisted development workflows for Next.js framework team",
          "Built v0.dev integration tools enabling AI-generated UI components at scale",
          "Shipped 50+ features using AI pair programming reducing sprint velocity by 3x",
          "Created internal training program adopted by 100+ engineers across Vercel"
        ]
      }
    ]
  },

  {
    id: "website-development",
    name: "Website Development",
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
      "Frontend": ["React","Next.js","Vue.js","TypeScript","Tailwind CSS","Three.js"],
      "Backend": ["Node.js","Python/Django","PostgreSQL","MongoDB","Redis","GraphQL"],
      "DevOps & Cloud": ["AWS","Docker","Kubernetes","Terraform","CI/CD","Vercel"]
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
    id: "website-maintenance",
    name: "Website Maintenance",
    group: "Programming & Tech",
    icon: "🔄",
    salary: "$40–$100/hr",
    banner: null,
    gradient: "linear-gradient(135deg, #0a1518, #0f2025)",
    skills: [
      { name: "WordPress Maintenance", level: 98 },
      { name: "Performance Optimization", level: 97 },
      { name: "Security Hardening", level: 96 },
      { name: "Backup & Recovery", level: 95 },
      { name: "Plugin/Theme Updates", level: 94 },
      { name: "Uptime Monitoring", level: 96 }
    ],
    techStack: {
      "CMS Platforms": ["WordPress","Shopify","Webflow","Squarespace","Wix","Ghost"],
      "Monitoring": ["UptimeRobot","New Relic","GTmetrix","Cloudflare","Sucuri","Wordfence"],
      "DevOps": ["cPanel","Plesk","WP Engine","Kinsta","Cloudways","GitHub Actions"]
    },
    certifications: [
      { name: "WordPress Certified Developer", issuer: "WordPress.org", year: "2023" },
      { name: "Google PageSpeed Optimization Specialist", issuer: "Google", year: "2022" },
      { name: "CompTIA Security+", issuer: "CompTIA", year: "2021" }
    ],
    projects: [
      {
        name: "SiteGuard — Enterprise Website Maintenance Platform",
        tech: "WordPress, Cloudflare, Sucuri, ManageWP, GitHub Actions | 200+ Sites Managed",
        client: "Lead Site Maintenance Engineer — Built for WP Engine Agency Partners",
        desc: "Centralized maintenance platform managing 200+ WordPress sites. Automated plugin/theme updates, security scanning, and performance monitoring. Achieved 99.99% uptime across all managed sites with zero security breaches."
      },
      {
        name: "SpeedBoost — Website Performance Optimization Service",
        tech: "Cloudflare, Redis, WP Rocket, GTmetrix, Core Web Vitals | 500+ Sites Optimized",
        client: "Performance Consultant — Delivered for Digital Agencies",
        desc: "Website performance optimization service improving Core Web Vitals scores from failing to 90+ across 500+ sites. Average load time reduction from 8.5s to 1.2s. Improved Google search rankings for 85% of clients."
      },
      {
        name: "RecoverPro — Disaster Recovery & Migration Service",
        tech: "UpdraftPlus, All-in-One WP Migration, SSH, MySQL, Cloudways | 300+ Migrations",
        client: "Senior DevOps Engineer — Provided for Kinsta Clients",
        desc: "Website disaster recovery and hosting migration service with zero-downtime migration process. Successfully recovered 50+ hacked sites and migrated 300+ sites between hosting providers with 100% data integrity."
      }
    ],
    experience: [
      {
        role: "Freelance Website Maintenance & Support Specialist",
        company: "Self-Employed (Freelance / Contract) — Remote",
        date: "Jan 2024 — Present",
        bullets: [
          "Provide ongoing maintenance for 100+ websites across WordPress, Shopify, and custom platforms",
          "Deliver emergency support with <1 hour response time for critical site issues",
          "Optimize website performance achieving 90+ Google PageSpeed scores consistently",
          "Implement security hardening preventing malware, DDoS attacks, and unauthorized access"
        ]
      },
      {
        role: "Senior Site Reliability Engineer",
        company: "Automattic (WordPress.com) — Remote",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Maintained WordPress.com infrastructure hosting 40M+ websites worldwide",
          "Built automated monitoring and alerting reducing incident detection time by 90%",
          "Developed self-healing scripts resolving 60% of common issues automatically",
          "Led maintenance best practices documentation adopted by 500+ VIP agency partners"
        ]
      }
    ]
  },

  // ─── DESIGN & CREATIVE ───

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
      { name: "Google Ads Search Certification", issuer: "Google", year: "2022" }
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
    icon: "📣",
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
        desc: "Built content strategy generating 500K+ monthly organic visits from zero. Created 200+ SEO-optimized articles, 50+ pillar pages, and comprehensive content briefs. 85% of articles rank on page 1."
      },
      {
        name: "EmailCraft — Email Marketing Copy Framework",
        tech: "Mailchimp, ConvertKit, Litmus, Google Sheets | $2.5M+ Revenue Attributed",
        client: "Email Marketing Specialist — Written for Myntra",
        desc: "End-to-end email marketing copy for India's largest fashion e-commerce. Created 500+ email campaigns including welcome sequences, cart recovery, and seasonal promotions. 28% average open rate."
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
          "Create email marketing sequences with 25%+ open rates and 5%+ CTR",
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

  // ─── BUSINESS ───

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
  }

];

// Export for browser and Node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CATEGORIES };
}
