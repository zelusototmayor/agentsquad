export interface Agent {
  id: string;
  name: string;
  role: string;
  description: string;
  prompt: string;
  functions: {
    name: string;
    description: string;
    parameters?: Record<string, any>;
  }[];
  createdBy: string;
  downloads?: number;
  rating?: number;
  tags: string[];
  isActive?: boolean;
}

export interface Squad {
  id: string;
  name: string;
  description: string;
  agents: Agent[];
  createdBy: string;
  createdAt: number;
  updatedAt: number;
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  squads: Squad[];
  agents: Agent[];
  createdAt: number;
}
