export type AwardCategoryDetail = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  whoShouldApply: string;
  judgingCriteria: string[];
  timeline: string;
};

export const awardCategoryDetails: AwardCategoryDetail[] = [
  {
    slug: 'best-tech-startup',
    title: 'Best Tech Startup',
    shortDescription:
      'For startups showing exceptional momentum, product quality, and customer love in the last 12 months.',
    description:
      'Recognizes early-stage and growth-stage startups delivering meaningful innovation and measurable market traction.',
    whoShouldApply:
      'Startups founded in the last 7 years with a live product and active customer usage.',
    judgingCriteria: [
      'Evidence of product-market fit',
      'User or revenue growth over the last 12 months',
      'Technical innovation and execution quality',
    ],
    timeline: 'Finalist review in August 2019; winner announced at the September 15, 2019 awards function.',
  },
  {
    slug: 'best-tech-work-culture',
    title: 'Best Tech Work Culture',
    shortDescription:
      'Recognizing teams creating high-trust, inclusive, and growth-oriented engineering cultures.',
    description:
      'Celebrates organizations that build environments where teams can do their best work and grow sustainably.',
    whoShouldApply:
      'Technology organizations with clear culture initiatives, leadership commitment, and team feedback data.',
    judgingCriteria: [
      'Demonstrated employee development practices',
      'Inclusive and psychologically safe team culture',
      'Retention, engagement, and team outcomes',
    ],
    timeline: 'Shortlisting closes in August 2019; winners are announced live in September 2019.',
  },
  {
    slug: 'best-tech-manager',
    title: 'Best Tech Manager',
    shortDescription:
      'For leaders who consistently ship outcomes while mentoring and scaling healthy technical teams.',
    description:
      'Honors engineering and product leaders who combine execution excellence with strong people leadership.',
    whoShouldApply:
      'Managers or directors with at least 2 years in a people leadership role in a technology team.',
    judgingCriteria: [
      'Business impact delivered by the team',
      'Mentorship and talent development',
      'Cross-functional leadership and communication',
    ],
    timeline: 'Interviews happened in August 2019 and final announcements happened on awards night.',
  },
  {
    slug: 'best-enterprise-tech',
    title: 'Best Enterprise Tech',
    shortDescription:
      'Awarding established organizations that modernize systems and deliver measurable business impact.',
    description:
      'Recognizes enterprise-scale teams modernizing architecture, reliability, and delivery for large organizations.',
    whoShouldApply:
      'Large organizations with significant modernization or platform transformation outcomes.',
    judgingCriteria: [
      'Scale and complexity handled',
      'Operational reliability and performance improvements',
      'Business impact and adoption across teams',
    ],
    timeline: 'Final enterprise judging round was held in early September 2019.',
  },
  {
    slug: 'tech-for-good',
    title: 'Tech for Good',
    shortDescription:
      'Celebrating products using technology to improve access, sustainability, or social outcomes.',
    description:
      'Highlights teams using technology to solve meaningful social, accessibility, climate, or public-interest problems.',
    whoShouldApply:
      'Organizations and teams with measurable social or environmental outcomes backed by data.',
    judgingCriteria: [
      'Clarity and size of impact created',
      'Scalability and sustainability of the solution',
      'Evidence-backed outcomes and accountability',
    ],
    timeline: 'Community input was considered during August 2019 before final judging.',
  },
  {
    slug: 'top-gentle-giant',
    title: 'Top Gentle Giant',
    shortDescription:
      'Honoring larger companies that stay agile, curious, and builder-focused as they scale.',
    description:
      'Recognizes mature organizations that preserve speed, experimentation, and people-first values while growing.',
    whoShouldApply:
      'Large-scale companies with established teams and evidence of innovation culture.',
    judgingCriteria: [
      'Ability to ship quickly at scale',
      'Internal innovation and experimentation practices',
      'Leadership quality and long-term culture health',
    ],
    timeline: 'Category winner announced during the live ceremony on September 15, 2019.',
  },
];

export function getAwardCategoryBySlug(slug: string) {
  return awardCategoryDetails.find((category) => category.slug === slug);
}
