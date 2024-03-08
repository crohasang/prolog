import instance from '../instance';
import { SearchResponse } from '../../store/type/search/search';

// 카드 데이터 조회 API
export const fetchSearchData = async (page: number) => {
  const response = await instance.get<SearchResponse>(
    // 더미데이터
    '/data/card/cardDummyData.json'

    // 실제 연결
  );
  console.log(response);
  return response.data;
};
