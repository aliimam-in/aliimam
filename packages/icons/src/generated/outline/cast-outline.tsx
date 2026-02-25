/**
 * Auto-generated logo component: Cast Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CastOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CastOutlineLogo = React.forwardRef<SVGSVGElement, CastOutlineLogoProps>(
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
      <path d="M3 19l.01 0" />
  <path d="M7 19a4 4 0 0 0 -4 -4" />
  <path d="M11 19a8 8 0 0 0 -8 -8" />
  <path d="M15 19h3a3 3 0 0 0 3 -3v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -2.8 2" />
    </svg>
  )
);

CastOutlineLogo.displayName = "CastOutlineLogo";

export const CastOutlineLogoMetadata = {
  id: "cast-outline",
  baseId: "cast-outline",
  variant: "default",
  name: "Cast Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CastOutlineLogo;
