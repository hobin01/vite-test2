import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold †ext-center mb-4">관리자 페이지</h2>
      <div className="grid grid-cols-3 gap-4">
        <Link to="/admin/models" className="p-4 bg-blue-100 rounded hover:bg-blue-200">대외비 메일 판단 모델 관리</Link>
        <Link to="/admin/datasets" className="p-4 bg-blue-100 rounded hover:bg-blue-200">데이터셋 관리</Link>
        <Link to="/admin/users" className="p-4 bg-blue-100 rounded hover:bg-blue-200">사용자 탐지 내역 관리</Link>
      </div>
    </div>
  );
};

export default AdminPage;
