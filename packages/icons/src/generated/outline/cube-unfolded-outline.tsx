/**
 * Auto-generated logo component: Cube Unfolded Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CubeUnfoldedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CubeUnfoldedOutlineLogo = React.forwardRef<SVGSVGElement, CubeUnfoldedOutlineLogoProps>(
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
      <path d="M2 15h10v5h5v-5h5v-5h-10v-5h-5v5h-5l0 5" />
  <path d="M7 15v-5h5v5h5v-5" />
    </svg>
  )
);

CubeUnfoldedOutlineLogo.displayName = "CubeUnfoldedOutlineLogo";

export const CubeUnfoldedOutlineLogoMetadata = {
  id: "cube-unfolded-outline",
  baseId: "cube-unfolded-outline",
  variant: "default",
  name: "Cube Unfolded Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CubeUnfoldedOutlineLogo;
