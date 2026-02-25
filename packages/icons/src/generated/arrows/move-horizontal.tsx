/**
 * Auto-generated logo component: Move Horizontal (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoveHorizontalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoveHorizontalLogo = React.forwardRef<SVGSVGElement, MoveHorizontalLogoProps>(
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
      <path d="m18 8 4 4-4 4" />
  <path d="M2 12h20" />
  <path d="m6 8-4 4 4 4" />
    </svg>
  )
);

MoveHorizontalLogo.displayName = "MoveHorizontalLogo";

export const MoveHorizontalLogoMetadata = {
  id: "move-horizontal",
  baseId: "move-horizontal",
  variant: "default",
  name: "Move Horizontal",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoveHorizontalLogo;
