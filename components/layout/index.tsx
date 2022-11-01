import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function Layout(props: Props) {
  return (
    <LayoutStyles>
      <Head>
        <title>{`${
          props.title ? `${props.title} | ` : ''
        }Globall Giving`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <main>{props.children}</main>
      </div>
      <Footer />
    </LayoutStyles>
  );
}

const LayoutStyles = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
