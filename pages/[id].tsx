import { Box } from '@chakra-ui/react';
import { Fragment } from 'react';
import { SearchListResponse } from 'types';
import urlcat from 'urlcat';

import { GetStaticPaths, GetStaticProps } from 'next';

const Page = () => {
  return (
    <Fragment>
      <Box>Hi</Box>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context?.params || {};

  const url = urlcat('https://www.googleapis.com/youtube/v3/channels', {
    key: process.env.NEXT_PUBLIC_KEY,
    part: 'snippet,contentDetails,statistics',
    id,
  });

  console.log(url);

  try {
    const res = await fetch(url);
    const data: SearchListResponse = await res.json();
    const { items } = data;

    const item = items?.[0];

    if (!item) {
      throw new Error('No item');
    }
    return {
      props: {
        ...item,
      },

      revalidate: 3600,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' };
};

export default Page;
