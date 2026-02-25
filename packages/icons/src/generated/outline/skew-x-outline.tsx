/**
 * Auto-generated logo component: Skew X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SkewXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SkewXOutlineLogo = React.forwardRef<SVGSVGElement, SkewXOutlineLogoProps>(
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
      <path d="M4 5.205v13.59a1 1 0 0 0 1.184 .983l14 -2.625a1 1 0 0 0 .816 -.983v-8.34a1 1 0 0 0 -.816 -.983l-14 -2.625a1 1 0 0 0 -1.184 .983" />
    </svg>
  )
);

SkewXOutlineLogo.displayName = "SkewXOutlineLogo";

export const SkewXOutlineLogoMetadata = {
  id: "skew-x-outline",
  baseId: "skew-x-outline",
  variant: "default",
  name: "Skew X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SkewXOutlineLogo;
