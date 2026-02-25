/**
 * Auto-generated logo component: Man Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ManOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ManOutlineLogo = React.forwardRef<SVGSVGElement, ManOutlineLogoProps>(
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
      <path d="M10 16v5" />
  <path d="M14 16v5" />
  <path d="M9 9h6l-1 7h-4l-1 -7" />
  <path d="M5 11c1.333 -1.333 2.667 -2 4 -2" />
  <path d="M19 11c-1.333 -1.333 -2.667 -2 -4 -2" />
  <path d="M10 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

ManOutlineLogo.displayName = "ManOutlineLogo";

export const ManOutlineLogoMetadata = {
  id: "man-outline",
  baseId: "man-outline",
  variant: "default",
  name: "Man Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ManOutlineLogo;
