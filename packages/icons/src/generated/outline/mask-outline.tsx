/**
 * Auto-generated logo component: Mask Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MaskOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MaskOutlineLogo = React.forwardRef<SVGSVGElement, MaskOutlineLogoProps>(
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
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
    </svg>
  )
);

MaskOutlineLogo.displayName = "MaskOutlineLogo";

export const MaskOutlineLogoMetadata = {
  id: "mask-outline",
  baseId: "mask-outline",
  variant: "default",
  name: "Mask Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MaskOutlineLogo;
