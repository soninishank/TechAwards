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
    date: 'August 24, 2019',
    time: '5:30 PM - 8:30 PM IST',
    location: 'CoWrks Residency Road, Bengaluru',
    category: 'Awards Showcase',
    description:
      'Meet the shortlisted teams, hear 5-minute finalist presentations, and network with judges before final scoring week.',
    image:
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200',
    registrationLink: '/awards/finalists',
    status: 'past',
  },
  {
    id: '2',
    title: 'Judge Roundtable',
    date: 'September 05, 2019',
    time: '6:00 PM - 8:00 PM IST',
    location: 'Taj MG Road, Bengaluru',
    category: 'Leadership',
    description:
      'An invite-only session where judges reviewed nomination trends and category scoring consistency.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200',
    registrationLink: '/awards/contact',
    status: 'past',
  },
  {
    id: '3',
    title: 'Tech Award Summit 2019: Awards Function',
    date: 'September 15, 2019',
    time: '6:00 PM - 10:00 PM IST',
    location: 'Taj MG Road, Bengaluru',
    category: 'Awards Function',
    description:
      'Finalists, judges, and community members gathered for winner announcements and celebration.',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200',
    registrationLink: '/events',
    status: 'past',
  },
  {
    id: '4',
    title: 'Post-Event Winners Panel',
    date: 'October 12, 2019',
    time: '5:00 PM - 7:00 PM IST',
    location: '91springboard, Bengaluru',
    category: 'Recap',
    description:
      'Winners shared what changed after recognition, including hiring momentum and community visibility.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    registrationLink: '/awards/winners',
    status: 'past',
  },
];
