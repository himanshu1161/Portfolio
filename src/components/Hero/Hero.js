import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My personal Portfolio
      </SectionTitle>
      <SectionText>
    Welcome to my portfolio! I'm a talented Web developer with a passion for crafting immersive web experiences.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}> Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;