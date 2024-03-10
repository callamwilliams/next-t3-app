'use client';

import * as React from 'react';

import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { userAuthSchema } from '@/lib/validations/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 as Spinner } from 'lucide-react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type * as z from 'zod';
import { login } from '~/app/auth/actions';
import { cn } from '~/lib/utils';
import { CardContent, CardFooter } from './ui/card';

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

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    await login(data);
    setIsLoading(false);
  };

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-6">
              <Button variant="outline">Provider One</Button>
              <Button variant="outline">Provider Two</Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid gap-2">
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

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register('password')} />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className={cn(buttonVariants(), 'w-full')}
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <Spinner className="mr-2 size-4 animate-spin" />
              ) : null}
              Sign in
            </Button>
          </CardFooter>
        </div>
      </form>
    </div>
  );
}
