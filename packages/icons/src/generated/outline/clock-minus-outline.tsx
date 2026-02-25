/**
 * Auto-generated logo component: Clock Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockMinusOutlineLogo = React.forwardRef<SVGSVGElement, ClockMinusOutlineLogoProps>(
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
      <path d="M20.477 15.022a9 9 0 1 0 -7.998 5.965" />
  <path d="M12 7v5l3 3" />
  <path d="M16 19h6" />
    </svg>
  )
);

ClockMinusOutlineLogo.displayName = "ClockMinusOutlineLogo";

export const ClockMinusOutlineLogoMetadata = {
  id: "clock-minus-outline",
  baseId: "clock-minus-outline",
  variant: "default",
  name: "Clock Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockMinusOutlineLogo;
