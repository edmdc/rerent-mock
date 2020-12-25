import * as React from 'react';
import Layout from '../components/Layout';
import tw from 'twin.macro';

const Banner = tw.div`
  h-96 bg-primary flex flex-col content-center font-heading
  justify-center text-center text-white
`;

const H1 = tw.h1`
  text-8xl my-3
`;

const H3 = tw.h3`
  text-5xl max-w-3xl self-center my-3
`;

// markup
const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <Banner>
        <H1>ReRent</H1>
        <H3>Home-sharing Made Easy</H3>
      </Banner>
    </Layout>
  );
};

export default IndexPage;
