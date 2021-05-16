import { Fragment } from 'react';
import Head from 'next/head';
import { SITE_DESCRIPTION, SITE_NAME } from '@lib/constants';

type TMeta = {
  title: string | null;
  description: string | null;
  image: string;
  url?: string | null;
};

type TProps = {
  meta: TMeta;
  children: React.ReactNode;
};

type TInverted = {
  inverted: boolean;
};

export default function index({ meta, children }: TProps) {
  const title = meta.title || SITE_NAME;
  const url = meta.title || SITE_NAME;
  const description = meta.description || SITE_DESCRIPTION;
  const image = meta.image;
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={image} />
        <link rel="canonical" href="https://ppsea.vercelapp/"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/static/icons/logo.jpg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/logo.jpg" />
      </Head>
      {children}
    </Fragment>
  );
}
