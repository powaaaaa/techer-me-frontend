// top
export type ExchangeType = {
  image_url: string;
  message: string;
  name: string;
  skills: {
    [key: string]: string;
  };
  times: number;
  urls: {
    [key: string]: string;
  };
  user_id: string;
};

export type StickerType = {
  image_url: "string";
  user_id: "string";
  x: 0;
  y: 0;
};

export type GetExchangeType = {
  exchanges: ExchangeType[];
  stickers: StickerType[];
};

// join
export type eventData = {
  event_id: string;
  finished_at: string;
  image_url: string;
  message: string;
  name: string;
  owner_id: string;
  started_at: string;
};

// editProfile
export type InputProfile = {
  name: string;
  // organaize: string;
  github: string;
  url: string;
  discord: string;
  message: string;
};

type Event = {
  event_id: string;
  finished_at: string;
  image_url: string;
  message: string;
  name: string;
  owner_id: string;
  started_at: string;
};

type Skills = {
  [key: string]: string;
};

type Urls = {
  [key: string]: string;
};

export type getMeType = {
  events: Event[];
  image_url: string;
  // is_organizer: boolean;
  message: string;
  name: string;
  skills: Skills;
  urls: Urls;
  user_id: string;
};

export type PostMeType = {
  image_url: string;
  is_organizer: string;
  message: string;
  name: string;
  skills: Skills;
  urls: Urls;
};
