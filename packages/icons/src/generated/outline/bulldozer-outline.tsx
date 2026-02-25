/**
 * Auto-generated logo component: Bulldozer Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BulldozerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BulldozerOutlineLogo = React.forwardRef<SVGSVGElement, BulldozerOutlineLogoProps>(
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
      <path d="M2 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M12 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M19 13v4a2 2 0 0 0 2 2h1" />
  <path d="M14 19h-10" />
  <path d="M4 15h10" />
  <path d="M9 11v-5h2a3 3 0 0 1 3 3v6" />
  <path d="M5 15v-3a1 1 0 0 1 1 -1h8" />
  <path d="M19 17h-3" />
    </svg>
  )
);

BulldozerOutlineLogo.displayName = "BulldozerOutlineLogo";

export const BulldozerOutlineLogoMetadata = {
  id: "bulldozer-outline",
  baseId: "bulldozer-outline",
  variant: "default",
  name: "Bulldozer Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BulldozerOutlineLogo;
