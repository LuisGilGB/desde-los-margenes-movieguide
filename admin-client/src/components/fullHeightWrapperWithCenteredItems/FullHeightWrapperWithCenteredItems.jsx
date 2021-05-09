import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DATA_TEST_ID, DEFAULT_CLASS_NAME } from './consts';
import CenterItems from '../centerItems/CenterItems';

const FullHeightWrapperWithCenteredItems = ({ className, children }) => (
  <CenterItems
    className={classnames(DEFAULT_CLASS_NAME, className)}
    data-testid={DATA_TEST_ID}
  >
    {children}
  </CenterItems>
);

FullHeightWrapperWithCenteredItems.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

FullHeightWrapperWithCenteredItems.defaultProps = {
  className: '',
};

export default FullHeightWrapperWithCenteredItems;
