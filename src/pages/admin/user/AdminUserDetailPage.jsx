import React from 'react';
import { useParams } from 'react-router-dom';
import { mockUserDetections } from '../../../data/mockData.js';

const AdminUserDetailPage = () => {
  const {userId} = useParams();

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">사용자 {userId} 세부 탐지 내역</h2>
      <table className="w-full border text-sm">
        <thead className="bg-blue-50">
          <tr>
            <th className="border p-2">메일 id</th>
            <th className="border p-2">메일 제목</th>
            <th className="border p-2">원본 메일</th>
            <th className="border p-2">교정 메일</th>
            <th className="border p-2">발송 시간</th>
            <th className="border p-2">컴플라이언스 문제</th>
            <th className="border p-2">확인 여부</th>
          </tr>
        </thead>
        <tbody>
          {mockUserDetections.map(d => (
            <tr key={d.id}>
              <td className="border p-2 text-center">{d.id}</td>
              <td className="border p-2 text-center">{d.title}</td>
              <td className="border p-2 text-center">{d.originalMail}</td>
              <td className="border p-2 text-center">{d.modifiedMail}</td>
              <td className="border p-2 text-center">{d.date}</td>
              <td className="border p-2 text-center">{d.complianceQuiz}</td>
              <td className="border p-2 text-center">{d.checked ? 'O' : 'X'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminUserDetailPage;
