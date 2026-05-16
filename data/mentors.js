const mentors = [
  {
    id: "M12351",
    name: "Harish Vardhana",
    gender: "Male",
    date_of_birth: "1989-06-12",
    location: "Chennai, Tamil Nadu, India",
    profile_picture_url: "/p1.jpg",
    contact: {
      email: "harish.vardhana@example.com",
      phone: "+91-9000000000",
      linkedin_url: "https://www.linkedin.com/in/harish-vardhana/",
      website: "https://kalmrobotics.com"
    },
    professional_background: {
      current_position: "Founder & CTO",
      organization: "KAL-M Robotics and Innovations",
      years_of_experience: 8,
      industries: ["Robotics", "Artificial Intelligence", "Defense Technology"],
      skills: [
        "Robotics",
        "Artificial Intelligence",
        "Product Development",
        "Leadership",
        "Startup Management"
      ]
    },
    mentorship_details: {
      areas_of_expertise: [
        "Robotics Engineering",
        "AI Product Development",
        "Startup & Entrepreneurship",
        "Career Guidance",
        "Leadership"
      ],
      availability: ["Wednesday 7-9 PM", "Saturday 11-1 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Tamil"],
      mentorship_style: "Hands-on & Strategic"
    },
    education: [
      {
        degree: "Postgraduate Certificate in Leadership & Management",
        institution: "Michigan State University",
        year: 2023
      },
      {
        degree: "PGP – Business Analytics & Business Intelligence",
        institution: "Great Lakes Institute of Management",
        year: 2020
      }
    ],
    social_proof: {
      testimonials: [
        "Highly knowledgeable in robotics and innovation.",
        "Great mentor for startup and product development."
      ],
      rating: 4.8
    },
    metadata: { status: "active" }
  },

  {
    id: "M12352",
    name: "Dhravya Shah",
    gender: "Male",
    date_of_birth: "2002-04-18",
    location: "San Francisco, California, United States",
    profile_picture_url: "/p2.jpg",
    contact: {
      email: "dhravya.shah@example.com",
      phone: "+1-415-555-0198",
      linkedin_url: "https://www.linkedin.com/in/dhravyashah/",
      website: "https://supermemory.ai"
    },
    professional_background: {
      current_position: "Founder & CEO",
      organization: "supermemory",
      years_of_experience: 4,
      industries: ["Artificial Intelligence", "Developer Tools", "Cloud Computing"],
      skills: [
        "AI Agents",
        "Backend Engineering",
        "Python",
        "React.js",
        "Developer Relations"
      ]
    },
    mentorship_details: {
      areas_of_expertise: [
        "Startup Building",
        "AI Engineering",
        "Developer Relations",
        "Hackathons",
        "Career Guidance"
      ],
      availability: ["Saturday 10-12 AM", "Sunday 6-8 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Hands-on & Founder-driven"
    },
    education: [
      {
        degree: "Bachelor's in Computer Science",
        institution: "Arizona State University",
        year: 2023
      }
    ],
    social_proof: {
      testimonials: [
        "Great mentor for startups and AI systems.",
        "Very insightful about developer-focused products."
      ],
      rating: 4.7
    },
    metadata: { status: "active" }
  },


  {
    id: "M12354",
    name: "Evan Spiegel",
    gender: "Male",
    date_of_birth: "1990-06-04",
    location: "Los Angeles, California, United States",
    profile_picture_url: "/p3.jpg",
    contact: {
      email: "evan.spiegel@example.com",
      phone: "+1-310-555-0146",
      linkedin_url: "https://www.linkedin.com/in/evan-spiegel/",
      website: "https://www.snap.com"
    },
    professional_background: {
      current_position: "Co-Founder & CEO",
      organization: "Snap Inc.",
      years_of_experience: 14,
      industries: ["Social Media", "Technology", "Consumer Internet"],
      skills: [
        "Entrepreneurship",
        "Product Design",
        "Leadership",
        "Company Scaling"
      ]
    },
    mentorship_details: {
      areas_of_expertise: [
        "Startup Building",
        "Product Design",
        "Scaling Consumer Products"
      ],
      availability: ["Sunday 9-10 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Visionary & Strategic"
    },
    education: [
      {
        degree: "B.S. in Engineering (Product Design)",
        institution: "Stanford University",
        year: 2013
      }
    ],
    social_proof: {
      testimonials: ["Visionary founder with deep product insight."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },

  {
    id: "M12355",
    name: "Sachin Bansal",
    gender: "Male",
    date_of_birth: "1981-08-05",
    location: "Bengaluru, Karnataka, India",
    profile_picture_url: "/p4.jpg",
    contact: {
      email: "sachin.bansal@example.com",
      phone: "+91-9000001234",
      linkedin_url: "https://www.linkedin.com/in/sachinbansal/",
      website: "https://navi.com"
    },
    professional_background: {
      current_position: "Chairman",
      organization: "Navi",
      years_of_experience: 20,
      industries: ["FinTech", "E-commerce", "Technology"],
      skills: [
        "Entrepreneurship",
        "E-commerce",
        "Scalability",
        "Leadership"
      ]
    },
    mentorship_details: {
      areas_of_expertise: [
        "Startup Building",
        "Scaling Companies",
        "FinTech"
      ],
      availability: ["Saturday 10-11 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Hindi"],
      mentorship_style: "Strategic & Founder-level Guidance"
    },
    education: [
      {
        degree: "Bachelor's Degree in Computer Science",
        institution: "Indian Institute of Technology, Delhi",
        year: 2005
      }
    ],
    social_proof: {
      testimonials: ["Exceptional insight into scaling startups in India."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },

  {
    id: "M12356",
    name: "Deepinder Goyal",
    gender: "Male",
    date_of_birth: "1983-01-26",
    location: "India",
    profile_picture_url: "/p5.jpg",
    contact: {
      email: "deepinder.goyal@example.com",
      phone: "+91-9000012345",
      linkedin_url: "https://www.linkedin.com/in/deepigoyal/",
      website: "https://www.eternal.com"
    },
    professional_background: {
      current_position: "Founder & CEO",
      organization: "Eternal (Zomato Group)",
      years_of_experience: 19,
      industries: ["FoodTech", "E-commerce", "Logistics"],
      skills: [
        "Entrepreneurship",
        "Business Strategy",
        "Scaling Operations"
      ]
    },
    mentorship_details: {
      areas_of_expertise: [
        "Startup Building",
        "Scaling Consumer Businesses",
        "Operations"
      ],
      availability: ["Sunday 8-9 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Hindi"],
      mentorship_style: "Strategic & Founder-level Guidance"
    },
    education: [
      {
        degree: "Bachelor's Degree",
        institution: "Indian Institute of Technology, Delhi",
        year: 2005
      }
    ],
    social_proof: {
      testimonials: ["Visionary leader with deep operational expertise."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },

  {
    id: "M12357",
    name: "Sergey Brin",
    gender: "Male",
    date_of_birth: "1978-09-14",
    location: "Austin, Texas Metropolitan Area, United States",
    profile_picture_url: "/p6.jpg",
    contact: {
      email: "sergey.brin@example.com",
      phone: "+1-512-555-0179",
      linkedin_url: "https://www.linkedin.com/in/sergeybrin/",
      website: ""
    },
    professional_background: {
      current_position: "R&D Senior Member of Technical Staff",
      organization: "AVEVA",
      years_of_experience: 20,
      industries: ["Enterprise Software", "Cloud Computing"],
      skills: [
        "Cloud Architecture",
        "Microservices",
        "Azure",
        ".NET"
      ]
    },
    mentorship_details: {
      areas_of_expertise: [
        "Cloud Architecture",
        "Enterprise Software",
        "System Design"
      ],
      availability: ["Wednesday 7-9 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Russian"],
      mentorship_style: "Technical & Practical"
    },
    education: [
      {
        degree: "Magister, Software Development",
        institution: "Dnipro University of Technology",
        year: 2005
      },
      {
        degree: "MBA",
        institution: "Moscow Business School",
        year: 2009
      }
    ],
    social_proof: {
      testimonials: ["Deep expertise in enterprise cloud systems."],
      rating: 4.8
    },
    metadata: { status: "active" }
  },

  {
    id: "M12358",
    name: "Linus Torvalds",
    gender: "Male",
    date_of_birth: "1969-12-28",
    location: "Portland, Oregon, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/4.jpg",
    contact: {
      email: "linus.torvalds@example.com",
      phone: "+1-503-555-0111",
      linkedin_url: "linkedin.com",
      website: "linuxfoundation.org"
    },
    professional_background: {
      current_position: "Linux Foundation Fellow",
      organization: "The Linux Foundation",
      years_of_experience: 35,
      industries: ["Software Development", "Internet & Web Services"],
      skills: ["C Programming", "Linux Kernel", "Git", "Operating Systems", "Open Source Architecture"]
    },
    mentorship_details: {
      areas_of_expertise: ["Low-Level Programming", "Open Source Contribution", "Systems Architecture"],
      availability: ["Monday 4-5 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Swedish", "Finnish"],
      mentorship_style: "Blunt, Technical & Direct"
    },
    education: [
      { degree: "M.S. in Computer Science", institution: "University of Helsinki", year: 1996 }
    ],
    social_proof: {
      testimonials: ["The ultimate authority on operating systems and git."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },

  {
    id: "M12359",
    name: "Demis Hassabis",
    gender: "Male",
    date_of_birth: "1976-07-27",
    location: "London, England, United Kingdom",
    profile_picture_url: "https://randomuser.me/api/portraits/men/5.jpg",
    contact: {
      email: "demis.hassabis@example.com",
      phone: "+44-20-7946-0192",
      linkedin_url: "linkedin.com",
      website: "https://deepmind.google"
    },
    professional_background: {
      current_position: "CEO & Co-Founder",
      organization: "Google DeepMind",
      years_of_experience: 28,
      industries: ["Artificial Intelligence/Machine Learning", "Data Science & Analytics"],
      skills: ["Deep Learning", "Reinforcement Learning", "Neuroscience", "AI Research", "Game Development"]
    },
    mentorship_details: {
      areas_of_expertise: ["AGI Research", "Deep Learning Architectures", "AI for Science", "Tech Leadership"],
      availability: ["Friday 3-4 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Scientific & Visionary"
    },
    education: [
      { degree: "PhD in Cognitive Neuroscience", institution: "University College London", year: 2009 },
      { degree: "BA in Computer Science", institution: "University of Cambridge", year: 1997 }
    ],
    social_proof: {
      testimonials: ["Incredible guidance on pioneering advanced AI and research pipelines."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },

  {
    id: "M12360",
    name: "Vitalik Buterin",
    gender: "Male",
    date_of_birth: "1994-01-31",
    location: "Singapore",
    profile_picture_url: "https://randomuser.me/api/portraits/men/6.jpg",
    contact: {
      email: "vitalik.buterin@example.com",
      phone: "+65-6555-0143",
      linkedin_url: "linkedin.com",
      website: "https://ethereum.org"
    },
    professional_background: {
      current_position: "Co-Founder",
      organization: "Ethereum Foundation",
      years_of_experience: 13,
      industries: ["Blockchain & Cryptocurrency", "Quantum Computing"],
      skills: ["Cryptography", "Smart Contracts", "Solidity", "Decentralized Governance", "Mechanism Design"]
    },
    mentorship_details: {
      areas_of_expertise: ["Blockchain Protocol Design", "Zero-Knowledge Proofs", "Crypto-economics"],
      availability: ["Thursday 10-12 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Russian", "Chinese"],
      mentorship_style: "Highly Theoretical & Mathematical"
    },
    education: [
      { degree: "Honorary Doctorate", institution: "University of Basel", year: 2018 }
    ],
    social_proof: {
      testimonials: ["Unparalleled depth in decentralized cryptography systems."],
      rating: 4.9
    },
    metadata: { status: "active" }
  },

  {
    id: "M12361",
    name: "Andrew Ng",
    gender: "Male",
    date_of_birth: "1976-04-18",
    location: "Palo Alto, California, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/7.jpg",
    contact: {
      email: "andrew.ng@example.com",
      phone: "+1-650-555-0122",
      linkedin_url: "linkedin.com",
      website: "landing.ai"
    },
    professional_background: {
      current_position: "Founder & CEO",
      organization: "Landing AI",
      years_of_experience: 26,
      industries: ["Artificial Intelligence/Machine Learning", "Data Science & Analytics"],
      skills: ["Machine Learning", "Computer Vision", "Deep Learning", "Online Education", "AI Strategy"]
    },
    mentorship_details: {
      areas_of_expertise: ["AI Model Deployment", "Computer Vision Systems", "Building AI Teams", "EdTech Startup Growth"],
      availability: ["Tuesday 8-10 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Mandarin"],
      mentorship_style: "Structured, Academic & Encouraging"
    },
    education: [
      { degree: "PhD in Computer Science", institution: "University of California, Berkeley", year: 2002 },
      { degree: "MS in Computer Science", institution: "Massachusetts Institute of Technology", year: 1998 }
    ],
    social_proof: {
      testimonials: ["The pioneer of modern AI education. Brilliant guidance."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },

  {
    id: "M12362",
    name: "Joy Buolamwini",
    gender: "Female",
    date_of_birth: "1989-10-10",
    location: "Cambridge, Massachusetts, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/women/1.jpg",
    contact: {
      email: "joy.b@example.com",
      phone: "+1-617-555-0185",
      linkedin_url: "linkedin.com",
      website: "algorithmicjusticeleague.org"
    },
    professional_background: {
      current_position: "Founder",
      organization: "Algorithmic Justice League",
      years_of_experience: 12,
      industries: ["Artificial Intelligence/Machine Learning", "Software Development"],
      skills: ["Computer Vision", "AI Ethics", "Data Bias Analysis", "Public Policy", "Software Auditing"]
    },
    mentorship_details: {
      areas_of_expertise: ["Responsible AI", "Computer Vision Audit", "Tech Policy & Bias Mitigation"],
      availability: ["Thursday 2-4 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Empathetic, Analytical & Ethics-Focused"
    },
    education: [
      { degree: "PhD in Media Arts and Sciences", institution: "Massachusetts Institute of Technology", year: 2022 },
      { degree: "Master of Science", institution: "Oxford University", year: 2014 }
    ],
    social_proof: {
      testimonials: ["Gave me an entirely new, necessary perspective on AI system validation."],
      rating: 4.9
    },
    metadata: { status: "active" }
  },

  {
    id: "M12363",
    name: "Werner Vogels",
    gender: "Male",
    date_of_birth: "1958-10-03",
    location: "Seattle, Washington, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/1.jpg",
    contact: {
      email: "werner.vogels@example.com",
      phone: "+1-206-555-0134",
      linkedin_url: "linkedin.com",
      website: "allthingsdistributed.com"
    },
    professional_background: {
      current_position: "VP & Chief Technology Officer",
      organization: "Amazon",
      years_of_experience: 36,
      industries: ["Cloud Computing", "IT Services"],
      skills: ["Distributed Systems", "Cloud Architecture", "Scalability", "Enterprise IT Strategy", "NoSQL"]
    },
    mentorship_details: {
      areas_of_expertise: ["Hyper-scale Architecture", "Cloud Strategy", "Fault-tolerant Systems"],
      availability: ["Friday 4-5 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Dutch"],
      mentorship_style: "Architectural, Practical & Systems-focused"
    },
    education: [
      { degree: "PhD in Computer Science", institution: "Vrije Universiteit Amsterdam", year: 2003 }
    ],
    social_proof: {
      testimonials: ["Unrivaled advice on making highly-available global scale infrastructures."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },

  {
    id: "M12364",
    name: "Troy Hunt",
    gender: "Male",
    date_of_birth: "1976-10-21",
    location: "Gold Coast, Queensland, Australia",
    profile_picture_url: "https://randomuser.me/api/portraits/men/2.jpg",
    contact: {
      email: "troy.hunt@example.com",
      phone: "+61-7-5555-0162",
      linkedin_url: "linkedin.com",
      website: "https://haveibeenpwned.com"
    },
    professional_background: {
      current_position: "Founder & Security Researcher",
      organization: "Have I Been Pwned",
      years_of_experience: 25,
      industries: ["Cybersecurity", "Internet & Web Services"],
      skills: ["Penetration Testing", "Data Breach Analysis", "Application Security", "Cloud Security", "Web Architecture"]
    },
    mentorship_details: {
      areas_of_expertise: ["Web App Vulnerability Assessment", "Incident Response Strategy", "Cloud Threat Modeling"],
      availability: ["Monday 9-11 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Practical, Real-world & Hands-on Security"
    },
    education: [
      { degree: "Bachelor of Business (Computing)", institution: "Griffith University", year: 2001 }
    ],
    social_proof: {
      testimonials: ["Clear, actionable blueprints on secure coding and threat management."],
      rating: 4.9
    },
    metadata: { status: "active" }
  },

  {
    id: "M12365",
    name: "Katie Moussouris",
    gender: "Female",
    date_of_birth: "1976-05-14",
    location: "Las Vegas, Nevada, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/women/2.jpg",
    contact: {
      email: "katie.m@example.com",
      phone: "+1-702-555-0174",
      linkedin_url: "linkedin.com",
      website: "lyticssecurity.com"
    },
    professional_background: {
      current_position: "Founder & CEO",
      organization: "Luta Security",
      years_of_experience: 24,
      industries: ["Cybersecurity", "IT Services"],
      skills: ["Vulnerability Disclosure", "Bug Bounty Architecture", "Incident Response", "Exploit Intelligence", "GovTech Security"]
    },
    mentorship_details: {
      areas_of_expertise: ["Vulnerability Coordination", "Cybersecurity Policy", "Enterprise Threat Management"],
      availability: ["Wednesday 1-3 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Strategic, Policy-Driven & Technical"
    },
    education: [
      { degree: "BS in Biology & Chemistry", institution: "Boston University", year: 1998 }
    ],
    social_proof: {
      testimonials: ["Masterclass in vulnerability disclosure programs and defense strategy."],
      rating: 4.8
    },
    metadata: { status: "active" }
  },

  {
    id: "M12366",
    name: "Marc Raibert",
    gender: "Male",
    date_of_birth: "1949-12-22",
    location: "Waltham, Massachusetts, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/3.jpg",
    contact: {
      email: "marc.raibert@example.com",
      phone: "+1-781-555-0143",
      linkedin_url: "linkedin.com",
      website: "bostondynamics.com"
    },
    professional_background: {
      current_position: "Executive Director",
      organization: "AI Institute (Boston Dynamics)",
      years_of_experience: 46,
      industries: ["Robotics", "Artificial Intelligence/Machine Learning"],
      skills: ["Dynamic Robotics", "Control Systems", "Legged Locomotion", "Mechanical Design", "Kinematics"]
    },
    mentorship_details: {
      areas_of_expertise: ["Hardware-Software Co-design", "Advanced Robotics control", "R&D Scaling"],
      availability: ["Tuesday 3-5 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Engineering First & First-Principles Based"
    },
    education: [
      { degree: "PhD in Computer Science", institution: "Massachusetts Institute of Technology", year: 1977 },
      { degree: "BS in Electrical Engineering", institution: "Northeastern University", year: 1973 }
    ],
    social_proof: {
      testimonials: ["Unmatched deep understanding of dynamic physical systems and control."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },

  {
    id: "M12367",
    name: "Fei-Fei Li",
    gender: "Female",
    date_of_birth: "1976-07-03",
    location: "Stanford, California, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/women/4.jpg",
    contact: {
      email: "feifeili@example.com",
      phone: "+1-650-555-0199",
      linkedin_url: "linkedin.com",
      website: "stanford.edu"
    },
    professional_background: {
      current_position: "Co-Director",
      organization: "Stanford Human-Centered AI Institute",
      years_of_experience: 22,
      industries: ["Artificial Intelligence/Machine Learning", "Data Science & Analytics"],
      skills: ["Computer Vision", "Cognitive Neuroscience", "ImageNet Dataset Engineering", "Deep Learning Architectures", "Human-Centered Tech"]
    },
    mentorship_details: {
      areas_of_expertise: ["Computer Vision", "Ethical AI Design", "Academic-Industry Technology Transfer"],
      availability: ["Monday 10-12 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Mandarin"],
      mentorship_style: "Inspirational, Academic & Rigorous"
    },
    education: [
      { degree: "PhD in Electrical Engineering", institution: "California Institute of Technology", year: 2005 },
      { degree: "AB in Physics", institution: "Princeton University", year: 1999 }
    ],
    social_proof: {
      testimonials: ["The pioneer of dataset-driven deep learning. Absolute master of vision AI."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },

  {
    id: "M12368",
    name: "Yann LeCun",
    gender: "Male",
    date_of_birth: "1960-07-08",
    location: "New York City, New York, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/4.jpg",
    contact: {
      email: "yann.lecun@example.com",
      phone: "+1-212-555-0161",
      linkedin_url: "linkedin.com",
      website: "meta.com"
    },
    professional_background: {
      current_position: "Chief AI Scientist",
      organization: "Meta",
      years_of_experience: 38,
      industries: ["Artificial Intelligence/Machine Learning", "Software Development"],
      skills: ["Convolutional Neural Networks", "Joint Embedding Predictive Architectures (JEPA)", "Computer Vision", "Robotics Control Systems", "PyTorch"]
    },
    mentorship_details: {
      areas_of_expertise: ["Self-Supervised Learning", "Energy-Based Models", "Neural Network Implementations"],
      availability: ["Wednesday 4-5 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "French"],
      mentorship_style: "Deep Mathematical Frameworks & Conceptual Strategy"
    },
    education: [
      { degree: "PhD in Computer Science", institution: "Université Pierre et Marie Curie", year: 1987 }
    ],
    social_proof: {
      testimonials: ["Helped me structuralize complex architectures for continuous state spaces."],
      rating: 4.9
    },
    metadata: { status: "active" }
  },

  {
    id: "M12369",
    name: "Gavin Wood",
    gender: "Male",
    date_of_birth: "1980-04-23",
    location: "Zug, Switzerland",
    profile_picture_url: "https://randomuser.me/api/portraits/men/5.jpg",
    contact: {
      email: "gavin.wood@example.com",
      phone: "+41-41-555-0155",
      linkedin_url: "linkedin.com",
      website: "https://parity.io"
    },
    professional_background: {
      current_position: "Founder",
      organization: "Parity Technologies",
      years_of_experience: 21,
      industries: ["Blockchain & Cryptocurrency", "Internet & Web Services"],
      skills: ["Solidity", "Rust", "Substrate Framework", "Web3 Consensus Mechanics", "Substrate Runtime"]
    },
    mentorship_details: {
      areas_of_expertise: ["Polkadot Sharding Architectures", "Substrate Engine Customization", "Smart Contract Language Engineering"],
      availability: ["Tuesday 2-4 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Heavy Focus on Systems Code & Compiler Design"
    },
    education: [
      { degree: "PhD in Computer Science", institution: "University of York", year: 2005 }
    ],
    social_proof: {
      testimonials: ["Unrivaled instruction on writing low level Rust for cross-chain execution networks."],
      rating: 4.9
    },
    metadata: { status: "active" }
  },

  {
    id: "M12370",
    name: "Kelsey Hightower",
    gender: "Male",
    date_of_birth: "1981-02-27",
    location: "Portland, Oregon, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/6.jpg",
    contact: {
      email: "kelsey.hightower@example.com",
      phone: "+1-503-555-0129",
      linkedin_url: "linkedin.com",
      website: "github.com"
    },
    professional_background: {
      current_position: "Principal Engineer (Retired)",
      organization: "Google Cloud",
      years_of_experience: 22,
      industries: ["Cloud Computing", "Software Development"],
      skills: ["Kubernetes", "Go (Golang)", "DevOps Systems", "Linux Container Infrastructure", "System Architecture"]
    },
    mentorship_details: {
      areas_of_expertise: ["Cloud Native Transformations", "Golang API Infrastructures", "Developer Relations Strategies"],
      availability: ["Thursday 11-1 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Extremely Practical, Story-Driven & Minimalistic Code Designs"
    },
    education: [
      { degree: "Self-Taught / Industry Veteran", institution: "N/A", year: 2004 }
    ],
    social_proof: {
      testimonials: ["Breaks down massive cloud infrastructure problems into clean, human steps."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },

  {
    id: "M12371",
    name: "Satya Nadella",
    gender: "Male",
    date_of_birth: "1967-08-19",
    location: "Redmond, Washington, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/14.jpg",
    contact: {
      email: "satya.n@example.com",
      phone: "+1-425-555-0100",
      linkedin_url: "linkedin.com",
      website: "microsoft.com"
    },
    professional_background: {
      current_position: "Chairman & CEO",
      organization: "Microsoft",
      years_of_experience: 32,
      industries: ["Cloud Computing", "Software Development", "Artificial Intelligence/Machine Learning"],
      skills: ["Azure Core Infrastructure", "Enterprise Cloud Strategy", "DevOps Pipelines at Global Scale", "AI APIs Integration Models"]
    },
    mentorship_details: {
      areas_of_expertise: ["Hyperscale Data Center Orchestration", "SaaS Platform Monetization", "Enterprise Developer Adoption Ecosystems"],
      availability: ["Sunday 8-9 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Telugu"],
      mentorship_style: "Empathetic, Growth-minded & Highly Strategic"
    },
    education: [
      { degree: "MS in Computer Science", institution: "University of Wisconsin–Milwaukee", year: 1990 },
      { degree: "B.E. in Electrical Engineering", institution: "Manipal Institute of Technology", year: 1988 }
    ],
    social_proof: {
      testimonials: ["Brilliant high-level synthesis on optimizing ecosystem cloud API abstractions to avoid multitenant choke points."],
      rating: 5.0
    },
    metadata: { status: "active" }
  },

  {
    id: "M12372",
    name: "Timnit Gebru",
    gender: "Female",
    date_of_birth: "1983-05-13",
    location: "Distributed, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/women/7.jpg",
    contact: {
      email: "timnit@example.com",
      phone: "+1-650-555-0347",
      linkedin_url: "linkedin.com",
      website: "https://dairinstitute.org"
    },
    professional_background: {
      current_position: "Founder & Executive Director",
      organization: "Distributed AI Research Institute (DAIR)",
      years_of_experience: 14,
      industries: ["Artificial Intelligence/Machine Learning", "Data Science & Analytics"],
      skills: ["Computer Vision", "Large Language Model Auditing", "Data Curation Strategies", "Tech Equity Evaluation"]
    },
    mentorship_details: {
      areas_of_expertise: ["Ethical LLM Lifecycle Management", "Dataset Auditing Tools", "Independent Research Frameworks"],
      availability: ["Wednesday 1-3 PM"],
      preferred_mentorship_mode: "Online",
      languages: ["English", "Amharic"],
      mentorship_style: "Rigorous & Reformist"
    },
    education: [
      { degree: "PhD in Electrical Engineering", institution: "Stanford University", year: 2017 },
      { degree: "MS in Electrical Engineering", institution: "Stanford University", year: 2008 }
    ],
    social_proof: {
      testimonials: ["Invaluable clarity on structural documentation rules for model cards and dataset lineage."],
      rating: 4.8
    },
    metadata: { status: "active" }
  },

  {
    id: "M12373",
    name: "Marc Benioff",
    gender: "Male",
    date_of_birth: "1964-09-25",
    location: "San Francisco, California, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/11.jpg",
    contact: {
      email: "mbenioff@example.com",
      phone: "+1-415-555-9001",
      linkedin_url: "linkedin.com",
      website: "salesforce.com"
    },
    professional_background: {
      current_position: "CEO & Co-Founder",
      organization: "Salesforce",
      years_of_experience: 37,
      industries: ["Cloud Computing", "IT Services", "Software Development"],
      skills: ["SaaS Business Architectures", "Multi-tenant Architecture", "Enterprise CRM Strategy", "Corporate Philanthropy"]
    },
    mentorship_details: {
      areas_of_expertise: ["SaaS GTM Frameworks", "Cloud Multi-tenancy Design Principles", "Scaling Tech for Enterprise Sales"],
      availability: ["Monday 8-9 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Highly Strategic & Ecosystem-focused"
    },
    education: [
      { degree: "BS in Business Administration", institution: "University of Southern California", year: 1986 }
    ],
    social_proof: {
      testimonials: ["Gave us the architectural pattern blueprint to migrate away from siloed on-prem database variants."],
      rating: 4.9
    },
    metadata: { status: "active" }
  },

  {
    id: "M12374",
    name: "Chris Lattner",
    gender: "Male",
    date_of_birth: "1978-12-04",
    location: "Bay Area, California, United States",
    profile_picture_url: "https://randomuser.me/api/portraits/men/17.jpg",
    contact: {
      email: "clattner@example.com",
      phone: "+1-408-555-0111",
      linkedin_url: "linkedin.com",
      website: "modular.com"
    },
    professional_background: {
      current_position: "CEO & Co-Founder",
      organization: "Modular",
      years_of_experience: 23,
      industries: ["Software Development", "Artificial Intelligence/Machine Learning", "Semiconductor & Electronics"],
      skills: ["LLVM Compiler Infrastructure", "Swift Language Architecture", "Mojo Programming Design", "MLIR Engine Frameworks"]
    },
    mentorship_details: {
      areas_of_expertise: ["Compiler Tuning for Heterogeneous Hardware Nodes", "Building Custom System Software Libraries", "AI Compute Accelerators Optimization"],
      availability: ["Tuesday 7-9 AM"],
      preferred_mentorship_mode: "Online",
      languages: ["English"],
      mentorship_style: "Deep Compiler Logic & High Execution Rigor"
    },
    education: [
      { degree: "PhD in Computer Science", institution: "University of Illinois Urbana-Champaign", year: 2005 },
      { degree: "BS in Computer Science", institution: "University of Portland", year: 2000 }
    ],
    social_proof: {
      testimonials: ["Incredibly deep logic mechanics on tensor compute optimizations over silicon kernels."],
      rating: 5.0
    },
    metadata: { status: "active" }
  }
];

export default mentors;