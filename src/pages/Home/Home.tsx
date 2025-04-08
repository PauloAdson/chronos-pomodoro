// import React from 'react'
import { Container } from '../../components/Container/Container';
import { CountDown } from '../../components/CountDown/Logo';
import { MainForm } from '../../components/MainForm/MainForm';
import { MainTemplate } from '../../templates/MainTemplate/MainTemplate';

export const Home = () => {
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
