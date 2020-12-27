/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import tw, { styled } from 'twin.macro';
import { fadeIn } from '../styles/keyframes';
import { H1, H3 } from '../components/common/headings';

// Twin.macro parses tailwind class names into styles for
// use within CSS-in-JS. Here's the Basic Syntax:
const SimpleButton = tw.button`bg-transparent rounded border
  py-2 px-3 mt-8 font-heading hover:bg-white hover:text-primary
  transform duration-200 ease-in hover:scale-110
`;

// Twin.macro also allows for quick Tailwind overrides by
// extending abstraction provided by @emotion, like so:
const Container = styled.div`
  ${tw`bg-primary font-heading text-center text-white z-0 pt-20`}
  height: 30rem;
`;

// A css prop is added to components by @emotion's jsx pragma
// (included by comment + first import on top of file)
// Here @emotion css utility is used to add animations to components.
const Banner = (): JSX.Element => (
  <Container>
    <H1
      css={css`
        animation: ${fadeIn.top} 1s ease-in-out;
      `}
    >
      ReRent
    </H1>
    <H3
      css={css`
        animation: ${fadeIn.bottom} 1s ease-in-out;
      `}
    >
      Home-sharing Made Easy
    </H3>
    <SimpleButton
      css={css`
        animation: ${fadeIn.simple} 1.2s ease-in;
      `}
    >
      Join Now
    </SimpleButton>
  </Container>
);

export default Banner;
