import BaseTemplate from '@/templates/BaseTemplate';
import { redirect } from 'next/navigation';

import { createClient } from '~/lib/utils/supabase/server';

export default async function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error ?? !data?.user) {
    redirect('/');
  }
  return <BaseTemplate>{children}</BaseTemplate>;
}
