/**
 * Auto-generated logo component: Clock Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockDownOutlineLogo = React.forwardRef<SVGSVGElement, ClockDownOutlineLogoProps>(
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
      <path d="M20.984 12.535a9 9 0 1 0 -8.431 8.448" />
  <path d="M12 7v5l3 3" />
  <path d="M19 16v6" />
  <path d="M22 19l-3 3l-3 -3" />
    </svg>
  )
);

ClockDownOutlineLogo.displayName = "ClockDownOutlineLogo";

export const ClockDownOutlineLogoMetadata = {
  id: "clock-down-outline",
  baseId: "clock-down-outline",
  variant: "default",
  name: "Clock Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockDownOutlineLogo;
