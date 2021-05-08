/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const PeopleContainer = (props) => {
  const { ...otherProps } = props;

  return <div {...otherProps}>People</div>;
};

export default PeopleContainer;
