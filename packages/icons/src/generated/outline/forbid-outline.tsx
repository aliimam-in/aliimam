/**
 * Auto-generated logo component: Forbid Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ForbidOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ForbidOutlineLogo = React.forwardRef<SVGSVGElement, ForbidOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M9 9l6 6" />
    </svg>
  )
);

ForbidOutlineLogo.displayName = "ForbidOutlineLogo";

export const ForbidOutlineLogoMetadata = {
  id: "forbid-outline",
  baseId: "forbid-outline",
  variant: "default",
  name: "Forbid Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ForbidOutlineLogo;
