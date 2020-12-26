/* @jsx jsx */
import { jsx } from '@emotion/react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import AboutSlide from '../components/AboutSlide';
import livingRoom from '../images/rerent-living-room.svg';
import diningRoom from '../images/dining-room.svg';

// markup
const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <Banner />
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
