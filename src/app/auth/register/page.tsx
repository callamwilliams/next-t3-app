import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { UserAuthForm } from '@/components/user-auth-form';
import { cn } from '~/lib/utils';
import { ChevronLeft } from 'lucide-react';

export const metadata = {
  title: 'Create an account',
  description: 'Create an account to get started.',
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen container grid flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8',
        )}
        href="/auth/signin"
      >
        <>
          <ChevronLeft className="mr-2 size-4" />
          Login
        </>
      </Link>
      <div className="hidden h-full bg-muted lg:block" />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:max-w-[550px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <Link
              className="hover:text-brand underline underline-offset-4"
              href="/terms"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              className="hover:text-brand underline underline-offset-4"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
