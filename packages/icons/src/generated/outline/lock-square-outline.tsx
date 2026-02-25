/**
 * Auto-generated logo component: Lock Square Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LockSquareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LockSquareOutlineLogo = React.forwardRef<SVGSVGElement, LockSquareOutlineLogoProps>(
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
      <path d="M8 12a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -3" />
  <path d="M10 11v-2a2 2 0 1 1 4 0v2" />
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
    </svg>
  )
);

LockSquareOutlineLogo.displayName = "LockSquareOutlineLogo";

export const LockSquareOutlineLogoMetadata = {
  id: "lock-square-outline",
  baseId: "lock-square-outline",
  variant: "default",
  name: "Lock Square Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LockSquareOutlineLogo;
