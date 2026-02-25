/**
 * Auto-generated logo component: Corner Left Up Double Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerLeftUpDoubleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerLeftUpDoubleOutlineLogo = React.forwardRef<SVGSVGElement, CornerLeftUpDoubleOutlineLogoProps>(
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
      <path d="M18 19h-6a3 3 0 0 1 -3 -3v-7" />
  <path d="M13 13l-4 -4l-4 4m8 -5l-4 -4l-4 4" />
    </svg>
  )
);

CornerLeftUpDoubleOutlineLogo.displayName = "CornerLeftUpDoubleOutlineLogo";

export const CornerLeftUpDoubleOutlineLogoMetadata = {
  id: "corner-left-up-double-outline",
  baseId: "corner-left-up-double-outline",
  variant: "default",
  name: "Corner Left Up Double Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerLeftUpDoubleOutlineLogo;
