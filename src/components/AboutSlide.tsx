/* @jsx jsx */
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

interface AboutSlideProps {
  imgUrl: string;
  imgAlt: string;
  title: string;
  content: string;
  reverse?: boolean;
}

const AboutSlide = ({
  imgUrl,
  imgAlt,
  title,
  content,
  reverse,
}: AboutSlideProps): JSX.Element => {
  return (
    <article>
      {!reverse && (
        <div>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      )}
      <img src={imgUrl} alt={imgAlt} />
      {reverse && (
        <div>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      )}
    </article>
  );
};

export default AboutSlide;
