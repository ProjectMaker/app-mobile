import { PlaceService } from './place/place.service';
import { NewsFeedService } from './news-feed/news-feed.service';
import { FriendService } from './friend/friend.service';

export * from './place/place.service';
export * from './news-feed/news-feed.service';
export * from './friend/friend.service';

export const APP_SERVICES = [
  PlaceService,
  NewsFeedService,
  FriendService
];