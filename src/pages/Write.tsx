import React, { useState } from 'react';
import BoardHeader from '../components/organisms/BoardHeader';
import TopButton from '../components/atoms/TopButton';
import WritingEditor from '../components/organisms/WritingEditor';

import BlueBtn from '../components/atoms/BlueBtn';
// import { useMutation } from '@tanstack/react-query';

const Write = () => {
  // 제목
  const [newTitle, setNewTitle] = useState<string>('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  // 본문
  const [newWriting, setNewWriting] = useState<string>('');

  const handleWritingChange = (e: string) => {
    setNewWriting(e);
  };

  // const mutation = useMutation((data: FormData) => api.post('/your-endpoint', data, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data'
  //   }
  // }));

  // 제출
  const handleWritingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // // FormData 생성
    // const formData = new FormData();
    // formData.append('title', newTitle);
    // formData.append('writing', newWriting);

    // // 서버에 POST 요청 보내기
    // mutation.mutate(formData);

    console.log('New comment:', newWriting);
  };

  return (
    <div className="min-h-screen w-screen bg-white flex flex-col px-8">
      <BoardHeader />
      <div className="font-pretendard sm:mx-32 mt-10">
        <form onSubmit={handleWritingSubmit} className="mt-4">
          <div className="text-xl font-semibold dark:text-white">제목</div>
          <input
            value={newTitle}
            onChange={handleTitleChange}
            className="w-full p-2 border rounded-md h-10 mt-4"
          />

          <div className="flex mt-8">
            <div className="text-xl font-semibold">본문</div>
          </div>

          <div className="w-full h-80 mt-4">
            <WritingEditor value={newWriting} onChange={handleWritingChange} />
          </div>

          <div className="float-right mt-10">
            <BlueBtn title="제출하기" />
          </div>
        </form>
      </div>
      <TopButton />
    </div>
  );
};

export default Write;
