/**
 * Auto-generated logo component: Storm Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StormOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StormOutlineLogo = React.forwardRef<SVGSVGElement, StormOutlineLogoProps>(
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
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M5.369 14.236c-1.839 -3.929 -1.561 -7.616 -.704 -11.236" />
  <path d="M18.63 9.76c1.837 3.928 1.561 7.615 .703 11.236" />
    </svg>
  )
);

StormOutlineLogo.displayName = "StormOutlineLogo";

export const StormOutlineLogoMetadata = {
  id: "storm-outline",
  baseId: "storm-outline",
  variant: "default",
  name: "Storm Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StormOutlineLogo;
