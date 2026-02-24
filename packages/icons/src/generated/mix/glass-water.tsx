/**
 * Auto-generated logo component: Glass Water (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GlassWaterLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GlassWaterLogo = React.forwardRef<SVGSVGElement, GlassWaterLogoProps>(
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
      <path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z" />
  <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
    </svg>
  )
);

GlassWaterLogo.displayName = "GlassWaterLogo";

export const GlassWaterLogoMetadata = {
  id: "glass-water",
  baseId: "glass-water",
  variant: "default",
  name: "Glass Water",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GlassWaterLogo;
