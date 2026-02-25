/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GhostProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ghost = React.forwardRef<SVGSVGElement, GhostProps>(
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
      <path d="M9 10h.01" />
  <path d="M15 10h.01" />
  <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" />
    </svg>
  )
);
Ghost.displayName = "Ghost";
export const GhostMetadata = { 
  id: "ghost", 
  baseId: "ghost", 
  variant: "default", 
  name: "Ghost", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Ghost;
