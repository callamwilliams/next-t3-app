import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BaseTemplate>
      <div className="py-5 text-xl [&_a:hover]:border-b-2 [&_a:hover]:border-blue-700 [&_a]:text-blue-700 [&_p]:my-6 [&_ul]:my-6">
        {children}
      </div>
    </BaseTemplate>
  );
}
