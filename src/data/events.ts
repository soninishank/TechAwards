export type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  image: string;
  registrationLink: string;
  status: 'upcoming' | 'past';
};

export const events: Event[] = [
  {
    id: '1',
    title: 'Finalists Showcase: Product + Engineering',
    date: 'August 20, 2026',
    time: '5:30 PM - 8:30 PM CT',
    location: 'Capital Factory, Austin + livestream',
    category: 'Awards Showcase',
    description:
      'Meet the shortlisted teams, hear 5-minute finalist presentations, and network with judges before final scoring week.',
    image:
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200',
    registrationLink: '/awards/finalists',
    status: 'upcoming',
  },
  {
    id: '2',
    title: 'Tech Leadership Roundtable',
    date: 'September 02, 2026',
    time: '6:00 PM - 8:00 PM CT',
    location: 'The Ion, Houston',
    category: 'Leadership',
    description:
      'An invite-friendly discussion on scaling engineering teams, hiring in 2026, and how leaders evaluate impact.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200',
    registrationLink: '/awards/contact',
    status: 'upcoming',
  },
  {
    id: '3',
    title: 'Community Mixer: Build + Belong',
    date: 'September 10, 2026',
    time: '6:30 PM - 9:00 PM CT',
    location: 'Dallas Startup Week Hub',
    category: 'Networking',
    description:
      'A social night for engineers, designers, founders, and recruiters attending the awards function week.',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200',
    registrationLink: '/events',
    status: 'upcoming',
  },
  {
    id: '4',
    title: '2025 Winners Panel: Lessons After the Stage',
    date: 'October 12, 2025',
    time: '5:00 PM - 7:00 PM CT',
    location: 'Online',
    category: 'Recap',
    description:
      'Past winners shared what changed after recognition, including hiring results, customer trust, and partnership growth.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    registrationLink: '/awards/winners',
    status: 'past',
  },
];
