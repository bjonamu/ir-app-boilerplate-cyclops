import React from 'react';
import {
  PageWrapper,
  Description,
  FooterText,
  Heart,
  NameLink
} from './styles';
import { HeadingPrimary } from 'styles/typography';

const HomeLayout = () => (
  <PageWrapper>
    <HeadingPrimary>{`{ignite-react-app}`}</HeadingPrimary>
    <Description>
      <pre>{'/**'}</pre>
      <pre>* A CLI extension of the famous create-react-app with</pre>
      <pre>* best practice web app structure adopted from the</pre>
      <pre>* famous react native ignite cli</pre>
      <pre>*/</pre>
    </Description>

    <FooterText>
      Made with <Heart>❤</Heart> by{' '}
      <NameLink href='https://linkedin.com/in/blessing-jonamu-3848a751/'>
        Blessing Jonamu
      </NameLink>{' '}
      - Copyright {new Date().getFullYear()}
    </FooterText>
  </PageWrapper>
);

export default HomeLayout;
