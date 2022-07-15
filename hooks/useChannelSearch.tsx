import { QueryFunction, useInfiniteQuery } from 'react-query';
import { SearchListResponse } from 'types';
import urlcat from 'urlcat';
import { useQueryParam } from './useQueryParam';

const DEFAULT_PER_PAGE = 9;

const defaultParams = {
  key: process.env.NEXT_PUBLIC_KEY,
  part: 'snippet',
  type: 'channel',
};

type FetcherReturn = Pick<SearchListResponse, 'items' | 'nextPageToken'>;

const fetcher: QueryFunction<FetcherReturn> = async ({
  queryKey,
  pageParam,
}) => {
  const [q] = queryKey;
  const url = urlcat('https://www.googleapis.com/youtube/v3/search', {
    ...defaultParams,
    maxResults: DEFAULT_PER_PAGE,
    q,
    pageToken: pageParam,
    // order
  });

  try {
    const res = await fetch(url);
    const data: SearchListResponse = await res.json();
    const { items, nextPageToken, pageInfo } = data;

    return {
      items,
      nextPageToken,
    };
  } catch (error) {
    return {
      items: [],
      nextPageToken: '',
    };
  }
};

type UseChannelSearchReturn = {
  items: SearchListResponse['items'];
  hasMore: boolean;
  isLoading: boolean;
  loadMore: () => void;
  perPage: number;
  refetch: () => void;
};

export const useChannalSearch = (): UseChannelSearchReturn => {
  const search = useQueryParam('search');

  const results = useInfiniteQuery<FetcherReturn>(search, fetcher, {
    getNextPageParam: (lastPage) => lastPage?.nextPageToken,
    enabled: !!search,
  });

  const {
    data,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isRQLoading,
    fetchNextPage,
    refetch,
  } = results;

  const items = data?.pages?.flatMap(({ items }) => [...items]) ?? [];

  const isLoading = isRQLoading || isFetchingNextPage;

  return {
    items,
    hasMore: hasNextPage,
    isLoading,
    loadMore: () => fetchNextPage(),
    perPage: DEFAULT_PER_PAGE,
    refetch,
  };
};
