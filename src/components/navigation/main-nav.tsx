import * as React from 'react';

import Link from 'next/link';

import { MobileNav } from '@/components/navigation/mobile-nav';
import { siteConfig } from '@/config/site';

import { NavItem } from './nav-item';
import type { MainNavItem } from '../../types';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  isAuthenticated: boolean;
}

export function MainNav({ items, children, isAuthenticated }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link className="hidden items-center space-x-2 md:flex" href="/">
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
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

      <MobileNav isAuthenticated={isAuthenticated} items={items}>
        {children}
      </MobileNav>
    </div>
  );
}
