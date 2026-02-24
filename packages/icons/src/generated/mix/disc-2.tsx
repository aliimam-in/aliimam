/**
 * Auto-generated logo component: Disc 2 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Disc2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Disc2Logo = React.forwardRef<SVGSVGElement, Disc2LogoProps>(
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
  <circle cx="12" cy="12" r="4" />
  <path d="M12 12h.01" />
    </svg>
  )
);

Disc2Logo.displayName = "Disc2Logo";

export const Disc2LogoMetadata = {
  id: "disc-2",
  baseId: "disc-2",
  variant: "default",
  name: "Disc 2",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Disc2Logo;
