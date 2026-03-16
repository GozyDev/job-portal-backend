const jobs = [
  {
    id: "1",
    // --- List Page Fields ---
    title: "Direct Support Professional",
    companyName: "Tesla",
    companyLogo: "https://avatars.githubusercontent.com/u/856813?s=280&v=4", // Example URL
    location: "France, Italy",
    salary: "$2,000 - $5,000",
    type: "Full-Time",
    postedAt: "10 min ago",
    experience: "Mid-level",

    // --- Detail Page Fields ---
    companyProfile:
      "Stripe is a world-class financial infrastructure platform designed to power the modern internet economy. By providing a sophisticated suite of APIs and software tools, it enables businesses of all sizes—from ambitious startups to global enterprises—to accept payments, manage complex revenue streams, and automate financial operations with ease. Beyond simple transaction processing, the platform offers robust solutions for fraud prevention, subscription management, and international expansion, effectively removing the technical barriers that traditionally hindered global commerce.The company's relentless focus on developer-centric design has made it the gold standard for digital businesses. Millions of companies across the globe rely on its highly scalable infrastructure to handle billions of dollars in transactions annually. By simplifying the complexities of the global banking system, Stripe allows founders and engineering teams to focus on building their core products rather than worrying about the intricacies of moving money. Today, it stands as a fundamental pillar of internet business, continuously evolving to define the future of how we trade and grow online.",
    website: "www.tesla.com",
    foundedDate: "July 31, 2011",
    employeeCount: "4000+",
    industry: "Payment Gateway",

    techStack: [
      {
        name: "HTML 5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS 3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "Ruby",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg",
      },
      { name: "Mixpanel", icon: "mixpanel" },
      {
        name: "Framer",
        icon: "https://yt3.googleusercontent.com/KM0qPXTwn3QLN0fZTX4QMT3OwSmXk7NsU5EU0iD2p8CAI4f3qkfl3vBJX62BMw3_HRy_oJ6TjA=s900-c-k-c0x00ffffff-no-rj",
      },
    ],

    team: [
      {
        name: "Célestin Gardinier",
        role: "CEO & Co-Founder",
        photo: "url_to_photo",
      },
      { name: "Reynaud Colbert", role: "Co-Founder", photo: "url_to_photo" },
      { name: "Ariene Lyon", role: "Managing Director", photo: "url_to_photo" },
      {
        name: "Bernard Alexander",
        role: "Managing Director",
        photo: "url_to_photo",
      },
      {
        name: "Christine Jhonson",
        role: "Managing Director",
        photo: "url_to_photo",
      },
    ],

    perks: [
      {
        title: "Full Healthcare",
        description:
          "We believe in thriving communities and that starts with our team being happy and healthy.",
        icon: "healthcare",
      },
      {
        title: "Unlimited Vacation",
        description:
          "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
        icon: "vacation",
      },
      {
        title: "Skill Development",
        description:
          "We believe in always learning and leveling up our skills.",
        icon: "skill",
      },
    ],

    contact: [
      {
        icon: "Twitter",
        label: "twitter.com/stripe",
      },
      {
        icon: "Facebook",
        label: "twitter.com/StripeHQ",
      },
      {
        icon: "Linkedin",
        label: "linkedin.com/company/stripe",
      },
    ],

    images: {
      image1:
        "https://rocketdevs-assets.s3.amazonaws.com/lark-files/%20Copy-of-Photo-10.jpg",

      image2:
        "https://cdn.get.tech/blog/wp-content/uploads/2020/07/how-to-build-a-startup-team-1920x1200.jpg",
      image3:
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf4wQw8sdsRA2E7E1ctp4dfCGEDBfwlhXZdc8eHK6-O_gXhnTMX81ymv_rXJAquVwHq74n4EbuHyVuNT2F_FWCRGEdJtMYcQSyl8WILaGCaWHCRvPZvS1sUyJdxd74gLgptbhCxDA?key=WGTI1jgntgd_fslXs-Uw6w",
      image4:
        "https://www.alleywatch.com/wp-content/uploads/2020/02/laptop-office-working-men-3153201.jpg",
    },
    team: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyY4Dk7MPITQqsIs0L_gu0sDrMEyzTQGs7Nw&s",
        name: "Célestin Gardinier",
        role: "CEO & Co-Founder",
      },
      {
        src: "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=",
        name: "Reynaud Colbert",
        role: "Co-Founder",
      },
      {
        src: "https://img.freepik.com/premium-photo/close-up-portrait-confident-indian-financial-expert-office-worker-sitting-table-formal-suit_769609-327.jpg",
        name: "Ariene Lyon",
        role: "Managing Director",
      },
      {
        src: "https://previews.123rf.com/images/milkos/milkos2002/milkos200204337/144253077-happy-office-worker-portrait-of-confident-female-manager-sitting-at-desk.jpg",
        name: "Bernard Alexander",
        role: "Managing Director",
      },
      {
        src: "https://img.freepik.com/free-photo/confident-entrepreneur-looking-camera-with-arms-folded-smiling_1098-18840.jpg?semt=ais_rp_progressive&w=740&q=80",
        name: "Christine Jhonson", // Note: This appears to be a typo in the original image text, but I have transcribed it exactly.
        role: "Managing Director",
      },
    ],
    perks: [
      {
        icon: "Stethoscope",
        title: "Full Healthcare",
        description:
          "We believe in thriving communities and that starts with our team being happy and healthy.",
      },
      {
        icon: "Umbrella",
        title: "Unlimited Vacation",
        description:
          "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
      },
      {
        icon: "MonitorPlay",
        title: "Skill Development",
        description:
          "We believe in always learning and leveling up our skills. Whether it's a conference or online course.",
      },
      {
        icon: "Tent",
        title: "Team Summits",
        description:
          "Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.",
      },
      {
        icon: "Coffee",
        title: "Remote Working",
        description:
          "You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.",
      },
      {
        icon: "TrainFront",
        title: "Commuter Benefits",
        description:
          "We're grateful for all the time and energy each team member puts into getting to work every day.",
      },
      {
        icon: "Heart",
        title: "We give back.",
        description:
          "We anonymously match any donation our employees make (up to $1,000) so they can support the organizations they care about most.",
      },
    ],

    type: ["Internship", "Remote"],
    Experience: "Senior",
  },
  {
    id: "2",
    // --- List Page Fields ---
    title: "Senior Cloud Infrastructure Engineer",
    companyName: "Cloudflare",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png",
    location: "San Francisco, Lisbon (Remote)",
    salary: "$140,000 - $195,000",
    type: "Full-Time",
    postedAt: "2 hours ago",
    experience: "Senior-level",

    // --- Detail Page Fields ---
    companyProfile:
      "Cloudflare is a global network designed to make everything you connect to the internet secure, private, fast, and reliable. We protect and accelerate any internet application online without adding hardware, installing software, or changing a line of code. With a massive global footprint, our network serves millions of websites and handles a significant portion of all internet traffic, providing protection from DDoS attacks and optimizing performance for users everywhere.\n\nAs part of our mission to help build a better internet, we foster an environment of radical transparency and high-scale engineering. Our teams work on solving fundamental internet bottlenecks using cutting-edge technologies like Rust and WASM. Whether you are building serverless platforms or securing critical infrastructure, Cloudflare offers a place where your code impacts billions of users every single day.",
    website: "www.cloudflare.com",
    foundedDate: "July 1, 2009",
    employeeCount: "3500+",
    industry: "Cybersecurity & Edge Computing",

    techStack: [
      {
        name: "Rust",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
      },
      {
        name: "Go",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "GraphQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
      },
    ],

    team: [
      {
        src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
        name: "Marcus Holloway",
        role: "VP of Engineering",
      },
      {
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
        name: "Elena Rodriguez",
        role: "Chief Product Officer",
      },
      {
        src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
        name: "Simon Vane",
        role: "Head of Infrastructure",
      },
      {
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
        name: "Sarah Jenkins",
        role: "Lead Site Reliability Engineer",
      },
      {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
        name: "David Chen",
        role: "Principal Architect",
      },
    ],

    perks: [
      {
        icon: "Stethoscope",
        title: "Global Health Coverage",
        description:
          "Comprehensive medical, dental, and vision coverage for you and your dependents globally.",
      },
      {
        icon: "Umbrella",
        title: "Flexible PTO",
        description:
          "We encourage you to take time off to recharge. Our 'take what you need' policy supports work-life harmony.",
      },
      {
        icon: "MonitorPlay",
        title: "Learning Stipend",
        description:
          "Annual budget for books, courses, and certifications to keep your technical skills sharp.",
      },
      {
        icon: "Tent",
        title: "Annual Offsites",
        description:
          "Team retreats in locations like London, Singapore, and San Francisco to build connection.",
      },
      {
        icon: "Coffee",
        title: "Remote-First Culture",
        description:
          "Work from wherever you are most productive, with a monthly stipend to optimize your home office.",
      },
      {
        icon: "TrainFront",
        title: "Travel Assistance",
        description:
          "Assistance with relocation and daily commuting costs for those visiting our physical hubs.",
      },
      {
        icon: "Heart",
        title: "Impact Matching",
        description:
          "We match charitable donations and provide paid volunteer time to support your community.",
      },
    ],

    contact: [
      {
        icon: "Twitter",
        label: "twitter.com/cloudflare",
      },
      {
        icon: "Facebook",
        label: "facebook.com/cloudflare",
      },
      {
        icon: "Linkedin",
        label: "linkedin.com/company/cloudflare",
      },
    ],

    images: {
      image1:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
      image2:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
      image3:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
      image4:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
    },

    type: ["Full-Time","Remote"],
    Experience: "Senior",
  },
];

module.exports = jobs;
