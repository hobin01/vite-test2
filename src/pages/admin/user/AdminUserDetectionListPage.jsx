import React from 'react';
import { Link } from 'react-router-dom';
import { mockUsers } from '../../../data/mockData.js';

const AdminUserDetectionListPage = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">사용자 탐지 내역 관리</h2>
      <table className="w-full border text-sm">
        <thead className="bg-blue-50">
          <tr>
            <th className="border p-2">사용자 id</th>
            <th className="border p-2">최근 탐지 시각</th>
            <th className="border p-2">전체 탐지 개수</th>
            <th className="border p-2">미확인 개수</th>
            <th className="border p-2">action</th>
            <th className="border p-2">컴플라이언스 점수</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map(u => (
            <tr key={u.id}>
              <td className="border p-2 text-center">{u.id}</td>
              <td className="border p-2 text-center">{u.lastDetected}</td>
              <td className="border p-2 text-center">{u.totalDetections}</td>
              <td className="border p-2 text-center">{u.unchecked}</td>
              <td className="border p-2 space-x-2 text-center">
                <Link to={`/admin/users/${u.id}`} className="text-blue-500 hover:underline">확인</Link>
                <button onClick={() => alert(`알림 메일 발송 to ${u.id}`)} className="text-blue-500 hover:underline">알림</button>
              </td>
              <td className="border p-2">{u.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default AdminUserDetectionListPage;
