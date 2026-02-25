/**
 * Auto-generated logo component: Clock Cancel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockCancelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockCancelOutlineLogo = React.forwardRef<SVGSVGElement, ClockCancelOutlineLogoProps>(
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
      <path d="M20.997 12.25a9 9 0 1 0 -8.718 8.745" />
  <path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M17 21l4 -4" />
  <path d="M12 7v5l2 2" />
    </svg>
  )
);

ClockCancelOutlineLogo.displayName = "ClockCancelOutlineLogo";

export const ClockCancelOutlineLogoMetadata = {
  id: "clock-cancel-outline",
  baseId: "clock-cancel-outline",
  variant: "default",
  name: "Clock Cancel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockCancelOutlineLogo;
