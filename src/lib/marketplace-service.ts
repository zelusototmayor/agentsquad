import { Agent } from '@/types/agent';
import dummyAgents from './dummy-agents.json';

// Function to load marketplace agents
export function getMarketplaceAgents(): Agent[] {
  // In a real app, this would fetch from Firebase or another backend
  // For now, we'll use our dummy data
  return dummyAgents as Agent[];
}

// Function to get a specific agent by ID
export function getAgentById(id: string): Agent | undefined {
  const agents = getMarketplaceAgents();
  return agents.find(agent => agent.id === id);
}

// Function to search agents by query
export function searchAgents(query: string, role?: string): Agent[] {
  const agents = getMarketplaceAgents();
  
  if (!query && !role) return agents;
  
  return agents.filter(agent => {
    const matchesQuery = !query || 
      agent.name.toLowerCase().includes(query.toLowerCase()) ||
      agent.description.toLowerCase().includes(query.toLowerCase()) ||
      agent.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
    
    const matchesRole = !role || agent.role === role;
    
    return matchesQuery && matchesRole;
  });
}

// Function to get popular agents
export function getPopularAgents(limit: number = 3): Agent[] {
  const agents = getMarketplaceAgents();
  return [...agents].sort((a, b) => (b.downloads || 0) - (a.downloads || 0)).slice(0, limit);
}

// Function to get highest rated agents
export function getHighestRatedAgents(limit: number = 3): Agent[] {
  const agents = getMarketplaceAgents();
  return [...agents].sort((a, b) => (b.rating || 0) - (a.rating || 0)).slice(0, limit);
}
