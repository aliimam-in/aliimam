/**
 * Auto-generated logo component: Viewfinder Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ViewfinderOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ViewfinderOffOutlineLogo = React.forwardRef<SVGSVGElement, ViewfinderOffOutlineLogoProps>(
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
      <path d="M5.65 5.623a9 9 0 1 0 12.71 12.745m1.684 -2.328a9 9 0 0 0 -12.094 -12.08" />
  <path d="M12 3v4" />
  <path d="M12 21v-3" />
  <path d="M3 12h4" />
  <path d="M21 12h-3" />
  <path d="M12 12v.01" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ViewfinderOffOutlineLogo.displayName = "ViewfinderOffOutlineLogo";

export const ViewfinderOffOutlineLogoMetadata = {
  id: "viewfinder-off-outline",
  baseId: "viewfinder-off-outline",
  variant: "default",
  name: "Viewfinder Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ViewfinderOffOutlineLogo;
