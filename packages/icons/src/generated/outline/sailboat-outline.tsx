/**
 * Auto-generated logo component: Sailboat Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SailboatOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SailboatOutlineLogo = React.forwardRef<SVGSVGElement, SailboatOutlineLogoProps>(
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
      <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
  <path d="M4 18l-1 -3h18l-1 3" />
  <path d="M11 12h7l-7 -9v9" />
  <path d="M8 7l-2 5" />
    </svg>
  )
);

SailboatOutlineLogo.displayName = "SailboatOutlineLogo";

export const SailboatOutlineLogoMetadata = {
  id: "sailboat-outline",
  baseId: "sailboat-outline",
  variant: "default",
  name: "Sailboat Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SailboatOutlineLogo;
