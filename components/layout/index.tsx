import Head from 'next/head';
import React from 'react';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function Layout(props: Props) {
  return (
    <>
      <Head>
        <title>{`${
          props.title ? `${props.title} | ` : ''
        }Globall Giving`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header />
      <main>{props.children}</main>
      <footer />
    </>
  );
}
