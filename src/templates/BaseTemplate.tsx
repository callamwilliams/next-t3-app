import { MainNav } from '@/components/navigation/main-nav';
import { SiteFooter } from '@/components/site-footer';
import { siteConfig } from '@/config/site';
import { createClient } from '~/lib/utils/supabase/server';

export default async function BaseTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  const isAuthenticated = data?.user;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav
            isAuthenticated={Boolean(isAuthenticated)}
            items={siteConfig.mainNav}
          />
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export { BaseTemplate };
