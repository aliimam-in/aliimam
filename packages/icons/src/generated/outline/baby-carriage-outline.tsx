/**
 * Auto-generated logo component: Baby Carriage Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BabyCarriageOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BabyCarriageOutlineLogo = React.forwardRef<SVGSVGElement, BabyCarriageOutlineLogoProps>(
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
      <path d="M6 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M16 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M2 5h2.5l1.632 4.897a6 6 0 0 0 5.693 4.103h2.675a5.5 5.5 0 0 0 0 -11h-.5v6" />
  <path d="M6 9h14" />
  <path d="M9 17l1 -3" />
  <path d="M16 14l1 3" />
    </svg>
  )
);

BabyCarriageOutlineLogo.displayName = "BabyCarriageOutlineLogo";

export const BabyCarriageOutlineLogoMetadata = {
  id: "baby-carriage-outline",
  baseId: "baby-carriage-outline",
  variant: "default",
  name: "Baby Carriage Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BabyCarriageOutlineLogo;
