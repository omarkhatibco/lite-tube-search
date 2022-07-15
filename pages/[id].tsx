import {
  AspectRatio,
  Center,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { NextChakraButton } from 'components/wrappers';
import { Fragment } from 'react';
import { ChannelItem, SearchListResponse } from 'types';
import urlcat from 'urlcat';
import { formatNumber } from 'utls';

import { GetStaticPaths, GetStaticProps } from 'next';

const Page: React.FC<ChannelItem> = ({ snippet, statistics }) => {
  const { thumbnails, title, description } = snippet;
  const { videoCount, subscriberCount } = statistics;

  const imgUrl =
    thumbnails?.high?.url ||
    thumbnails?.medium?.url ||
    thumbnails?.default?.url;

  return (
    <Fragment>
      <VStack as='article' spacing={4} align={'stretch'} w='full'>
        <Center>
          <AspectRatio ratio={1} w={1 / 3} rounded={'full'} bgColor='gray.100'>
            <Image src={imgUrl} loading='lazy' alt={title} rounded={'full'} />
          </AspectRatio>
        </Center>
        <VStack align={'stretch'} h='full'>
          <Heading as='h1' size='lg' data-testid={'title'}>
            {title}
          </Heading>
          <Text color={'gray.600'}>
            {formatNumber(Number(subscriberCount))} subscribers -{' '}
            {formatNumber(Number(videoCount))} videos
          </Text>
          <Text noOfLines={3}>{description}</Text>
        </VStack>
        <Center>
          <NextChakraButton href={`/`}>Back to search</NextChakraButton>
        </Center>
      </VStack>
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
