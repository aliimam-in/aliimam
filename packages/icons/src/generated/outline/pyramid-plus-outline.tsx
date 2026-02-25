/**
 * Auto-generated logo component: Pyramid Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PyramidPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PyramidPlusOutlineLogo = React.forwardRef<SVGSVGElement, PyramidPlusOutlineLogoProps>(
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
      <path d="M18.719 11.985l-5.889 -9.539a.999 .999 0 0 0 -1.664 0l-8.54 13.836a1.005 1.005 0 0 0 .386 1.452l8.092 4.054a1.994 1.994 0 0 0 1.789 0l.149 -.074" />
  <path d="M12 2v20" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

PyramidPlusOutlineLogo.displayName = "PyramidPlusOutlineLogo";

export const PyramidPlusOutlineLogoMetadata = {
  id: "pyramid-plus-outline",
  baseId: "pyramid-plus-outline",
  variant: "default",
  name: "Pyramid Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PyramidPlusOutlineLogo;
