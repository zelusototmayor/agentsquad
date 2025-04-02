import React from 'react';

export const metadata = {
  title: 'Squad Dashboard - AgentSquad',
};

export default function SquadDashboardPage() {
  return (
    <ClientSquadDashboard />
  );
}

"use client";

import { sampleAgents } from '@/lib/agent-data';
import Link from 'next/link';

function ClientSquadDashboard() {
  // For demo purposes, we'll use the sample agents as if they're in the user's squad
  const myAgents = sampleAgents.map(agent => ({
    ...agent,
    isActive: Math.random() > 0.3 // Randomly set some agents as active
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Your Agent Squad
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage and interact with your team of AI agents.
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <Link href="/agent-creation">
            <button type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add New Agent
            </button>
          </Link>
        </div>
      </div>

      {/* Squad Stats */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Squad Statistics</h3>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="bg-indigo-50 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Agents</dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">{myAgents.length}</dd>
                </dl>
              </div>
            </div>
            <div className="bg-indigo-50 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Active Agents</dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">{myAgents.filter(a => a.isActive).length}</dd>
                </dl>
              </div>
            </div>
            <div className="bg-indigo-50 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Agent Interactions</dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">124</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agent List */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Your Agents</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Toggle agents on/off and manage your squad.</p>
        </div>
        <div className="border-t border-gray-200">
          <ul role="list" className="divide-y divide-gray-200">
            {myAgents.map((agent) => (
              <li key={agent.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${agent.isActive ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <span className="text-lg">{agent.name.charAt(0)}</span>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        <h4 className="text-sm font-medium text-gray-900">{agent.name}</h4>
                        <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${agent.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          {agent.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{agent.role.charAt(0).toUpperCase() + agent.role.slice(1)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input 
                        type="checkbox" 
                        name={`toggle-${agent.id}`} 
                        id={`toggle-${agent.id}`} 
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        defaultChecked={agent.isActive}
                      />
                      <label 
                        htmlFor={`toggle-${agent.id}`} 
                        className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${agent.isActive ? 'bg-indigo-400' : 'bg-gray-300'}`}
                      ></label>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Share
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{agent.description}</p>
                </div>
                <div className="mt-2">
                  {agent.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mr-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Placeholder for Agent Interaction Panel */}
      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Agent Interaction</h3>
          <p className="mt-1 text-sm text-gray-500">
            Communicate with your active agents.
          </p>
          <div className="mt-4 border border-gray-300 rounded-md p-4 h-64 bg-gray-50 flex items-center justify-center">
            <p className="text-gray-400">Agent interaction panel will appear here</p>
          </div>
          <div className="mt-4 flex">
            <input
              type="text"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Type your message to the squad..."
              disabled
            />
            <button
              type="button"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
