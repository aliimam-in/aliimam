/**
 * Auto-generated logo component: Move Right (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoveRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoveRightLogo = React.forwardRef<SVGSVGElement, MoveRightLogoProps>(
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
      <path d="M18 8L22 12L18 16" />
  <path d="M2 12H22" />
    </svg>
  )
);

MoveRightLogo.displayName = "MoveRightLogo";

export const MoveRightLogoMetadata = {
  id: "move-right",
  baseId: "move-right",
  variant: "default",
  name: "Move Right",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoveRightLogo;
