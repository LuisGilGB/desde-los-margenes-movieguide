import React from 'react';
import { classNamer } from '@luisgilgb/react-utils';
import './LandingButton.css';

const DEFAULT_CLASS_NAME = 'dlmmg-landingbtn';

const LandingButton = (props) => {
  const { className, ...otherProps } = props;

  return (
    <button
      className={classNamer(DEFAULT_CLASS_NAME, className)}
      {...otherProps}
    />
  );
};

export default LandingButton;
