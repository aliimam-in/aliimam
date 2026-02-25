/**
 * Auto-generated logo component: Flag Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagOffOutlineLogo = React.forwardRef<SVGSVGElement, FlagOffOutlineLogoProps>(
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
      <path d="M5 5v16" />
  <path d="M19 5v9" />
  <path d="M7.641 3.645a5 5 0 0 1 4.359 1.355a5 5 0 0 0 7 0" />
  <path d="M5 14a5 5 0 0 1 7 0a4.984 4.984 0 0 0 3.437 1.429m3.019 -.966c.19 -.14 .371 -.294 .544 -.463" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

FlagOffOutlineLogo.displayName = "FlagOffOutlineLogo";

export const FlagOffOutlineLogoMetadata = {
  id: "flag-off-outline",
  baseId: "flag-off-outline",
  variant: "default",
  name: "Flag Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagOffOutlineLogo;
