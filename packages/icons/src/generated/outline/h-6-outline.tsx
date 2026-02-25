/**
 * Auto-generated logo component: H 6 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface H6OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const H6OutlineLogo = React.forwardRef<SVGSVGElement, H6OutlineLogoProps>(
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
      <path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4" />
  <path d="M21 12a2 2 0 1 0 -4 0v4" />
  <path d="M4 6v12" />
  <path d="M12 6v12" />
  <path d="M11 18h2" />
  <path d="M3 18h2" />
  <path d="M4 12h8" />
  <path d="M3 6h2" />
  <path d="M11 6h2" />
    </svg>
  )
);

H6OutlineLogo.displayName = "H6OutlineLogo";

export const H6OutlineLogoMetadata = {
  id: "h-6-outline",
  baseId: "h-6-outline",
  variant: "default",
  name: "H 6 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default H6OutlineLogo;
