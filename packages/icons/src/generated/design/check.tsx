/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Check = React.forwardRef<SVGSVGElement, CheckProps>(
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
);
Check.displayName = "Check";
export const CheckMetadata = { 
  id: "check", 
  baseId: "check", 
  variant: "default", 
  name: "Check", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Check;
