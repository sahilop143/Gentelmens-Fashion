// Site Configuration
// GENTLEMAN'S CRAFT - Premium Men's Wear

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Gentleman's Craft | Premium Men's Wear",
  siteDescription: "Discover timeless elegance with Gentleman's Craft. Bespoke tailoring, premium fabrics, and sophisticated style for the modern gentleman.",
};

// Hero Section
export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  backgroundText: "ELEGANCE",
  heroImage: "/hero-model.png",
  heroImageAlt: "Sophisticated gentleman in tailored charcoal suit",
  overlayText: "Crafted for the Modern Gentleman",
  brandName: "GENTLEMAN'S CRAFT",
  navLinks: [
    { label: "Collections", href: "#collections" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

// Intro Grid Section
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "Defining",
  titleLine2: "Modern Masculinity",
  description: "At Gentleman's Craft, we believe that true style transcends trends. Our collections blend timeless sophistication with contemporary design, creating garments that speak to the discerning gentleman who values quality, craftsmanship, and understated elegance.",
  portfolioImages: [
    { src: "/grid-1.jpg", alt: "Urban elegance - navy blazer with cream trousers" },
    { src: "/grid-2.jpg", alt: "Premium Italian leather oxford shoes" },
    { src: "/grid-3.jpg", alt: "Casual sophistication - linen shirt and chinos" },
    { src: "/grid-4.jpg", alt: "Men's accessories flat lay" },
    { src: "/grid-5.jpg", alt: "Evening elegance - black tuxedo" },
  ],
  accentText: "Selected Collections - 2024",
};

// Featured Projects Section
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "Featured Collections",
  titleRegular: "Signature",
  titleItalic: "Styles",
  viewAllText: "View All Collections",
  viewAllHref: "#collections",
  viewProjectText: "Explore Collection",
  projects: [
    {
      id: 1,
      title: "The Heritage Collection",
      category: "Bespoke Tailoring",
      year: "2024",
      image: "/project-1.jpg",
      description: "Timeless three-piece suits crafted from the finest British and Italian fabrics. Each garment is meticulously tailored to your exact measurements, ensuring a perfect fit that exudes confidence and sophistication.",
    },
    {
      id: 2,
      title: "Autumn Outerwear",
      category: "Seasonal Edit",
      year: "2024",
      image: "/project-2.jpg",
      description: "From classic camel overcoats to contemporary parkas, our outerwear collection combines functionality with refined style. Designed to protect you from the elements while maintaining an impeccable silhouette.",
    },
    {
      id: 3,
      title: "Business Casual Essentials",
      category: "Modern Workwear",
      year: "2024",
      image: "/project-3.jpg",
      description: "Redefine your professional wardrobe with our business casual collection. Versatile blazers, premium denim, and smart shirts that transition seamlessly from boardroom to after-hours engagements.",
    },
  ],
};

// Services Section
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "What We Offer",
  titleLine1: "Exceptional",
  titleLine2Italic: "Services",
  description: "From bespoke tailoring to personal styling, we offer a comprehensive range of services designed to elevate your wardrobe and enhance your personal style.",
  services: [
    {
      iconName: "Sparkles",
      title: "Bespoke Tailoring",
      description: "Experience the art of made-to-measure with our master tailors. Each garment is crafted to your unique specifications using the world's finest fabrics.",
    },
    {
      iconName: "Diamond",
      title: "Personal Styling",
      description: "Our expert stylists work with you to curate a wardrobe that reflects your personality, lifestyle, and aspirations. From wardrobe audits to complete makeovers.",
    },
    {
      iconName: "Users",
      title: "Wardrobe Consultation",
      description: "Discover the potential of your existing wardrobe. Our consultants help you maximize your clothing investment through smart pairing and styling advice.",
    },
    {
      iconName: "Camera",
      title: "Corporate Services",
      description: "Elevate your company's image with our corporate styling services. We provide uniform solutions and executive styling for businesses of all sizes.",
    },
  ],
};

// Why Choose Me Section
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "Why Choose Us",
  titleRegular: "The Gentleman's",
  titleItalic: "Difference",
  statsLabel: "By The Numbers",
  stats: [
    { value: 25, suffix: "+", label: "Years of Excellence" },
    { value: 5000, suffix: "+", label: "Satisfied Clients" },
    { value: 98, suffix: "%", label: "Client Retention" },
    { value: 15, suffix: "+", label: "Master Tailors" },
  ],
  featureCards: [
    {
      image: "/feature-1.jpg",
      imageAlt: "Premium cashmere collection",
      title: "Premium Materials",
      description: "We source only the finest fabrics from renowned mills in Italy, England, and Scotland. From Super 180s wool to luxurious cashmere, every material meets our exacting standards.",
    },
    {
      image: "/feature-2.jpg",
      imageAlt: "Expert tailoring craftsmanship",
      title: "Master Craftsmanship",
      description: "Our team of master tailors brings decades of experience to every garment. Each stitch is placed with precision, ensuring durability and a flawless finish that stands the test of time.",
    },
  ],
  wideImage: "/wide-image.jpg",
  wideImageAlt: "Fashion runway showcasing men's collections",
  wideTitle: "Runway to Reality",
  wideDescription: "Our designs grace international runways, but they're created for real life. Every piece combines cutting-edge fashion with practical wearability.",
};

// Testimonials Section
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "Client Stories",
  titleRegular: "What Gentlemen",
  titleItalic: "Say",
  testimonials: [
    {
      id: 1,
      name: "Alexander Mitchell",
      role: "CEO, Mitchell Ventures",
      image: "/testimonial-1.jpg",
      quote: "Gentleman's Craft has transformed my approach to dressing. Their attention to detail and understanding of my personal style has given me a wardrobe that I'm genuinely proud of. The bespoke suits are simply unmatched.",
    },
    {
      id: 2,
      name: "Victoria Chen",
      role: "Fashion Director, Luxe Magazine",
      image: "/testimonial-2.jpg",
      quote: "As someone who works in fashion, I have high standards. Gentleman's Craft exceeded every expectation. They dressed my husband for our gala event, and he received more compliments than I did!",
    },
    {
      id: 3,
      name: "James Harrington",
      role: "Entrepreneur & Investor",
      image: "/testimonial-3.jpg",
      quote: "The personal styling service was a game-changer. They didn't just sell me clothes; they taught me how to build a versatile wardrobe. Now I feel confident in any setting, from boardrooms to weekend brunches.",
    },
  ],
};

// FAQ Section
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "Common Questions",
  titleRegular: "Frequently",
  titleItalic: "Asked",
  ctaText: "Still have questions?",
  ctaButtonText: "Get in Touch",
  ctaHref: "#contact",
  faqs: [
    {
      id: "faq-1",
      question: "How long does bespoke tailoring take?",
      answer: "Our bespoke tailoring process typically takes 4-6 weeks from initial consultation to final fitting. This includes two to three fitting sessions to ensure every detail is perfect. For urgent requests, we offer an expedited service with a premium.",
    },
    {
      id: "faq-2",
      question: "What is the price range for your suits?",
      answer: "Our ready-to-wear collection starts at $895, while bespoke suits begin at $2,500. The final price depends on fabric selection, construction details, and any special requirements. We offer a range of options to suit different budgets without compromising on quality.",
    },
    {
      id: "faq-3",
      question: "Do you offer alterations for garments not purchased from you?",
      answer: "Yes, we provide expert alteration services for all quality menswear, regardless of where it was purchased. Our master tailors can handle everything from simple hemming to complex restructuring. Pricing depends on the complexity of the work.",
    },
    {
      id: "faq-4",
      question: "What should I expect from a personal styling session?",
      answer: "Our personal styling sessions begin with a comprehensive consultation to understand your lifestyle, preferences, and goals. We'll assess your current wardrobe, discuss your needs, and create a personalized style plan. Sessions can be conducted in-store or at your location.",
    },
    {
      id: "faq-5",
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide. International orders are carefully packaged and shipped via trusted carriers with full insurance. For bespoke items, we recommend scheduling a virtual fitting to ensure the perfect fit before shipping.",
    },
  ],
};

// Footer Section
export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  email: string;
  locationText: string;
  navigationLabel: string;
  navLinks: FooterLink[];
  socialLabel: string;
  socialLinks: SocialLink[];
  tagline: string;
  copyright: string;
  bottomLinks: FooterLink[];
}

export const footerConfig: FooterConfig = {
  logoText: "GENTLEMAN'S CRAFT",
  contactLabel: "Get in Touch",
  email: "hello@gentlemanscraft.com",
  locationText: "456 Savile Row\nLondon W1S 3PR\nUnited Kingdom",
  navigationLabel: "Navigation",
  navLinks: [
    { label: "Collections", href: "#collections" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Lookbook", href: "#lookbook" },
    { label: "Journal", href: "#journal" },
  ],
  socialLabel: "Follow Along",
  socialLinks: [
    { iconName: "Instagram", href: "https://instagram.com", label: "Instagram" },
    { iconName: "Twitter", href: "https://twitter.com", label: "Twitter" },
    { iconName: "Linkedin", href: "https://linkedin.com", label: "LinkedIn" },
    { iconName: "Mail", href: "mailto:hello@gentlemanscraft.com", label: "Email" },
  ],
  tagline: "Crafting elegance since 1999\nFor the modern gentleman",
  copyright: "© 2024 Gentleman's Craft. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Settings", href: "#cookies" },
  ],
};
