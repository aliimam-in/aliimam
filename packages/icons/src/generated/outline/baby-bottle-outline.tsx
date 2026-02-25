/**
 * Auto-generated logo component: Baby Bottle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BabyBottleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BabyBottleOutlineLogo = React.forwardRef<SVGSVGElement, BabyBottleOutlineLogoProps>(
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
      <path d="M5 10h14" />
  <path d="M12 2v2" />
  <path d="M12 4a5 5 0 0 1 5 5v11a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-11a5 5 0 0 1 5 -5" />
    </svg>
  )
);

BabyBottleOutlineLogo.displayName = "BabyBottleOutlineLogo";

export const BabyBottleOutlineLogoMetadata = {
  id: "baby-bottle-outline",
  baseId: "baby-bottle-outline",
  variant: "default",
  name: "Baby Bottle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BabyBottleOutlineLogo;
