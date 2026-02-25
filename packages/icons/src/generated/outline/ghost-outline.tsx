/**
 * Auto-generated logo component: Ghost Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GhostOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GhostOutlineLogo = React.forwardRef<SVGSVGElement, GhostOutlineLogoProps>(
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
      <path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" />
  <path d="M10 10l.01 0" />
  <path d="M14 10l.01 0" />
  <path d="M10 14a3.5 3.5 0 0 0 4 0" />
    </svg>
  )
);

GhostOutlineLogo.displayName = "GhostOutlineLogo";

export const GhostOutlineLogoMetadata = {
  id: "ghost-outline",
  baseId: "ghost-outline",
  variant: "default",
  name: "Ghost Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GhostOutlineLogo;
