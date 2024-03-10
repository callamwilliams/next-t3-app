import { MainNav } from '@/components/navigation/main-nav';
import { SiteFooter } from '@/components/site-footer';
import { UserSessionButton } from '@/components/UserSessionButton';
import { siteConfig } from '@/config/site';

export default function BaseTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = true;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav
            isAuthenticated={Boolean(isAuthenticated)}
            items={siteConfig.mainNav}
          />

          <UserSessionButton />
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export { BaseTemplate };
