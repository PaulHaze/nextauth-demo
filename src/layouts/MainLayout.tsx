import type { ReactNode } from 'react';
import { Meta } from './Meta';

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-full antialiased">
      <Meta
        title="Next Auth Demo"
        description="A demo project to understand Next Auth"
      />

      <div>{children}</div>
    </div>
  );
}
