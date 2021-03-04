import React from 'react';
import useStyles from './styles';

const Title = ({ children, style: styles }) => {
  const style = useStyles({ style: styles });
  return <h2 className={style.h2}>{children}</h2>;
};

export default Title;
