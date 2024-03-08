import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { cardData } from '../store/data/card';
// import { CardResult } from '../store/type/card/card';
import BoardHeader from '../components/organisms/BoardHeader';
import DarkModeToggle from '../components/atoms/DarkModeToggle';
import TopButton from '../components/atoms/TopButton';
import CommentWrite from '../components/organisms/CommentWrite';
import CommentSection from '../components/organisms/CommentSection';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchDetailData } from '../apis/detail/fetchDetailData';
import Loading from './Loading';
import BlueBtn from '../components/atoms/BlueBtn';
import RedBtn from '../components/atoms/RedBtn';
import WritingEditor from '../components/organisms/WritingEditor';
import LikesBtn from '../components/molecules/LikesBtn';
import instance from '../apis/instance';
import { ContentEditCompletePatchRequestData } from '../store/type/detail/detail';
import { useNavigate } from 'react-router-dom';

const Content: React.FC = () => {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedBody, setEditedBody] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };

  const handleBodyChange = (e: string) => {
    setEditedBody(e);
  };

  // 수정 버튼을 눌렀을 때
  const handleEditClick = () => {
    if (DetailData !== undefined) {
      setIsEditing(true);
      setEditedTitle(DetailData.result.title);
      setEditedBody(DetailData.result.body);
    }
  };

  // fetchDetailData
  const {
    data: DetailData,
    isLoading: isDetailDataLoading,
    // isError: isDetailDataError,
  } = useQuery({
    queryKey: ['fetchDetailData'],
    queryFn: () => fetchDetailData(),
  });

  const queryClient = useQueryClient();

  // 수정 완료 후 제출 시 mutation
  const editCompleteMutation = useMutation({
    mutationFn: async (newData: ContentEditCompletePatchRequestData) => {
      const response = await instance.put('', newData);
      return response.data;
    },
    onSuccess: () => {
      console.log('editCompleteMutation success!');
      setIsEditing(false);
      queryClient.invalidateQueries({ queryKey: ['fetchDetailData'] }); // 수정이 성공하면 쿼리를 다시 가져옴
    },
  });

  // 수정 후 제출하기 버튼을 눌렀을 때
  const handleEditCompleteClick = () => {
    editCompleteMutation.mutate({ editedTitle, editedBody });
    setIsEditing(false);
  };

  // 본문 삭제 버튼을 눌렀을 때 mutation
  const contentDeleteMutation = useMutation({
    mutationFn: async () => {
      return await instance.delete('');
    },
    onSuccess: () => {
      // board로 이동
      navigate('/board');
    },
  });

  // 본문 삭제 버튼을 눌렀을 때
  const handleContentDeleteClick = () => {
    contentDeleteMutation.mutate();
  };

  // 로딩 중일 때
  if (isDetailDataLoading) {
    return <Loading />;
  }

  return DetailData !== undefined ? (
    <div className="font-pretendard min-h-screen w-screen bg-white dark:bg-zinc-700 flex flex-col px-8 mb-10">
      <BoardHeader />
      <div className=" text-black sm:mx-32 mt-20">
        {isEditing ? (
          <>
            <input
              value={editedTitle}
              onChange={handleTitleChange}
              className="w-full p-2 border rounded-md h-10 my-4"
            />
            <WritingEditor value={editedBody} onChange={handleBodyChange} />
            <div className="whitespace-nowrap float-right mt-10">
              <BlueBtn title="수정 완료" onClick={handleEditCompleteClick} />
            </div>
          </>
        ) : (
          <>
            <div className="text-2xl font-bold dark:text-white mt-4">
              {DetailData.result.title}
            </div>
            <div className="text-sm text-gray-400 dark:text-white mt-4">
              {DetailData.result.author} | {DetailData.result.time}
            </div>
            <div className="h-auto bg-gray-100 dark:bg-gray-800 dark:text-white rounded-lg mt-10 p-4 ">
              {DetailData?.result.body}
            </div>
            <div className="flex justify-between mt-10">
              <LikesBtn likes={DetailData?.result.likes} isContent={true} />
              <div className="flex gap-x-2 whitespace-nowrap">
                <BlueBtn title="수정" onClick={handleEditClick} />
                <RedBtn title="삭제" onClick={handleContentDeleteClick} />
              </div>
            </div>
          </>
        )}
      </div>
      <CommentSection CommentResult={DetailData.result.comments} />
      <CommentWrite />
      <DarkModeToggle />
      <TopButton />
    </div>
  ) : (
    <div>오류!</div>
  );
};

export default Content;
