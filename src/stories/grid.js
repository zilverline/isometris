import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Grid from '../components/Grid';

storiesOf('Grid', module)
  .add('grid', () => (
    <Grid
      width={10}
      height={30}
    />
  ));
