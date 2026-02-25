/**
 * Auto-generated logo component: Details Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DetailsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DetailsOffOutlineLogo = React.forwardRef<SVGSVGElement, DetailsOffOutlineLogoProps>(
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
      <path d="M5 19h14" />
  <path d="M20.986 16.984a2 2 0 0 0 -.146 -.734l-7.1 -12.25a2 2 0 0 0 -3.5 0l-.821 1.417m-1.469 2.534l-4.81 8.299a2 2 0 0 0 1.75 2.75" />
  <path d="M12 3v5m0 4v7" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DetailsOffOutlineLogo.displayName = "DetailsOffOutlineLogo";

export const DetailsOffOutlineLogoMetadata = {
  id: "details-off-outline",
  baseId: "details-off-outline",
  variant: "default",
  name: "Details Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DetailsOffOutlineLogo;
