// import BlueBtn from './../atoms/BlueBtn';
import RedBtn from '../atoms/RedBtn';
import { CommentResult } from '../../store/type/detail/detail';
import LikesBtn from '../molecules/LikesBtn';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import instance from '../../apis/instance';

interface Props {
  CommentResult: CommentResult[];
}

const CommentSection: React.FC<Props> = ({ CommentResult }) => {
  const queryClient = useQueryClient();

  // 댓글 삭제 버튼을 눌렀을 때 mutation
  const commentDeleteMutation = useMutation({
    mutationFn: async () => {
      return await instance.delete('');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetchDetailData'] }); // 수정이 성공하면 쿼리를 다시 가져옴
    },
  });

  // 댓글 삭제 버튼을 눌렀을 때
  const handleCommentDeleteClick = () => {
    commentDeleteMutation.mutate();
  };

  return (
    <div className="font-pretendard mt-8 sm:mx-32 flex flex-col text-black dark:text-white gap-y-2">
      {CommentResult && CommentResult.length > 0 ? (
        CommentResult.map((value) => (
          <div className="w-full p-2 border-b rounded-md" key={value.id}>
            <div className="text-sm font-semibold ">{value.author}</div>
            <div className="text-sm font-light mt-2">{value.text}</div>
            <div className="flex justify-between mt-2">
              <LikesBtn likes={value.likes} isContent={false} />
              <div className="flex gap-x-2 whitespace-nowrap">
                {/* <BlueBtn title="수정" /> */}
                <RedBtn title="삭제" onClick={handleCommentDeleteClick} />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-full">
          <div>아직 댓글이 없습니다.</div>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
