/**
 * Auto-generated logo component: Lock Keyhole Open (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LockKeyholeOpenLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LockKeyholeOpenLogo = React.forwardRef<SVGSVGElement, LockKeyholeOpenLogoProps>(
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
  <rect width="18" height="12" x="3" y="10" rx="2" />
  <path d="M7 10V7a5 5 0 0 1 9.33-2.5" />
    </svg>
  )
);

LockKeyholeOpenLogo.displayName = "LockKeyholeOpenLogo";

export const LockKeyholeOpenLogoMetadata = {
  id: "lock-keyhole-open",
  baseId: "lock-keyhole-open",
  variant: "default",
  name: "Lock Keyhole Open",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LockKeyholeOpenLogo;
