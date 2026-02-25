/**
 * Auto-generated logo component: Viewfinder Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ViewfinderOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ViewfinderOutlineLogo = React.forwardRef<SVGSVGElement, ViewfinderOutlineLogoProps>(
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
  <path d="M12 3l0 4" />
  <path d="M12 21l0 -3" />
  <path d="M3 12l4 0" />
  <path d="M21 12l-3 0" />
  <path d="M12 12l0 .01" />
    </svg>
  )
);

ViewfinderOutlineLogo.displayName = "ViewfinderOutlineLogo";

export const ViewfinderOutlineLogoMetadata = {
  id: "viewfinder-outline",
  baseId: "viewfinder-outline",
  variant: "default",
  name: "Viewfinder Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ViewfinderOutlineLogo;
