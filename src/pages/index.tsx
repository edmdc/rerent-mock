/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useLayoutEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import AboutSlide from '../components/AboutSlide';
import livingRoom from '../images/rerent-living-room.svg';
import diningRoom from '../images/dining-room.svg';
import { fadeIn } from '../styles/keyframes';

// markup
const IndexPage = (): JSX.Element => {
  const [display, toggleDisplay] = useState({ 0: false, 1: false, 2: false });
  const ref0 = useRef(null),
    ref1 = useRef(null),
    ref2 = useRef(null);

  useLayoutEffect(() => {
    const topPos = (el: any): number => el.getBoundingClientRect().top;

    const onScroll = (): void => {
      const scrollPos = window.screenY + window.innerHeight;
      const stop0 = topPos(ref0.current),
        stop1 = topPos(ref1.current),
        stop2 = topPos(ref2.current);
      if (stop0 && stop0 <= scrollPos) {
        toggleDisplay((display) => ({ ...display, 0: true }));
        console.log(`Element Top: ${stop0}`, `Scroll: ${scrollPos}`);
      } else if (stop1 && stop1 < scrollPos) {
        toggleDisplay((display) => ({ ...display, 1: true }));
        console.log('stop1', stop1 < scrollPos);
      } else if (stop2 && stop2 < scrollPos) {
        toggleDisplay((display) => ({ ...display, 2: true }));
        console.log('stop2', stop2 < scrollPos);
      }
      console.log(display);
    };

    window.addEventListener('scroll', onScroll);
    return (): void => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Layout>
      <div ref={ref2}>
        <Banner />
      </div>
      <div ref={ref1}>
        <AboutSlide
          imgSrc={livingRoom}
          imgAlt="A bright, welcoming living room"
          title="Stress-Free Subletting"
          content="ReRent takes care of laundry, cleaning services, and key duplication so you don't have to."
          reverse={true}
        />
      </div>
      <div
        ref={ref0}
        css={
          display[0] &&
          css`
            animation: ${fadeIn.top} 1s ease-in;
            animation-delay: 1s;
          `
        }
      >
        <AboutSlide
          imgSrc={diningRoom}
          imgAlt="A clean, simple dining room"
          title="Professionally Cleaned"
          content="Our cleaning practices meet the highest industry standards. You can rest assured that your sheets will be changed, surfaces disinfected, bathrooms scrubbed, and trash removed."
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
