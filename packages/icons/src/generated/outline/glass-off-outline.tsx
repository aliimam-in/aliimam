/**
 * Auto-generated logo component: Glass Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GlassOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GlassOffOutlineLogo = React.forwardRef<SVGSVGElement, GlassOffOutlineLogoProps>(
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
  <path d="M17 5l1 6c0 .887 -.233 1.685 -.646 2.37m-2.083 1.886c-.941 .48 -2.064 .744 -3.271 .744c-3.314 0 -6 -1.988 -6 -5l.711 -4.268" />
  <path d="M10.983 6.959c.329 .027 .669 .041 1.017 .041c2.761 0 5 -.895 5 -2s-2.239 -2 -5 -2c-1.716 0 -3.23 .346 -4.13 .872" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

GlassOffOutlineLogo.displayName = "GlassOffOutlineLogo";

export const GlassOffOutlineLogoMetadata = {
  id: "glass-off-outline",
  baseId: "glass-off-outline",
  variant: "default",
  name: "Glass Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GlassOffOutlineLogo;
