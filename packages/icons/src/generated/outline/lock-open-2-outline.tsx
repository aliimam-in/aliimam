/**
 * Auto-generated logo component: Lock Open 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LockOpen2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LockOpen2OutlineLogo = React.forwardRef<SVGSVGElement, LockOpen2OutlineLogoProps>(
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
      <path d="M3 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -6" />
  <path d="M9 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M13 11v-4a4 4 0 1 1 8 0v4" />
    </svg>
  )
);

LockOpen2OutlineLogo.displayName = "LockOpen2OutlineLogo";

export const LockOpen2OutlineLogoMetadata = {
  id: "lock-open-2-outline",
  baseId: "lock-open-2-outline",
  variant: "default",
  name: "Lock Open 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LockOpen2OutlineLogo;
