/**
 * Auto-generated logo component: Maximize 2 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixMaximize2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixMaximize2Logo = React.forwardRef<SVGSVGElement, MixMaximize2LogoProps>(
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
      <path d="M15 3h6v6" />
  <path d="m21 3-7 7" />
  <path d="m3 21 7-7" />
  <path d="M9 21H3v-6" />
    </svg>
  )
);

MixMaximize2Logo.displayName = "MixMaximize2Logo";

export const MixMaximize2LogoMetadata = {
  id: "maximize-2",
  baseId: "maximize-2",
  variant: "default",
  name: "Maximize 2",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixMaximize2Logo;
