import React, { useState } from 'react';

const UserComplianceChallengePage = () => {
  const [complianceScore, setComplianceScore] = useState(85);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const question = "CPMS 관련 규정에서 기밀 이메일 전송 시 주의해야 할 점은?";
  const options = [
    "이메일 제목에 기밀 표시를 명확히 해야 한다.",
    "받는 사람의 이메일 주소를 무조건 외부 주소로 설정한다.",
    "기밀 문서를 첨부할 때 암호화를 생략해도 된다.",
    "CC, BCC에 최대한 많은 사람을 포함한다."
  ];
  const correctIndex = 0;  
  const explanation = "기밀 문서를 전송할 때는 반드시 암호화나 기밀 표시 등을 명확히 해야 하며, 수신 대상도 최소화 하는 것이 좋습니다.";

  const handleSubmit = () => {
    if (selectedOption === null) {
      alert("정답을 선택해주세요!");
      return;
    }
    const correct = selectedOption === correctIndex;
    setIsCorrect(correct);
    setIsSubmitted(true);
    if (correct) {
      // 정답인 경우 점수 상승
      setComplianceScore(prev => prev + 5);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">컴플라이언스 문제 도전</h2>
      <div className="mb-4">현재 나의 컴플라이언스 점수: {complianceScore}</div>
      <div className="mb-4 font-medium">{question}</div>
      
      <div className="space-y-2 mb-4">
        {options.map((opt, idx) => (
          <label key={idx} className="flex items-center space-x-2">
            <input 
              type="radio" 
              name="answer" 
              value={idx} 
              onChange={() => setSelectedOption(idx)} 
              checked={selectedOption === idx} 
              className="h-4 w-4"
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
      
      {!isSubmitted && (
        <button 
          onClick={handleSubmit} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          정답 제출
        </button>
      )}

      {isSubmitted && (
        <div className="mt-4">
          {isCorrect ? (
            <div className="text-green-600 font-medium">정답입니다! 점수가 상승했습니다.</div>
          ) : (
            <div className="text-red-600 font-medium">
              오답입니다. <br/>
              <span className="text-gray-800 block mt-2">{explanation}</span>
            </div>
          )}
        </div>
      )}

      <div className="mt-4">
        <a href="https://cpms.company.com" className="text-blue-500 hover:underline">CPMS 페이지 이동</a>
      </div>
    </div>
  );
};

export default UserComplianceChallengePage;
