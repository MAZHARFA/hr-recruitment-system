
export enum JobType {
    FULL_TIME = 'Full-Time',
    PART_TIME = 'Part-Time',
    CONTRACT = 'Contract',
    REMOTE = 'Remote',
  }
  
  export enum JobStatus {
    PUBLISHED = 'Published',
    DRAFT = 'Draft',
    CLOSED = 'Closed'
  }
  
  export enum CandidateStatus {
    APPLIED = 'Applied',
    SCREENING = 'Screening',
    INTERVIEW = 'Interview',
    OFFER = 'Offer',
    HIRED = 'Hired',
    REJECTED = 'Rejected'
  }
  
  // Renamed from CandidateStage to keep consistent, alias for backward compat if needed
  export { CandidateStatus as CandidateStage };
  
  export enum UserRole {
    RECRUITER = 'Recruiter',
    CANDIDATE = 'Candidate'
  }
  
  export interface UserProfile {
    id: string;
    name: string;
    email: string;
    password?: string; // Only for local auth simulation
    role: string; // The display title (e.g. "Senior HR", "Frontend Dev")
    systemRole: UserRole; // The logical role
    phone?: string;
    avatar?: string;
    bio?: string;
    company?: string;
  }
  
  export interface UserPreferences {
    theme: 'Light' | 'Dark' | 'System';
    accentColor: string;
    density: 'Comfortable' | 'Compact';
    language: string;
    timezone: string;
    startPage: string;
    dateFormat: string;
    menuConfig?: MenuItemConfig[];
  }
  
  // Extending UserProfile for the Context User
  export interface User extends UserProfile {
    notifications: {
      email: boolean;
      push: boolean;
      marketing: boolean;
    };
    preferences: UserPreferences;
  }
  
  export interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string; // string or JobType
    description: string;
    status: string; // string or JobStatus
    postedDate: string;
    applicantsCount: number;
    recruiterEmail?: string;
    recruiterPhone?: string;
    enableGoogleMeet?: boolean;
    meetingLink?: string;
    requirements?: string[]; // Legacy support
    salaryRange?: string; // Legacy support
    company?: string;
  }
  
  export interface Note {
    id: string;
    text: string;
    date: string;
  }
  
  export interface ChatMessage {
    id: string;
    sender: 'recruiter' | 'candidate' | 'client' | 'system';
    channel?: 'internal' | 'candidate'; // internal = client/recruiter, candidate = recruiter/candidate
    text: string;
    timestamp: string;
    file?: {
      name: string;
      mimeType: string;
      data: string; // base64 encoded
    };
  }
  
  export interface Candidate {
    id: string;
    jobId: string;
    name: string;
    email: string;
    phone?: string;
    company?: string;
    resumeSummary?: string; // Legacy mapping
    skills: string[];
    status: string; // CandidateStatus
    stage?: string; // Legacy mapping
    aiMatchScore?: number; // Legacy mapping
    aiAnalysis?: string; // Legacy mapping
    appliedDate: string;
    notes?: Note[];
    chatHistory?: ChatMessage[];
    resumeText?: string; // Legacy
    experienceLevel?: 'Junior' | 'Mid' | 'Senior' | 'Lead' | 'Executive';
  }
  
  export interface MenuItemConfig {
    id: string;
    visible: boolean;
    order: number;
  }
  
  export interface ResumeAnalysis {
    candidateInfo?: any;
    skillsMatrix?: any;
    metrics?: any;
    alignment?: any;
    strengths?: any;
    critique?: any;
    outreach?: any;
    fullRewrittenResume?: any;
    // Legacy fields for backward compat
    candidateName?: string;
    email?: string;
    matchScore?: number;
    summary?: string;
    missingKeywords?: string[];
    formattingIssues?: string[];
    improvementSuggestions?: string[];
  }
  
  export interface Task {
    id: string;
    title: string;
    dueDate: string;
    priority: 'Low' | 'Medium' | 'High';
    category: string;
    completed: boolean;
  }