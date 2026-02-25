/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BaselineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Baseline = React.forwardRef<SVGSVGElement, BaselineProps>(
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
      <path d="M4 20h16" />
  <path d="m6 16 6-12 6 12" />
  <path d="M8 12h8" />
    </svg>
  )
);
Baseline.displayName = "Baseline";
export const BaselineMetadata = { 
  id: "baseline", 
  baseId: "baseline", 
  variant: "default", 
  name: "Baseline", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Baseline;
