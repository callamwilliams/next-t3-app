import Link from 'next/link';

import { siteConfig } from '@/config/site';

import type { MainNavItem } from '../../types';
import { UserSessionButton } from '../UserSessionButton';
import { MobileNav } from './mobile-nav';
import { NavItem } from './nav-item';

interface MainNavProps {
  items?: MainNavItem[];
  isAuthenticated: boolean;
}

export function MainNav({ items, isAuthenticated }: MainNavProps) {
  return (
    <>
      <div className="flex gap-6 md:gap-10">
        <Link className="items-center space-x-2 md:flex" href="/">
          <span className="font-bold sm:inline-block">{siteConfig.name}</span>
        </Link>
        {items?.length ? (
          <nav className="hidden gap-6 md:flex">
            {items.map((item) => (
              <NavItem
                isAuthenticated={isAuthenticated}
                item={item}
                key={item.href}
              />
            ))}
          </nav>
        ) : null}
      </div>
      <div>
        <UserSessionButton isAuthenticated={Boolean(isAuthenticated)} />
        <MobileNav items={items} isAuthenticated={isAuthenticated} />
      </div>
    </>
  );
}
