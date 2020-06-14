import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Input = ({ label, type, ...rest }) => {
  return (
    <S.InputWrapper>
      <label>{label}</label>
      <input type={type} {...rest} />
    </S.InputWrapper>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;