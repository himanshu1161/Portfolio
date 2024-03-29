import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href='tel:111-11-1111'>111-11-1111</LinkItem>
      </LinkColumn>

      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href='mailto:himanshu.mishra.1106@gmail.com'>himanshu.mishra.1106@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
      <CompanyContainer>
          <Slogan></Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/himanshu1161'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/himanshu-mishra-94646324b/'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://instagram.com'>
        <AiFillInstagram size='3rem'/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
      </FooterWrapper>
  );
};

export default Footer;
