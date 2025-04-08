import { Container } from '../../components/Container/Container';
import { MainTemplate } from '../../templates/MainTemplate/MainTemplate';
import { CountDown } from '../../components/CountDown/CountDown';
import { MainForm } from '../../components/MainForm/MainForm';

export function Home() {
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
}
