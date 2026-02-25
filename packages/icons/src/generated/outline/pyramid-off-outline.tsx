/**
 * Auto-generated logo component: Pyramid Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PyramidOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PyramidOffOutlineLogo = React.forwardRef<SVGSVGElement, PyramidOffOutlineLogoProps>(
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
      <path d="M21.384 17.373a1.004 1.004 0 0 0 -.013 -1.091l-8.54 -13.836a.999 .999 0 0 0 -1.664 0l-1.8 2.917m-1.531 2.48l-5.209 8.439a1.005 1.005 0 0 0 .386 1.452l8.092 4.054a1.994 1.994 0 0 0 1.789 0l5.903 -2.958" />
  <path d="M12 2v6m0 4v10" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PyramidOffOutlineLogo.displayName = "PyramidOffOutlineLogo";

export const PyramidOffOutlineLogoMetadata = {
  id: "pyramid-off-outline",
  baseId: "pyramid-off-outline",
  variant: "default",
  name: "Pyramid Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PyramidOffOutlineLogo;
