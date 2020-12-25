/* @jsx jsx */
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

import { H4 } from './common/headings';

interface AboutSlideProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  content: string;
  reverse?: boolean;
}

const AboutSlide = ({
  imgSrc,
  imgAlt,
  title,
  content,
  reverse,
}: AboutSlideProps): JSX.Element => {
  return (
    <article css={tw`mt-10 flex flex-nowrap max-w-full`}>
      {!reverse && (
        <div css={tw`mx-5`}>
          <H4>{title}</H4>
          <p>{content}</p>
        </div>
      )}
      <img src={imgSrc} alt={imgAlt} css={tw`w-2/3 px-8`} />
      {reverse && (
        <div css={tw`mx-5`}>
          <H4>{title}</H4>
          <p>{content}</p>
        </div>
      )}
    </article>
  );
};

export default AboutSlide;
