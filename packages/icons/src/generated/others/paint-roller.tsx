/**
 * Auto-generated logo component: Paint Roller (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PaintRollerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PaintRollerLogo = React.forwardRef<SVGSVGElement, PaintRollerLogoProps>(
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
      <rect width="16" height="6" x="2" y="2" rx="2" />
  <path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
  <rect width="4" height="6" x="8" y="16" rx="1" />
    </svg>
  )
);

PaintRollerLogo.displayName = "PaintRollerLogo";

export const PaintRollerLogoMetadata = {
  id: "paint-roller",
  baseId: "paint-roller",
  variant: "default",
  name: "Paint Roller",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PaintRollerLogo;
