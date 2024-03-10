import BaseTemplate from '@/templates/BaseTemplate';

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <BaseTemplate>{children}</BaseTemplate>;
}
