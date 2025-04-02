import React from 'react';

export const metadata = {
  title: 'Team Collaboration - AgentSquad',
};

export default function TeamPage() {
  return (
    <ClientTeamPage />
  );
}

"use client";

function ClientTeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Team Collaboration
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Collaborate with team members using shared agent squads.
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Invite Team Member
          </button>
        </div>
      </div>

      {/* Coming Soon Banner */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 mb-8">
        <div className="flex items-center justify-center flex-col text-center">
          <svg className="h-12 w-12 text-indigo-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h3 className="text-lg font-medium text-indigo-800 mb-2">Team Collaboration Coming Soon</h3>
          <p className="text-indigo-600 max-w-md">
            We're building powerful collaboration features that will allow teams to share and manage agent squads together.
          </p>
        </div>
      </div>

      {/* Placeholder Team Members */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Team Members</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Manage your team and their permissions.</p>
        </div>
        <div className="border-t border-gray-200">
          <ul role="list" className="divide-y divide-gray-200 opacity-50">
            <li className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200"></div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">You (Owner)</div>
                    <div className="text-sm text-gray-500">your.email@example.com</div>
                  </div>
                </div>
                <div>
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Admin
                  </span>
                </div>
              </div>
            </li>
            <li className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200"></div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Team Member 1</div>
                    <div className="text-sm text-gray-500">team.member1@example.com</div>
                  </div>
                </div>
                <div>
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Editor
                  </span>
                </div>
              </div>
            </li>
            <li className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200"></div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Team Member 2</div>
                    <div className="text-sm text-gray-500">team.member2@example.com</div>
                  </div>
                </div>
                <div>
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                    Viewer
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Placeholder Shared Squads */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Shared Agent Squads</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Agent squads shared with your team.</p>
        </div>
        <div className="border-t border-gray-200">
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">Squad Name</div>
            <div className="text-sm font-medium text-gray-500">Shared With</div>
            <div className="text-sm font-medium text-gray-500">Last Updated</div>
            <div className="text-sm font-medium text-gray-500">Actions</div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6 opacity-50">
            <div className="text-sm text-gray-900">Research Squad</div>
            <div className="text-sm text-gray-500">All Team Members</div>
            <div className="text-sm text-gray-500">2 days ago</div>
            <div className="text-sm text-indigo-600">Manage Access</div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6 opacity-50">
            <div className="text-sm text-gray-900">Content Creation Squad</div>
            <div className="text-sm text-gray-500">Team Member 1</div>
            <div className="text-sm text-gray-500">5 days ago</div>
            <div className="text-sm text-indigo-600">Manage Access</div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6 opacity-50">
            <div className="text-sm text-gray-900">Development Squad</div>
            <div className="text-sm text-gray-500">Team Member 2</div>
            <div className="text-sm text-gray-500">1 week ago</div>
            <div className="text-sm text-indigo-600">Manage Access</div>
          </div>
        </div>
      </div>

      {/* Placeholder Activity Feed */}
      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Team Activity</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Recent activity from your team members.</p>
        </div>
        <div className="border-t border-gray-200">
          <ul role="list" className="divide-y divide-gray-200 opacity-50">
            <li className="px-4 py-4 sm:px-6">
              <div className="flex space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">Team Member 1</p>
                  <p className="text-sm text-gray-500">Created a new agent "Data Analyzer Pro"</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
            </li>
            <li className="px-4 py-4 sm:px-6">
              <div className="flex space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">You</p>
                  <p className="text-sm text-gray-500">Updated the "Research Squad" configuration</p>
                  <p className="text-sm text-gray-500">Yesterday</p>
                </div>
              </div>
            </li>
            <li className="px-4 py-4 sm:px-6">
              <div className="flex space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">Team Member 2</p>
                  <p className="text-sm text-gray-500">Shared an agent with the team</p>
                  <p className="text-sm text-gray-500">3 days ago</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
