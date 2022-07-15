import {
  AspectRatio,
  Center,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { NextChakraButton } from 'components/wrappers';
import { ChannelItem } from 'types';

export const ChannelListItem: React.FC<ChannelItem> = ({ snippet, id }) => {
  const { thumbnails, channelTitle, description } = snippet;

  const imgUrl =
    thumbnails?.high?.url ||
    thumbnails?.medium?.url ||
    thumbnails?.default?.url;

  return (
    <VStack as='article' spacing={4} align={'stretch'} w='full'>
      <Center>
        <AspectRatio ratio={1} w='50%' rounded={'full'} bgColor='gray.100'>
          <Image
            src={imgUrl}
            loading='lazy'
            alt={channelTitle}
            rounded={'full'}
          />
        </AspectRatio>
      </Center>
      <VStack align={'stretch'} h='full'>
        <Heading as='h1' size='lg'>
          {channelTitle}
        </Heading>
        <Text noOfLines={3}>{description}</Text>
      </VStack>
      <Center>
        <NextChakraButton href={`/${id.channelId}`}>
          Goto Channel
        </NextChakraButton>
      </Center>
    </VStack>
  );
};
