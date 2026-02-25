/**
 * Auto-generated logo component: Headphone Off (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeadphoneOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeadphoneOffLogo = React.forwardRef<SVGSVGElement, HeadphoneOffLogoProps>(
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
      <path d="M21 14h-1.343" />
  <path d="M9.128 3.47A9 9 0 0 1 21 12v3.343" />
  <path d="m2 2 20 20" />
  <path d="M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" />
  <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364" />
    </svg>
  )
);

HeadphoneOffLogo.displayName = "HeadphoneOffLogo";

export const HeadphoneOffLogoMetadata = {
  id: "headphone-off",
  baseId: "headphone-off",
  variant: "default",
  name: "Headphone Off",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeadphoneOffLogo;
