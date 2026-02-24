/**
 * Auto-generated logo component: Move Vertical (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoveVerticalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoveVerticalLogo = React.forwardRef<SVGSVGElement, MoveVerticalLogoProps>(
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
      <path d="M12 2v20" />
  <path d="m8 18 4 4 4-4" />
  <path d="m8 6 4-4 4 4" />
    </svg>
  )
);

MoveVerticalLogo.displayName = "MoveVerticalLogo";

export const MoveVerticalLogoMetadata = {
  id: "move-vertical",
  baseId: "move-vertical",
  variant: "default",
  name: "Move Vertical",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoveVerticalLogo;
