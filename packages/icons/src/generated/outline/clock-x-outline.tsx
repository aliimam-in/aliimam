/**
 * Auto-generated logo component: Clock X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockXOutlineLogo = React.forwardRef<SVGSVGElement, ClockXOutlineLogoProps>(
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
      <path d="M20.926 13.15a9 9 0 1 0 -7.835 7.784" />
  <path d="M12 7v5l2 2" />
  <path d="M22 22l-5 -5" />
  <path d="M17 22l5 -5" />
    </svg>
  )
);

ClockXOutlineLogo.displayName = "ClockXOutlineLogo";

export const ClockXOutlineLogoMetadata = {
  id: "clock-x-outline",
  baseId: "clock-x-outline",
  variant: "default",
  name: "Clock X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockXOutlineLogo;
