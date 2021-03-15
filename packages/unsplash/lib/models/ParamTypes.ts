export interface RequestLib {
  get: (path: string, config?) => any;
  post: (path: string, config?) => any;
  request: (config) => any;
}

export type OrderBy = 'latest' | 'oldest' | 'popular';
export type SearchNamespace = 'users' | 'collections' | 'photos';
export type Orientation = 'landscape' | 'portrait' | 'squarish';
export type Color =
  | 'black_and_white'
  | 'black'
  | 'white'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'purple'
  | 'magenta'
  | 'green'
  | 'teal'
  | 'blue';
export interface BasicQuery {
  page?: number;
  per_page?: number;
  order_by?: OrderBy;
}

export interface RandomQuery {
  collections?: string[];
  username?: string;
  content_filter?: string;
  color?: Color;
  orientation?: Orientation;
  query?: string;
  count?: number;
}

export interface PhotoQuery extends BasicQuery {
  collections?: string[];
  content_filter?: string;
  color?: Color;
  orientation?: Orientation;
  query?: string;
}
