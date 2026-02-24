/**
 * Auto-generated logo component: Droplet (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DropletLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DropletLogo = React.forwardRef<SVGSVGElement, DropletLogoProps>(
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
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  )
);

DropletLogo.displayName = "DropletLogo";

export const DropletLogoMetadata = {
  id: "droplet",
  baseId: "droplet",
  variant: "default",
  name: "Droplet",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DropletLogo;
