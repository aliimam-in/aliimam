/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LockKeyholeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LockKeyhole = React.forwardRef<SVGSVGElement, LockKeyholeProps>(
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
      <circle cx="12" cy="16" r="1" />
  <rect x="3" y="10" width="18" height="12" rx="2" />
  <path d="M7 10V7a5 5 0 0 1 10 0v3" />
    </svg>
  )
);
LockKeyhole.displayName = "LockKeyhole";
export const LockKeyholeMetadata = { 
  id: "lock-keyhole", 
  baseId: "lock-keyhole", 
  variant: "default", 
  name: "Lock Keyhole", 
  category: "security", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LockKeyhole;
