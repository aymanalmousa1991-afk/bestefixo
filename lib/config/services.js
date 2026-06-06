// Services configuration — central source of truth. Add new services here.
// Each service supports multiple images for the gallery/carousel.

import {
  Building2,
  Home,
  SprayCan,
  Hammer,
  Wind,
  ClipboardList,
  Wrench,
  Palmtree,
  GraduationCap,
  Factory,
  Sun,
  Heart,
} from 'lucide-react';

export const SERVICES = [
  {
    slug: 'kantoorschoonmaak',
    title: 'Kantoorschoonmaak',
    icon: Building2,
    short:
      'Professionele dagelijkse of wekelijkse schoonmaak van uw kantoor. Frisse werkplekken, productieve teams.',
    description:
      'Een schone werkomgeving verhoogt productiviteit en welzijn. Wij verzorgen kantoorschoonmaak buiten of binnen kantooruren met vaste medewerkers, heldere planning en duidelijke rapportages.',
    benefits: [
      'Flexibele tijden - voor of na werktijd',
      'Vaste vertrouwde medewerker',
      'Hygiëne- en luchtkwaliteit-check',
      'Maandelijkse kwaliteitsrapportage',
    ],
    images: [
      '/projects/kantoorruimte.jpeg',
      '/projects/kantoor.jpeg',
      '/projects/ingang bedrijf.jpeg',
      '/projects/kantoorruimte.jpeg',
    ],
  },
  {
    slug: 'huisschoonmaak',
    title: 'Huisschoonmaak',
    icon: Home,
    short:
      'Een brandschoon huis zonder zorgen. Wij zorgen voor elk detail, u geniet van uw vrije tijd.',
    description:
      'Of u nu wekelijks, tweewekelijks of incidenteel ondersteuning wenst - onze huishoudelijke schoonmaak is grondig, betrouwbaar en op uw wensen afgestemd.',
    benefits: [
      'Betrouwbare, gescreende schoonmakers',
      'Eigen sleutelbeheer mogelijk',
      'Eigen schoonmaakmiddelen of die van u',
      '100% tevredenheidsgarantie',
    ],
    images: [
      '/projects/keuken.jpeg',
      '/projects/huizen1.jpg',
      '/projects/huizen2.jpg',
    ],
  },
  {
    slug: 'dieptereiniging',
    title: 'Dieptereiniging',
    icon: SprayCan,
    short:
      'Grondige reiniging tot in de kleinste hoek. Ideaal voor periodieke grote schoonmaakbeurten.',
    description:
      'Onze dieptereiniging gaat verder dan reguliere schoonmaak: van keukenapparatuur en sanitair tot kozijnen, plinten en moeilijk bereikbare plekken - alles wordt aangepakt.',
    benefits: [
      'Hoogwaardige professionele middelen',
      'Anti-bacterieel en ontkalkend',
      'Zichtbaar en voelbaar verschil',
      'Ideaal 2x per jaar',
    ],
    images: [
      '/projects/DSCN0906.jpg',
      '/projects/sc1250foam4_kl.jpg',
    ],
  },
  {
    slug: 'opleveringsschoonmaak',
    title: 'Opleveringsschoonmaak',
    icon: Hammer,
    short:
      'Verhuist u? Wij leveren uw woning of pand bezemschoon en klaar voor inspectie op.',
    description:
      'Een soepele oplevering begint met een schoon pand. Wij zorgen voor een resultaat dat door iedere inspecteur of nieuwe eigenaar wordt goedgekeurd.',
    benefits: [
      'Inspectie-proof oplevering',
      'Snelle uitvoering, vaak binnen 1 dag',
      'Vaste prijs vooraf',
      'Eindcontrole door teamleider',
    ],
    images: [
      '/projects/Balaie-fin-de-chantier.jpg',
      '/projects/schoonmaak-na-verbouwing.jpg',
    ],
  },
  {
    slug: 'vloeronderhoud',
    title: 'Vloeronderhoud',
    icon: Wind,
    short:
      'Vakkundig onderhoud voor pvc, hout, marmer, tegels en meer. Behoud uw vloer langer mooi.',
    description:
      'Met de juiste behandeling blijft elke vloer jarenlang prachtig. Wij boenen, kristalliseren, beschermen en herstellen - afgestemd op uw vloertype.',
    benefits: [
      'Boenen en kristalliseren',
      'Beschermlaag tegen slijtage',
      'Materiaal-specifieke aanpak',
      'Langere levensduur van uw vloer',
    ],
    images: [
      '/projects/lucidatura-del-marmo_NG1.jpg',
      '/projects/maxresdefault.jpg',
    ],
  },
  {
    slug: 'trappenhuisreiniging',
    title: 'Trappenhuisreiniging',
    icon: ClipboardList,
    short:
      'VvE en woningcorporatie? Wij verzorgen vaste rondes voor schone trappenhuizen en gangen.',
    description:
      'Een verzorgd trappenhuis verhoogt de waarde van het pand en het wooncomfort. Wij werken met vaste rondes en transparante rapportages voor VvEs en corporaties.',
    benefits: [
      'Vaste planning per week of maand',
      'Rapportage per ronde',
      'Scherp tarief, geen verrassingen',
      'Aanvullend glaswerk mogelijk',
    ],
    images: [
      '/projects/DSC00749.jpg',
      '/projects/of20210215-141-convertimage-min.jpg',
    ],
  },
  {
    slug: 'na-verbouwing',
    title: 'Schoonmaak na verbouwing',
    icon: Wrench,
    short:
      'Stof, kalk en bouwresten verwijderen wij grondig zodat uw ruimte direct bruikbaar is.',
    description:
      'Na een verbouwing zit fijnstof overal. Wij gebruiken speciale apparatuur en methodes om uw ruimte direct woon- of werkklaar te maken.',
    benefits: [
      'Bouwstof- en cementresten verwijdering',
      'Glas, kozijnen, plinten en vloeren',
      'HEPA-filter stofzuigers',
      'Klaar in een dag',
    ],
    images: [
      '/projects/Balaie-fin-de-chantier.jpg',
      '/projects/schoonmaak-na-verbouwing.jpg',
    ],
  },
  {
    slug: 'vakantieparken',
    title: 'Schoonmaak van vakantieparken',
    icon: Palmtree,
    short:
      'Strakke wissels en piekfijne accommodaties - zodat uw gasten direct kunnen genieten.',
    description:
      'Wij verzorgen wisselschoonmaak voor vakantieparken, recreatiewoningen en bungalows. Strakke deadlines, hoge standaarden en consistente kwaliteit per object.',
    benefits: [
      'Snelle wissels op piekdagen',
      'Linnen- en inspectiechecks',
      'Vaste teams per park',
      'Schaalbaar voor groot volume',
    ],
    images: [
      '/projects/b0caa1c236cdaa6a09262747b28d5e70.jpg',
    ],
  },
  {
    slug: 'scholen',
    title: 'Schoonmaak van scholen',
    icon: GraduationCap,
    short:
      'Hygiënisch schone leeromgevingen voor basis-, voortgezet- en hoger onderwijs.',
    description:
      'Een schone school betekent gezonde leerlingen en minder ziekteverzuim. Onze methodes voldoen aan de hoogste hygiënenormen en zijn afgestemd op de schoolomgeving.',
    benefits: [
      'Werken buiten lestijden',
      'Anti-bacteriële behandeling',
      'Sanitair-, klas- en gangenfocus',
      'VOG-gescreende medewerkers',
    ],
    images: [
      '/projects/vergader ruimte.jpeg',
      '/projects/toiltiten.jpeg',
      '/projects/leesruimte.jpeg',
    ],
  },
  {
    slug: 'fabrieken',
    title: 'Schoonmaak van fabrieken',
    icon: Factory,
    short:
      'Industriële schoonmaak voor productie-, logistieke en magazijnomgevingen.',
    description:
      'Industriële omgevingen vragen om specialistische schoonmaak. Wij werken veilig, efficiënt en in overeenstemming met uw productieprocessen en veiligheidsnormen.',
    benefits: [
      'Productie-onafhankelijke planning',
      'Vloeren, machines en magazijnen',
      'VCA-gecertificeerd personeel',
      'Industriële schoonmaakmachines',
    ],
    images: [
      '/projects/fabriek 2.jpeg',
      '/projects/fabriek.jpeg',
      '/projects/fabriek3.jpeg',
    ],
  },
  {
    slug: 'buitenonderhoud',
    title: 'Buitenonderhoud van huizen',
    icon: Sun,
    short:
      'Professionele reiniging van gevels, kozijnen, bestrating en dakgoten. Uw huis straalt weer.',
    description:
      'Wij brengen de buitenkant van uw woning of pand weer in topconditie. Van gevelreiniging en kozijnen tot bestrating en dakgoten - alles wordt grondig aangepakt met de juiste technieken en middelen.',
    benefits: [
      'Gevel-, kozijn- en bestratingsreiniging',
      'Druk- of stoomreinigen op maat',
      'Algen, mos en vuil verwijdering',
      'Direct zichtbaar resultaat',
    ],
    images: [
      '/projects/huizen buitenkant.jpeg',
      '/projects/huizen1.jpg',
      '/projects/huizen2.jpg',
    ],
  },
  {
    slug: 'zorginstellingen',
    title: 'Schoonmaak van zorginstellingen',
    icon: Heart,
    short:
      'Hygiënisch verantwoorde schoonmaak voor verpleeghuizen, zorgcentra en klinieken.',
    description:
      'In zorgomgevingen staat hygiëne voorop. Onze medewerkers zijn getraind in ziekenhuishygiëne, werken met de juiste desinfectiemiddelen en respecteren de privacy van bewoners en patiënten.',
    benefits: [
      'Getraind in zorg hygiëne protocollen',
      'Desinfectie van contactoppervlakken',
      'Respectvolle omgang met bewoners',
      'VOG en referenties aanwezig',
    ],
    images: [
      '/projects/toiltiten.jpeg',
      '/projects/keuken.jpeg',
      '/projects/resturant.jpeg',
    ],
  },
];
