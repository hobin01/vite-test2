import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockUserDetections } from '../../../data/mockData.js';

const UserDetectionDetailPage = () => {
  const {mailId} = useParams();
  const navigate = useNavigate();
  const detection = mockUserDetections.find(d => d.id === mailId);
  if(!detection) return <div>메일을 찾을 수 없습니다.</div>;

  const handleConfirm = () => {
    alert('확인 완료 처리');
    navigate('/user/detections');
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">탐지 메일 상세</h2>
      <div className="mb-4">
        <div className="font-medium">원본 메일</div>
        <textarea readOnly className="border w-full p-2 rounded" value={detection.originalMail}/>
      </div>
      <div className="mb-4">
        <div className="font-medium">교정된 메일</div>
        <textarea readOnly className="border w-full p-2 rounded" value={detection.modifiedMail}/>
      </div>
      <div className="mb-4">
        <div className="font-medium">대외비 키워드</div>
        <div className="border p-2 rounded bg-gray-50">{detection.keyword}</div>
      </div>
      <div className="mb-4">
        <div className="font-medium">컴플라이언스 위반 정보</div>
        <textarea readOnly className="border w-full p-2 rounded" value={detection.complianceQuiz}/>
      </div>
      <div className="space-x-4">
        <button onClick={handleConfirm} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">확인</button>
        <button onClick={() => {navigate('/user/compliance')}} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">컴플라이언스 문제 도전</button>
      </div>
    </div>
  );
};

export default UserDetectionDetailPage;
