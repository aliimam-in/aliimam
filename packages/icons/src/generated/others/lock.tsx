/**
 * Auto-generated logo component: Lock (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LockLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LockLogo = React.forwardRef<SVGSVGElement, LockLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
);

LockLogo.displayName = "LockLogo";

export const LockLogoMetadata = {
  id: "lock",
  baseId: "lock",
  variant: "default",
  name: "Lock",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LockLogo;
