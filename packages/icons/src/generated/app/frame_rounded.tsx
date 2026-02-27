/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FrameRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FrameRounded = React.forwardRef<SVGSVGElement, FrameRoundedProps>(
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
      <path d="M9.25 9.05C11.03 9.7 12.97 9.7 14.75 9.05"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
FrameRounded.displayName = "FrameRounded";
export const FrameRoundedMetadata = { 
  id: "frame_rounded", 
  baseId: "frame", 
  variant: "rounded", 
  name: "Frame", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FrameRounded;
