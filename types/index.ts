// @/types/index.ts
export type JobStatus = "DRAFT" | "OPEN" | "PAUSED" | "CLOSED" | "FILLED";
export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';

export interface Job {
  id: string;
  title: string;
  company: string;
  department: string;
  location: string;
  type: JobType;
  status: JobStatus;
  salary: string;
  description: string;
  requiredSkills: string[];
  createdAt: string;
}

// JobInput is for creating/updating, so it doesn't need ID or createdAt
export interface JobInput {
  title: string;
  company: string;
  department: string;
  location: string;
  type: JobType;
  status: JobStatus;
  salary: string;
  description: string;
  requiredSkills: string[];
}

export type CandidateStatus = "Applied" | "Screening" | "Interview" | "Offer" | "Hired" | "Rejected";

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  jobId: string;
  jobTitle: string;
  status: CandidateStatus;
  experience: string;
  rating: number;
  notes: string;
  appliedDate: string;
}

export interface Job {
  id: string;
  title: string;
}

// shared/types.ts
export interface Interview {
  id?: string;
  candidateId: string;
  candidateName: string;
  jobId: string;
  date: string;  // YYYY-MM-DD
  time: string;  // HH:mm
  type: "Technical" | "HR" | "Final";
  status: "Scheduled" | "Completed" | "Cancelled";
  meetingLink?: string;
}


export type Role = "RECRUITER" | "JOB_SEEKER";


export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: Role;
}
export interface RecruiterProfile {
  id: string;
  userId: string;
  company?: string | null;
  jobTitle?: string | null;
  phone?: string | null;
  website?: string | null;
  bio?: string | null;
}
export interface JobSeekerProfile {
  id: string;
  userId: string;
  headline?: string | null;
  phone?: string | null;
  location?: string | null;
  resumeUrl?: string | null;
  linkedinUrl?: string | null;
  portfolioUrl?: string | null;
  skills: string;
  experience: number;
  education?: string | null;
  summary?: string | null;
  availability: string;
  salaryMin?: number | null;
  salaryMax?: number | null;
}
export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  avatar?: string | null;
  createdAt: string;
  updatedAt: string;
  recruiterProfile?: RecruiterProfile | null;
  jobSeekerProfile?: JobSeekerProfile | null;
}
export interface Department {
  id: string;
  name: string;
  description?: string | null;
  headCount: number;
  createdAt: string;
  updatedAt: string;
  _count?: { jobs: number };
}


export type ApplicationStatus =
  | "APPLIED"
  | "SCREENING"
  | "INTERVIEW"
  | "ASSESSMENT"
  | "OFFER"
  | "HIRED"
  | "REJECTED"
  | "WITHDRAWN";

  export type InterviewStatus =
  | "SCHEDULED"
  | "COMPLETED"
  | "CANCELLED"
  | "NO_SHOW";

  export type ExperienceLevel = "ENTRY" | "MID" | "SENIOR" | "LEAD" | "EXECUTIVE";
  export type InterviewType =
  | "PHONE_SCREEN"
  | "VIDEO_CALL"
  | "TECHNICAL"
  | "HR_INTERVIEW"
  | "FINAL_INTERVIEW"
  | "PANEL";









  // ─── Shared Data Types ────────────────────────────────────────────────────────

export interface Candidate {
  initials: string;
  name: string;
  role: string;
  score: number;
  color: string;
}

export interface PipelineStage {
  label: string;
  count: number;
  color: string;
  heightPercent: number;
}

export interface StatCard {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

export interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  accentClass: string;
  iconBgClass: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Metric {
  prefix: string;
  value: string;
  suffix: string;
  label: string;
  color: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  avatarColor: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
}

// ─── Component Prop Interfaces ────────────────────────────────────────────────

export interface HeroProps {
  onGetStarted: () => void;
}

export interface CTAProps {
  onGetStarted: () => void;
}

export interface HowItWorksProps {
  activeStep: number;
  onStepChange: (index: number) => void;
}