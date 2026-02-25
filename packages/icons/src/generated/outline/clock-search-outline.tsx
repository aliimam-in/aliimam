/**
 * Auto-generated logo component: Clock Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockSearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockSearchOutlineLogo = React.forwardRef<SVGSVGElement, ClockSearchOutlineLogoProps>(
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
      <path d="M20.993 11.646a9 9 0 1 0 -9.318 9.348" />
  <path d="M12 7v5l1 1" />
  <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M20.2 20.2l1.8 1.8" />
    </svg>
  )
);

ClockSearchOutlineLogo.displayName = "ClockSearchOutlineLogo";

export const ClockSearchOutlineLogoMetadata = {
  id: "clock-search-outline",
  baseId: "clock-search-outline",
  variant: "default",
  name: "Clock Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockSearchOutlineLogo;
