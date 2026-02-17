export type AwardCategory = {
    id: string;
    title: string;
    description: string;
    criteria: string[];
    icon: string;
};

export const awardCategories: AwardCategory[] = [
    {
        id: '1',
        title: 'Best Tech Startup',
        description: 'Recognizing startups that have shown exceptional growth, innovation, and market impact in the last 12 months.',
        criteria: ['Founded within the last 5 years', 'Must have a live product in the market', 'Demonstrable user traction or revenue'],
        icon: 'Rocket',
    },
    {
        id: '2',
        title: 'Tech Leader of the Year',
        description: 'Honoring CTOs, VPs of Engineering, or Technical Founders who have led their teams to extraordinary success.',
        criteria: ['Proven leadership track record', 'Technical contributions to the ecosystem', 'Mentorship and community involvement'],
        icon: 'UserCheck',
    },
    {
        id: '3',
        title: 'Best Work Culture',
        description: 'For companies that prioritize their engineering teams\' well-being, growth, and work-life balance.',
        criteria: ['Employee testimonials', 'Retention rates', 'Unique cultural initiatives'],
        icon: 'Heart',
    },
    {
        id: '4',
        title: 'Social Impact Award',
        description: 'Celebrating technology solutions that are addressing critical problems for underserved communities.',
        criteria: ['Measurable social impact', 'Scalability of the solution', 'Sustainable business model'],
        icon: 'Globe',
    },
    {
        id: '5',
        title: 'Open Source Contributor',
        description: 'Acknowledging individuals who have made significant contributions to open source projects.',
        criteria: ['Github contribution history', 'Impact of contributions', 'Community engagement'],
        icon: 'Code',
    },
];
