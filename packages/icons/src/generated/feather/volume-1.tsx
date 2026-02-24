/**
 * Auto-generated logo component: Volume 1 (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Volume1LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Volume1Logo = React.forwardRef<SVGSVGElement, Volume1LogoProps>(
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
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
    </svg>
  )
);

Volume1Logo.displayName = "Volume1Logo";

export const Volume1LogoMetadata = {
  id: "volume-1",
  baseId: "volume-1",
  variant: "default",
  name: "Volume 1",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Volume1Logo;
