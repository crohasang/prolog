import BlueBtn from './../atoms/BlueBtn';
import RedBtn from '../atoms/RedBtn';
import { CommentResult } from '../../store/type/detail/detail';

interface Props {
  CommentResult: CommentResult[];
}

const CommentSection: React.FC<Props> = ({ CommentResult }) => {
  return (
    <div className="font-pretendard mt-8 sm:mx-32 flex flex-col text-black dark:text-white gap-y-2">
      {CommentResult && CommentResult.length > 0 ? (
        CommentResult.map((value) => (
          <div className="w-full p-2 border-b rounded-md" key={value.id}>
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
