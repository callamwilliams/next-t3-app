'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { cn } from '@/lib/utils';
import type { MainNavItem } from '@/types';

interface NavItemProps {
  item: MainNavItem;
  isAuthenticated: boolean;
}

export function NavItem({ item, isAuthenticated }: NavItemProps) {
  const segment = useSelectedLayoutSegment();

  if (item.authRoute && !isAuthenticated) return null;

  return (
    <Link
      className={cn(
        'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
        item.href.startsWith(`/${segment}`)
          ? 'text-foreground'
          : 'text-foreground/60',
        item.disabled && 'cursor-not-allowed opacity-80',
      )}
      href={item.disabled ? '#' : item.href}
    >
      {item.title}
    </Link>
  );
}
