/**
 * Auto-generated logo component: Cloud Cog (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudCogLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudCogLogo = React.forwardRef<SVGSVGElement, CloudCogLogoProps>(
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
      <path d="m10.852 19.772-.383.924" />
  <path d="m13.148 14.228.383-.923" />
  <path d="M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923" />
  <path d="m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544" />
  <path d="m14.772 15.852.923-.383" />
  <path d="m14.772 18.148.923.383" />
  <path d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" />
  <path d="m9.228 15.852-.923-.383" />
  <path d="m9.228 18.148-.923.383" />
    </svg>
  )
);

CloudCogLogo.displayName = "CloudCogLogo";

export const CloudCogLogoMetadata = {
  id: "cloud-cog",
  baseId: "cloud-cog",
  variant: "default",
  name: "Cloud Cog",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudCogLogo;
