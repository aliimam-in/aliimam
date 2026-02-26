/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VoteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Vote = React.forwardRef<SVGSVGElement, VoteProps>(
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
      <path d="m9 12 2 2 4-4" />
  <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
  <path d="M22 19H2" />
    </svg>
  )
);
Vote.displayName = "Vote";
export const VoteMetadata = { 
  id: "vote", 
  baseId: "vote", 
  variant: "default", 
  name: "Vote", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Vote;
