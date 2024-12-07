import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import AdminPage from './pages/admin/AdminPage.jsx';
import UserPage from './pages/user/UserPage.jsx';

import AdminModelListPage from './pages/admin/model/AdminModelListPage.jsx';
import AdminModelCreatePage from './pages/admin/model/AdminModelCreatePage.jsx';
import AdminModelDetailPage from './pages/admin/model/AdminModelDetailPage.jsx';
import AdminModelEditPage from './pages/admin/model/AdminModelEditPage.jsx';

import AdminDatasetListPage from './pages/admin/dataset/AdminDatasetListPage.jsx';
import AdminDatasetCreatePage from './pages/admin/dataset/AdminDatasetCreatePage.jsx';
import AdminDatasetEditPage from './pages/admin/dataset/AdminDatasetEditPage.jsx';

import AdminUserDetectionListPage from './pages/admin/user/AdminUserDetectionListPage.jsx';
import AdminUserDetailPage from './pages/admin/user/AdminUserDetailPage.jsx';

import UserDetectionListPage from './pages/user/detection/UserDetectionListPage.jsx';
import UserDetectionDetailPage from './pages/user/detection/UserDetectionDetailPage.jsx';
import UserComplianceChallengePage from './pages/user/compliance/UserComplianceChallengePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-900">
        <nav className="flex justify-between p-4 border-b border-gray-200 bg-gray-100">
          <div className="text-xl font-bold text-blue-500">Company Name</div>
          <div className="space-x-4">
            <Link to="/" className="text-blue-500 hover:underline">Home</Link>
            <Link to="/admin" className="text-blue-500 hover:underline">Admin</Link>
            <Link to="/user/detections" className="text-blue-500 hover:underline">User</Link>
          </div>
        </nav>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<MainPage />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/models" element={<AdminModelListPage />} />
            <Route path="/admin/models/create" element={<AdminModelCreatePage />} />
            <Route path="/admin/models/:modelId" element={<AdminModelDetailPage />} />
            <Route path="/admin/models/:modelId/edit" element={<AdminModelEditPage />} />

            <Route path="/admin/datasets" element={<AdminDatasetListPage />} />
            <Route path="/admin/datasets/create" element={<AdminDatasetCreatePage />} />
            <Route path="/admin/datasets/:datasetId/edit" element={<AdminDatasetEditPage />} />

            <Route path="/admin/users" element={<AdminUserDetectionListPage />} />
            <Route path="/admin/users/:userId" element={<AdminUserDetailPage />} />

            {/* User Routes */}
            <Route path="/user" element={<UserPage />} />
            <Route path="/user/detections" element={<UserDetectionListPage />} />
            <Route path="/user/detections/:mailId" element={<UserDetectionDetailPage />} />
            <Route path="/user/compliance" element={<UserComplianceChallengePage />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
