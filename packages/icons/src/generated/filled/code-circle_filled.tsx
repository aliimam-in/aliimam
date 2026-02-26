/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CodeCircleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CodeCircleFilled = React.forwardRef<SVGSVGElement, CodeCircleFilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-6.293 5.953a1 1 0 0 0 -1.414 0l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414 0l.083 -.094a1 1 0 0 0 -.083 -1.32l-1.292 -1.293l1.292 -1.293a1 1 0 0 0 0 -1.414m4 0a1 1 0 0 0 -1.414 0l-.083 .094a1 1 0 0 0 .083 1.32l1.292 1.293l-1.292 1.293a1 1 0 0 0 1.414 1.414l2 -2a1 1 0 0 0 0 -1.414z" />
    </svg>
  )
);
CodeCircleFilled.displayName = "CodeCircleFilled";
export const CodeCircleFilledMetadata = { 
  id: "code-circle_filled", 
  baseId: "code-circle", 
  variant: "filled", 
  name: "Code Circle", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CodeCircleFilled;
