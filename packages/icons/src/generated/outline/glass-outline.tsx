/**
 * Auto-generated logo component: Glass Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GlassOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GlassOutlineLogo = React.forwardRef<SVGSVGElement, GlassOutlineLogoProps>(
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
      <path d="M8 21h8" />
  <path d="M12 16v5" />
  <path d="M17 5l1 6c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -6" />
  <path d="M7 5a5 2 0 1 0 10 0a5 2 0 1 0 -10 0" />
    </svg>
  )
);

GlassOutlineLogo.displayName = "GlassOutlineLogo";

export const GlassOutlineLogoMetadata = {
  id: "glass-outline",
  baseId: "glass-outline",
  variant: "default",
  name: "Glass Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GlassOutlineLogo;
