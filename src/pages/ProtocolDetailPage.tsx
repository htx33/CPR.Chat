import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ProtocolDetail from '../components/Protocol/ProtocolDetail';
import { protocolData } from '../data/protocolData';

const ProtocolDetailPage = () => {
  const { protocolId } = useParams();
  const protocol = protocolData.find(p => p.id === protocolId);

  if (!protocol) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Protocol Not Found</h2>
        <Link to="/protocols" className="text-indigo-600 hover:text-indigo-800">
          Return to Protocols List
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        to="/protocols"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        Back to Protocols
      </Link>
      <ProtocolDetail protocol={protocol} />
    </div>
  );
};

export default ProtocolDetailPage;