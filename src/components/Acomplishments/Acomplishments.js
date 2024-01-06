import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "4 Months", text: 'React Js intern at Xciteducation Worldwide'},
  { number: "6 Months", text: 'SDE Intern At Tripdairy (Present)', },
  { number: "1 month", text: 'Participated in Alibaba low code development', },
  { number: "1 month", text: 'Microsoft Data Analyst Training', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Internships And Trainings
    </SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
