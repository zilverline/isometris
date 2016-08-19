import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Block from '../components/Block';

storiesOf('Block', module)
  .add('block', () => (
    <Block color='red' />
  ));
