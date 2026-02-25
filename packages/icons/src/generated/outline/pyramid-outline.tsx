/**
 * Auto-generated logo component: Pyramid Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PyramidOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PyramidOutlineLogo = React.forwardRef<SVGSVGElement, PyramidOutlineLogoProps>(
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
      <path d="M11.105 21.788a1.994 1.994 0 0 0 1.789 0l8.092 -4.054c.538 -.27 .718 -.951 .385 -1.452l-8.54 -13.836a.999 .999 0 0 0 -1.664 0l-8.54 13.836a1.005 1.005 0 0 0 .386 1.452l8.092 4.054" />
  <path d="M12 2v20" />
    </svg>
  )
);

PyramidOutlineLogo.displayName = "PyramidOutlineLogo";

export const PyramidOutlineLogoMetadata = {
  id: "pyramid-outline",
  baseId: "pyramid-outline",
  variant: "default",
  name: "Pyramid Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PyramidOutlineLogo;
