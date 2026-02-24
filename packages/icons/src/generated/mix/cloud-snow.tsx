/**
 * Auto-generated logo component: Cloud Snow (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixCloudSnowLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixCloudSnowLogo = React.forwardRef<SVGSVGElement, MixCloudSnowLogoProps>(
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
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
  <path d="M8 15h.01" />
  <path d="M8 19h.01" />
  <path d="M12 17h.01" />
  <path d="M12 21h.01" />
  <path d="M16 15h.01" />
  <path d="M16 19h.01" />
    </svg>
  )
);

MixCloudSnowLogo.displayName = "MixCloudSnowLogo";

export const MixCloudSnowLogoMetadata = {
  id: "cloud-snow",
  baseId: "cloud-snow",
  variant: "default",
  name: "Cloud Snow",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixCloudSnowLogo;
