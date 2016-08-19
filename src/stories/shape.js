import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Shape from '../components/Shape';

storiesOf('Shape', module)
  .add('line', () => (
    <Shape color='red' shape='line' />
  ));
