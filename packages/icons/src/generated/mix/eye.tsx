/**
 * Auto-generated logo component: Eye (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixEyeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixEyeLogo = React.forwardRef<SVGSVGElement, MixEyeLogoProps>(
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
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
  <circle cx="12" cy="12" r="3" />
    </svg>
  )
);

MixEyeLogo.displayName = "MixEyeLogo";

export const MixEyeLogoMetadata = {
  id: "eye",
  baseId: "eye",
  variant: "default",
  name: "Eye",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixEyeLogo;
