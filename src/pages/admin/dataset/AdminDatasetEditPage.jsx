import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mockDatasets } from '../../../data/mockData';

const AdminDatasetEditPage = () => {
  const { datasetId } = useParams();
  const navigate = useNavigate();
  const dataset = mockDatasets.find(d => d.id === Number(datasetId));

  const [keyword, setKeyword] = useState(dataset ? dataset.keyword : '');
  const [exampleEmail, setExampleEmail] = useState(dataset ? dataset.exampleEmail : '');
  const [count, setCount] = useState(dataset ? dataset.count : 100);
  const [catalog, setCatalog] = useState('catalog 1');
  const [apiKey, setApiKey] = useState('');

  const handleEdit = () => {
    alert('데이터셋 수정 완료');
    navigate('/admin/datasets');
  };

  if (!dataset) return <div>데이터셋을 찾을 수 없습니다.</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">데이터셋 생성</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">대외비 키워드 입력</label>
        <input 
          type="text" 
          value={keyword} 
          onChange={e=>setKeyword(e.target.value)} 
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">예시 이메일 입력</label>
        <textarea 
          value={exampleEmail} 
          onChange={e=>setExampleEmail(e.target.value)} 
          className="border p-2 rounded w-full" 
          rows="3"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">생성할 데이터셋 개수</label>
        <input 
          type="number" 
          value={count} 
          onChange={e=>setCount(e.target.value)} 
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Fabrix 카탈로그 선택</label>
        <select 
          value={catalog} 
          onChange={e=>setCatalog(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="catalog 1">catalog 1</option>
          <option value="catalog 2">catalog 2</option>
          <option value="catalog 3">catalog 3</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Fabrix API Key 입력</label>
        <input 
          type="text" 
          value={apiKey} 
          onChange={e=>setApiKey(e.target.value)} 
          className="border p-2 rounded w-full"
        />
      </div>
      <button 
        onClick={handleEdit} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        수정 완료
      </button>
    </div>
  );
};

export default AdminDatasetEditPage;
