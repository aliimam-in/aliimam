/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CheckLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CheckLine = React.forwardRef<SVGSVGElement, CheckLineProps>(
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
      <path d="M20 4L9 15" />
  <path d="M21 19L3 19" />
  <path d="M9 15L4 10" />
    </svg>
  )
);
CheckLine.displayName = "CheckLine";
export const CheckLineMetadata = { 
  id: "check-line", 
  baseId: "check-line", 
  variant: "default", 
  name: "Check Line", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CheckLine;
