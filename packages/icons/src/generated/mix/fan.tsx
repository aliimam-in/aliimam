/**
 * Auto-generated logo component: Fan (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FanLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FanLogo = React.forwardRef<SVGSVGElement, FanLogoProps>(
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
      <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
  <path d="M12 12v.01" />
    </svg>
  )
);

FanLogo.displayName = "FanLogo";

export const FanLogoMetadata = {
  id: "fan",
  baseId: "fan",
  variant: "default",
  name: "Fan",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FanLogo;
