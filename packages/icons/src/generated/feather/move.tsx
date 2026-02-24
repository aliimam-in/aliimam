/**
 * Auto-generated logo component: Move (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoveLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoveLogo = React.forwardRef<SVGSVGElement, MoveLogoProps>(
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
      <polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/>
    </svg>
  )
);

MoveLogo.displayName = "MoveLogo";

export const MoveLogoMetadata = {
  id: "move",
  baseId: "move",
  variant: "default",
  name: "Move",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoveLogo;
