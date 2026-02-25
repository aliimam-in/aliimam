/**
 * Auto-generated logo component: Droplet Off (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DropletOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DropletOffLogo = React.forwardRef<SVGSVGElement, DropletOffLogoProps>(
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
      <path d="M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586" />
  <path d="m2 2 20 20" />
  <path d="M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208" />
    </svg>
  )
);

DropletOffLogo.displayName = "DropletOffLogo";

export const DropletOffLogoMetadata = {
  id: "droplet-off",
  baseId: "droplet-off",
  variant: "default",
  name: "Droplet Off",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DropletOffLogo;
