import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockModels } from '../../../data/mockData';

const AdminModelListPage = () => {
  const [models, setModels] = useState(mockModels);

  const handleDelete = (id) => {
    if(window.confirm("정말 삭제하시겠습니까?")) {
      const updated = models.filter(m => m.id !== id);
      setModels(updated);
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">학습된 모델 리스트</h2>
        <Link to="/admin/models/create" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">모델 생성</Link>
      </div>
      
      <table className="w-full border-collapse border text-sm">
        <thead className="bg-blue-50">
          <tr>
            <th className="border p-2">모델 id</th>
            <th className="border p-2">모델 이름</th>
            <th className="border p-2">status</th>
            <th className="border p-2">action</th>
          </tr>
        </thead>
        <tbody>
          {models.map(m => (
            <tr key={m.id} className="odd:bg-white even:bg-gray-50">
              <td className="border p-2 text-center">{m.id}</td>
              <td className="border p-2 text-center">{m.name}</td>
              <td className="border p-2 text-center">{m.status}</td>
              <td className="border p-2 space-x-2 text-center">
                <Link to={`/admin/models/${m.id}`} className="text-blue-500 hover:underline">확인</Link>
                <Link to={`/admin/models/${m.id}/edit`} className="text-blue-500 hover:underline">수정</Link>
                <button onClick={() => handleDelete(m.id)} className="text-red-500 hover:underline">삭제</button>
                <button onClick={() => alert('해당 모델 적용')} className="text-blue-500 hover:underline">적용</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminModelListPage;
