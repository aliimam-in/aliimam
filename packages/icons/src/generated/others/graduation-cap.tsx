/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GraduationCapProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GraduationCap = React.forwardRef<SVGSVGElement, GraduationCapProps>(
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
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
  <path d="M22 10v6" />
  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  )
);
GraduationCap.displayName = "GraduationCap";
export const GraduationCapMetadata = { 
  id: "graduation-cap", 
  baseId: "graduation-cap", 
  variant: "default", 
  name: "Graduation Cap", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GraduationCap;
