/**
 * Auto-generated logo component: Bread Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BreadOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BreadOffOutlineLogo = React.forwardRef<SVGSVGElement, BreadOffOutlineLogoProps>(
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
      <path d="M8 4l10 .005v-.005a3 3 0 0 1 2 5.235v6.765m-.59 3.418c-.36 .36 -.86 .582 -1.41 .582h-12a2 2 0 0 1 -2 -2v-8.764a3 3 0 0 1 .418 -4.785" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BreadOffOutlineLogo.displayName = "BreadOffOutlineLogo";

export const BreadOffOutlineLogoMetadata = {
  id: "bread-off-outline",
  baseId: "bread-off-outline",
  variant: "default",
  name: "Bread Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BreadOffOutlineLogo;
