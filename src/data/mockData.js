// 예시 하드코딩 데이터 (src/data/mockData.js)
export const mockModels = [
    {id: 1, name: 'model_2024_01', status: 'complete', baseModel: 'bert-base', datasetId: 10},
    {id: 2, name: 'model_2024_02', status: 'training', baseModel: 'gpt-mini', datasetId: 11},
  ];
  
  export const mockDatasets = [
    {id: 10, name: 'dataset_2024_01', keyword: '기밀', exampleEmail: '기밀 내용의 예시 이메일...', count: 100},
    {id: 11, name: 'dataset_2024_02', keyword: '비밀', exampleEmail: '비밀 내용의 예시 이메일...', count: 200},
  ];
  
  export const mockUsers = [
    {id: 'userA', lastDetected:'2024-12-01', totalDetections:10, unchecked:2, score:80 },
    {id: 'userB', lastDetected:'2024-12-02', totalDetections:5, unchecked:1, score:90 },
  ];
  
  export const mockUserDetections = [
    {id: 'mail_1', title:'기밀 관련 메일', date:'2024-12-01', checked:false, originalMail:'...original...', modifiedMail:'...modified...', complianceQuiz:'CPMS-001', keyword:'기밀'},
    {id: 'mail_2', title:'비밀 공유 메일', date:'2024-12-02', checked:true, originalMail:'...original...', modifiedMail:'...modified...', complianceQuiz:'CPMS-002', keyword:'비밀'},
  ];
  