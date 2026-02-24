/**
 * Auto-generated logo component: Move Left (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoveLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoveLeftLogo = React.forwardRef<SVGSVGElement, MoveLeftLogoProps>(
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
      <path d="M6 8L2 12L6 16" />
  <path d="M2 12H22" />
    </svg>
  )
);

MoveLeftLogo.displayName = "MoveLeftLogo";

export const MoveLeftLogoMetadata = {
  id: "move-left",
  baseId: "move-left",
  variant: "default",
  name: "Move Left",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoveLeftLogo;
