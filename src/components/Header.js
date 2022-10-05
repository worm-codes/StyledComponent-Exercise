import React from 'react';
import { Container } from './styles/Container.styled';
import { StyledHeader } from './styles/Header.styled';
import { Logo, Image } from './styles/Image.styled';
import { StyledNav } from './styles/Nav.styled';
import { Button } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';

const Header = () => (
  <StyledHeader>
    <Container>
      <StyledNav>
        <Logo src="./images/logo.svg" alt="" />
        <Button>Try It Free</Button>
      </StyledNav>
      <Flex>
        <div>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>

          <Button bg="#ff0099" color="#fff">
            Get Started For Free
          </Button>
        </div>
        <Image src="./images/illustration-mockups.svg" alt="" />
      </Flex>
    </Container>
  </StyledHeader>
);

export default Header;
