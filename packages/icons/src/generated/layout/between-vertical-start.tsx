/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BetweenVerticalStartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BetweenVerticalStart = React.forwardRef<SVGSVGElement, BetweenVerticalStartProps>(
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
      <rect width="7" height="13" x="3" y="8" rx="1" />
  <path d="m15 2-3 3-3-3" />
  <rect width="7" height="13" x="14" y="8" rx="1" />
    </svg>
  )
);
BetweenVerticalStart.displayName = "BetweenVerticalStart";
export const BetweenVerticalStartMetadata = { 
  id: "between-vertical-start", 
  baseId: "between-vertical-start", 
  variant: "default", 
  name: "Between Vertical Start", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BetweenVerticalStart;
