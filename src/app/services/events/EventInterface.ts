export interface Venue {
  id: number;
  name: string;
  contentUrl: string;
  live: boolean;
  direction: string;
}

export interface Pick {
  id: number;
  blurb: string;
}

export interface Artist {
  id: number;
  name: string;
}

export interface rTEvent {
  _id: number;
  title: string;
  flyerFront: string;
  attending: number;
  date: Date;
  startTime: Date;
  endTime: Date;
  contentUrl: string;
  venue: Venue;
  pick: Pick;
  artists: Artist[];
  city: string;
  country: string;
  private: boolean;
}
