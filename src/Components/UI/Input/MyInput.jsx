import React from 'react';

import { MyInputStyled } from './MyInput.styles';

function StyledInput(props) {
  return (
    <MyInputStyled {...props} />
  );
}

export default StyledInput;
