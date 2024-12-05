import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ChevronRight } from 'lucide-react';
import { protocolData } from '../../data/protocolData';

const ProtocolList = () => {
  return (
    <div className="grid gap-4">
      {protocolData.map((protocol) => (
        <Link
          key={protocol.id}
          to={`/protocols/${protocol.id}`}
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex items-center"
        >
          <FileText className="h-6 w-6 text-indigo-600 mr-4" />
          <div className="flex-grow">
            <h3 className="text-lg font-medium text-gray-900">{protocol.title}</h3>
            <p className="text-sm text-gray-500">{protocol.description}</p>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>
      ))}
    </div>
  );
};

export default ProtocolList;