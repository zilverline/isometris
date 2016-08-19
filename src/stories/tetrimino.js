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
  .add('I with rotations', () => (
    <div>
      <I rotation={0} />
      <I rotation={90} />
      <I rotation={180} />
      <I rotation={270} />
    </div>
  ))
  .add('J with rotations', () => (
    <div>
      <J rotation={0} />
      <J rotation={90} />
      <J rotation={180} />
      <J rotation={270} />
    </div>
  ))
  .add('L with rotations', () => (
    <div>
      <L rotation={0} />
      <L rotation={90} />
      <L rotation={180} />
      <L rotation={270} />
    </div>
  ))
  .add('O with rotations', () => (
    <div>
      <O rotation={0} />
      <O rotation={90} />
      <O rotation={180} />
      <O rotation={270} />
    </div>
  ))
  .add('S with rotations', () => (
    <div>
      <S rotation={0} />
      <S rotation={90} />
      <S rotation={180} />
      <S rotation={270} />
    </div>
  ))
  .add('T with rotations', () => (
    <div>
      <T rotation={0} />
      <T rotation={90} />
      <T rotation={180} />
      <T rotation={270} />
    </div>
  ))
  .add('Z with rotations', () => (
    <div>
      <Z rotation={0} />
      <Z rotation={90} />
      <Z rotation={180} />
      <Z rotation={270} />
    </div>
  ))
