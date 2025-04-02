import React from 'react';

export default function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Analytics Dashboard
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Track your agents' performance and usage statistics.
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Export Data
          </button>
        </div>
      </div>

      {/* Coming Soon Banner */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 mb-8">
        <div className="flex items-center justify-center flex-col text-center">
          <svg className="h-12 w-12 text-indigo-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <h3 className="text-lg font-medium text-indigo-800 mb-2">Analytics Coming Soon</h3>
          <p className="text-indigo-600 max-w-md">
            We're building comprehensive analytics tools to help you understand your agents' performance and optimize your workflow.
          </p>
        </div>
      </div>

      {/* Placeholder Overview Stats */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Overview</h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-50 overflow-hidden shadow rounded-lg opacity-50">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Agents</dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">12</dd>
                </dl>
              </div>
            </div>
            <div className="bg-gray-50 overflow-hidden shadow rounded-lg opacity-50">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Interactions</dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">1,284</dd>
                </dl>
              </div>
            </div>
            <div className="bg-gray-50 overflow-hidden shadow rounded-lg opacity-50">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Active Time</dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">47h</dd>
                </dl>
              </div>
            </div>
            <div className="bg-gray-50 overflow-hidden shadow rounded-lg opacity-50">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Efficiency Score</dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">92%</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder Usage Chart */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Usage Over Time</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center opacity-50">
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="mt-2 text-sm text-gray-500">Usage chart will appear here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder Agent Performance */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Agent Performance</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Performance metrics for your agents.</p>
        </div>
        <div className="border-t border-gray-200">
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">Agent Name</div>
            <div className="text-sm font-medium text-gray-500">Usage</div>
            <div className="text-sm font-medium text-gray-500">Success Rate</div>
            <div className="text-sm font-medium text-gray-500">Avg. Response Time</div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6 opacity-50">
            <div className="text-sm text-gray-900">Research Wizard</div>
            <div className="text-sm text-gray-500">432 interactions</div>
            <div className="text-sm text-gray-500">94%</div>
            <div className="text-sm text-gray-500">1.2s</div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6 opacity-50">
            <div className="text-sm text-gray-900">Code Assistant</div>
            <div className="text-sm text-gray-500">287 interactions</div>
            <div className="text-sm text-gray-500">89%</div>
            <div className="text-sm text-gray-500">1.5s</div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6 opacity-50">
            <div className="text-sm text-gray-900">Content Writer</div>
            <div className="text-sm text-gray-500">356 interactions</div>
            <div className="text-sm text-gray-500">92%</div>
            <div className="text-sm text-gray-500">1.8s</div>
          </div>
        </div>
      </div>

      {/* Placeholder Insights */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Insights & Recommendations</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">AI-generated insights to improve your workflow.</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6 opacity-50">
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Usage Pattern Detected</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>Your Research Wizard agent is most active on Mondays and Tuesdays. Consider scheduling research tasks during these days for optimal workflow.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">Efficiency Improvement</h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>Your squad's efficiency has improved by 12% over the last month. The addition of the Data Analyst agent has contributed significantly to this improvement.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Recommendation</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>Based on your usage patterns, adding a Designer agent to your squad could improve your content creation workflow by an estimated 15%.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
