/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CodeCircle2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CodeCircle2Filled = React.forwardRef<SVGSVGElement, CodeCircle2FilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-3.658 5.22a1 1 0 0 0 -1.282 .598l-2 5.5a1 1 0 0 0 1.88 .684l2 -5.5a1 1 0 0 0 -.598 -1.282m-4.135 1.233a1 1 0 0 0 -1.414 0l-1.5 1.5a1 1 0 0 0 0 1.414l1.5 1.5a1 1 0 0 0 1.414 0l.083 -.094a1 1 0 0 0 -.083 -1.32l-.792 -.793l.792 -.793a1 1 0 0 0 0 -1.414m7 0a1 1 0 0 0 -1.414 0l-.083 .094a1 1 0 0 0 .083 1.32l.792 .793l-.792 .793a1 1 0 0 0 1.414 1.414l1.5 -1.5a1 1 0 0 0 0 -1.414z" />
    </svg>
  )
);
CodeCircle2Filled.displayName = "CodeCircle2Filled";
export const CodeCircle2FilledMetadata = { 
  id: "code-circle-2_filled", 
  baseId: "code-circle-2", 
  variant: "filled", 
  name: "Code Circle 2", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CodeCircle2Filled;
