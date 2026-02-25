/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LockKeyholeOpenProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LockKeyholeOpen = React.forwardRef<SVGSVGElement, LockKeyholeOpenProps>(
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
  <rect width="18" height="12" x="3" y="10" rx="2" />
  <path d="M7 10V7a5 5 0 0 1 9.33-2.5" />
    </svg>
  )
);
LockKeyholeOpen.displayName = "LockKeyholeOpen";
export const LockKeyholeOpenMetadata = { 
  id: "lock-keyhole-open", 
  baseId: "lock-keyhole-open", 
  variant: "default", 
  name: "Lock Keyhole Open", 
  category: "security", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LockKeyholeOpen;
