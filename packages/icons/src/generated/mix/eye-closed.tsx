/**
 * Auto-generated logo component: Eye Closed (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EyeClosedLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EyeClosedLogo = React.forwardRef<SVGSVGElement, EyeClosedLogoProps>(
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
      <path d="m15 18-.722-3.25" />
  <path d="M2 8a10.645 10.645 0 0 0 20 0" />
  <path d="m20 15-1.726-2.05" />
  <path d="m4 15 1.726-2.05" />
  <path d="m9 18 .722-3.25" />
    </svg>
  )
);

EyeClosedLogo.displayName = "EyeClosedLogo";

export const EyeClosedLogoMetadata = {
  id: "eye-closed",
  baseId: "eye-closed",
  variant: "default",
  name: "Eye Closed",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EyeClosedLogo;
