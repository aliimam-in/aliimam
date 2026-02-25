/**
 * Auto-generated logo component: Clock Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockOffOutlineLogo = React.forwardRef<SVGSVGElement, ClockOffOutlineLogoProps>(
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
      <path d="M5.633 5.64a9 9 0 1 0 12.735 12.72m1.674 -2.32a9 9 0 0 0 -12.082 -12.082" />
  <path d="M12 7v1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ClockOffOutlineLogo.displayName = "ClockOffOutlineLogo";

export const ClockOffOutlineLogoMetadata = {
  id: "clock-off-outline",
  baseId: "clock-off-outline",
  variant: "default",
  name: "Clock Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockOffOutlineLogo;
