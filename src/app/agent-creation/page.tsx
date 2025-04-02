"use client";

import React from 'react';
import { AgentRole, getAgentRoles, getSampleFunctions } from '@/lib/agent-data';

function AgentCreationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Create a New Agent
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Design a specialized AI agent for your squad by defining its role, capabilities, and behavior.
          </p>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200">
              <div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Agent Information</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Basic information about your agent.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label htmlFor="agent-name" className="block text-sm font-medium text-gray-700">
                      Agent Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="agent-name"
                        id="agent-name"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="e.g., Research Assistant"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="agent-description" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="agent-description"
                        name="agent-description"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Describe what your agent does and how it can help you"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description of your agent's purpose and capabilities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Agent Role</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Select a role that best describes your agent's primary function.
                  </p>
                </div>
                <div className="mt-6">
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
                    {getAgentRoles().map((role) => (
                      <div key={role.id} className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id={`role-${role.id}`}
                            name="agent-role"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor={`role-${role.id}`} className="font-medium text-gray-700">
                            {role.name}
                          </label>
                          <p className="text-gray-500">{role.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Agent Prompt</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Define how your agent should behave and respond.
                  </p>
                </div>
                <div className="mt-6">
                  <label htmlFor="agent-prompt" className="block text-sm font-medium text-gray-700">
                    System Prompt
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="agent-prompt"
                      name="agent-prompt"
                      rows={6}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md font-mono"
                      placeholder="You are a helpful assistant specialized in..."
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Instructions that define your agent's personality, knowledge, and behavior.
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Agent Functions</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Select the functions your agent can perform.
                  </p>
                </div>
                <div className="mt-6">
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
                    {getSampleFunctions().map((func, index) => (
                      <div key={index} className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id={`function-${index}`}
                            name={`function-${func.name}`}
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor={`function-${index}`} className="font-medium text-gray-700">
                            {func.name}
                          </label>
                          <p className="text-gray-500">{func.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Tags</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Add tags to help others find your agent in the marketplace.
                  </p>
                </div>
                <div className="mt-6">
                  <label htmlFor="agent-tags" className="block text-sm font-medium text-gray-700">
                    Tags (comma separated)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="agent-tags"
                      id="agent-tags"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="e.g., research, productivity, writing"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create Agent
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AgentCreationPage;
