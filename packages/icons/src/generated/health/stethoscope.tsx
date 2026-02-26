/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface StethoscopeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Stethoscope = React.forwardRef<SVGSVGElement, StethoscopeProps>(
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
      <path d="M11 2v2" />
  <path d="M5 2v2" />
  <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
  <path d="M8 15a6 6 0 0 0 12 0v-3" />
  <circle cx="20" cy="10" r="2" />
    </svg>
  )
);
Stethoscope.displayName = "Stethoscope";
export const StethoscopeMetadata = { 
  id: "stethoscope", 
  baseId: "stethoscope", 
  variant: "default", 
  name: "Stethoscope", 
  category: "health", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Stethoscope;
