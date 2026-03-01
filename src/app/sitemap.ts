import type { MetadataRoute } from 'next';
import { awardCategoryDetails } from '@/data/awardCategories';

const baseUrl = 'https://nationaltechexcellence.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/about',
    '/blog',
    '/careers',
    '/events',
    '/awards',
    '/awards/contact',
    '/awards/faq',
    '/awards/finalists',
    '/awards/how-it-works',
    '/awards/judges',
    '/awards/nominate',
    '/awards/selection-criteria',
    '/awards/voting',
    '/awards/winners',
  ];

  const categoryRoutes = awardCategoryDetails.map((category) => `/awards/${category.slug}`);

  return [...staticRoutes, ...categoryRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2019-12-31T00:00:00.000Z'),
    changeFrequency: 'yearly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
