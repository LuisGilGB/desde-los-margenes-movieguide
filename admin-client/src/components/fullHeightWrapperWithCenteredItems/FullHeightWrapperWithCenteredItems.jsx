import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DEFAULT_CLASS_NAME } from './consts';
import CenterItems from '../centerItems/CenterItems';

const FullHeightWrapperWithCenteredItems = ({
  className,
  dataTestId,
  children,
}) => (
  <CenterItems
    className={classnames(DEFAULT_CLASS_NAME, className)}
    dataTestId={dataTestId}
  >
    {children}
  </CenterItems>
);

FullHeightWrapperWithCenteredItems.propTypes = {
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  children: PropTypes.node.isRequired,
};

FullHeightWrapperWithCenteredItems.defaultProps = {
  className: '',
  dataTestId: '',
};

export default FullHeightWrapperWithCenteredItems;
