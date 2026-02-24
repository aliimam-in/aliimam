/**
 * Auto-generated logo component: Search (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixSearchLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixSearchLogo = React.forwardRef<SVGSVGElement, MixSearchLogoProps>(
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
      <path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" />
    </svg>
  )
);

MixSearchLogo.displayName = "MixSearchLogo";

export const MixSearchLogoMetadata = {
  id: "search",
  baseId: "search",
  variant: "default",
  name: "Search",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixSearchLogo;
