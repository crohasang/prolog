export type CommentResult = {
  isAuthor: boolean;
  id: number;
  author: string;
  text: string;
  likes: number;
};

export type CommentResponse = {
  code: number;
  status: number;
  message: string;
  result: CommentResult[];
  messages: string;
};
