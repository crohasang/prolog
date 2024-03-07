export type CardResult = {
  id: number;
  title: string;
  body: string;
  time: string;
  commentNum: number;
  author: string;
  likes: number;
};

export type CardResponse = {
  code: number;
  status: number;
  message: string;
  result: CardResult[];
  messages: string;
  totalPages: number;
};
