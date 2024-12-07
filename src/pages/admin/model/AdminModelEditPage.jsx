import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mockModels, mockDatasets } from '../../../data/mockData';

const AdminModelEditPage = () => {
  const {modelId} = useParams();
  const navigate = useNavigate();
  const model = mockModels.find(m => m.id === Number(modelId));
  const [baseModel, setBaseModel] = useState(model ? model.baseModel : 'bert-base');
  const [datasetId, setDatasetId] = useState(model ? model.datasetId : mockDatasets[0].id);
  const [modelName, setModelName] = useState(model ? model.name : '');

  const handleEdit = () => {
    alert('모델 수정 완료 (training 상태로 반영)');
    navigate('/admin/models');
  }

  if(!model) return <div>모델을 찾을 수 없습니다.</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">딥러닝 모델 수정</h2>
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
        <label className="block mb-1 font-medium">모델 이름</label>
        <input type="text" value={modelName} onChange={e => setModelName(e.target.value)} className="border p-2 rounded w-full"/>
      </div>
      <button onClick={handleEdit} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">수정 완료</button>
    </div>
  );
};

export default AdminModelEditPage;
