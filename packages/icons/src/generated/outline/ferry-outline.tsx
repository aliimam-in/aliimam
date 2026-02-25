/**
 * Auto-generated logo component: Ferry Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FerryOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FerryOutlineLogo = React.forwardRef<SVGSVGElement, FerryOutlineLogoProps>(
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
      <path d="M2 18h15.293c1.02 0 1.972 -.503 2.536 -1.34l2.171 -3.66h-18.479l-1.521 5" />
  <path d="M14 8l-1 -2" />
  <path d="M6.107 12.675l1.384 -4.675h8l2.675 4.598" />
    </svg>
  )
);

FerryOutlineLogo.displayName = "FerryOutlineLogo";

export const FerryOutlineLogoMetadata = {
  id: "ferry-outline",
  baseId: "ferry-outline",
  variant: "default",
  name: "Ferry Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FerryOutlineLogo;
