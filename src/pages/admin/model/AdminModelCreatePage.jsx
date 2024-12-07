import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockDatasets } from '../../../data/mockData';

const AdminModelCreatePage = () => {
  const navigate = useNavigate();
  const [baseModel, setBaseModel] = useState('bert-base');
  const [datasetId, setDatasetId] = useState(mockDatasets[0].id);
  const [modelName, setModelName] = useState('');

  const handleCreate = () => {
    alert('모델 생성 완료 (training 상태로 추가)');
    navigate('/admin/models');
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">딥러닝 모델 생성</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Base 모델 선택</label>
        <select value={baseModel} onChange={e => setBaseModel(e.target.value)} className="border p-2 rounded w-full">
          <option value="bert-base">bert-base</option>
          <option value="gpt-mini">gpt-mini</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">데이터셋 선택</label>
        <select value={datasetId} onChange={e => setDatasetId(e.target.value)} className="border p-2 rounded w-full">
          {mockDatasets.map(d => (
            <option key={d.id} value={d.id}>{d.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">모델 이름 입력</label>
        <input type="text" value={modelName} onChange={e => setModelName(e.target.value)} className="border p-2 rounded w-full"/>
      </div>
      <button onClick={handleCreate} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">생성</button>
    </div>
  );
};

export default AdminModelCreatePage;
