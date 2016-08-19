import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Grid } from '../components/Grid';

storiesOf('Grid', module)
  .add('grid', () => (
    <Grid
      current={null}
      board={[{shape: 'L', x: 1, y: 1}, {shape: 'J', x: 5, y: 5}]}
    />
  ));
