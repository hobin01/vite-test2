import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center mb-8">대외비 메일 판단 및 교정 제공 플랫폼</h1>
        
        <div className="flex flex-col items-center space-y-4">
          <Link to="/admin" className="p-4 bg-blue-100 text-center rounded hover:bg-blue-200">관리자 페이지</Link>
          <Link to="/user/detections" className="p-4 bg-blue-100 text-center rounded hover:bg-blue-200">사용자 페이지</Link>
        </div>
        
        <div className="mt-8 text-center text-gray-700">
          {/* 추후 적당한 문구를 위한 공간 */}
          <p>여기에 추후 안내 문구를 넣을 수 있습니다.</p>
        </div>
    </div>
  );
};

export default MainPage;
