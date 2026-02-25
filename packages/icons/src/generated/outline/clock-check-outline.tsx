/**
 * Auto-generated logo component: Clock Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockCheckOutlineLogo = React.forwardRef<SVGSVGElement, ClockCheckOutlineLogoProps>(
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
      <path d="M20.942 13.021a9 9 0 1 0 -9.407 7.967" />
  <path d="M12 7v5l3 3" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

ClockCheckOutlineLogo.displayName = "ClockCheckOutlineLogo";

export const ClockCheckOutlineLogoMetadata = {
  id: "clock-check-outline",
  baseId: "clock-check-outline",
  variant: "default",
  name: "Clock Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockCheckOutlineLogo;
