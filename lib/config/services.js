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
} from 'lucide-react';

export const SERVICES = [
  {
    slug: 'kantoorschoonmaak',
    title: 'Kantoorschoonmaak',
    icon: Building2,
    short:
      'Professionele dagelijkse of wekelijkse schoonmaak van uw kantoor. Frisse werkplekken, productieve teams.',
    description:
      'Een schone werkomgeving verhoogt productiviteit én welzijn. Wij verzorgen kantoorschoonmaak buiten of binnen kantooruren met vaste medewerkers, heldere planning en duidelijke rapportages.',
    benefits: [
      'Flexibele tijden — voor of na werktijd',
      'Vaste vertrouwde medewerker',
      'Hygiëne- en luchtkwaliteit-check',
      'Maandelijkse kwaliteitsrapportage',
    ],
    images: [
      'https://images.pexels.com/photos/4098885/pexels-photo-4098885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.unsplash.com/photo-1580256081112-e49377338b7f?w=1200&q=80&auto=format&fit=crop',
      'https://images.pexels.com/photos/34516670/pexels-photo-34516670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ],
  },
  {
    slug: 'huisschoonmaak',
    title: 'Huisschoonmaak',
    icon: Home,
    short:
      'Een brandschoon huis zonder zorgen. Wij zorgen voor elk detail, u geniet van uw vrije tijd.',
    description:
      'Of u nu wekelijks, tweewekelijks of incidenteel ondersteuning wenst — onze huishoudelijke schoonmaak is grondig, betrouwbaar en op uw wensen afgestemd.',
    benefits: [
      'Betrouwbare, gescreende schoonmakers',
      'Eigen sleutelbeheer mogelijk',
      'Eigen schoonmaakmiddelen of die van u',
      '100% tevredenheidsgarantie',
    ],
    images: [
      'https://images.pexels.com/photos/7513075/pexels-photo-7513075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/6195949/pexels-photo-6195949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ],
  },
  {
    slug: 'dieptereiniging',
    title: 'Dieptereiniging',
    icon: SprayCan,
    short:
      'Grondige reiniging tot in de kleinste hoek. Ideaal voor periodieke grote schoonmaakbeurten.',
    description:
      'Onze dieptereiniging gaat verder dan reguliere schoonmaak: van keukenapparatuur en sanitair tot kozijnen, plinten en moeilijk bereikbare plekken — alles wordt aangepakt.',
    benefits: [
      'Hoogwaardige professionele middelen',
      'Anti-bacterieel & ontkalkend',
      'Zichtbaar en voelbaar verschil',
      'Ideaal 2× per jaar',
    ],
    images: [
      'https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/4098885/pexels-photo-4098885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/6195949/pexels-photo-6195949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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
      'https://images.pexels.com/photos/3616735/pexels-photo-3616735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/4098885/pexels-photo-4098885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    slug: 'vloeronderhoud',
    title: 'Vloeronderhoud',
    icon: Wind,
    short:
      'Vakkundig onderhoud voor pvc, hout, marmer, tegels en meer. Behoud uw vloer langer mooi.',
    description:
      'Met de juiste behandeling blijft elke vloer jarenlang prachtig. Wij boenen, kristalliseren, beschermen en herstellen — afgestemd op uw vloertype.',
    benefits: [
      'Boenen & kristalliseren',
      'Beschermlaag tegen slijtage',
      'Materiaal-specifieke aanpak',
      'Langere levensduur van uw vloer',
    ],
    images: [
      'https://images.unsplash.com/photo-1566272726777-91f06285e3c9?w=1200&q=80&auto=format&fit=crop',
      'https://images.pexels.com/photos/48889/cleaning-washing-cleanup-the-ilo-48889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    slug: 'trappenhuisreiniging',
    title: 'Trappenhuisreiniging',
    icon: ClipboardList,
    short:
      'VvE en woningcorporatie? Wij verzorgen vaste rondes voor schone trappenhuizen en gangen.',
    description:
      'Een verzorgd trappenhuis verhoogt de waarde van het pand en het wooncomfort. Wij werken met vaste rondes en transparante rapportages voor VvE\'s en corporaties.',
    benefits: [
      'Vaste planning per week of maand',
      'Rapportage per ronde',
      'Scherp tarief, geen verrassingen',
      'Aanvullend glaswerk mogelijk',
    ],
    images: [
      'https://images.unsplash.com/photo-1525381846010-6463f02f61ac?w=1200&q=80&auto=format&fit=crop',
      'https://images.pexels.com/photos/48889/cleaning-washing-cleanup-the-ilo-48889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.unsplash.com/photo-1580256081112-e49377338b7f?w=1200&q=80&auto=format&fit=crop',
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
      'Glas, kozijnen, plinten & vloeren',
      'HEPA-filter stofzuigers',
      'Klaar in één dag',
    ],
    images: [
      'https://images.pexels.com/photos/3616735/pexels-photo-3616735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80&auto=format&fit=crop',
      'https://images.pexels.com/photos/4098885/pexels-photo-4098885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ],
  },
  {
    slug: 'vakantieparken',
    title: 'Schoonmaak van vakantieparken',
    icon: Palmtree,
    short:
      'Strakke wissels en piekfijne accommodaties — zodat uw gasten direct kunnen genieten.',
    description:
      'Wij verzorgen wisselschoonmaak voor vakantieparken, recreatiewoningen en bungalows. Strakke deadlines, hoge standaarden en consistente kwaliteit per object.',
    benefits: [
      'Snelle wissels op piekdagen',
      'Linnen- en inspectiechecks',
      'Vaste teams per park',
      'Schaalbaar voor groot volume',
    ],
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1700884597572-45ea007196a8?w=1200&q=80&auto=format&fit=crop',
      'https://images.pexels.com/photos/7513075/pexels-photo-7513075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?w=1200&q=80&auto=format&fit=crop',
      'https://images.pexels.com/photos/48889/cleaning-washing-cleanup-the-ilo-48889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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
      'Vloeren, machines & magazijnen',
      'VCA-gecertificeerd personeel',
      'Industriële schoonmaakmachines',
    ],
    images: [
      'https://images.pexels.com/photos/7739881/pexels-photo-7739881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/236709/pexels-photo-236709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/3616735/pexels-photo-3616735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ],
  },
];
