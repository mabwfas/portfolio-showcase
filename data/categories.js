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

  /* ── 23. Chatbot Development ─────────────────────────────── */
  {
    id: "chatbot-development",
    name: "Chatbot Development",
    field: "Programming & Tech",
    icon: "🤖",
    color: "#8B5CF6",
    description: "AI-powered chatbot and conversational interface development",
    badge: "Chatbot & Conversational AI Developer",
    title: "Senior Chatbot Developer & Conversational AI Architect",
    summary: "Expert chatbot developer with 5+ years building intelligent conversational agents for enterprise and consumer applications. Specialized in NLP-powered bots across WhatsApp, Telegram, Slack, and web platforms using Dialogflow, Rasa, LangChain, and custom LLM integrations. Delivered 40+ production chatbots handling 10M+ monthly conversations with 94%+ intent accuracy.",
    skills: [
      { name: "Dialogflow / Google AI", level: 97 },
      { name: "Rasa / NLU Pipelines", level: 96 },
      { name: "LangChain / LLM Agents", level: 98 },
      { name: "WhatsApp / Telegram APIs", level: 95 },
      { name: "Node.js / Python", level: 96 },
      { name: "Conversational Design", level: 94 }
    ],
    techStack: {
      "NLP & AI": ["Dialogflow CX", "Rasa Open Source", "LangChain", "OpenAI GPT-4", "Hugging Face", "spaCy"],
      "Platforms & SDKs": ["WhatsApp Business API", "Telegram Bot API", "Slack Bolt", "Microsoft Bot Framework", "Twilio", "Meta Messenger"],
      "Backend & Infra": ["Node.js", "Python FastAPI", "Redis", "PostgreSQL", "Docker", "AWS Lambda"]
    },
    certifications: [
      { name: "Google Cloud Dialogflow CX Specialist", issuer: "Google Cloud", year: "2023" },
      { name: "AWS Machine Learning Specialty", issuer: "Amazon Web Services", year: "2022" },
      { name: "Rasa Developer Certification", issuer: "Rasa Technologies", year: "2021" }
    ],
    projects: [
      {
        name: "BankBot — AI Banking Assistant for HDFC Bank",
        tech: "Dialogflow CX, Node.js, WhatsApp Business API, Redis | 5M+ Monthly Users",
        client: "Lead Chatbot Developer — Built for HDFC Bank Digital",
        desc: "Enterprise banking chatbot handling account inquiries, fund transfers, bill payments, and loan applications via WhatsApp and web. Processes 5M+ conversations/month with 96% intent accuracy and 40% reduction in call center volume."
      },
      {
        name: "ShopAssist — E-Commerce Conversational Commerce Bot",
        tech: "LangChain, GPT-4, Python FastAPI, Shopify API | ₹120 Cr+ Revenue Driven",
        client: "Sole Architect — Built for Myntra (Flipkart Group)",
        desc: "AI shopping assistant with product recommendations, size guidance, order tracking, and returns processing. Uses RAG pipeline over 2M+ product catalog with personalized recommendations driving 23% higher conversion."
      },
      {
        name: "HealthLine — Multilingual Healthcare Triage Bot",
        tech: "Rasa, spaCy, Twilio, PostgreSQL | 800K+ Patients Served",
        client: "Lead NLP Engineer — Built for Practo",
        desc: "Multilingual health triage chatbot supporting Hindi, English, Tamil, and Bengali. Symptom assessment with 91% accuracy, doctor appointment booking, and prescription reminders serving 800K+ patients across Tier 2-3 cities."
      }
    ],
    experience: [
      {
        role: "Senior Chatbot Developer & NLP Engineer",
        company: "Haptik (Reliance Jio) — Mumbai, India",
        date: "Jan 2022 — Dec 2023",
        bullets: [
          "Led development of enterprise chatbots for 15+ Fortune 500 clients handling 50M+ monthly conversations",
          "Built custom NLU pipeline improving intent classification accuracy from 82% to 96%",
          "Architected multi-channel bot framework supporting WhatsApp, web, Slack, and voice simultaneously",
          "Reduced average chatbot development time from 8 weeks to 3 weeks through reusable component library"
        ]
      },
      {
        role: "Chatbot Developer",
        company: "Yellow.ai — Bengaluru, India",
        date: "Jun 2020 — Dec 2021",
        bullets: [
          "Developed conversational AI solutions for banking, insurance, and e-commerce verticals",
          "Built Dialogflow CX agents with 200+ intents and context-aware multi-turn conversations",
          "Integrated chatbots with CRM systems (Salesforce, Zendesk) reducing support ticket volume by 45%",
          "Created automated testing framework for conversation flows with 95% regression coverage"
        ]
      }
    ]
  },

  /* ── 24. Cloud Computing ─────────────────────────────────── */
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    field: "Programming & Tech",
    icon: "☁️",
    color: "#0EA5E9",
    description: "Cloud infrastructure architecture, migration, and optimization",
    badge: "Cloud Architect & Infrastructure Engineer",
    title: "Senior Cloud Architect & Infrastructure Engineer",
    summary: "Seasoned cloud architect with 5+ years designing and managing production infrastructure on AWS, GCP, and Azure for high-scale Indian tech companies. Expert in IaC (Terraform, Pulumi), Kubernetes orchestration, serverless architecture, and multi-cloud strategies. Managed infrastructure serving 100M+ users with 99.99% uptime and 40% cost optimization.",
    skills: [
      { name: "AWS (20+ Services)", level: 98 },
      { name: "Google Cloud Platform", level: 96 },
      { name: "Terraform / IaC", level: 97 },
      { name: "Kubernetes / EKS", level: 96 },
      { name: "Serverless Architecture", level: 95 },
      { name: "Cloud Security & IAM", level: 94 }
    ],
    techStack: {
      "Cloud Platforms": ["AWS", "Google Cloud", "Azure", "DigitalOcean", "Cloudflare", "Vercel"],
      "IaC & Orchestration": ["Terraform", "Pulumi", "Kubernetes", "Helm", "ArgoCD", "Crossplane"],
      "Monitoring & Security": ["Datadog", "Prometheus", "Grafana", "AWS GuardDuty", "Vault", "OPA"]
    },
    certifications: [
      { name: "AWS Solutions Architect — Professional", issuer: "Amazon Web Services", year: "2023" },
      { name: "Google Cloud Professional Cloud Architect", issuer: "Google Cloud", year: "2022" },
      { name: "Certified Kubernetes Administrator (CKA)", issuer: "CNCF", year: "2022" },
      { name: "HashiCorp Terraform Associate", issuer: "HashiCorp", year: "2021" }
    ],
    projects: [
      {
        name: "MegaScale — Multi-Region Infrastructure for Meesho",
        tech: "AWS, Terraform, EKS, RDS Aurora, CloudFront | 150M+ Users Served",
        client: "Lead Cloud Architect — Built for Meesho Engineering",
        desc: "Designed and implemented multi-region AWS infrastructure handling 150M+ monthly active users. Auto-scaling EKS clusters across 3 regions with RDS Aurora global databases, achieving 99.99% uptime and 35% cost reduction through reserved instances and spot fleet optimization."
      },
      {
        name: "CloudMigrate — Legacy-to-Cloud Migration Platform",
        tech: "AWS Migration Hub, Terraform, Docker, Jenkins | 200+ Microservices Migrated",
        client: "Senior Cloud Engineer — Built for Infosys Digital",
        desc: "End-to-end cloud migration platform that migrated 200+ microservices from on-premises data centers to AWS. Automated discovery, dependency mapping, and staged migration with zero-downtime cutover, reducing infrastructure costs by 45%."
      },
      {
        name: "ServerlessCart — Event-Driven E-Commerce Backend",
        tech: "AWS Lambda, API Gateway, DynamoDB, EventBridge, CDK | 50K+ RPM",
        client: "Sole Architect — Built for BigBasket (Tata Group)",
        desc: "Fully serverless e-commerce backend processing 50K+ requests/minute during flash sales. Event-driven architecture with Lambda, SQS, and EventBridge handling order processing, inventory sync, and payment callbacks with sub-100ms p99 latency."
      }
    ],
    experience: [
      {
        role: "Senior Cloud Architect",
        company: "Razorpay — Bengaluru, India",
        date: "Mar 2022 — Dec 2023",
        bullets: [
          "Architected multi-cloud infrastructure processing ₹5,000 Cr+ daily payment transactions",
          "Designed Kubernetes platform running 500+ microservices with automated scaling and self-healing",
          "Implemented infrastructure-as-code reducing provisioning time from days to 15 minutes",
          "Led cloud cost optimization initiative saving ₹8 Cr annually through right-sizing and spot instances"
        ]
      },
      {
        role: "Cloud Infrastructure Engineer",
        company: "Freshworks — Chennai, India",
        date: "Jul 2020 — Feb 2022",
        bullets: [
          "Managed AWS and GCP infrastructure serving 60K+ business customers globally",
          "Built Terraform modules library with 50+ reusable components adopted across 8 engineering teams",
          "Implemented GitOps workflow with ArgoCD reducing deployment failures by 70%",
          "Designed disaster recovery architecture achieving RPO < 1 minute and RTO < 5 minutes"
        ]
      }
    ]
  },

  /* ── 25. Cryptocurrencies & Tokens ───────────────────────── */
  {
    id: "crypto-tokens",
    name: "Cryptocurrencies & Tokens",
    field: "Programming & Tech",
    icon: "🪙",
    color: "#F59E0B",
    description: "Cryptocurrency token development, DeFi protocols, and tokenomics",
    badge: "Crypto & Token Development Specialist",
    title: "Senior Cryptocurrency Developer & Tokenomics Architect",
    summary: "Specialized crypto developer with 4+ years building tokens, DeFi protocols, and decentralized exchanges on Ethereum, Solana, and BSC. Expert in ERC-20/721/1155 token standards, AMM design, yield farming protocols, and token launch strategies. Delivered 30+ token projects with combined market cap exceeding $500M and $2B+ in cumulative trading volume.",
    skills: [
      { name: "Solidity / ERC Standards", level: 97 },
      { name: "Rust / Solana Programs", level: 95 },
      { name: "DeFi Protocol Design", level: 96 },
      { name: "Tokenomics & Launch", level: 98 },
      { name: "Smart Contract Security", level: 96 },
      { name: "DEX / AMM Architecture", level: 94 }
    ],
    techStack: {
      "Blockchain": ["Ethereum", "Solana", "BSC", "Polygon", "Avalanche", "Arbitrum"],
      "Token & DeFi": ["OpenZeppelin", "Uniswap V3 SDK", "Chainlink Oracles", "The Graph", "Hardhat", "Anchor"],
      "Frontend & Tools": ["ethers.js", "web3.js", "Solana Web3", "IPFS", "Tenderly", "Dune Analytics"]
    },
    certifications: [
      { name: "Ethereum Developer Certification", issuer: "ConsenSys Academy", year: "2023" },
      { name: "Solana Developer Bootcamp", issuer: "Solana Foundation", year: "2022" },
      { name: "DeFi Infrastructure Specialization", issuer: "Chainlink Labs", year: "2022" }
    ],
    projects: [
      {
        name: "RupeeCoin (RPC) — Stablecoin Pegged to INR",
        tech: "Solidity, Polygon, Chainlink, OpenZeppelin | $50M+ TVL",
        client: "Lead Smart Contract Developer — Built for CoinDCX Labs",
        desc: "INR-pegged algorithmic stablecoin with over-collateralization mechanism on Polygon. Chainlink price feeds, multi-sig governance, and automated rebalancing maintaining ±0.5% peg accuracy with $50M+ total value locked."
      },
      {
        name: "YieldVault — Multi-Chain Yield Aggregator",
        tech: "Solidity, Rust, Uniswap V3, Aave, Hardhat | $200M+ TVL",
        client: "Core Protocol Developer — Built for Instadapp",
        desc: "Cross-chain yield optimization protocol aggregating returns across Aave, Compound, and Uniswap V3. Auto-compounding vaults with gas-optimized strategies achieving 15-40% APY. Audited by CertiK and Trail of Bits."
      },
      {
        name: "NFTLaunch — Token Launchpad & IDO Platform",
        tech: "Solidity, React, The Graph, IPFS | 50+ Successful Launches",
        client: "Sole Architect — Built for WazirX NFT Marketplace",
        desc: "Decentralized IDO launchpad with tiered allocation, KYC integration, and vesting schedules. Managed 50+ token launches raising $30M+ combined with anti-bot mechanisms and fair distribution algorithms."
      }
    ],
    experience: [
      {
        role: "Senior Crypto & Token Developer",
        company: "CoinSwitch — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Built token infrastructure for India's largest crypto exchange serving 18M+ users",
          "Developed custom ERC-20 token with vesting, staking, and governance modules",
          "Architected cross-chain bridge supporting Ethereum, Polygon, and BSC with $100M+ bridged volume",
          "Implemented MEV protection and sandwich attack prevention for DEX integrations"
        ]
      },
      {
        role: "Blockchain & Token Developer",
        company: "Polygon (Matic Network) — Mumbai, India",
        date: "Aug 2020 — Mar 2022",
        bullets: [
          "Core contributor to Polygon's token ecosystem tools and developer SDKs",
          "Built token deployment toolkit used by 5,000+ projects launching on Polygon",
          "Developed gas optimization libraries reducing ERC-20 transfer costs by 40%",
          "Created tokenomics simulation framework for pre-launch economic modeling"
        ]
      }
    ]
  },

  /* ── 26. Mobile App Maintenance ──────────────────────────── */
  {
    id: "mobile-app-maintenance",
    name: "Mobile App Maintenance",
    field: "Programming & Tech",
    icon: "🔧",
    color: "#10B981",
    description: "Ongoing mobile app support, bug fixes, performance optimization, and updates",
    badge: "Mobile App Maintenance & Support Specialist",
    title: "Senior Mobile App Maintenance Engineer & Performance Optimizer",
    summary: "Dedicated mobile app maintenance specialist with 5+ years keeping production apps healthy across iOS and Android. Expert in crash analysis, performance profiling, OS migration, dependency updates, and technical debt reduction. Maintained 60+ production apps serving 80M+ combined users with 99.9%+ crash-free rates and sub-2s launch times.",
    skills: [
      { name: "Crash Analysis / Crashlytics", level: 98 },
      { name: "Performance Profiling", level: 97 },
      { name: "OS Migration (iOS/Android)", level: 96 },
      { name: "CI/CD Pipeline Maintenance", level: 95 },
      { name: "Technical Debt Reduction", level: 96 },
      { name: "App Store Compliance", level: 94 }
    ],
    techStack: {
      "Monitoring & Analytics": ["Firebase Crashlytics", "Sentry", "New Relic Mobile", "Datadog RUM", "Instabug", "App Annie"],
      "CI/CD & Testing": ["Fastlane", "Bitrise", "Codemagic", "Detox", "XCTest", "Espresso"],
      "Platforms": ["iOS (Swift/ObjC)", "Android (Kotlin/Java)", "Flutter", "React Native", "Xcode", "Android Studio"]
    },
    certifications: [
      { name: "Google Associate Android Developer", issuer: "Google", year: "2023" },
      { name: "Apple App Store Connect Certified", issuer: "Apple", year: "2022" },
      { name: "Firebase Performance Monitoring Specialist", issuer: "Google Cloud", year: "2021" }
    ],
    projects: [
      {
        name: "PhonePe App Stabilization — Crash-Free Rate Improvement",
        tech: "Kotlin, Swift, Crashlytics, Sentry, Instruments | 400M+ Users",
        client: "Senior Maintenance Engineer — Contract for PhonePe",
        desc: "Improved crash-free rate from 97.2% to 99.95% for PhonePe's 400M+ user base. Identified and fixed 150+ crash patterns through systematic Crashlytics analysis, memory leak detection, and ANR resolution. Reduced app cold start time from 4.2s to 1.8s."
      },
      {
        name: "Swiggy iOS 17 & Android 14 Migration",
        tech: "Swift 5.9, Kotlin 1.9, Xcode 15, AGP 8.x | 50M+ Users",
        client: "Lead Migration Engineer — Contract for Swiggy",
        desc: "Full OS migration for Swiggy's consumer and delivery partner apps. Migrated to iOS 17 APIs (ActivityKit, TipKit), Android 14 (predictive back, photo picker), updated 80+ dependencies, and resolved 200+ deprecation warnings with zero production regressions."
      },
      {
        name: "Ola Cabs — Technical Debt Reduction Program",
        tech: "Flutter, Kotlin, Swift, SonarQube, Detox | 30M+ MAU",
        client: "Maintenance Lead — Contract for Ola",
        desc: "9-month technical debt reduction program reducing code complexity by 40%. Migrated from RxJava to Coroutines, removed 50K+ lines of dead code, consolidated 12 flavor variants to 4, and reduced build times from 18min to 6min."
      }
    ],
    experience: [
      {
        role: "Senior Mobile Maintenance Engineer",
        company: "Flipkart (Walmart Inc.) — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Led maintenance of Flipkart's flagship app serving 200M+ users with 99.97% crash-free rate",
          "Managed quarterly OS migration cycles for iOS and Android with zero downtime",
          "Reduced ANR (Application Not Responding) rate by 65% through systematic profiling",
          "Built automated regression testing pipeline catching 90% of issues before release"
        ]
      },
      {
        role: "Mobile App Support Engineer",
        company: "Paytm (One97 Communications) — Noida, India",
        date: "Jul 2020 — Mar 2022",
        bullets: [
          "Maintained Paytm's super-app across 5 modules (payments, mall, money, insurance, gold)",
          "Resolved 500+ production bugs with average resolution time of 4 hours",
          "Optimized app size from 85MB to 42MB through asset optimization and code splitting",
          "Established on-call rotation and incident response playbooks for mobile-specific outages"
        ]
      }
    ]
  },

  /* ── 27. QA & Review ─────────────────────────────────────── */
  {
    id: "qa-review",
    name: "QA & Review",
    field: "Programming & Tech",
    icon: "🔍",
    color: "#6366F1",
    description: "Quality assurance testing, code review, and software testing automation",
    badge: "QA Engineer & Test Automation Specialist",
    title: "Senior QA Engineer & Test Automation Architect",
    summary: "Meticulous QA engineer with 5+ years building comprehensive testing strategies for web, mobile, and API applications. Expert in Selenium, Cypress, Playwright, Appium, and performance testing with k6/JMeter. Architected test automation frameworks reducing release cycles from 2 weeks to 2 days while maintaining 99.8% defect detection rate across 40+ enterprise projects.",
    skills: [
      { name: "Selenium / Playwright", level: 97 },
      { name: "Cypress / Jest / Mocha", level: 96 },
      { name: "Appium / Mobile Testing", level: 95 },
      { name: "API Testing (Postman/k6)", level: 97 },
      { name: "CI/CD Test Integration", level: 96 },
      { name: "Performance & Load Testing", level: 94 }
    ],
    techStack: {
      "Test Automation": ["Selenium", "Playwright", "Cypress", "Appium", "Detox", "WebdriverIO"],
      "API & Performance": ["Postman/Newman", "k6", "JMeter", "Artillery", "REST Assured", "Gatling"],
      "CI/CD & Reporting": ["Jenkins", "GitHub Actions", "Allure Reports", "TestRail", "BrowserStack", "Sauce Labs"]
    },
    certifications: [
      { name: "ISTQB Advanced Test Automation Engineer", issuer: "ISTQB", year: "2023" },
      { name: "AWS Certified DevOps Engineer", issuer: "Amazon Web Services", year: "2022" },
      { name: "Cypress Ambassador Certification", issuer: "Cypress.io", year: "2021" }
    ],
    projects: [
      {
        name: "TestForge — Enterprise Test Automation Framework",
        tech: "Playwright, TypeScript, GitHub Actions, Allure | 15,000+ Test Cases",
        client: "Lead QA Architect — Built for Razorpay",
        desc: "Enterprise-grade test automation framework with 15,000+ automated tests across web, mobile, and API. Page Object Model with auto-healing selectors, parallel execution across 50+ browser configurations, and visual regression testing catching UI bugs with 99.8% accuracy."
      },
      {
        name: "LoadStorm — E-Commerce Performance Testing Suite",
        tech: "k6, Grafana, InfluxDB, AWS, Docker | 500K+ Virtual Users",
        client: "Senior Performance Engineer — Built for Flipkart",
        desc: "Distributed load testing platform simulating 500K+ concurrent users for Big Billion Day sales. Identified and resolved 30+ performance bottlenecks, achieving 99.99% uptime during 10x traffic spikes with sub-200ms API response times."
      },
      {
        name: "MobileQA — Cross-Platform Mobile Test Automation",
        tech: "Appium, BrowserStack, Detox, Jenkins | 200+ Device Configs",
        client: "QA Lead — Built for Swiggy",
        desc: "Cross-platform mobile test suite running on 200+ device configurations via BrowserStack. Automated critical user journeys (ordering, payment, tracking) with 95% flaky test elimination and 80% reduction in manual QA effort."
      }
    ],
    experience: [
      {
        role: "Senior QA Automation Engineer",
        company: "Razorpay — Bengaluru, India",
        date: "Mar 2022 — Dec 2023",
        bullets: [
          "Built and maintained test automation framework covering 15,000+ test cases across payments platform",
          "Reduced release cycle from 2 weeks to 2 days through comprehensive CI/CD test integration",
          "Achieved 99.8% defect detection rate in pre-production with zero critical bugs reaching production",
          "Mentored team of 8 QA engineers and established testing best practices across 5 product teams"
        ]
      },
      {
        role: "QA Engineer",
        company: "Freshworks — Chennai, India",
        date: "Jul 2020 — Feb 2022",
        bullets: [
          "Developed API test automation suite with 3,000+ tests for Freshdesk and Freshsales APIs",
          "Built visual regression testing pipeline catching 200+ UI inconsistencies per release",
          "Implemented accessibility testing (WCAG 2.1 AA) across all Freshworks products",
          "Created test data management system reducing test environment setup from 2 hours to 10 minutes"
        ]
      }
    ]
  },

  /* ── 28. Software Development ────────────────────────────── */
  {
    id: "software-development",
    name: "Software Development",
    field: "Programming & Tech",
    icon: "💻",
    color: "#3B82F6",
    description: "Full-stack software development, system design, and enterprise applications",
    badge: "Full-Stack Software Developer & System Architect",
    title: "Senior Software Developer & System Architect",
    summary: "Versatile full-stack developer with 5+ years building enterprise software, SaaS platforms, and distributed systems. Expert in TypeScript, Python, Go, and Java with deep knowledge of microservices architecture, event-driven systems, and domain-driven design. Delivered 50+ production systems serving 100M+ users with 99.99% availability.",
    skills: [
      { name: "TypeScript / Node.js", level: 98 },
      { name: "Python / Django / FastAPI", level: 96 },
      { name: "Go / Microservices", level: 95 },
      { name: "System Design / DDD", level: 97 },
      { name: "PostgreSQL / Redis / Kafka", level: 96 },
      { name: "Docker / Kubernetes", level: 95 }
    ],
    techStack: {
      "Languages & Frameworks": ["TypeScript", "Python", "Go", "Java", "Node.js", "Next.js"],
      "Data & Messaging": ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "Elasticsearch", "RabbitMQ"],
      "DevOps & Tools": ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Datadog", "Sentry"]
    },
    certifications: [
      { name: "AWS Solutions Architect — Associate", issuer: "Amazon Web Services", year: "2023" },
      { name: "Google Professional Cloud Developer", issuer: "Google Cloud", year: "2022" },
      { name: "MongoDB Certified Developer", issuer: "MongoDB Inc.", year: "2021" },
      { name: "Certified Kubernetes Application Developer (CKAD)", issuer: "CNCF", year: "2022" }
    ],
    projects: [
      {
        name: "PayFlow — Real-Time Payment Orchestration Engine",
        tech: "Go, Kafka, PostgreSQL, Redis, gRPC | ₹2,000 Cr+ Daily Volume",
        client: "Lead Backend Engineer — Built for Razorpay",
        desc: "High-throughput payment orchestration engine processing ₹2,000 Cr+ daily across 50+ payment gateways. Event-driven architecture with Kafka handling 100K+ TPS, circuit breakers, and automatic failover achieving 99.99% transaction success rate."
      },
      {
        name: "InventoryOS — Multi-Tenant Inventory Management SaaS",
        tech: "TypeScript, Next.js, PostgreSQL, Redis, Docker | 10K+ Merchants",
        client: "Sole Architect — Built for Delhivery",
        desc: "Multi-tenant SaaS platform managing real-time inventory across 10K+ merchants and 500+ warehouses. CQRS pattern with event sourcing, real-time stock sync, demand forecasting, and automated reorder triggers reducing stockouts by 35%."
      },
      {
        name: "DataPipe — ETL & Real-Time Analytics Platform",
        tech: "Python, Apache Kafka, Spark, Airflow, Elasticsearch | 5TB+ Daily",
        client: "Senior Data Engineer — Built for Flipkart",
        desc: "Enterprise data pipeline processing 5TB+ daily from 200+ data sources. Real-time stream processing with Kafka Streams, batch processing with Spark, and analytics dashboard with Elasticsearch powering business intelligence for 50+ teams."
      }
    ],
    experience: [
      {
        role: "Senior Software Engineer",
        company: "Razorpay — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Architected payment orchestration layer processing ₹2,000 Cr+ daily across 50+ gateways",
          "Led migration from monolith to 40+ microservices reducing deployment time from hours to minutes",
          "Built distributed tracing system improving mean time to detection from 30min to 2min",
          "Mentored 8 engineers and established coding standards adopted across 200+ developer org"
        ]
      },
      {
        role: "Software Developer",
        company: "Freshworks — Chennai, India",
        date: "Jul 2020 — Mar 2022",
        bullets: [
          "Built core modules for Freshdesk serving 60K+ business customers globally",
          "Designed and implemented real-time notification system handling 10M+ events/day",
          "Reduced API latency by 60% through caching strategies and query optimization",
          "Led adoption of TypeScript across frontend teams improving code quality metrics by 40%"
        ]
      }
    ]
  },

  /* ── 29. Support & IT ────────────────────────────────────── */
  {
    id: "support-it",
    name: "Support & IT",
    field: "Programming & Tech",
    icon: "🛠️",
    color: "#64748B",
    description: "IT support, system administration, helpdesk solutions, and technical support",
    badge: "IT Support & Systems Administration Specialist",
    title: "Senior IT Support Engineer & Systems Administrator",
    summary: "Experienced IT support specialist with 5+ years managing enterprise IT infrastructure, helpdesk operations, and system administration. Expert in ITIL frameworks, Active Directory, endpoint management, and automation. Managed IT operations for organizations with 5,000+ employees, achieving 99.9% system uptime and 95% first-call resolution rate.",
    skills: [
      { name: "ITIL / Service Management", level: 96 },
      { name: "Active Directory / Azure AD", level: 97 },
      { name: "Endpoint Management (Intune)", level: 95 },
      { name: "PowerShell / Bash Automation", level: 96 },
      { name: "Network Administration", level: 94 },
      { name: "Security & Compliance", level: 95 }
    ],
    techStack: {
      "IT Management": ["ServiceNow", "Jira Service Mgmt", "Freshservice", "ManageEngine", "Zendesk", "PagerDuty"],
      "Infrastructure": ["Active Directory", "Azure AD", "Microsoft Intune", "SCCM", "VMware", "Cisco Meraki"],
      "Automation & Monitoring": ["PowerShell", "Ansible", "Nagios", "Zabbix", "Splunk", "Datadog"]
    },
    certifications: [
      { name: "ITIL 4 Foundation", issuer: "Axelos", year: "2023" },
      { name: "Microsoft 365 Certified: Enterprise Administrator Expert", issuer: "Microsoft", year: "2022" },
      { name: "CompTIA Security+", issuer: "CompTIA", year: "2021" },
      { name: "AWS SysOps Administrator — Associate", issuer: "Amazon Web Services", year: "2022" }
    ],
    projects: [
      {
        name: "HelpDesk360 — AI-Powered IT Service Management Platform",
        tech: "ServiceNow, Python, Azure AD, Power Automate | 5,000+ Users",
        client: "Lead IT Architect — Built for Wipro Digital",
        desc: "Enterprise IT service management platform with AI-powered ticket routing, automated resolution for common issues (password resets, VPN, printer), and self-service portal. Reduced average ticket resolution time from 4 hours to 45 minutes with 95% user satisfaction."
      },
      {
        name: "ZeroTouch — Automated Endpoint Provisioning System",
        tech: "Microsoft Intune, Autopilot, PowerShell, Azure | 3,000+ Devices",
        client: "Senior IT Engineer — Built for Infosys BPO",
        desc: "Zero-touch deployment system for 3,000+ Windows and Mac endpoints. Automated OS imaging, software deployment, policy enforcement, and compliance checks. Reduced device provisioning from 6 hours to 30 minutes with 99% success rate."
      },
      {
        name: "NetGuard — Network Monitoring & Auto-Remediation",
        tech: "Zabbix, Ansible, Python, Cisco API, Grafana | 500+ Network Devices",
        client: "Network Operations Lead — Built for TCS",
        desc: "Automated network monitoring and remediation system for 500+ switches, routers, and access points. Custom Zabbix templates with Ansible playbooks auto-resolving 60% of network incidents within 5 minutes, achieving 99.95% network uptime."
      }
    ],
    experience: [
      {
        role: "Senior IT Support Engineer",
        company: "Infosys — Bengaluru, India",
        date: "Mar 2022 — Dec 2023",
        bullets: [
          "Managed IT infrastructure for 5,000+ employee campus including network, endpoints, and cloud services",
          "Implemented Microsoft Intune MDM reducing device management overhead by 60%",
          "Built PowerShell automation suite handling 200+ daily routine tasks (account provisioning, access management)",
          "Achieved 95% first-call resolution rate and 99.9% system uptime SLA compliance"
        ]
      },
      {
        role: "IT Support Specialist",
        company: "Wipro — Pune, India",
        date: "Jul 2020 — Feb 2022",
        bullets: [
          "Provided L2/L3 technical support for enterprise clients across banking and telecom verticals",
          "Managed Active Directory forest with 10,000+ user objects and Group Policy administration",
          "Deployed and maintained VMware ESXi clusters hosting 100+ production virtual machines",
          "Created knowledge base with 500+ articles reducing repeat tickets by 35%"
        ]
      }
    ]
  },

  /* ── 30. Trading Bots Development ────────────────────────── */
  {
    id: "trading-bots",
    name: "Trading Bots Development",
    field: "Programming & Tech",
    icon: "📈",
    color: "#059669",
    description: "Algorithmic trading bot development for crypto, forex, and stock markets",
    badge: "Trading Bot & Algorithmic Trading Developer",
    title: "Senior Trading Bot Developer & Quantitative Engineer",
    summary: "Specialized trading bot developer with 4+ years building algorithmic trading systems for crypto, forex, and Indian equities. Expert in Python, Rust, and C++ with deep knowledge of technical analysis, market microstructure, and low-latency execution. Developed 25+ production trading bots managing ₹500 Cr+ in automated trading volume with consistent alpha generation.",
    skills: [
      { name: "Python / NumPy / Pandas", level: 98 },
      { name: "Rust / C++ (Low Latency)", level: 95 },
      { name: "Exchange APIs (Binance/Zerodha)", level: 97 },
      { name: "Technical Analysis / Indicators", level: 96 },
      { name: "ML-Based Signal Generation", level: 94 },
      { name: "Risk Management Systems", level: 96 }
    ],
    techStack: {
      "Trading & Analysis": ["ccxt", "Backtrader", "Zipline", "TA-Lib", "Kite Connect", "Alpaca API"],
      "ML & Data": ["scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Apache Arrow"],
      "Infrastructure": ["Redis", "TimescaleDB", "Kafka", "WebSocket", "Docker", "AWS EC2 (co-located)"]
    },
    certifications: [
      { name: "NISM Series VIII: Equity Derivatives", issuer: "NISM (SEBI)", year: "2023" },
      { name: "CFA Level I Candidate", issuer: "CFA Institute", year: "2022" },
      { name: "Quantitative Finance Certificate", issuer: "WorldQuant University", year: "2021" }
    ],
    projects: [
      {
        name: "AlphaGrid — Multi-Strategy Crypto Trading Bot",
        tech: "Python, Binance API, Redis, TensorFlow, Docker | ₹200 Cr+ Monthly Volume",
        client: "Sole Developer — Built for CoinDCX Trading Desk",
        desc: "Multi-strategy crypto trading bot executing grid, DCA, mean-reversion, and momentum strategies across 50+ pairs on Binance and CoinDCX. ML-based regime detection switching strategies dynamically. Achieved 32% annualized returns with max drawdown under 8%."
      },
      {
        name: "NiftyEdge — Options Trading Automation for NSE",
        tech: "Python, Kite Connect, TA-Lib, TimescaleDB | ₹100 Cr+ Monthly Notional",
        client: "Lead Quantitative Developer — Built for Angel One",
        desc: "Automated options trading system for Nifty 50 and Bank Nifty with real-time Greeks computation, volatility surface modeling, and delta-neutral hedging. Executes iron condors, straddles, and calendar spreads with sub-second order placement via Kite Connect."
      },
      {
        name: "ArbiBot — Cross-Exchange Crypto Arbitrage Engine",
        tech: "Rust, WebSocket, ccxt, Redis, PostgreSQL | 10K+ Trades/Day",
        client: "Core Developer — Built for WazirX Trading",
        desc: "Ultra-low-latency arbitrage bot detecting and executing price discrepancies across 8 crypto exchanges in under 50ms. Custom WebSocket framework in Rust for sub-millisecond market data processing. Consistently captures 5-15 bps per arbitrage cycle."
      }
    ],
    experience: [
      {
        role: "Senior Trading Bot Developer",
        company: "Zerodha — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Developed algorithmic trading tools and APIs used by 10M+ retail traders on Kite platform",
          "Built backtesting engine processing 10 years of tick-level data for strategy validation",
          "Architected low-latency order execution pipeline with sub-5ms order-to-fill latency",
          "Created risk management module with real-time P&L tracking, position limits, and circuit breakers"
        ]
      },
      {
        role: "Quantitative Developer",
        company: "CoinDCX — Mumbai, India",
        date: "Aug 2020 — Mar 2022",
        bullets: [
          "Built market-making bot providing liquidity across 100+ crypto pairs with tight spreads",
          "Developed ML-based price prediction models achieving 61% directional accuracy on 1-hour timeframes",
          "Implemented portfolio rebalancing algorithms optimizing for Sharpe ratio across 30+ assets",
          "Created real-time monitoring dashboard tracking P&L, exposure, and risk metrics across all bots"
        ]
      }
    ]
  },

  /* ── 31. User Testing ────────────────────────────────────── */
  {
    id: "user-testing",
    name: "User Testing",
    field: "Programming & Tech",
    icon: "👥",
    color: "#EC4899",
    description: "User testing, usability research, A/B testing, and UX validation",
    badge: "User Testing & UX Research Specialist",
    title: "Senior User Testing Specialist & UX Researcher",
    summary: "Expert UX researcher and user testing specialist with 5+ years conducting usability studies, A/B tests, and user research for India's leading tech companies. Proficient in Maze, UserTesting, Hotjar, Optimizely, and custom research methodologies. Conducted 300+ usability studies and 500+ A/B tests driving measurable product improvements across apps serving 200M+ users.",
    skills: [
      { name: "Usability Testing / Maze", level: 97 },
      { name: "A/B Testing / Optimizely", level: 96 },
      { name: "User Research Methods", level: 98 },
      { name: "Heatmaps / Session Replay", level: 95 },
      { name: "Accessibility Testing", level: 94 },
      { name: "Data Analysis / Statistics", level: 96 }
    ],
    techStack: {
      "Testing & Research": ["Maze", "UserTesting.com", "Lookback", "Optimal Workshop", "dscout", "UsabilityHub"],
      "Analytics & A/B": ["Optimizely", "VWO", "Google Optimize", "Hotjar", "FullStory", "Mixpanel"],
      "Design & Reporting": ["Figma", "Miro", "Dovetail", "Notion", "Google Sheets", "Tableau"]
    },
    certifications: [
      { name: "Google UX Design Professional Certificate", issuer: "Google (Coursera)", year: "2023" },
      { name: "Nielsen Norman Group UX Research Certification", issuer: "NNGroup", year: "2022" },
      { name: "Certified Usability Analyst (CUA)", issuer: "Human Factors International", year: "2021" }
    ],
    projects: [
      {
        name: "Flipkart Checkout Flow Optimization",
        tech: "Optimizely, Hotjar, Maze, Mixpanel | 200M+ Users Impacted",
        client: "Lead UX Researcher — Contract for Flipkart",
        desc: "Comprehensive usability study of Flipkart's checkout flow identifying 15 friction points. Conducted 50+ moderated user tests, analyzed 10K+ session recordings, and ran 8 A/B tests resulting in 22% increase in checkout completion rate and ₹800 Cr+ annual revenue uplift."
      },
      {
        name: "CRED Onboarding UX Redesign",
        tech: "Maze, Lookback, Figma, Google Analytics | 15M+ Users",
        client: "Senior UX Researcher — Contract for CRED",
        desc: "End-to-end user research for CRED's onboarding redesign. Conducted competitive analysis, card sorting, tree testing, and 30+ think-aloud sessions. Redesigned flow reduced drop-off from 45% to 18% and increased Day-7 retention by 35%."
      },
      {
        name: "Accessibility Audit — Aarogya Setu Health App",
        tech: "WAVE, axe DevTools, VoiceOver, TalkBack, NVDA | 200M+ Downloads",
        client: "Accessibility Consultant — Government of India",
        desc: "WCAG 2.1 AA accessibility audit for India's national health app. Identified 80+ accessibility issues across 40 screens, provided remediation guidelines, and validated fixes. Ensured screen reader compatibility for visually impaired users in 12 Indian languages."
      }
    ],
    experience: [
      {
        role: "Senior UX Researcher & Testing Lead",
        company: "Swiggy — Bengaluru, India",
        date: "Mar 2022 — Dec 2023",
        bullets: [
          "Led user research team conducting 200+ usability studies for Swiggy's consumer and restaurant apps",
          "Designed and executed A/B testing program with 100+ experiments increasing key metrics by 15-30%",
          "Built user testing lab with eye-tracking, screen recording, and physiological measurement capabilities",
          "Created company-wide research repository with 1,000+ insights accessible to all product teams"
        ]
      },
      {
        role: "UX Researcher",
        company: "Myntra (Flipkart Group) — Bengaluru, India",
        date: "Jul 2020 — Feb 2022",
        bullets: [
          "Conducted 100+ moderated and unmoderated usability tests for fashion e-commerce features",
          "Built heatmap and session replay analysis pipeline identifying UX friction across 50+ pages",
          "Ran accessibility testing program ensuring WCAG compliance across Myntra's web and mobile apps",
          "Developed survey framework deployed to 500K+ users for quantitative attitude measurement"
        ]
      }
    ]
  },

  /* ── 32. Vibe Coding ─────────────────────────────────────── */
  {
    id: "vibe-coding",
    name: "Vibe Coding",
    field: "Programming & Tech",
    icon: "✨",
    color: "#A855F7",
    description: "AI-assisted development, prompt engineering, and rapid prototyping with AI tools",
    badge: "Vibe Coder & AI-Assisted Development Specialist",
    title: "Senior Vibe Coder & AI-Assisted Development Architect",
    summary: "Pioneer in AI-assisted 'vibe coding' with 3+ years leveraging Claude, GPT-4, Copilot, Cursor, and Bolt to build production applications 10x faster. Expert in prompt engineering, AI pair programming, and rapid prototyping workflows. Shipped 50+ production projects using AI-assisted development, from MVPs to enterprise features, reducing development time by 70% while maintaining code quality.",
    skills: [
      { name: "Claude / Anthropic API", level: 98 },
      { name: "Cursor / AI IDE Workflows", level: 97 },
      { name: "Prompt Engineering", level: 98 },
      { name: "GitHub Copilot / CodeWhisperer", level: 96 },
      { name: "Rapid Prototyping (Bolt/v0)", level: 95 },
      { name: "AI Code Review & Refactoring", level: 96 }
    ],
    techStack: {
      "AI Tools": ["Claude Code", "Cursor IDE", "GitHub Copilot", "Bolt.new", "v0.dev", "Windsurf"],
      "Frameworks": ["Next.js", "React", "TypeScript", "Python", "Tailwind CSS", "Supabase"],
      "Deployment": ["Vercel", "Netlify", "Railway", "Supabase", "Cloudflare Workers", "Docker"]
    },
    certifications: [
      { name: "Anthropic Claude Partner Developer", issuer: "Anthropic", year: "2024" },
      { name: "OpenAI API Developer Certification", issuer: "OpenAI", year: "2023" },
      { name: "Google AI Essentials", issuer: "Google", year: "2023" }
    ],
    projects: [
      {
        name: "PortfolioFactory — AI-Powered CV & Portfolio Generator",
        tech: "Claude Code, Next.js, Tailwind, Vercel, Gemini API | 500+ Portfolios Generated",
        client: "Sole Developer — Personal SaaS Product",
        desc: "AI-powered portfolio and CV generator that creates Fiverr Pro-quality portfolio websites from structured data. Built entirely with vibe coding using Claude Code as the primary development tool. Generates responsive, SEO-optimized sites with custom themes deployed to Vercel in under 60 seconds."
      },
      {
        name: "ShipFast — AI-Assisted SaaS Boilerplate Generator",
        tech: "Cursor IDE, GPT-4, Next.js, Supabase, Stripe | 200+ Projects Bootstrapped",
        client: "Sole Developer — Open Source Tool",
        desc: "SaaS boilerplate generator using AI-assisted development to scaffold complete applications with auth, payments, dashboards, and landing pages. Cursor IDE with custom .cursorrules for consistent code generation. Reduces SaaS MVP development from 2 weeks to 2 hours."
      },
      {
        name: "ContentEngine — AI Content Pipeline for E-Commerce",
        tech: "Claude API, Python, Supabase, Vercel Functions | 50K+ Product Descriptions",
        client: "Lead AI Developer — Built for Meesho",
        desc: "AI-powered content generation pipeline producing product descriptions, SEO metadata, and marketing copy for 50K+ SKUs. Custom prompt chains with Claude for tone-consistent, brand-aligned content. Reduced content creation cost by 90% while improving conversion rates by 15%."
      }
    ],
    experience: [
      {
        role: "Senior AI-Assisted Developer & Vibe Coding Lead",
        company: "Self-Employed (Freelance) — Remote, India",
        date: "Jan 2024 — Present",
        bullets: [
          "Deliver production applications 10x faster using AI-assisted development workflows",
          "Built 20+ client projects using Claude Code, Cursor, and Bolt with 100% client satisfaction",
          "Developed custom AI coding workflows and prompt libraries for enterprise development teams",
          "Created vibe coding training program adopted by 3 development agencies for their teams"
        ]
      },
      {
        role: "Full-Stack Developer (AI-Augmented)",
        company: "Flipkart (Walmart Inc.) — Bengaluru, India",
        date: "Apr 2022 — Dec 2023",
        bullets: [
          "Early adopter of GitHub Copilot, increasing team development velocity by 40%",
          "Built internal AI coding assistant using GPT-4 API for code review and documentation",
          "Prototyped 10+ feature MVPs in hackathons using AI-assisted rapid development",
          "Led company-wide AI tools adoption program training 200+ developers on effective AI pair programming"
        ]
      }
    ]
  },

  /* ── 33. Website Maintenance ─────────────────────────────── */
  {
    id: "website-maintenance",
    name: "Website Maintenance",
    field: "Programming & Tech",
    icon: "🌐",
    color: "#14B8A6",
    description: "Ongoing website support, updates, security patches, and performance optimization",
    badge: "Website Maintenance & Performance Specialist",
    title: "Senior Website Maintenance Engineer & Performance Optimizer",
    summary: "Dedicated website maintenance specialist with 5+ years keeping production websites healthy, secure, and performant. Expert in WordPress, Shopify, Next.js, and custom CMS maintenance with focus on Core Web Vitals optimization, security hardening, and uptime monitoring. Maintained 100+ production websites with 99.99% uptime and consistent 90+ Lighthouse scores.",
    skills: [
      { name: "WordPress Maintenance", level: 97 },
      { name: "Shopify / E-Commerce", level: 96 },
      { name: "Core Web Vitals / Lighthouse", level: 98 },
      { name: "Security Hardening / SSL", level: 96 },
      { name: "Uptime Monitoring / Alerting", level: 95 },
      { name: "Backup & Disaster Recovery", level: 94 }
    ],
    techStack: {
      "CMS & Platforms": ["WordPress", "Shopify", "Next.js", "Webflow", "Wix", "Squarespace"],
      "Performance & Security": ["Cloudflare", "Sucuri", "Wordfence", "GTmetrix", "PageSpeed Insights", "SSL Labs"],
      "Monitoring & Automation": ["UptimeRobot", "Pingdom", "ManageWP", "UpdraftPlus", "WP-CLI", "Cron Jobs"]
    },
    certifications: [
      { name: "Google Analytics 4 Certification", issuer: "Google", year: "2023" },
      { name: "Cloudflare Certified Security Specialist", issuer: "Cloudflare", year: "2022" },
      { name: "Shopify Partner Academy Certified", issuer: "Shopify", year: "2021" }
    ],
    projects: [
      {
        name: "Enterprise WordPress Fleet Maintenance — 80+ Sites",
        tech: "WordPress, ManageWP, Cloudflare, UpdraftPlus, WP-CLI | 80+ Sites",
        client: "Lead WordPress Engineer — Contract for WPEngine Agency Partners",
        desc: "Managed maintenance for 80+ WordPress sites including daily backups, weekly plugin/theme updates, security scanning, and uptime monitoring. Automated 90% of routine tasks with WP-CLI scripts and ManageWP dashboards. Zero security breaches in 2 years of management."
      },
      {
        name: "Shopify Store Optimization — Lenskart Online",
        tech: "Shopify Plus, Liquid, Cloudflare, Google PageSpeed | 5M+ Monthly Visitors",
        client: "Senior Shopify Developer — Contract for Lenskart",
        desc: "Performance optimization for Lenskart's Shopify Plus store serving 5M+ monthly visitors. Improved Lighthouse score from 42 to 94, reduced LCP from 6.2s to 1.4s, implemented lazy loading and image optimization, and configured Cloudflare caching saving 60% on bandwidth costs."
      },
      {
        name: "MedPortal — Healthcare Website Security Hardening",
        tech: "Next.js, Cloudflare WAF, Sucuri, AWS WAF, Let's Encrypt | HIPAA Compliant",
        client: "Security Consultant — Contract for Practo",
        desc: "Security hardening and HIPAA compliance for Practo's patient portal. Implemented WAF rules blocking 50K+ malicious requests/day, SSL/TLS configuration achieving A+ rating, CSP headers, and automated vulnerability scanning. Achieved SOC 2 Type II compliance."
      }
    ],
    experience: [
      {
        role: "Senior Website Maintenance Engineer",
        company: "Developer Starter Kit (Agency) — Remote, India",
        date: "Jan 2022 — Dec 2023",
        bullets: [
          "Managed maintenance contracts for 100+ client websites across WordPress, Shopify, and custom platforms",
          "Achieved 99.99% uptime SLA with proactive monitoring and automated incident response",
          "Improved average client Lighthouse score from 55 to 92 through systematic performance optimization",
          "Built automated backup and disaster recovery system with 15-minute RPO and 1-hour RTO"
        ]
      },
      {
        role: "Web Developer & Maintenance Specialist",
        company: "Developer Starter Kit (Agency) — Remote, India",
        date: "Jul 2020 — Dec 2021",
        bullets: [
          "Performed weekly maintenance for 50+ WordPress and Shopify sites including updates and security patches",
          "Resolved 500+ client support tickets with average response time under 2 hours",
          "Implemented Core Web Vitals monitoring dashboard tracking performance across entire client portfolio",
          "Created maintenance documentation and runbooks reducing onboarding time for new team members by 70%"
        ]
      }
    ]
  }
];

// Export for browser and Node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CATEGORIES };
}
