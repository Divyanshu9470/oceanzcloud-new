export const services = [
    {
        id: 'cloud-solutions',
        title: 'Cloud Solutions',
        image: '/images/services/cloud-solutions.png',
        icon: '☁️',
        shortDescription: 'Providing robust cloud computing services to optimize scalability, security, and cost-effectiveness.',
        fullDescription: 'Our Cloud Solutions empower businesses to scale effortlessly. From cloud migration to hybrid cloud management, we ensure your infrastructure is secure, resilient, and cost-optimized. We partner with major providers like AWS, Azure, and Google Cloud to deliver best-in-class services.',
        features: ['Cloud Migration', 'Hybrid Cloud Management', 'Serverless Architecture', 'Disaster Recovery']
    },
    {
        id: 'ai-machine-learning',
        title: 'AI & Machine Learning',
        image: '/images/services/ai-machine-learning.png',
        icon: '🤖',
        shortDescription: 'Leveraging AI-driven solutions to automate processes, analyze data, and enhance decision-making.',
        fullDescription: 'Unlock the power of artificial intelligence. We build custom ML models, NLP applications, and predictive analytics dashboards to help you make data-driven decisions and automate complex workflows.',
        features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'AI Chatbots']
    },
    {
        id: 'mobile-app-development',
        title: 'Mobile App Development',
        image: '/images/services/mobile-app-development.png',
        icon: '📱',
        shortDescription: 'Crafting high-performance native and cross-platform mobile apps.',
        fullDescription: 'We design and develop pixel-perfect mobile applications. Using modern frameworks like React Native and Flutter, we deliver seamless user experiences on iOS and Android.',
        features: ['iOS & Android Apps', 'Cross-Platform Development', 'Mobile UI/UX', 'App Store Optimization'],
        process: [
            { title: 'Discovery', description: 'We analyze your requirements and market fit.' },
            { title: 'Design', description: 'Creating intuitive UI/UX prototypes.' },
            { title: 'Development', description: 'Coding with scalable and secure architecture.' },
            { title: 'Testing', description: 'Rigorous QA to ensure bug-free performance.' },
            { title: 'Deployment', description: 'Launching to App Store and Play Store.' }
        ],
        techStack: [
            { category: 'Frontend', techs: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
            { category: 'Backend', techs: ['Node.js', 'Python', 'Go'] },
            { category: 'Database', techs: ['Firebase', 'PostgreSQL', 'MongoDB'] }
        ],
        awards: [
            { title: 'Best Mobile App 2024', description: 'Tech Innovators Awards' },
            { title: 'Top Rated Developer', description: 'Clutch Global 2023' }
        ],
        testimonials: [
            { name: 'Alex Johnson', role: 'CTO, TechFlow', text: 'OceanzCloud delivered a stunning app that scaled to 1M users effortlessly.' },
            { name: 'Sarah Lee', role: 'Founder, HealthPlus', text: 'Their expertise in cross-platform development saved us 40% in costs.' }
        ],
        faqs: [
            { question: 'How long does it take to build an app?', answer: 'Typically 3-6 months depending on complexity.' },
            { question: 'Do you offer maintenance?', answer: 'Yes, we provide 24/7 support and updates.' },
            { question: 'Native or Cross-platform?', answer: 'We help you choose based on performance and budget needs.' }
        ]
    },
    {
        id: 'web-mobile', // Keeping for backward compatibility if needed, or redirecting logic could be added
        title: 'Web Development',
        image: '/images/services/web-mobile.png', // Reusing generated web image
        icon: '💻',
        shortDescription: 'Building responsive, scalable, and modern web applications.',
        fullDescription: 'From simple corporate websites to complex SaaS platforms, our web development team delivers high-quality code and engaging user experiences using Next.js and React.',
        features: ['Progressive Web Apps', 'Single Page Applications', 'E-commerce Solutions', 'CMS Development']
    },
    {
        id: 'software-development',
        title: 'Software Development',
        image: '/images/services/web-mobile.png', // Fallback to web image for now
        icon: '🖥️',
        shortDescription: 'Custom software solutions tailored to your unique business processes.',
        fullDescription: 'We build bespoke software that solves your specific business challenges. Our full-cycle development process ensures your software is scalable, secure, and easy to maintain.',
        features: ['Enterprise Software', 'SaaS Development', 'Legacy Modernization', 'API Integration']
    },
    {
        id: 'blockchain',
        title: 'Blockchain Development',
        image: '/images/services/blockchain.png',
        icon: '⛓️',
        shortDescription: 'Empowering businesses with decentralized solutions through secure and scalable blockchain technology.',
        fullDescription: 'Enter the world of Web3 with our blockchain expertise. We develop smart contracts, dApps, and private blockchain networks to enhance security, transparency, and efficiency in your business operations.',
        features: ['Smart Contracts', 'DeFi Solutions', 'NFT Marketplaces', 'Private Blockchains']
    },
    {
        id: 'product-design',
        title: 'Product Design',
        image: '/images/services/product-design.png',

        icon: '🎨',
        shortDescription: 'Creating visually stunning and user-friendly interfaces (UI/UX) to elevate your brand.',
        fullDescription: 'Design is at the heart of what we do. Our product design team creates intuitive, user-centric interfaces that delight users and drive engagement. We follow a rigorous design thinking process from prototyping to final polish.',
        features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Interaction Design']
    },
    {
        id: 'devops',
        title: 'DevOps & Automation',
        image: '/images/services/devops-automation.png',

        icon: '⚙️',
        shortDescription: 'Optimizing workflows with DevOps solutions, CI/CD pipelines, and automation strategies.',
        fullDescription: 'Streamline your development lifecycle. We implement robust CI/CD pipelines, infrastructure as code, and automated testing frameworks to accelerate deployment and ensure software quality.',
        features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Containerization (Docker/K8s)', 'Monitoring & Logging']
    },
    {
        id: 'digital-transformation',
        title: 'Digital Transformation',
        image: '/images/services/digital-transformation.png',

        icon: '🚀',
        shortDescription: 'Reimagining your business strategies with digital technologies.',
        fullDescription: 'We help traditional businesses evolve into digital leaders. Our digital transformation strategies integrate digital technology into all areas of business, fundamentally changing how you operate and deliver value to customers.',
        features: ['Process Digitization', 'Digital Strategy', 'Technology Adoption', 'Customer Experience Transformation']
    }
];

export const industries = [
    {
        id: 'on-demand',
        title: 'On-Demand Services',
        description: 'We create high-quality on-demand apps tailored to any industry, ensuring seamless functionality and the latest technology.',
        bgImage: '/images/ondemand-bg.png'
    },
    {
        id: 'healthcare',
        title: 'Healthcare',
        description: 'Secure and efficient patient management, telemedicine, and digital health innovations.',
        bgImage: '/images/healthcare-bg.png'
    },
    {
        id: 'sports',
        title: 'Sports',
        description: 'We build advanced sports technology solutions, including player analytics, event management, and fan engagement platforms.',
        bgImage: '/images/sports-bg.png'
    },
    {
        id: 'logistics',
        title: 'Logistics',
        description: 'Streamlining supply chains with real-time tracking, fleet management, and automation.',
        bgImage: '/images/logistics-bg.png'
    },
    {
        id: 'electric-vehicles',
        title: 'Electric Vehicles',
        description: 'Empowering the EV industry with smart charging solutions, fleet electrification, and connected vehicle applications.',
        bgImage: '/images/ev-bg.png'
    },
    {
        id: 'fintech',
        title: 'Fintech',
        description: 'Digitalizing financial services with secure payment gateways, wallets, and compliance-ready apps.',
        bgImage: '/images/finance-bg.png'
    },
    {
        id: 'ecommerce',
        title: 'E-Commerce',
        description: 'Scalable platforms for online retail, featuring AI recommendation engines and seamless checkouts.',
        bgImage: '/images/ecommerce-bg.png'
    },
    {
        id: 'travel',
        title: 'Travel & Hospitality',
        description: 'Booking engines, travel management systems, and immersive digital experiences for travelers.',
        bgImage: '/images/travel-bg.png'
    },
    {
        id: 'gaming',
        title: 'Gaming',
        description: 'Immersive gaming experiences using the latest engines and technologies.',
        bgImage: '/images/gaming-bg.png'
    },
    {
        id: 'automotive',
        title: 'Automotive',
        description: 'Software for connected vehicles, fleet management, and autonomous driving systems.',
        bgImage: '/images/automotive-bg.png'
    },
    {
        id: 'edtech',
        title: 'EdTech',
        description: 'Innovative learning management systems and educational apps for virtual classrooms.',
        bgImage: '/images/edtech-bg.png'
    }
];

export const portfolio = [
    {
        id: 'taqa',
        title: 'TAQA Distribution',
        category: 'Utility & Energy',
        description: 'A comprehensive digital transformation for Abu Dhabi’s leading utility provider, enhancing grid management and customer service portals.',
        stats: { 'Users': '1M+', 'Uptime': '99.99%' }
    },
    {
        id: 'dubai-municipality',
        title: 'Dubai Municipality',
        category: 'Government',
        description: 'Digitizing public services to create a paperless government experience, integrating blockchain for secure document handling.',
        stats: { 'Services': '50+', 'Efficiency': '+40%' }
    },
    {
        id: 'igl-connect',
        title: 'IGL Connect',
        category: 'Customer Platform',
        description: 'A unified customer engagement platform for Indraprastha Gas Limited, facilitating billing, support, and service requests.',
        stats: { 'Downloads': '500k+', 'Rating': '4.5/5' }
    }
];

export const team = [
    {
        name: 'Sarah Connor',
        role: 'CEO & Founder',
        bio: 'Visionary leader with 15+ years in cloud computing.'
    },
    {
        name: 'John Smith',
        role: 'CTO',
        bio: 'Expert in AI architecture and distributed systems.'
    },
    {
        name: 'Emily Chen',
        role: 'Head of Design',
        bio: 'Award-winning designer passionate about user-centric experiences.'
    }
];

export const values = [
    { title: 'Work Smart', description: 'Efficiency is key. We leverage tools and automation to achieve more with less.', icon: '⚡' },
    { title: 'Create Value', description: 'Every solution we build must drive tangible business growth for our clients.', icon: '💎' },
    { title: 'Be Nimble', description: 'We adapt quickly to changing technologies and market needs.', icon: '🏃' },
    { title: 'Communicate Openly', description: 'Transparency builds trust. We keep our clients in the loop at every step.', icon: '📢' },
    { title: 'Own It', description: 'We take full accountability for our work and results.', icon: '🙌' },
    { title: 'People First', description: 'Technology is for people. We prioritize user experience and team well-being.', icon: '❤️' }
];

export const testimonials = [
    { name: 'Emily Davis', role: 'CEO, TechNova', text: 'OceanzCloud transformed our digital infrastructure. Their team is top-notch!' },
    { name: 'David Martinez', role: 'CTO, FutureSoft', text: 'The best partner for scalable cloud solutions. Highly recommended.' },
    { name: 'Sarah Wilson', role: 'Director, Innovate', text: 'Professional, skilled, and visionary. They delivered beyond our expectations.' }
];

export const careers = [
    {
        id: 'frontend-dev',
        title: 'Frontend Developer',
        type: 'Full-time',
        location: 'Remote',
        description: 'We are looking for a skilled Frontend Developer to build seamless and interactive user experiences using Next.js and React.',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
        id: 'mobile-dev',
        title: 'Mobile App Developer',
        type: 'Full-time',
        location: 'Remote',
        description: 'Join our mobile team to craft high-performance native and cross-platform apps for iOS and Android.',
        skills: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
        id: 'devops-engineer',
        title: 'DevOps Engineer',
        type: 'Full-time',
        location: 'Remote',
        description: 'Optimize our CI/CD pipelines and manage cloud infrastructure for scalability and security.',
        skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
        id: 'ui-ux-designer',
        title: 'UI/UX Designer',
        type: 'Full-time',
        location: 'Remote',
        description: 'Design intuitive wireframes and stunning interfaces that delight users and align with our brand identity.',
        skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
    },
    {
        id: 'ai-ml-engineer',
        title: 'AI/ML Engineer',
        type: 'Full-time',
        location: 'Remote',
        description: 'Develop cutting-edge machine learning models and integrate AI solutions into our products.',
        skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP']
    },
    {
        id: 'product-manager',
        title: 'Product Manager',
        type: 'Full-time',
        location: 'Remote',
        description: 'Lead product strategy and collaborate with engineering teams to deliver market-leading solutions.',
        skills: ['Agile', 'Roadmapping', 'Stakeholder Management', 'Jira']
    },
    {
        id: 'cloud-engineer',
        title: 'Cloud Engineer',
        type: 'Full-time',
        location: 'Remote',
        description: 'Architect and maintain secure cloud environments on AWS, Azure, or Google Cloud.',
        skills: ['Cloud Security', 'Networking', 'Serverless', 'Monitoring']
    },
    {
        id: 'qa-engineer',
        title: 'QA Engineer',
        type: 'Full-time',
        location: 'Remote',
        description: 'Ensure software quality through automated and manual testing methodologies.',
        skills: ['Selenium', 'Cypress', 'Jest', 'Load Testing']
    }
];

export const faqs = [
    {
        question: "What services does OceanzCloud provide?",
        answer: "OceanzCloud specializes in cloud solutions, web development, mobile app development, cybersecurity, and IT consulting to help businesses grow and scale efficiently."
    },
    {
        question: "How can I request a consultation with OceanzCloud?",
        answer: "You can book a free consultation call through our 'Contact Us' page or by filling out the inquiry form on our website."
    },
    {
        question: "Does OceanzCloud provide custom software development?",
        answer: "Yes, we offer tailor-made software solutions based on your business requirements, ensuring scalability, security, and high performance."
    },
    {
        question: "What industries does OceanzCloud cater to?",
        answer: "We work with various industries, including healthcare, e-commerce, finance, education, and startups, offering digital solutions that fit their unique needs."
    },
    {
        question: "Is cloud migration a service offered by OceanzCloud?",
        answer: "Yes, we provide seamless cloud migration services, ensuring minimal downtime and optimized performance during the transition."
    },
    {
        question: "Does OceanzCloud offer ongoing support and maintenance?",
        answer: "Absolutely! We provide continuous monitoring, updates, and technical support to keep your applications running smoothly."
    },
    {
        question: "How secure are the solutions provided by OceanzCloud?",
        answer: "Security is our top priority. We implement the latest cybersecurity measures, including encryption, multi-factor authentication, and threat monitoring."
    },
    {
        question: "Can OceanzCloud help with SEO and digital marketing?",
        answer: "Yes, we offer SEO optimization, social media marketing, and digital strategies to enhance your brand’s online presence."
    },
    {
        question: "What technologies does OceanzCloud use?",
        answer: "We use modern technologies such as React, Next.js, Node.js, AWS, Firebase, and more to build high-performance applications."
    },
    {
        question: "How can I partner with OceanzCloud for my business needs?",
        answer: "You can reach out to us via email, phone, or our contact form, and our team will get back to you with the best solutions for your business."
    }
];

export const insights = [
    {
        id: 'future-of-cloud',
        title: 'The Future of Cloud Computing',
        excerpt: 'Explore how serverless, edge computing, and AI are reshaping the cloud landscape.',
        image: '/images/services/cloud-solutions.png',
        date: 'Oct 24, 2024',
        readTime: '5 min read',
        category: 'Tech Trends'
    },
    {
        id: 'ai-business-growth',
        title: 'Leveraging AI for Business Growth',
        excerpt: 'Practical strategies for implementing artificial intelligence in small to medium enterprises.',
        image: '/images/services/ai-machine-learning.png',
        date: 'Nov 12, 2024',
        readTime: '7 min read',
        category: 'Business Strategy'
    },
    {
        id: 'cybersecurity-essentials',
        title: 'Cybersecurity Essentials for 2025',
        excerpt: 'Top security threats to watch out for and how to protect your digital assets.',
        image: '/images/services/web-mobile.png',
        date: 'Dec 05, 2024',
        readTime: '6 min read',
        category: 'Security'
    }
];
