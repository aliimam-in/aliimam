/**
 * Auto-generated logo component: Clock Shield Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockShieldOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockShieldOutlineLogo = React.forwardRef<SVGSVGElement, ClockShieldOutlineLogoProps>(
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
      <path d="M21 12a9 9 0 1 0 -8.98 9" />
  <path d="M12 7v5l1 1" />
  <path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5" />
    </svg>
  )
);

ClockShieldOutlineLogo.displayName = "ClockShieldOutlineLogo";

export const ClockShieldOutlineLogoMetadata = {
  id: "clock-shield-outline",
  baseId: "clock-shield-outline",
  variant: "default",
  name: "Clock Shield Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockShieldOutlineLogo;
