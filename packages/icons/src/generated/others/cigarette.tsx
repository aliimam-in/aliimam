/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CigaretteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cigarette = React.forwardRef<SVGSVGElement, CigaretteProps>(
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
      <path d="M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" />
  <path d="M18 8c0-2.5-2-2.5-2-5" />
  <path d="M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
  <path d="M22 8c0-2.5-2-2.5-2-5" />
  <path d="M7 12v4" />
    </svg>
  )
);
Cigarette.displayName = "Cigarette";
export const CigaretteMetadata = { 
  id: "cigarette", 
  baseId: "cigarette", 
  variant: "default", 
  name: "Cigarette", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Cigarette;
