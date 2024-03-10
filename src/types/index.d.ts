import type { Icons } from '@/components/icons';

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  authRoute?: boolean;
}

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
  mainNav: NavItem[];
}

export interface SubscriptionPlan {
  name: string;
  description: string;
  stripePriceId: string;
}
