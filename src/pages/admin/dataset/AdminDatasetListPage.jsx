import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockDatasets } from '../../../data/mockData.js';

const AdminDatasetListPage = () => {
  const [datasets, setDatasets] = useState(mockDatasets);

  const handleDelete = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const updated = datasets.filter(d => d.id !== id);
      setDatasets(updated);
      alert("삭제 완료");
    }
  };

  const handleDownload = (id) => {
    // 실제로는 dataset id 기반으로 다운로드 처리 필요. 여기서는 알림 처리
    alert(`데이터셋 ${id} 다운로드`);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold mb-4">데이터셋 리스트</h2>
      <Link to="/admin/datasets/create" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inline-block mb-4">데이터셋 생성</Link>
      </div>
      <table className="w-full border text-sm">
        <thead className="bg-blue-50">
          <tr>
            <th className="border p-2">데이터셋 id</th>
            <th className="border p-2">데이터셋 이름</th>
            <th className="border p-2">action</th>
          </tr>
        </thead>
        <tbody>
          {datasets.map(d => (
            <tr key={d.id}>
              <td className="border p-2 text-center">{d.id}</td>
              <td className="border p-2 text-center">{d.name}</td>
              <td className="border p-2 space-x-2 text-center">
                <button onClick={() => handleDownload(d.id)} className="text-blue-500 hover:underline">확인 (다운로드)</button>
                <Link to={`/admin/datasets/${d.id}/edit`} className="text-blue-500 hover:underline">수정</Link>
                <button onClick={() => handleDelete(d.id)} className="text-red-500 hover:underline">삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDatasetListPage;
