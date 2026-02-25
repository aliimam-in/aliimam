/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PercentProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Percent = React.forwardRef<SVGSVGElement, PercentProps>(
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
      <line x1="19" x2="5" y1="5" y2="19" />
  <circle cx="6.5" cy="6.5" r="2.5" />
  <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  )
);
Percent.displayName = "Percent";
export const PercentMetadata = { 
  id: "percent", 
  baseId: "percent", 
  variant: "default", 
  name: "Percent", 
  category: "math", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Percent;
