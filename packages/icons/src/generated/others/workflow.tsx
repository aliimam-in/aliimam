/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WorkflowProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Workflow = React.forwardRef<SVGSVGElement, WorkflowProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="8" height="8" x="3" y="3" rx="2" />
  <path d="M7 11v4a2 2 0 0 0 2 2h4" />
  <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  )
);
Workflow.displayName = "Workflow";
export const WorkflowMetadata = { id: "workflow", baseId: "workflow", variant: "default", name: "Workflow", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Workflow;
