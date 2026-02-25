/**
 * Auto-generated logo component: Volume 2 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Volume2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Volume2Logo = React.forwardRef<SVGSVGElement, Volume2LogoProps>(
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
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <path d="M16 9a5 5 0 0 1 0 6" />
  <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
    </svg>
  )
);

Volume2Logo.displayName = "Volume2Logo";

export const Volume2LogoMetadata = {
  id: "volume-2",
  baseId: "volume-2",
  variant: "default",
  name: "Volume 2",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Volume2Logo;
