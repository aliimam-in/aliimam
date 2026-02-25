/**
 * Auto-generated logo component: Corner Left Down Double Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerLeftDownDoubleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerLeftDownDoubleOutlineLogo = React.forwardRef<SVGSVGElement, CornerLeftDownDoubleOutlineLogoProps>(
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
      <path d="M18 4h-6a3 3 0 0 0 -3 3v7" />
  <path d="M13 10l-4 4l-4 -4m8 5l-4 4l-4 -4" />
    </svg>
  )
);

CornerLeftDownDoubleOutlineLogo.displayName = "CornerLeftDownDoubleOutlineLogo";

export const CornerLeftDownDoubleOutlineLogoMetadata = {
  id: "corner-left-down-double-outline",
  baseId: "corner-left-down-double-outline",
  variant: "default",
  name: "Corner Left Down Double Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerLeftDownDoubleOutlineLogo;
