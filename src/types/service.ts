export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  /** Lucide icon name */
  icon: string;
  image: string;
  features: string[];
  process: ProcessStep[];
  stats?: ServiceStat[];
  cta: string;
}
