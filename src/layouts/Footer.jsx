import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  /* box-shadow: ${props => props.theme.shadow.footer}; */
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        Sharkey-Chefs -{' '}
        <a href="https://github.com/usaspiff">Nick Tchemitcheff</a>- 2019 ©
      </span>
      <br />
      <span>Site under construction</span>
      <br />
      <br />
      <span>
        Based on the wonderful Gatsby template by{' '}
        <p>
          <a href="https://github.com/justinformentin/gatsby-v2-tutorial-starter">
            Just Formentin
          </a>
        </p>
        <span>This is a collection of recipes gather around the web and from books.</span>
        <br />
        <span>
        I did not come up with any recipe listed. Credits given on the recipe page when possible.</span>
      </span>
    </Text>
  </Wrapper>
);
export default Footer;
