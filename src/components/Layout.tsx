import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <section>
      <Header />
      <main>
        {children}
      </main>
    </section>
  )
}

export default Layout;