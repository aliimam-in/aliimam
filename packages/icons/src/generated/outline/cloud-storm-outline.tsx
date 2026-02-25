/**
 * Auto-generated logo component: Cloud Storm Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudStormOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudStormOutlineLogo = React.forwardRef<SVGSVGElement, CloudStormOutlineLogoProps>(
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
      <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
  <path d="M13 14l-2 4l3 0l-2 4" />
    </svg>
  )
);

CloudStormOutlineLogo.displayName = "CloudStormOutlineLogo";

export const CloudStormOutlineLogoMetadata = {
  id: "cloud-storm-outline",
  baseId: "cloud-storm-outline",
  variant: "default",
  name: "Cloud Storm Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudStormOutlineLogo;
