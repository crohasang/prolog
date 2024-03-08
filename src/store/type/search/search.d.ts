export type SearchResult = {
  id: number;
  title: string;
  body: string;
  time: string;
  commentNum: number;
  author: string;
  likes: number;
};

export type SearchResponse = {
  code: number;
  status: number;
  message: string;
  result: CardResult[];
  messages: string;
  totalPages: number;
};
