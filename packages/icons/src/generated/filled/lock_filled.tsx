/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LockFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LockFilled = React.forwardRef<SVGSVGElement, LockFilledProps>(
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
      <path d="M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3" />
    </svg>
  )
);
LockFilled.displayName = "LockFilled";
export const LockFilledMetadata = { 
  id: "lock_filled", 
  baseId: "lock", 
  variant: "filled", 
  name: "Lock", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LockFilled;
