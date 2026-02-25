/**
 * Auto-generated logo component: Artboard Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArtboardOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArtboardOutlineLogo = React.forwardRef<SVGSVGElement, ArtboardOutlineLogoProps>(
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
      <path d="M8 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -6" />
  <path d="M3 8l1 0" />
  <path d="M3 16l1 0" />
  <path d="M8 3l0 1" />
  <path d="M16 3l0 1" />
  <path d="M20 8l1 0" />
  <path d="M20 16l1 0" />
  <path d="M8 20l0 1" />
  <path d="M16 20l0 1" />
    </svg>
  )
);

ArtboardOutlineLogo.displayName = "ArtboardOutlineLogo";

export const ArtboardOutlineLogoMetadata = {
  id: "artboard-outline",
  baseId: "artboard-outline",
  variant: "default",
  name: "Artboard Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArtboardOutlineLogo;
