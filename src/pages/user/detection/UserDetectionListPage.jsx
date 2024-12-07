import React from 'react';
import { Link } from 'react-router-dom';
import { mockUserDetections } from '../../../data/mockData.js';

const totalCount = mockUserDetections.length;
const uncheckedCount = mockUserDetections.filter(d => !d.checked).length;
const complianceScore = 85;

const UserDetectionListPage = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">대외비 탐지 메일 리스트</h2>
      <div className="mb-4 space-x-4">
        <span>전체 탐지 개수: {totalCount}</span>
        <span>확인하지 않은 메일 개수: {uncheckedCount}</span>
        <span>컴플라이언스 점수: {complianceScore}</span>
      </div>
      <table className="w-full border text-sm">
        <thead className="bg-blue-50">
          <tr>
            <th className="border p-2">메일 id</th>
            <th className="border p-2">메일 제목</th>
            <th className="border p-2">발송 시간</th>
            <th className="border p-2">확인 유무</th>
          </tr>
        </thead>
        <tbody>
          {mockUserDetections.map(d => (
            <tr key={d.id}>
              <td className="border p-2 text-center">
                <Link to={`/user/detections/${d.id}`} className="text-blue-500 hover:underline">{d.id}</Link>
              </td>
              <td className="border p-2 text-center">{d.title}</td>
              <td className="border p-2 text-center">{d.date}</td>
              <td className="border p-2 text-center">{d.checked ? 'O' : 'X'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetectionListPage;
