import React from 'react';

export const metadata = {
  title: 'Share Agent - AgentSquad',
};

export default function SharePage() {
  return (
    <ClientSharePage />
  );
}

"use client";

import { Agent } from '@/types/agent';

function ClientSharePage() {
  // This would normally come from the URL or state
  const sampleAgent: Agent = {
    id: '1',
    name: 'Research Wizard',
    role: 'researcher',
    description: 'Specialized in gathering information from various sources and summarizing findings.',
    prompt: 'You are a research specialist who excels at finding accurate information. When given a topic, search for relevant data from reliable sources, verify facts, and provide comprehensive summaries with citations.',
    functions: [
      {
        name: 'search_web',
        description: 'Search the web for information on a specific topic'
      },
      {
        name: 'summarize_content',
        description: 'Create concise summaries of lengthy content'
      }
    ],
    createdBy: 'AgentSquad Team',
    downloads: 245,
    rating: 4.8,
    tags: ['research', 'information', 'knowledge']
  };

  // Generate a shareable link (this would be a real URL in production)
  const shareableLink = `https://agentsquad.app/share/${sampleAgent.id}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Share Agent
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Share your agent with others or export its configuration.
          </p>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-xl text-indigo-700">{sampleAgent.name.charAt(0)}</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">{sampleAgent.name}</h3>
              <p className="text-sm text-gray-500">
                {sampleAgent.role.charAt(0).toUpperCase() + sampleAgent.role.slice(1)} • Created by {sampleAgent.createdBy}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-base font-medium text-gray-900">Agent Description</h4>
            <p className="mt-2 text-sm text-gray-500">{sampleAgent.description}</p>
          </div>

          <div className="mt-6">
            <h4 className="text-base font-medium text-gray-900">Agent Prompt</h4>
            <div className="mt-2 bg-gray-50 p-4 rounded-md">
              <pre className="text-sm text-gray-700 whitespace-pre-wrap">{sampleAgent.prompt}</pre>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-base font-medium text-gray-900">Agent Functions</h4>
            <ul className="mt-2 divide-y divide-gray-200">
              {sampleAgent.functions.map((func, index) => (
                <li key={index} className="py-3">
                  <div className="flex items-center">
                    <div className="flex-1">
                      <h5 className="text-sm font-medium text-gray-900">{func.name}</h5>
                      <p className="text-sm text-gray-500">{func.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h4 className="text-base font-medium text-gray-900">Share Options</h4>
            
            <div className="mt-4">
              <label htmlFor="share-link" className="block text-sm font-medium text-gray-700">
                Shareable Link
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="share-link"
                  id="share-link"
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                  value={shareableLink}
                  readOnly
                />
                <button
                  type="button"
                  className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => {
                    navigator.clipboard.writeText(shareableLink);
                    // Would show a toast notification in a real app
                  }}
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-base font-medium text-gray-700">Share on Social Media</h4>
              <div className="mt-2 flex space-x-4">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <svg className="h-5 w-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  Twitter
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <svg className="h-5 w-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                  Facebook
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <svg className="h-5 w-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  LinkedIn
                </button>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-base font-medium text-gray-700">Export Configuration</h4>
              <div className="mt-2">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Export as JSON
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
