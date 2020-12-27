import { keyframes } from '@emotion/react';

export const fadeIn = {
  simple: keyframes`
    0% {
      opacity: 0;
    }

    20% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  `,
  top: keyframes`
    from {
      transform: translateY(-100%);
      opacity: 0;
    }

    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  `,
  bottom: keyframes`
    from {
      transform: translateY(100%);
      opacity: 0;
    }

    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  `,
  left: keyframes`
    from {
      transform: translateX(-100%);
      opacity: 0;
    }

    100% {
      tansform: translate(0%);
      opacity: 1;
    }
  `,
  right: keyframes`
    from {
      transform: translateX(100%);
      opacity: 0;
    }

    100% {
      tansform: translate(0%);
      opacity: 1;
    }
  `,
};
