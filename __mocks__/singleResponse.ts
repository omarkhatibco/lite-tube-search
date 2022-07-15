import { SearchListResponse } from 'types';

export const singleResponse: SearchListResponse = {
  kind: 'youtube#channelListResponse',
  etag: '1DivoBJVb-IXGMW4aau5eEV8LWY',
  pageInfo: {
    totalResults: 1,
    resultsPerPage: 5,
  },
  items: [
    {
      kind: 'youtube#channel',
      etag: 'bNgdY9b_pJ0xeb1xgsqgpZMzBx8',
      id: 'UCV0qA-eDDICsRR9rPcnG7tw',
      snippet: {
        title: 'Joma Tech',
        description:
          'I talk about life in Silicon Valley and at big tech companies.\n\nFollow me on:\nInstagram: http://instagram.com/jomaoppa\nTwitter: https://twitter.com/jomaoppa\n\nBusiness inquiries: business@joma.io\n',
        customUrl: 'jomaoppa',
        publishedAt: '2016-08-31T22:22:07Z',
        thumbnails: {
          default: {
            url: 'https://yt3.ggpht.com/ytc/AKedOLTFLnUPOScnD78_Lz7YCbp0PXSpPgBTI4HA0pA8=s88-c-k-c0x00ffffff-no-rj',
            width: 88,
            height: 88,
          },
          medium: {
            url: 'https://yt3.ggpht.com/ytc/AKedOLTFLnUPOScnD78_Lz7YCbp0PXSpPgBTI4HA0pA8=s240-c-k-c0x00ffffff-no-rj',
            width: 240,
            height: 240,
          },
          high: {
            url: 'https://yt3.ggpht.com/ytc/AKedOLTFLnUPOScnD78_Lz7YCbp0PXSpPgBTI4HA0pA8=s800-c-k-c0x00ffffff-no-rj',
            width: 800,
            height: 800,
          },
        },
        localized: {
          title: 'Joma Tech',
          description:
            'I talk about life in Silicon Valley and at big tech companies.\n\nFollow me on:\nInstagram: http://instagram.com/jomaoppa\nTwitter: https://twitter.com/jomaoppa\n\nBusiness inquiries: business@joma.io\n',
        },
        country: 'US',
      },
      contentDetails: {
        relatedPlaylists: {
          likes: '',
          uploads: 'UUV0qA-eDDICsRR9rPcnG7tw',
        },
      },
      statistics: {
        viewCount: '133488048',
        subscriberCount: '1810000',
        hiddenSubscriberCount: false,
        videoCount: '100',
      },
    },
  ],
};
