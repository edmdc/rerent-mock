import * as React from 'react';
import Layout from '../components/Layout';
import AboutSlide from '../components/AboutSlide';
import { H1, H3 } from '../components/common/headings';
import tw from 'twin.macro';
import livingRoom from '../images/rerent-living-room.svg';
import diningRoom from '../images/dining-room.svg';

const Banner = tw.div`
  h-96 bg-primary flex flex-col content-center font-heading
  justify-center text-center text-white
`;

// markup
const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <Banner>
        <H1>ReRent</H1>
        <H3>Home-sharing Made Easy</H3>
      </Banner>
      <AboutSlide
        imgSrc={livingRoom}
        imgAlt="A bright, welcoming living room"
        title="Stress-Free Subletting"
        content="ReRent takes care of laundry, cleaning services, and key duplication so you don't have to."
        reverse={true}
      />
      <AboutSlide
        imgSrc={diningRoom}
        imgAlt="A clean, simple dining room"
        title="Professionally Cleaned"
        content="Our cleaning practices meet the highest industry standards. You can rest assured that your sheets will be changed, surfaces disinfected, bathrooms scrubbed, and trash removed."
      />
    </Layout>
  );
};

export default IndexPage;
