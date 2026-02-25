/**
 * Auto-generated logo component: Clock Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockUpOutlineLogo = React.forwardRef<SVGSVGElement, ClockUpOutlineLogoProps>(
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
      <path d="M20.983 12.548a9 9 0 1 0 -8.45 8.436" />
  <path d="M19 22v-6" />
  <path d="M22 19l-3 -3l-3 3" />
  <path d="M12 7v5l2.5 2.5" />
    </svg>
  )
);

ClockUpOutlineLogo.displayName = "ClockUpOutlineLogo";

export const ClockUpOutlineLogoMetadata = {
  id: "clock-up-outline",
  baseId: "clock-up-outline",
  variant: "default",
  name: "Clock Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockUpOutlineLogo;
