import { ChevronLeft } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { UserAuthForm } from '@/components/user-auth-form';
import { ROUTES } from '@/config/routes';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in to your account',
};

export default function SigninPage() {
  return (
    <div className="size-screen container flex flex-col items-center justify-center">
      <Link
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8',
        )}
        href="/"
      >
        <>
          <ChevronLeft className="mr-2 size-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          Logo
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            className="hover:text-brand underline underline-offset-4"
            href={ROUTES.REGISTER}
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
