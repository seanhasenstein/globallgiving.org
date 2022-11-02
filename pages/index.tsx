import styled from 'styled-components';
import Layout from '../components/layout';
import Hero from '../components/home/Hero';
import Sponsors from '../components/home/Sponsors';
import Divider from '../components/Divider';

export default function Home() {
  return (
    <Layout>
      <HomeStyles>
        <Hero />
        <Divider />
        <Sponsors />
      </HomeStyles>
    </Layout>
  );
}

const HomeStyles = styled.div``;
