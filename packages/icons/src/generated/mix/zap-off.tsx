/**
 * Auto-generated logo component: Zap Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixZapOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixZapOffLogo = React.forwardRef<SVGSVGElement, MixZapOffLogoProps>(
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
      <path d="M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317" />
  <path d="M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773" />
  <path d="M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643" />
  <path d="m2 2 20 20" />
    </svg>
  )
);

MixZapOffLogo.displayName = "MixZapOffLogo";

export const MixZapOffLogoMetadata = {
  id: "zap-off",
  baseId: "zap-off",
  variant: "default",
  name: "Zap Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixZapOffLogo;
