/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AwardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Award = React.forwardRef<SVGSVGElement, AwardProps>(
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
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
  <circle cx="12" cy="8" r="6" />
    </svg>
  )
);
Award.displayName = "Award";
export const AwardMetadata = { 
  id: "award", 
  baseId: "award", 
  variant: "default", 
  name: "Award", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Award;
