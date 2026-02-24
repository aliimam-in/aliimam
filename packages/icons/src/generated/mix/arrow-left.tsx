/**
 * Auto-generated logo component: Arrow Left (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixArrowLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixArrowLeftLogo = React.forwardRef<SVGSVGElement, MixArrowLeftLogoProps>(
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
      <path d="m12 19-7-7 7-7" />
  <path d="M19 12H5" />
    </svg>
  )
);

MixArrowLeftLogo.displayName = "MixArrowLeftLogo";

export const MixArrowLeftLogoMetadata = {
  id: "arrow-left",
  baseId: "arrow-left",
  variant: "default",
  name: "Arrow Left",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixArrowLeftLogo;
