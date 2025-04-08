import { PlayCircleIcon } from 'lucide-react';
import { Container } from './components/Container/Container';
import { CountDown } from './components/CountDown/Logo';
import { Cycles } from './components/Cycles/Cycles';
import { DefaultButton } from './components/DefaultButton/DefaultButton';
import { DefaultInput } from './components/DefaultInput/DefaultInput';
import { Logo } from './components/Logo/Logo';
import { Menu } from './components/Menu/Menu';

import './styles/global.css';
import './styles/theme.css';
import { Footer } from './components/Footer/Footer';

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
            <DefaultInput
              labelText=''
              id='meuInput'
              type='text'
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
};
