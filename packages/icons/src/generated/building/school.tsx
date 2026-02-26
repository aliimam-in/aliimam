/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SchoolProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const School = React.forwardRef<SVGSVGElement, SchoolProps>(
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
      <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
  <path d="M18 5v16" />
  <path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" />
  <path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" />
  <path d="M6 5v16" />
  <circle cx="12" cy="9" r="2" />
    </svg>
  )
);
School.displayName = "School";
export const SchoolMetadata = { 
  id: "school", 
  baseId: "school", 
  variant: "default", 
  name: "School", 
  category: "building", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default School;
