import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DEFAULT_CLASS_NAME } from './consts';

const CenterItems = ({ className, children }) => (
  <div className={classnames(DEFAULT_CLASS_NAME, className)}>{children}</div>
);

CenterItems.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CenterItems.defaultProps = {
  className: '',
  children: null,
};

export default CenterItems;
