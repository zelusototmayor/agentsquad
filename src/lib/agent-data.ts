import { Agent } from '@/types/agent';

// Types for agent roles
export type AgentRole = 
  | 'researcher' 
  | 'writer' 
  | 'analyst' 
  | 'coder' 
  | 'designer'
  | 'assistant'
  | 'custom';

// Interface for agent functions
export interface AgentFunction {
  name: string;
  description: string;
  parameters?: Record<string, any>;
}

// Sample agent data
export const sampleAgents: Agent[] = [
  {
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
  },
  {
    id: '2',
    name: 'Code Assistant',
    role: 'coder',
    description: 'Helps with coding tasks, debugging, and explaining code concepts.',
    prompt: 'You are a coding assistant with expertise in multiple programming languages. Help users write code, debug issues, explain programming concepts, and suggest best practices.',
    functions: [
      {
        name: 'generate_code',
        description: 'Generate code based on requirements'
      },
      {
        name: 'debug_code',
        description: 'Identify and fix issues in code'
      }
    ],
    createdBy: 'AgentSquad Team',
    downloads: 189,
    rating: 4.6,
    tags: ['programming', 'development', 'coding']
  },
  {
    id: '3',
    name: 'Content Writer',
    role: 'writer',
    description: 'Creates engaging content for various purposes and formats.',
    prompt: 'You are a versatile content writer. Create engaging, well-structured content in various formats including blog posts, social media updates, emails, and more. Adapt your tone and style to match the target audience and purpose.',
    functions: [
      {
        name: 'draft_content',
        description: 'Create initial drafts based on topic and guidelines'
      },
      {
        name: 'edit_content',
        description: 'Refine and improve existing content'
      }
    ],
    createdBy: 'AgentSquad Team',
    downloads: 217,
    rating: 4.7,
    tags: ['writing', 'content', 'creativity']
  },
  {
    id: '4',
    name: 'Data Analyst',
    role: 'analyst',
    description: 'Analyzes data sets and provides insights and visualizations.',
    prompt: 'You are a data analysis expert. Analyze datasets to identify trends, patterns, and insights. Create clear explanations of findings and suggest actionable recommendations based on the data.',
    functions: [
      {
        name: 'analyze_data',
        description: 'Perform statistical analysis on datasets'
      },
      {
        name: 'create_visualization',
        description: 'Generate charts and graphs from data'
      }
    ],
    createdBy: 'AgentSquad Team',
    downloads: 156,
    rating: 4.5,
    tags: ['data', 'analysis', 'statistics']
  },
  {
    id: '5',
    name: 'UI Designer',
    role: 'designer',
    description: 'Helps with design concepts, color schemes, and UI feedback.',
    prompt: 'You are a UI/UX design consultant. Provide guidance on design principles, suggest color schemes, evaluate interfaces, and offer recommendations to improve user experience.',
    functions: [
      {
        name: 'suggest_design',
        description: 'Provide design recommendations based on requirements'
      },
      {
        name: 'review_interface',
        description: 'Evaluate UI designs and suggest improvements'
      }
    ],
    createdBy: 'AgentSquad Team',
    downloads: 132,
    rating: 4.4,
    tags: ['design', 'UI', 'UX']
  }
];

// Function to get agent roles with descriptions
export function getAgentRoles() {
  return [
    { id: 'researcher', name: 'Researcher', description: 'Gathers and analyzes information from various sources' },
    { id: 'writer', name: 'Writer', description: 'Creates and edits written content in various formats' },
    { id: 'analyst', name: 'Analyst', description: 'Examines data and provides insights and recommendations' },
    { id: 'coder', name: 'Coder', description: 'Assists with programming tasks and technical solutions' },
    { id: 'designer', name: 'Designer', description: 'Helps with visual design concepts and feedback' },
    { id: 'assistant', name: 'Assistant', description: 'General-purpose helper for various tasks' },
    { id: 'custom', name: 'Custom', description: 'Create a completely custom agent role' }
  ];
}

// Function to get sample functions for agents
export function getSampleFunctions() {
  return [
    { name: 'search_web', description: 'Search the web for information' },
    { name: 'summarize_content', description: 'Create concise summaries of content' },
    { name: 'draft_content', description: 'Create initial content drafts' },
    { name: 'analyze_data', description: 'Perform analysis on datasets' },
    { name: 'generate_code', description: 'Write code based on requirements' },
    { name: 'suggest_design', description: 'Provide design recommendations' },
    { name: 'schedule_task', description: 'Create and manage scheduled tasks' },
    { name: 'send_notification', description: 'Send notifications to users' }
  ];
}
