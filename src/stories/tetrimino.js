import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { I, J, L, O, S, T, Z } from '../components/Tetrimino';

storiesOf('Tetrimino', module)
  .add('basic tetriminos', () => (
    <div>
      <I />
      <J />
      <L />
      <O />
      <S />
      <T />
      <Z />
    </div>
  ))
  .add('with rotations', () => (
    <div>
      <L rotation={0} />
      <L rotation={90} />
      <L rotation={180} />
      <L rotation={270} />
    </div>
  ));
