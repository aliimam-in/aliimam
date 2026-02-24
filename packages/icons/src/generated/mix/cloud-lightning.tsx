/**
 * Auto-generated logo component: Cloud Lightning (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixCloudLightningLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixCloudLightningLogo = React.forwardRef<SVGSVGElement, MixCloudLightningLogoProps>(
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
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
  <path d="m13 12-3 5h4l-3 5" />
    </svg>
  )
);

MixCloudLightningLogo.displayName = "MixCloudLightningLogo";

export const MixCloudLightningLogoMetadata = {
  id: "cloud-lightning",
  baseId: "cloud-lightning",
  variant: "default",
  name: "Cloud Lightning",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixCloudLightningLogo;
