'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { type z } from 'zod';
import { createClient } from '~/lib/utils/supabase/server';
import { type userAuthSchema } from '~/lib/validations/auth';
type FormData = z.infer<typeof userAuthSchema>;

export async function login(formData: FormData) {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword(formData);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  const { error } = await supabase.auth.signUp(formData);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
