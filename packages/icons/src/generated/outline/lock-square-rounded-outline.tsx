/**
 * Auto-generated logo component: Lock Square Rounded Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LockSquareRoundedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LockSquareRoundedOutlineLogo = React.forwardRef<SVGSVGElement, LockSquareRoundedOutlineLogoProps>(
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
      <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
  <path d="M8 12a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -3" />
  <path d="M10 11v-2a2 2 0 1 1 4 0v2" />
    </svg>
  )
);

LockSquareRoundedOutlineLogo.displayName = "LockSquareRoundedOutlineLogo";

export const LockSquareRoundedOutlineLogoMetadata = {
  id: "lock-square-rounded-outline",
  baseId: "lock-square-rounded-outline",
  variant: "default",
  name: "Lock Square Rounded Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LockSquareRoundedOutlineLogo;
