import instance from '../instance';
import { CardResponse } from '../../store/type/card/card';

// 카드 데이터 조회 API
export const fetchCardData = async () => {
  const response = await instance.get<CardResponse>(
    // 더미데이터
    '/data/card/cardDummyData.json'

    // 실제 연결
  );
  console.log(response);
  return response.data.result;
};
