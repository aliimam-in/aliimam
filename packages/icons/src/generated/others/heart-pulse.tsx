/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HeartPulseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HeartPulse = React.forwardRef<SVGSVGElement, HeartPulseProps>(
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
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
  <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  )
);
HeartPulse.displayName = "HeartPulse";
export const HeartPulseMetadata = { 
  id: "heart-pulse", 
  baseId: "heart-pulse", 
  variant: "default", 
  name: "Heart Pulse", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HeartPulse;
