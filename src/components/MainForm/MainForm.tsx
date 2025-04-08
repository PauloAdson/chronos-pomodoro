import { DefaultButton } from '../DefaultButton/DefaultButton';
import { Cycles } from '../Cycles/Cycles';
import { DefaultInput } from '../DefaultInput/DefaultInput';

import { PlayCircleIcon } from 'lucide-react';

export const MainForm = () => {
  return (
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
  );
};
