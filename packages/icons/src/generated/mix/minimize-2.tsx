/**
 * Auto-generated logo component: Minimize 2 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixMinimize2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixMinimize2Logo = React.forwardRef<SVGSVGElement, MixMinimize2LogoProps>(
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
      <path d="m14 10 7-7" />
  <path d="M20 10h-6V4" />
  <path d="m3 21 7-7" />
  <path d="M4 14h6v6" />
    </svg>
  )
);

MixMinimize2Logo.displayName = "MixMinimize2Logo";

export const MixMinimize2LogoMetadata = {
  id: "minimize-2",
  baseId: "minimize-2",
  variant: "default",
  name: "Minimize 2",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixMinimize2Logo;
