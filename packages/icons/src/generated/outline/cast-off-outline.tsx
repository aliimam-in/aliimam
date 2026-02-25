/**
 * Auto-generated logo component: Cast Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CastOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CastOffOutlineLogo = React.forwardRef<SVGSVGElement, CastOffOutlineLogoProps>(
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
      <path d="M3 19h.01" />
  <path d="M7 19a4 4 0 0 0 -4 -4" />
  <path d="M11 19a8 8 0 0 0 -8 -8" />
  <path d="M15 19h3a3 3 0 0 0 .875 -.13m2 -2a3 3 0 0 0 .128 -.868v-8a3 3 0 0 0 -3 -3h-9m-3.865 .136a3 3 0 0 0 -1.935 1.864" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CastOffOutlineLogo.displayName = "CastOffOutlineLogo";

export const CastOffOutlineLogoMetadata = {
  id: "cast-off-outline",
  baseId: "cast-off-outline",
  variant: "default",
  name: "Cast Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CastOffOutlineLogo;
