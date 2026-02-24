/**
 * Auto-generated logo component: Spotlight (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpotlightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SpotlightLogo = React.forwardRef<SVGSVGElement, SpotlightLogoProps>(
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
      <path d="M15.295 19.562 16 22" />
  <path d="m17 16 3.758 2.098" />
  <path d="m19 12.5 3.026-.598" />
  <path d="M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z" />
  <path d="M8 9V2" />
    </svg>
  )
);

SpotlightLogo.displayName = "SpotlightLogo";

export const SpotlightLogoMetadata = {
  id: "spotlight",
  baseId: "spotlight",
  variant: "default",
  name: "Spotlight",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SpotlightLogo;
