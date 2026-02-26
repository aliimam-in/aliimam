/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BetweenHorizontalStartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BetweenHorizontalStart = React.forwardRef<SVGSVGElement, BetweenHorizontalStartProps>(
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
      <rect width="13" height="7" x="8" y="3" rx="1" />
  <path d="m2 9 3 3-3 3" />
  <rect width="13" height="7" x="8" y="14" rx="1" />
    </svg>
  )
);
BetweenHorizontalStart.displayName = "BetweenHorizontalStart";
export const BetweenHorizontalStartMetadata = { 
  id: "between-horizontal-start", 
  baseId: "between-horizontal-start", 
  variant: "default", 
  name: "Between Horizontal Start", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BetweenHorizontalStart;
