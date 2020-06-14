import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Input = ({ label, type, hasError, success, ...rest }) => {
  return (
    <S.InputWrapper hasError={hasError} success={success}>
      <label>{label}</label>
      <input type={type} {...rest} />
    </S.InputWrapper>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  hasError: PropTypes.bool,
  success: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  hasError: false,
  success: false,
};

export default Input;