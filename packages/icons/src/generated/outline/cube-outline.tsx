/**
 * Auto-generated logo component: Cube Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CubeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CubeOutlineLogo = React.forwardRef<SVGSVGElement, CubeOutlineLogoProps>(
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
      <path d="M21 16.008v-8.018a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.008c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0l7 -4.008c.619 -.355 1 -1.01 1 -1.718" />
  <path d="M12 22v-10" />
  <path d="M12 12l8.73 -5.04" />
  <path d="M3.27 6.96l8.73 5.04" />
    </svg>
  )
);

CubeOutlineLogo.displayName = "CubeOutlineLogo";

export const CubeOutlineLogoMetadata = {
  id: "cube-outline",
  baseId: "cube-outline",
  variant: "default",
  name: "Cube Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CubeOutlineLogo;
