/**
 * Auto-generated logo component: Bread Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BreadOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BreadOutlineLogo = React.forwardRef<SVGSVGElement, BreadOutlineLogoProps>(
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
      <path d="M18 4a3 3 0 0 1 2 5.235v8.765a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-8.764a3 3 0 0 1 1.824 -5.231h12.176v-.005" />
    </svg>
  )
);

BreadOutlineLogo.displayName = "BreadOutlineLogo";

export const BreadOutlineLogoMetadata = {
  id: "bread-outline",
  baseId: "bread-outline",
  variant: "default",
  name: "Bread Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BreadOutlineLogo;
