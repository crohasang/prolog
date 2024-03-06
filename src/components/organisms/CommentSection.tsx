import { fetchCommentData } from './../../apis/comment/fetchCommentData';
import Loading from './../../pages/Loading';
import { useQuery } from '@tanstack/react-query';
import BlueBtn from './../atoms/BlueBtn';
import RedBtn from '../atoms/RedBtn';

const CommentSection = () => {
  // fetchCommentData
  const {
    data: CommentData,
    isLoading: isCommentDataLoading,
    isError: isCommentDataError,
  } = useQuery({
    queryKey: ['fetchCommentData'],
    queryFn: () => fetchCommentData(),
  });

  // 로딩 중일 때
  if (isCommentDataLoading) {
    return <Loading />;
  }

  return (
    <div className="font-pretendard mt-8 sm:mx-32 flex flex-col text-black dark:text-white gap-y-2">
      {CommentData !== undefined &&
        CommentData.map((value) => (
          <div className="w-full p-2 border rounded-md" key={value.id}>
            <div className="text-sm font-semibold ">{value.author}</div>
            <div className="text-sm font-light mt-2">{value.text}</div>
            <div className="flex justify-between">
              <div className="text-sm mt-2">❤️ {value.likes}</div>
              <div className="flex gap-x-2 whitespace-nowrap">
                <BlueBtn title="수정" />
                <RedBtn title="삭제" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentSection;
