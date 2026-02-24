/**
 * Auto-generated logo component: Projector (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ProjectorLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ProjectorLogo = React.forwardRef<SVGSVGElement, ProjectorLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M5 7 3 5" />
  <path d="M9 6V3" />
  <path d="m13 7 2-2" />
  <circle cx="9" cy="13" r="3" />
  <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
  <path d="M16 16h2" />
    </svg>
  )
);

ProjectorLogo.displayName = "ProjectorLogo";

export const ProjectorLogoMetadata = {
  id: "projector",
  baseId: "projector",
  variant: "default",
  name: "Projector",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ProjectorLogo;
