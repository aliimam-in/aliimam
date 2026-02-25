/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BugPlayProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BugPlay = React.forwardRef<SVGSVGElement, BugPlayProps>(
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
      <path d="M10 19.655A6 6 0 0 1 6 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 3.97" />
  <path d="M14 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" />
  <path d="M14.12 3.88 16 2" />
  <path d="M21 5a4 4 0 0 1-3.55 3.97" />
  <path d="M3 21a4 4 0 0 1 3.81-4" />
  <path d="M3 5a4 4 0 0 0 3.55 3.97" />
  <path d="M6 13H2" />
  <path d="m8 2 1.88 1.88" />
  <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />
    </svg>
  )
);
BugPlay.displayName = "BugPlay";
export const BugPlayMetadata = { 
  id: "bug-play", 
  baseId: "bug-play", 
  variant: "default", 
  name: "Bug Play", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BugPlay;
