/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Link } from 'gatsby';
import tw from 'twin.macro';

const Logo = (): JSX.Element => (
  <svg viewBox="0 0 35 35" stroke="green" fill="transparent">
    <circle
      cx="15"
      cy="15"
      r="12"
      css={css`
        stroke-width: 0.1rem;
      `}
    />
    <text x="16.5" y="9.5" rotate="180">
      R
    </text>
    <text x="13.5" y="19.5">
      R
    </text>
  </svg>
);

const Header = (): JSX.Element => {
  return (
    <header
      css={tw`bg-primary text-gray-300 text-opacity-75 flex h-16 content-center justify-between py-2 fixed`}
    >
      <div css={tw`flex mx-3`}>
        <Logo />
        <a href="#how" css={tw`hover:text-white mx-2`}>
          How it Works
        </a>
      </div>
      <nav>
        <Link to="/login" css={tw`m-2 hover:text-white`}>
          Login
        </Link>
        <Link to="/register" css={tw`m-2 hover:text-white`}>
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
