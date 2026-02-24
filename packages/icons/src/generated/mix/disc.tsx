/**
 * Auto-generated logo component: Disc (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixDiscLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixDiscLogo = React.forwardRef<SVGSVGElement, MixDiscLogoProps>(
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
  <circle cx="12" cy="12" r="2" />
    </svg>
  )
);

MixDiscLogo.displayName = "MixDiscLogo";

export const MixDiscLogoMetadata = {
  id: "disc",
  baseId: "disc",
  variant: "default",
  name: "Disc",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixDiscLogo;
