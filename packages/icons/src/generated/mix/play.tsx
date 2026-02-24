/**
 * Auto-generated logo component: Play (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixPlayLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixPlayLogo = React.forwardRef<SVGSVGElement, MixPlayLogoProps>(
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
      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
    </svg>
  )
);

MixPlayLogo.displayName = "MixPlayLogo";

export const MixPlayLogoMetadata = {
  id: "play",
  baseId: "play",
  variant: "default",
  name: "Play",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixPlayLogo;
