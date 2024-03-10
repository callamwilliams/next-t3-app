'use client';

import * as React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 as Spinner } from 'lucide-react';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';

import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { userAuthSchema } from '@/lib/validations/auth';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

type FormData = z.infer<typeof userAuthSchema>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  function onSubmit(data: FormData) {
    setIsLoading(true);

    setIsLoading(false);

    return toast({
      title: 'Check your email',
      description:
        'We sent you a sign in link. Be sure to check your spam too.',
    });
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              id="email"
              placeholder="name@example.com"
              type="email"
              {...register('email')}
            />
            {errors.email ? (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            ) : null}
          </div>
          <button
            className={cn(buttonVariants())}
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? (
              <Spinner className="mr-2 size-4 animate-spin" />
            ) : null}
            Sign In with Email
          </button>
        </div>
      </form>
    </div>
  );
}
