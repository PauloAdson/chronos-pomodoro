import styles from './styles.module.css';

import React from 'react';

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export const DefaultInput = ({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
};
