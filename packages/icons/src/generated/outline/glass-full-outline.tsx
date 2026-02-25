/**
 * Auto-generated logo component: Glass Full Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GlassFullOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GlassFullOutlineLogo = React.forwardRef<SVGSVGElement, GlassFullOutlineLogoProps>(
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
      <path d="M8 21l8 0" />
  <path d="M12 15l0 6" />
  <path d="M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10" />
  <path d="M6 10a5 5 0 0 1 6 0a5 5 0 0 0 6 0" />
    </svg>
  )
);

GlassFullOutlineLogo.displayName = "GlassFullOutlineLogo";

export const GlassFullOutlineLogoMetadata = {
  id: "glass-full-outline",
  baseId: "glass-full-outline",
  variant: "default",
  name: "Glass Full Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GlassFullOutlineLogo;
