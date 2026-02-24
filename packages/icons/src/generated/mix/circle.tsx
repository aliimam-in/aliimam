/**
 * Auto-generated logo component: Circle (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixCircleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixCircleLogo = React.forwardRef<SVGSVGElement, MixCircleLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
);

MixCircleLogo.displayName = "MixCircleLogo";

export const MixCircleLogoMetadata = {
  id: "circle",
  baseId: "circle",
  variant: "default",
  name: "Circle",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixCircleLogo;
