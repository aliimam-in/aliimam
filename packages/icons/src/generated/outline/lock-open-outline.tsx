/**
 * Auto-generated logo component: Lock Open Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LockOpenOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LockOpenOutlineLogo = React.forwardRef<SVGSVGElement, LockOpenOutlineLogoProps>(
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
      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -6" />
  <path d="M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M8 11v-5a4 4 0 0 1 8 0" />
    </svg>
  )
);

LockOpenOutlineLogo.displayName = "LockOpenOutlineLogo";

export const LockOpenOutlineLogoMetadata = {
  id: "lock-open-outline",
  baseId: "lock-open-outline",
  variant: "default",
  name: "Lock Open Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LockOpenOutlineLogo;
