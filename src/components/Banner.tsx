/* @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import tw, { styled } from 'twin.macro';
import { H1, H3 } from '../components/common/headings';

const Container = styled.div`
  ${tw`bg-primary font-heading text-center text-white z-0 pt-20`}
  height: 30rem;
`;

const fadeInTop = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
    tranform-origin: top;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const fadeInBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
    tranform-origin: bottom;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const Banner = (): JSX.Element => (
  <Container>
    <H1
      css={css`
        animation: ${fadeInTop} 1s ease-in-out;
      `}
    >
      ReRent
    </H1>
    <H3
      css={css`
        animation: ${fadeInBottom} 1s ease-in-out;
      `}
    >
      Home-sharing Made Easy
    </H3>
  </Container>
);

export default Banner;
