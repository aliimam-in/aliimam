/**
 * Auto-generated logo component: Repeat 1 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Repeat1LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Repeat1Logo = React.forwardRef<SVGSVGElement, Repeat1LogoProps>(
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
      <path d="m17 2 4 4-4 4" />
  <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
  <path d="m7 22-4-4 4-4" />
  <path d="M21 13v1a4 4 0 0 1-4 4H3" />
  <path d="M11 10h1v4" />
    </svg>
  )
);

Repeat1Logo.displayName = "Repeat1Logo";

export const Repeat1LogoMetadata = {
  id: "repeat-1",
  baseId: "repeat-1",
  variant: "default",
  name: "Repeat 1",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Repeat1Logo;
