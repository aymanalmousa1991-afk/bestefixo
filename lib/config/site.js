// Centralized site configuration - easily editable for future updates.
// To change brand info, navigation, contact details, or copy: edit here.

export const SITE = {
  brand: {
    name: 'BesteFixo',
    tagline: 'Schoonmaak',
    fullName: 'BesteFixo Schoonmaak',
    domain: 'bestefixo.nl',
    description:
      'Premium schoonmaakdiensten voor bedrijven en particulieren in heel Nederland.',
    // Logo image (uploaded by user). Background is white in source; we use CSS mix-blend-multiply
    // to make it appear transparent on light backgrounds.
    logoUrl:
      'https://customer-assets.emergentagent.com/job_36e8bb32-da94-4726-ae14-13ecc225d83d/artifacts/78dca20n_WhatsApp%20Image%202026-05-29%20at%2022.18.16.jpeg',
  },
  contact: {
    phone: '+31 6 12 34 56 78',
    phoneRaw: '+31612345678',
    whatsappNumber: '31612345678',
    email: 'info@bestefixo.nl',
    workArea: 'Amsterdam, Rotterdam, Den Haag, Utrecht & omgeving',
    hours: 'Ma–Vr 08:00–18:00 · Za 09:00–14:00',
    address: {
      street: 'Hoofdstraat 1',
      city: 'Amsterdam',
      postalCode: '1000 AA',
      country: 'NL',
    },
  },
  social: {
    // Add socials when available
  },
  seo: {
    title:
      'BesteFixo Schoonmaak — Professionele Schoonmaakdiensten voor Bedrijven en Particulieren',
    description:
      'BesteFixo levert hoogwaardige schoonmaakdiensten in heel Nederland: kantoorschoonmaak, huisschoonmaak, dieptereiniging, vakantieparken, scholen, fabrieken en meer. Vraag direct een vrijblijvende offerte aan.',
    keywords: [
      'schoonmaakbedrijf',
      'BesteFixo',
      'kantoorschoonmaak',
      'huisschoonmaak',
      'dieptereiniging',
      'opleveringsschoonmaak',
      'vloeronderhoud',
      'trappenhuisreiniging',
      'schoonmaak vakantieparken',
      'schoonmaak scholen',
      'schoonmaak fabrieken',
      'Nederland',
    ],
  },
  rating: {
    value: '4.9',
    count: '127',
  },
};

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#over', label: 'Over Ons' },
  { href: '#diensten', label: 'Diensten' },
  { href: '#werkproces', label: 'Werkwijze' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export const FAQS = [
  {
    q: 'In welke regio is BesteFixo actief?',
    a: 'Wij zijn actief in heel Nederland met focus op Amsterdam, Rotterdam, Den Haag, Utrecht en omgeving. Neem contact op voor uw specifieke locatie.',
  },
  {
    q: 'Kan ik vrijblijvend een offerte aanvragen?',
    a: 'Ja, een offerte is altijd kosteloos en geheel vrijblijvend. Wij komen indien gewenst graag bij u langs voor een persoonlijke inventarisatie.',
  },
  {
    q: 'Werken jullie met eigen medewerkers?',
    a: 'Ja, al onze schoonmakers zijn vast in dienst, verzekerd en zorgvuldig geselecteerd. Geen onderaannemers, wel vaste gezichten.',
  },
  {
    q: 'Gebruiken jullie milieuvriendelijke producten?',
    a: 'Standaard werken wij met duurzame, hoogwaardige producten die veilig zijn voor mens, dier en milieu — zonder in te leveren op kwaliteit.',
  },
  {
    q: 'Wat als ik niet tevreden ben?',
    a: 'Wij hanteren een 100% tevredenheidsgarantie. Bent u niet tevreden? Dan komen wij kosteloos terug om het op te lossen.',
  },
  {
    q: 'Hoe snel kunnen jullie starten?',
    a: 'In de meeste gevallen kunnen we binnen 48 uur starten. Voor spoedklussen zijn we vaak dezelfde dag beschikbaar.',
  },
];

export const SEED_TESTIMONIALS = [
  {
    name: 'Sander de Vries',
    role: 'Office Manager, TechHub Amsterdam',
    rating: 5,
    text:
      'BesteFixo verzorgt al ruim 2 jaar onze kantoorschoonmaak. Altijd punctueel, vriendelijk en een resultaat om trots op te zijn. Aanrader!',
  },
  {
    name: 'Marieke Jansen',
    role: 'Particulier, Utrecht',
    rating: 5,
    text:
      'Eindelijk een schoonmaakbedrijf dat doet wat het belooft. Mijn huis straalt en het team is super betrouwbaar en netjes.',
  },
  {
    name: 'Jeroen Bakker',
    role: 'VvE Voorzitter, Rotterdam',
    rating: 5,
    text:
      'Onze trappenhuizen zijn nog nooit zo schoon geweest. Heldere communicatie en scherpe prijzen. Top samenwerking.',
  },
  {
    name: 'Lisa Hendriks',
    role: 'Praktijkhouder, Den Haag',
    rating: 5,
    text:
      'Hygiëne is voor ons cruciaal. BesteFixo levert constante topkwaliteit en denkt actief mee. Echt premium service.',
  },
  {
    name: 'Bram van Dijk',
    role: 'Aannemer, Eindhoven',
    rating: 5,
    text:
      'Na elke verbouwing schakelen we BesteFixo in voor de opleveringsschoonmaak. Klanten zijn altijd verrast door het resultaat.',
  },
];
