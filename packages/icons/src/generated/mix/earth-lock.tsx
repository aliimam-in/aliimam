/**
 * Auto-generated logo component: Earth Lock (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EarthLockLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EarthLockLogo = React.forwardRef<SVGSVGElement, EarthLockLogoProps>(
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
      <path d="M7 3.34V5a3 3 0 0 0 3 3" />
  <path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
  <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
  <path d="M12 2a10 10 0 1 0 9.54 13" />
  <path d="M20 6V4a2 2 0 1 0-4 0v2" />
  <rect width="8" height="5" x="14" y="6" rx="1" />
    </svg>
  )
);

EarthLockLogo.displayName = "EarthLockLogo";

export const EarthLockLogoMetadata = {
  id: "earth-lock",
  baseId: "earth-lock",
  variant: "default",
  name: "Earth Lock",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EarthLockLogo;
