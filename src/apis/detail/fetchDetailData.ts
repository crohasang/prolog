import instance from '../instance';
import { DetailResponse } from '../../store/type/detail/detail';

// 댓글 데이터 조회 API
export const fetchDetailData = async () => {
  const response = await instance.get<DetailResponse>(
    // 더미데이터
    '/data/detail/detailDummyData.json'

    // 실제 연결
  );
  console.log(response);
  return response.data;
};
