/**
 * Auto-generated logo component: Headphones (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixHeadphonesLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixHeadphonesLogo = React.forwardRef<SVGSVGElement, MixHeadphonesLogoProps>(
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
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
);

MixHeadphonesLogo.displayName = "MixHeadphonesLogo";

export const MixHeadphonesLogoMetadata = {
  id: "headphones",
  baseId: "headphones",
  variant: "default",
  name: "Headphones",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixHeadphonesLogo;
