// import React from 'react'
import { Container } from '../../components/Container/Container';
import { CountDown } from '../../components/CountDown/Logo';
import { MainForm } from '../../components/MainForm/MainForm';
import { MainTemplate } from '../../templates/MainTemplate/MainTemplate';

export const NotFound = () => {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
};
