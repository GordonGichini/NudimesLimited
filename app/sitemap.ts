import type { MetadataRoute } from 'next';
import { modules } from './lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nudimeslimited.com';
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/solutions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const solutionRoutes = modules.map((mod) => ({
    url: `${baseUrl}/solutions/${mod.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...solutionRoutes];
}