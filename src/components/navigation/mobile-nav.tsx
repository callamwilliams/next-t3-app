'use client';

import * as React from 'react';

import { X, Star } from 'lucide-react';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { useLockBody } from '@/hooks/use-lock-body';
import { cn } from '@/lib/utils';

import { NavItem } from './nav-item';
import type { MainNavItem } from '../../types';

interface MobileNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  isAuthenticated: boolean;
}

export function MobileNav({
  items,
  children,
  isAuthenticated,
}: MobileNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  useLockBody();

  return (
    <>
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => {
          setShowMobileMenu(!showMobileMenu);
        }}
        type="button"
      >
        {showMobileMenu ? <X /> : <Star />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items ? (
        <div
          className={cn(
            'fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden',
          )}
        >
          <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
            <Link className="flex items-center space-x-2" href="/">
              <span className="font-bold">{siteConfig.name}</span>
            </Link>
            <nav className="grid grid-flow-row auto-rows-max text-sm">
              {items.map((item) => (
                <NavItem
                  isAuthenticated={isAuthenticated}
                  item={item}
                  key={item.href}
                />
              ))}
            </nav>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}
