/**
 * Auto-generated logo component: Lock Keyhole (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LockKeyholeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LockKeyholeLogo = React.forwardRef<SVGSVGElement, LockKeyholeLogoProps>(
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
      <circle cx="12" cy="16" r="1" />
  <rect x="3" y="10" width="18" height="12" rx="2" />
  <path d="M7 10V7a5 5 0 0 1 10 0v3" />
    </svg>
  )
);

LockKeyholeLogo.displayName = "LockKeyholeLogo";

export const LockKeyholeLogoMetadata = {
  id: "lock-keyhole",
  baseId: "lock-keyhole",
  variant: "default",
  name: "Lock Keyhole",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LockKeyholeLogo;
