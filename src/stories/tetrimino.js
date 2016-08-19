import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { I, J, L, O, S, T, Z } from '../components/Tetrimino';
import { Grid } from '../components/Grid';

storiesOf('Tetrimino', module)
  .add('basic tetriminos', () => (
    <Grid
      current={null}
      board={[
        {shape: 'I', x: 1, y: 1},
        {shape: 'J', x: 1, y: 7},
        {shape: 'L', x: 1, y: 13},
        {shape: 'O', x: 5, y: 1},
        {shape: 'S', x: 5, y: 5},
        {shape: 'T', x: 5, y: 9},
        {shape: 'Z', x: 5, y: 13}
      ]}
    />
  ))
