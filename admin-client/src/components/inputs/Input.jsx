import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DEFAULT_CLASS_NAME =
  'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm';

const Input = ({
  value,
  name,
  type,
  autoComplete,
  required,
  className,
  placeholder,
  'data-testid': dataTestId,
  onChange,
}) => (
  <input
    value={value}
    name={name}
    type={type}
    autoComplete={autoComplete}
    required={required}
    className={classnames(DEFAULT_CLASS_NAME, className)}
    placeholder={placeholder}
    data-testid={dataTestId}
    onChange={onChange}
  />
);

Input.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  'data-testid': PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  name: null,
  type: 'text',
  autoComplete: 'off',
  required: false,
  className: '',
  placeholder: '',
  'data-testid': '',
  onChange: null,
};

export default Input;
