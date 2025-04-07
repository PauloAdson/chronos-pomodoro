import { Container } from './components/Container/Container';
import { CountDown } from './components/CountDown/Logo';
import { DefaultInput } from './components/DefaultInput/DefaultInput';
import { Logo } from './components/Logo/Logo';
import { Menu } from './components/Menu/Menu';

import './styles/global.css';
import './styles/theme.css';

export const App = () => {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput type='text' />
          </div>

          <div className='formRow'>
            <p>Lorem, ipsum dolor.</p>
            <p>0 0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
};
