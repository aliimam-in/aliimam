/**
 * Auto-generated logo component: Droplet (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixDropletLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixDropletLogo = React.forwardRef<SVGSVGElement, MixDropletLogoProps>(
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
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  )
);

MixDropletLogo.displayName = "MixDropletLogo";

export const MixDropletLogoMetadata = {
  id: "droplet",
  baseId: "droplet",
  variant: "default",
  name: "Droplet",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixDropletLogo;
