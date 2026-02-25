/**
 * Auto-generated logo component: Glass Gin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GlassGinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GlassGinOutlineLogo = React.forwardRef<SVGSVGElement, GlassGinOutlineLogoProps>(
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
  <path d="M12 15v6" />
  <path d="M5.5 5a6.5 2 0 1 0 13 0a6.5 2 0 1 0 -13 0" />
  <path d="M5.75 4.5c-.612 .75 -.75 2 -.75 3.5a7 7 0 0 0 14 0c0 -1.5 -.094 -2.75 -.75 -3.5" />
    </svg>
  )
);

GlassGinOutlineLogo.displayName = "GlassGinOutlineLogo";

export const GlassGinOutlineLogoMetadata = {
  id: "glass-gin-outline",
  baseId: "glass-gin-outline",
  variant: "default",
  name: "Glass Gin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GlassGinOutlineLogo;
