/**
 * Auto-generated logo component: Theater (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TheaterLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TheaterLogo = React.forwardRef<SVGSVGElement, TheaterLogoProps>(
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
      <path d="M2 10s3-3 3-8" />
  <path d="M22 10s-3-3-3-8" />
  <path d="M10 2c0 4.4-3.6 8-8 8" />
  <path d="M14 2c0 4.4 3.6 8 8 8" />
  <path d="M2 10s2 2 2 5" />
  <path d="M22 10s-2 2-2 5" />
  <path d="M8 15h8" />
  <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
  <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
    </svg>
  )
);

TheaterLogo.displayName = "TheaterLogo";

export const TheaterLogoMetadata = {
  id: "theater",
  baseId: "theater",
  variant: "default",
  name: "Theater",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TheaterLogo;
