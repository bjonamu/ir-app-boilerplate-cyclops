import { css } from 'styled-components';
import { screenSizes } from './metrics';

// Iterate through the sizes and create a media template
export const media = Object.keys(screenSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${screenSizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
