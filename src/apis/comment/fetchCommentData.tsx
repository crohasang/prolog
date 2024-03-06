import instance from '../instance';
import { CommentResponse } from '../../store/type/comment/comment';

// 댓글 데이터 조회 API
export const fetchCommentData = async () => {
  const response = await instance.get<CommentResponse>(
    // 더미데이터
    '/data/comment/commentDummyData.json'

    // 실제 연결
  );
  console.log(response);
  return response.data.result;
};
