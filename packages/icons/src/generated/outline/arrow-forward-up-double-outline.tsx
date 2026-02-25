/**
 * Auto-generated logo component: Arrow Forward Up Double Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowForwardUpDoubleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowForwardUpDoubleOutlineLogo = React.forwardRef<SVGSVGElement, ArrowForwardUpDoubleOutlineLogoProps>(
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
      <path d="M11 14l4 -4l-4 -4" />
  <path d="M16 14l4 -4l-4 -4" />
  <path d="M15 10h-7a4 4 0 1 0 0 8h1" />
    </svg>
  )
);

ArrowForwardUpDoubleOutlineLogo.displayName = "ArrowForwardUpDoubleOutlineLogo";

export const ArrowForwardUpDoubleOutlineLogoMetadata = {
  id: "arrow-forward-up-double-outline",
  baseId: "arrow-forward-up-double-outline",
  variant: "default",
  name: "Arrow Forward Up Double Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowForwardUpDoubleOutlineLogo;
