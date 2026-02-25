/**
 * Auto-generated logo component: Artboard Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArtboardOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArtboardOffOutlineLogo = React.forwardRef<SVGSVGElement, ArtboardOffOutlineLogoProps>(
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
      <path d="M12 8h3a1 1 0 0 1 1 1v3" />
  <path d="M15.716 15.698a1 1 0 0 1 -.716 .302h-6a1 1 0 0 1 -1 -1v-6c0 -.273 .11 -.52 .287 -.7" />
  <path d="M3 8h1" />
  <path d="M3 16h1" />
  <path d="M8 3v1" />
  <path d="M16 3v1" />
  <path d="M20 8h1" />
  <path d="M20 16h1" />
  <path d="M8 20v1" />
  <path d="M16 20v1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ArtboardOffOutlineLogo.displayName = "ArtboardOffOutlineLogo";

export const ArtboardOffOutlineLogoMetadata = {
  id: "artboard-off-outline",
  baseId: "artboard-off-outline",
  variant: "default",
  name: "Artboard Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArtboardOffOutlineLogo;
