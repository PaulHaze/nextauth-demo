import type { ReactNode } from 'react';

type MainLayoutProps = {
  meta: ReactNode;
  children: ReactNode;
};

export function MainLayout({ meta, children }: MainLayoutProps) {
  return (
    <div className="w-full antialiased">
      {meta}
      <div>{children}</div>
    </div>
  );
}
