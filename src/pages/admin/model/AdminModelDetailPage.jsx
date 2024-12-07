import React from 'react';
import { useParams } from 'react-router-dom';
import { mockModels, mockDatasets } from '../../../data/mockData';

const AdminModelDetailPage = () => {
  const {modelId} = useParams();
  const model = mockModels.find(m => m.id === Number(modelId));
  if(!model) return <div>모델을 찾을 수 없습니다.</div>;
  const ds = mockDatasets.find(d => d.id === model.datasetId);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">딥러닝 모델 상세</h2>
      <table className="border text-sm w-full">
        <tbody>
          <tr><td className="border p-2 font-medium">모델 ID</td><td className="border p-2">{model.id}</td></tr>
          <tr><td className="border p-2 font-medium">모델 이름</td><td className="border p-2">{model.name}</td></tr>
          <tr><td className="border p-2 font-medium">Base 모델</td><td className="border p-2">{model.baseModel}</td></tr>
          <tr><td className="border p-2 font-medium">사용한 데이터셋</td><td className="border p-2">{ds ? ds.name : 'N/A'}</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminModelDetailPage;
