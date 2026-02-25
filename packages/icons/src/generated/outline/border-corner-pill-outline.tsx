/**
 * Auto-generated logo component: Border Corner Pill Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BorderCornerPillOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BorderCornerPillOutlineLogo = React.forwardRef<SVGSVGElement, BorderCornerPillOutlineLogoProps>(
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
      <path d="M4 20v-5c0 -6.075 4.925 -11 11 -11h5" />
    </svg>
  )
);

BorderCornerPillOutlineLogo.displayName = "BorderCornerPillOutlineLogo";

export const BorderCornerPillOutlineLogoMetadata = {
  id: "border-corner-pill-outline",
  baseId: "border-corner-pill-outline",
  variant: "default",
  name: "Border Corner Pill Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BorderCornerPillOutlineLogo;
