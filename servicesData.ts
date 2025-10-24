
export const servicesList = [
    { title: "Managed Services", description: "Proactive IT management to maximize uptime and performance." },
    { title: "End User Support", description: "Fast, friendly helpdesk and desktop support for all your users." },
    { title: "Infrastructure Support", description: "Robust server, storage, and network support." },
    { title: "IT Consulting", description: "Strategic guidance for scalable, secure technology growth." },
    { title: "Website Design & Hosting", description: "Modern, responsive websites backed by reliable hosting." },
    { title: "Cloud & Backup", description: "Cloud infrastructure and data protection you can rely on." },
    { title: "Security & Connectivity", description: "Secure networks, VPNs, and firewall solutions." },
    { title: "Software Solutions", description: "Custom applications and software tailored to your business." },
];

export const partners = {
    veeam: {
      name: "Veeam",
      logo: "https://picsum.photos/100/50?image=1",
      title: "Veeam Data Protection",
      content: "Zartec leverages Veeam to provide robust backup, recovery, and data management solutions. Ensure your data is always available, protected, and actively working for your business across any cloud.",
      features: ["Modern Data Protection", "Cloud Mobility & Portability", "Monitoring & Analytics", "Ransomware Protection"]
    },
    dell: {
      name: "Dell",
      logo: "https://picsum.photos/100/50?image=2",
      title: "Dell Trusted Infrastructure",
      content: "Through Dell, Zartec offers world-class compute and storage solutions at enterprise scale, perfect for growing enterprises that need scalable, reliable IT foundations.",
      features: ["PowerEdge Servers", "PowerVault & EMC Storage", "Networking & OEM", "ProSupport Services"]
    },
    hp: {
      name: "HP",
      logo: "https://picsum.photos/100/50?image=3",
      title: "HP Smart Workplace",
      content: "Zartec brings HP’s modern hardware and services to your workplace, engineered for modern businesses with high-security and productivity needs.",
      features: ["HP Elite/Pro Devices", "Managed Print Services", "Enterprise Networking", "Secure Hardware"]
    },
    lenovo: {
      name: "Lenovo",
      logo: "https://picsum.photos/100/50?image=4",
      title: "Lenovo Performance & Mobility",
      content: "Zartec delivers Lenovo’s innovation for employees and data centres alike, best for organizations requiring secure endpoints and robust datacenter solutions.",
      features: ["ThinkPad & Yoga Laptops", "ThinkSystem Servers", "Lenovo VDI & Hybrid Cloud", "Workstation Solutions"]
    }
};

export const quoteItems = [
    ...servicesList.map(s => ({ ...s, type: 'Service' })),
    ...Object.values(partners).map(p => ({ title: p.title, description: p.content, type: 'Partner Solution' }))
];
