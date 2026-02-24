/**
 * Auto-generated logo component: Volume 1 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixVolume1LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixVolume1Logo = React.forwardRef<SVGSVGElement, MixVolume1LogoProps>(
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
    </svg>
  )
);

MixVolume1Logo.displayName = "MixVolume1Logo";

export const MixVolume1LogoMetadata = {
  id: "volume-1",
  baseId: "volume-1",
  variant: "default",
  name: "Volume 1",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixVolume1Logo;
