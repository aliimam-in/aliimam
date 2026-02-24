/**
 * Auto-generated logo component: Disc 3 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Disc3LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Disc3Logo = React.forwardRef<SVGSVGElement, Disc3LogoProps>(
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
  <path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
  <circle cx="12" cy="12" r="2" />
  <path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
    </svg>
  )
);

Disc3Logo.displayName = "Disc3Logo";

export const Disc3LogoMetadata = {
  id: "disc-3",
  baseId: "disc-3",
  variant: "default",
  name: "Disc 3",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Disc3Logo;
