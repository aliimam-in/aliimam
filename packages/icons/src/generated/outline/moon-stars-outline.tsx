/**
 * Auto-generated logo component: Moon Stars Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoonStarsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoonStarsOutlineLogo = React.forwardRef<SVGSVGElement, MoonStarsOutlineLogoProps>(
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
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008" />
  <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
  <path d="M19 11h2m-1 -1v2" />
    </svg>
  )
);

MoonStarsOutlineLogo.displayName = "MoonStarsOutlineLogo";

export const MoonStarsOutlineLogoMetadata = {
  id: "moon-stars-outline",
  baseId: "moon-stars-outline",
  variant: "default",
  name: "Moon Stars Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoonStarsOutlineLogo;
