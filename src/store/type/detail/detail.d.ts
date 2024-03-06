export type CommentResult = {
  id: number;
  author: string;
  text: string;
  likes: number;
};

export type DetailResult = {
  title: string;
  author: string;
  time: string;
  body: string;
  comments: CommentResult[];
};

export type DetailResponse = {
  code: number;
  status: number;
  message: string;
  result: DetailResult;
  messages: string;
};
