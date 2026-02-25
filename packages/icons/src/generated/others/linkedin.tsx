/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LinkedinProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Linkedin = React.forwardRef<SVGSVGElement, LinkedinProps>(
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
  <rect width="4" height="12" x="2" y="9" />
  <circle cx="4" cy="4" r="2" />
    </svg>
  )
);
Linkedin.displayName = "Linkedin";
export const LinkedinMetadata = { 
  id: "linkedin", 
  baseId: "linkedin", 
  variant: "default", 
  name: "Linkedin", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Linkedin;
