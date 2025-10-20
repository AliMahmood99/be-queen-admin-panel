import React from 'react';

/**
 * Debug page to check environment variables
 * Access at /debug-env
 */
const DebugEnv: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Environment Variables Debug</h1>

      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg border">
          <h2 className="font-semibold mb-2">VITE_ENABLE_MOCK_DATA:</h2>
          <pre className="bg-gray-100 p-2 rounded">
            {String(import.meta.env.VITE_ENABLE_MOCK_DATA)}
          </pre>
          <p className="text-sm text-gray-600 mt-2">
            Type: {typeof import.meta.env.VITE_ENABLE_MOCK_DATA}
          </p>
          <p className="text-sm text-gray-600">
            Is 'true' string: {String(import.meta.env.VITE_ENABLE_MOCK_DATA === 'true')}
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <h2 className="font-semibold mb-2">VITE_API_BASE_URL:</h2>
          <pre className="bg-gray-100 p-2 rounded">
            {String(import.meta.env.VITE_API_BASE_URL || 'undefined')}
          </pre>
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <h2 className="font-semibold mb-2">VITE_APP_NAME:</h2>
          <pre className="bg-gray-100 p-2 rounded">
            {String(import.meta.env.VITE_APP_NAME || 'undefined')}
          </pre>
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <h2 className="font-semibold mb-2">All ENV variables:</h2>
          <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto">
            {JSON.stringify(import.meta.env, null, 2)}
          </pre>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Expected Values:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>✓ VITE_ENABLE_MOCK_DATA should be: "true"</li>
            <li>✓ VITE_API_BASE_URL should be: "https://api.bequeen.qa/api"</li>
            <li>✓ VITE_APP_NAME should be: "BE QUEEN Admin Panel"</li>
          </ul>
        </div>

        {import.meta.env.VITE_ENABLE_MOCK_DATA !== 'true' && (
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            <h3 className="font-semibold text-red-900 mb-2">⚠️ Issue Detected!</h3>
            <p className="text-red-800">
              VITE_ENABLE_MOCK_DATA is not set to 'true'.
              Please set environment variables in Vercel and redeploy.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DebugEnv;
