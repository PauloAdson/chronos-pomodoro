// import styles from './styles.module.css';

type DefaultInputProps = {
  type: string;
};

export const DefaultInput = ({ type }: DefaultInputProps) => {
  return (
    <>
      <label htmlFor='meuInput'>Task</label>
      <input id='meuInput' type={type} />
    </>
  );
};
