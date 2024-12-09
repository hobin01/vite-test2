import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockDatasets } from '../../../data/mockData.js';
import SimpleTable from '../../../components/SimpleTable.jsx'

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

  const tableClass = "w-full border text-sm";
  const theadClass = "bg-blue-50";
  const tbodyClass = "";
  
  const cellClass = "border p-2 text-center";
  const columns = 5;
  const thClass = Array(columns).fill(cellClass);
  const tdClass = Array(columns).fill(cellClass);

  const heads = ["ID", "이름", "", "", ""];
  const datas = [];

  datasets.map(data => {
    datas.push([
      data.id, 
      data.name, 
      <button onClick={() => handleDownload(data.id)} className="text-blue-500 hover:underline">다운로드</button>, 
      <Link to={`/admin/datasets/${data.id}/edit`} className="text-blue-500 hover:underline">수정</Link>, 
      <button onClick={() => handleDelete(data.id)} className="text-red-500 hover:underline">삭제</button>
    ]);
  });

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold mb-4">데이터셋 리스트</h2>
        <Link to="/admin/datasets/create" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inline-block mb-4">데이터셋 생성</Link>
      </div>
      <SimpleTable 
        tableClass={tableClass} 
        theadClass={theadClass} 
        tbodyClass={tbodyClass} 
        thClass={thClass}
        tdClass={tdClass} 
        heads={heads} 
        datas={datas}>
      </SimpleTable>

    </div>
  );
};

export default AdminDatasetListPage;
