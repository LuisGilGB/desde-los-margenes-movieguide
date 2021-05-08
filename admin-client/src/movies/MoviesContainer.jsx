/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const MoviesContainer = (props) => {
  const { ...otherProps } = props;

  return <div {...otherProps}>Movies</div>;
};

export default MoviesContainer;
