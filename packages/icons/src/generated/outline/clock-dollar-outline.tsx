/**
 * Auto-generated logo component: Clock Dollar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockDollarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockDollarOutlineLogo = React.forwardRef<SVGSVGElement, ClockDollarOutlineLogoProps>(
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
      <path d="M20.866 10.45a9 9 0 1 0 -7.815 10.488" />
  <path d="M12 7v5l1.5 1.5" />
  <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M19 21v1m0 -8v1" />
    </svg>
  )
);

ClockDollarOutlineLogo.displayName = "ClockDollarOutlineLogo";

export const ClockDollarOutlineLogoMetadata = {
  id: "clock-dollar-outline",
  baseId: "clock-dollar-outline",
  variant: "default",
  name: "Clock Dollar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockDollarOutlineLogo;
