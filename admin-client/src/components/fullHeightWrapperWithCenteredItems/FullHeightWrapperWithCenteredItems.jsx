import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DATA_TEST_ID, DEFAULT_CLASS_NAME } from './consts';

const FullHeightWrapperWithCenteredItems = ({ className, children }) => (
  <div
    className={classnames(DEFAULT_CLASS_NAME, className)}
    data-testid={DATA_TEST_ID}
  >
    {children}
  </div>
);

FullHeightWrapperWithCenteredItems.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

FullHeightWrapperWithCenteredItems.defaultProps = {
  className: '',
};

export default FullHeightWrapperWithCenteredItems;
