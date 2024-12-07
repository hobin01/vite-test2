import React from 'react';
import { Link } from 'react-router-dom';

const UserPage = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">사용자 페이지</h2>
      <Link to="/user/detections" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">대외비 탐지 메일 리스트 확인</Link>
    </div>
  );
};

export default UserPage;
