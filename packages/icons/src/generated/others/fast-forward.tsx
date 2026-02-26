/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FastForwardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FastForward = React.forwardRef<SVGSVGElement, FastForwardProps>(
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
      <path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" />
  <path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" />
    </svg>
  )
);
FastForward.displayName = "FastForward";
export const FastForwardMetadata = { 
  id: "fast-forward", 
  baseId: "fast-forward", 
  variant: "default", 
  name: "Fast Forward", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FastForward;
