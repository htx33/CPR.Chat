import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtocolList from '../components/Protocol/ProtocolList';
import ProtocolDetailPage from './ProtocolDetailPage';

const ProtocolsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Routes>
        <Route index element={
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Post-Operative Rehabilitation Protocols</h1>
              <p className="text-gray-600 mb-6">
                Evidence-based rehabilitation protocols for common orthopedic procedures. Select a protocol to view detailed phases and guidelines.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
                <p className="text-sm text-blue-700">
                  <strong>Note:</strong> These protocols serve as general guidelines and may need to be modified based on individual 
                  patient factors, surgeon preference, and specific surgical procedures. Always defer to the referring surgeon's 
                  specific protocol when provided.
                </p>
              </div>
            </div>
            <ProtocolList />
          </>
        } />
        <Route path=":protocolId" element={<ProtocolDetailPage />} />
      </Routes>
    </div>
  );
};

export default ProtocolsPage;