import { Button, buttonVariants } from '@/components/ui/button';
import { ROUTES } from '@/config/routes';
import { cn } from '@/lib/utils';

export function UserSessionButton() {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return (
      <div className="flex">
        <form action={ROUTES.SIGN_OUT} method="POST">
          <Button
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'sm' }),
              'px-4',
            )}
            type="submit"
          >
            Sign Out
          </Button>
        </form>
      </div>
    );
  }

  return (
    <Button
      asChild
      className={cn(
        buttonVariants({ variant: 'secondary', size: 'sm' }),
        'px-4',
      )}
    >
      <a href={ROUTES.SIGN_IN}>Sign In</a>
    </Button>
  );
}
