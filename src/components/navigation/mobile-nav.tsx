import { Button, buttonVariants } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '~/lib/utils';
import { type MainNavItem } from '~/types';
import { NavItem } from './nav-item';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  isAuthenticated: boolean;
}

export function MobileNav({ items, isAuthenticated }: MainNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className={cn(
            buttonVariants({ variant: 'outline', size: 'sm' }),
            'px-4 md:hidden',
          )}
          variant="outline"
        >
          Open
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Starter</SheetTitle>
          <SheetDescription>Starter project</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {items?.length ? (
            <nav className="gap-6 md:flex">
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
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
