/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Battery1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Battery1Filled = React.forwardRef<SVGSVGElement, Battery1FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M17 6a3 3 0 0 1 2.995 2.824l.005 .176v.086l.052 .019a1.5 1.5 0 0 1 .941 1.25l.007 .145v3a1.5 1.5 0 0 1 -.948 1.395l-.052 .018v.087a3 3 0 0 1 -2.824 2.995l-.176 .005h-11a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6a3 3 0 0 1 2.824 -2.995l.176 -.005h11zm-10 3a1 1 0 0 0 -1 1v4l.007 .117a1 1 0 0 0 1.993 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
    </svg>
  )
);
Battery1Filled.displayName = "Battery1Filled";
export const Battery1FilledMetadata = { 
  id: "battery-1_filled", 
  baseId: "battery-1", 
  variant: "filled", 
  name: "Battery 1", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Battery1Filled;
