/**
 * Auto-generated logo component: Sun High Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SunHighOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SunHighOutlineLogo = React.forwardRef<SVGSVGElement, SunHighOutlineLogoProps>(
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
      <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656" />
  <path d="M6.343 17.657l-1.414 1.414" />
  <path d="M6.343 6.343l-1.414 -1.414" />
  <path d="M17.657 6.343l1.414 -1.414" />
  <path d="M17.657 17.657l1.414 1.414" />
  <path d="M4 12h-2" />
  <path d="M12 4v-2" />
  <path d="M20 12h2" />
  <path d="M12 20v2" />
    </svg>
  )
);

SunHighOutlineLogo.displayName = "SunHighOutlineLogo";

export const SunHighOutlineLogoMetadata = {
  id: "sun-high-outline",
  baseId: "sun-high-outline",
  variant: "default",
  name: "Sun High Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SunHighOutlineLogo;
