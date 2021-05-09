import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DEFAULT_CLASS_NAME } from './consts';

const CenterItems = ({ className, dataTestId, children }) => (
  <div
    className={classnames(DEFAULT_CLASS_NAME, className)}
    data-testid={dataTestId}
  >
    {children}
  </div>
);

CenterItems.propTypes = {
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  children: PropTypes.node,
};

CenterItems.defaultProps = {
  className: '',
  dataTestId: '',
  children: null,
};

export default CenterItems;
