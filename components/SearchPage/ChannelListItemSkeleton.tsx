import {
  Center,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  VStack,
} from '@chakra-ui/react';

export const ChannelListItemSkeleton: React.FC = () => {
  return (
    <VStack as='article' spacing={4} align={'stretch'} w='full'>
      <Center>
        <SkeletonCircle size='36' />
      </Center>
      <VStack align={'stretch'} h='full'>
        <Skeleton w='74%' h='9' />
        <SkeletonText noOfLines={3} skeletonHeight='4' spacing='2' />
      </VStack>
      <Center>
        <Skeleton w='50%' h='10' />
      </Center>
    </VStack>
  );
};
