export type Event = {
  title: string;
  eventId: string;
};

export type PostType = {
  id: string;
  date: string;
  time: string;
  content: string;
  reply?: number;
  image?: string[];
};

export type TecherType = {
  id: string;
  image: string;
  name: string;
  times: number;
};
