import { DataService } from './data/data.service';
import { NewsFeedService } from './news-feed/news-feed.service';

export * from './data/data.service';
export * from './news-feed/news-feed.service';

export const APP_SERVICES = [
  DataService,
  NewsFeedService
];