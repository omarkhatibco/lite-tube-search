import { Button, Center, SimpleGrid, VStack } from '@chakra-ui/react';
import {
  ChannelListItem,
  ChannelListItemSkeleton,
} from 'components/SearchPage';
import { useChannalSearch } from 'hooks/useChannelSearch';

export const ChannalList: React.FC = () => {
  const { items, isLoading, hasMore, loadMore, perPage } = useChannalSearch();

  return (
    <VStack w={'full'} align='stretch' spacing={8}>
      <SimpleGrid spacing={12} columns={{ base: 1, md: 3 }}>
        {items.map((item) => (
          <ChannelListItem key={item.id?.channelId} {...item} />
        ))}
        {isLoading &&
          Array(perPage)
            .fill('')
            .map(({}, index) => <ChannelListItemSkeleton key={index * -1} />)}
      </SimpleGrid>
      {hasMore && (
        <Center>
          <Button
            isLoading={isLoading}
            isDisabled={isLoading}
            onClick={loadMore}
          >
            Load More
          </Button>
        </Center>
      )}
    </VStack>
  );
};
