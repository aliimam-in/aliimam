/**
 * Auto-generated logo component: Workflow (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorkflowLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WorkflowLogo = React.forwardRef<SVGSVGElement, WorkflowLogoProps>(
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
      <rect width="8" height="8" x="3" y="3" rx="2" />
  <path d="M7 11v4a2 2 0 0 0 2 2h4" />
  <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  )
);

WorkflowLogo.displayName = "WorkflowLogo";

export const WorkflowLogoMetadata = {
  id: "workflow",
  baseId: "workflow",
  variant: "default",
  name: "Workflow",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WorkflowLogo;
