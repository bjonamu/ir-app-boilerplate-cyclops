import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { light, dark } from '../src/styles/themes';

const themes = [light, dark];
addDecorator(withThemesProvider(themes));

function loadStories() {
  const req = require.context('../src/components', true, /\.story\.jsx?$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
