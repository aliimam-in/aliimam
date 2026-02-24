/**
 * Auto-generated logo component: Chart Network (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartNetworkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartNetworkLogo = React.forwardRef<SVGSVGElement, ChartNetworkLogoProps>(
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
      <path d="m13.11 7.664 1.78 2.672" />
  <path d="m14.162 12.788-3.324 1.424" />
  <path d="m20 4-6.06 1.515" />
  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <circle cx="12" cy="6" r="2" />
  <circle cx="16" cy="12" r="2" />
  <circle cx="9" cy="15" r="2" />
    </svg>
  )
);

ChartNetworkLogo.displayName = "ChartNetworkLogo";

export const ChartNetworkLogoMetadata = {
  id: "chart-network",
  baseId: "chart-network",
  variant: "default",
  name: "Chart Network",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartNetworkLogo;
