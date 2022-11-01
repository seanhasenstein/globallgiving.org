import styled from 'styled-components';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <HomeStyles>
        <h1>Hello World!</h1>
      </HomeStyles>
    </Layout>
  );
}

const HomeStyles = styled.div`
  h1 {
    color: red;
  }
`;
