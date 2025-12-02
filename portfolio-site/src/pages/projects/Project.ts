export interface Project {
    projectName: string;
    projectDescription: string[];
    skillsUsed: string[];
    projectImageSrc?: string;
    projectLinks?: {linkText: string, linkDest: string}[];
    visibilityScore?: number;
}
