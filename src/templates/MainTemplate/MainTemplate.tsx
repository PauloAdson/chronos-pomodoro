import React from 'react';

import { Container } from '../../components/Container/Container';
import { Footer } from '../../components/Footer/Footer';
import { Logo } from '../../components/Logo/Logo';
import { Menu } from '../../components/Menu/Menu';

type MainTemplateProps = {
  children: React.ReactNode;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
};
