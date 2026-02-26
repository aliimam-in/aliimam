/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ear = React.forwardRef<SVGSVGElement, EarProps>(
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
      <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
  <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />
    </svg>
  )
);
Ear.displayName = "Ear";
export const EarMetadata = { 
  id: "ear", 
  baseId: "ear", 
  variant: "default", 
  name: "Ear", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Ear;
