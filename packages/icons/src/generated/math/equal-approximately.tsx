/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EqualApproximatelyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EqualApproximately = React.forwardRef<SVGSVGElement, EqualApproximatelyProps>(
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
      <path d="M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
  <path d="M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
    </svg>
  )
);
EqualApproximately.displayName = "EqualApproximately";
export const EqualApproximatelyMetadata = { 
  id: "equal-approximately", 
  baseId: "equal-approximately", 
  variant: "default", 
  name: "Equal Approximately", 
  category: "math", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default EqualApproximately;
