/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GlobeLockProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GlobeLock = React.forwardRef<SVGSVGElement, GlobeLockProps>(
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
      <path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" />
  <path d="M2 12h8.5" />
  <path d="M20 6V4a2 2 0 1 0-4 0v2" />
  <rect width="8" height="5" x="14" y="6" rx="1" />
    </svg>
  )
);
GlobeLock.displayName = "GlobeLock";
export const GlobeLockMetadata = { 
  id: "globe-lock", 
  baseId: "globe-lock", 
  variant: "default", 
  name: "Globe Lock", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GlobeLock;
