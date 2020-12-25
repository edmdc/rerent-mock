import * as React from 'react';
import Layout from '../components/Layout';
import tw from 'twin.macro';

const Banner = tw.div`
  h-96 bg-green-900 flex flex-col content-center font-heading
  justify-center text-center text-white
`;

const H1 = tw.h1`
  text-8xl
`;

const H3 = tw.h3`
  text-6xl max-w-sm self-center
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
