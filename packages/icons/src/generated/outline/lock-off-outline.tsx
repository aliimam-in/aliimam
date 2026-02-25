/**
 * Auto-generated logo component: Lock Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LockOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LockOffOutlineLogo = React.forwardRef<SVGSVGElement, LockOffOutlineLogoProps>(
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
      <path d="M15 11h2a2 2 0 0 1 2 2v2m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h4" />
  <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M8 11v-3m.719 -3.289a4 4 0 0 1 7.281 2.289v4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

LockOffOutlineLogo.displayName = "LockOffOutlineLogo";

export const LockOffOutlineLogoMetadata = {
  id: "lock-off-outline",
  baseId: "lock-off-outline",
  variant: "default",
  name: "Lock Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LockOffOutlineLogo;
