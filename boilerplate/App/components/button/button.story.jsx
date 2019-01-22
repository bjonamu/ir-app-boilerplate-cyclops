import React from 'react';
import Button from './index';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .add('default', () => <Button>Click</Button>)
  .add('disabled', () => <Button disabled>Disabled</Button>);
