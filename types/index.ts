export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Id {
  kind: string;
  channelId: string;
}

export interface Default {
  url: string;
}

export interface Medium {
  url: string;
}

export interface High {
  url: string;
}

export interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: Date;
}
export interface RelatedPlaylists {
  likes: string;
  uploads: string;
}
export interface ContentDetails {
  relatedPlaylists: RelatedPlaylists;
}

export interface Statistics {
  viewCount: string;
  subscriberCount: string;
  hiddenSubscriberCount: boolean;
  videoCount: string;
}

export interface ChannelItem {
  kind: string;
  etag: string;
  id: Id | string;
  snippet: Snippet;
  contentDetails?: ContentDetails;
  statistics?: Statistics;
}

export interface SearchListResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: ChannelItem[];
}
