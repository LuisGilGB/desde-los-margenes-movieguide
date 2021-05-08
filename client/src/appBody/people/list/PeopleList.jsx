import React from 'react';
import { Grid } from '../../../common';

const PeopleList = (props) => {
  const { data = [], onItemClick, ...otherProps } = props;

  return (
    <Grid
      {...otherProps}
      data={data}
      className="people-list-grid"
      columns={[
        {
          fieldName: 'name',
          title: 'Nombre',
        },
      ]}
      onItemClick={onItemClick}
    />
  );
};

export default PeopleList;
