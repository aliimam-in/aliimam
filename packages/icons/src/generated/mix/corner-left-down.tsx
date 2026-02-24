/**
 * Auto-generated logo component: Corner Left Down (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixCornerLeftDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixCornerLeftDownLogo = React.forwardRef<SVGSVGElement, MixCornerLeftDownLogoProps>(
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
      <path d="m14 15-5 5-5-5" />
  <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
    </svg>
  )
);

MixCornerLeftDownLogo.displayName = "MixCornerLeftDownLogo";

export const MixCornerLeftDownLogoMetadata = {
  id: "corner-left-down",
  baseId: "corner-left-down",
  variant: "default",
  name: "Corner Left Down",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixCornerLeftDownLogo;
