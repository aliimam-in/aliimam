/**
 * Auto-generated logo component: Bulb Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BulbOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BulbOutlineLogo = React.forwardRef<SVGSVGElement, BulbOutlineLogoProps>(
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
      <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
  <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
  <path d="M9.7 17l4.6 0" />
    </svg>
  )
);

BulbOutlineLogo.displayName = "BulbOutlineLogo";

export const BulbOutlineLogoMetadata = {
  id: "bulb-outline",
  baseId: "bulb-outline",
  variant: "default",
  name: "Bulb Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BulbOutlineLogo;
