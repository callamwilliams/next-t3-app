import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'Starter',
  description: '',
  url: '',
  ogImage: '',
  links: {
    twitter: '',
    github: '',
  },
  mainNav: [
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Settings',
      href: '/settings',
      authRoute: true,
    },
  ],
};
