/**
 * Auto-generated logo component: Eye Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixEyeOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixEyeOffLogo = React.forwardRef<SVGSVGElement, MixEyeOffLogoProps>(
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
      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
  <path d="m2 2 20 20" />
    </svg>
  )
);

MixEyeOffLogo.displayName = "MixEyeOffLogo";

export const MixEyeOffLogoMetadata = {
  id: "eye-off",
  baseId: "eye-off",
  variant: "default",
  name: "Eye Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixEyeOffLogo;
