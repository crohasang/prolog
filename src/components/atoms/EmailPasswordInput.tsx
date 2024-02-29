import React, { useState } from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';

const EmailPasswordInput: React.FC = () => {
  const opacity = useFadeIn(0, 1, 1000);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="w-80  flex flex-col " style={{ opacity }}>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md mt-4"
      />
    </div>
  );
};

export default EmailPasswordInput;
