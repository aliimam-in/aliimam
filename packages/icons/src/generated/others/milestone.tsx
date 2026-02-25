/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MilestoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Milestone = React.forwardRef<SVGSVGElement, MilestoneProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 13v8" />
  <path d="M12 3v3" />
  <path d="M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z" />
    </svg>
  )
);
Milestone.displayName = "Milestone";
export const MilestoneMetadata = { 
  id: "milestone", 
  baseId: "milestone", 
  variant: "default", 
  name: "Milestone", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Milestone;
