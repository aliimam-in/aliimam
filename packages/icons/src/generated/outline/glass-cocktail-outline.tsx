/**
 * Auto-generated logo component: Glass Cocktail Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GlassCocktailOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GlassCocktailOutlineLogo = React.forwardRef<SVGSVGElement, GlassCocktailOutlineLogoProps>(
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
  <path d="M5 5a7 2 0 1 0 14 0a7 2 0 1 0 -14 0" />
  <path d="M5 5v.388c0 .432 .126 .853 .362 1.206l5 7.509c.633 .951 1.88 1.183 2.785 .517c.191 -.141 .358 -.316 .491 -.517l5 -7.509c.236 -.353 .362 -.774 .362 -1.206v-.388" />
    </svg>
  )
);

GlassCocktailOutlineLogo.displayName = "GlassCocktailOutlineLogo";

export const GlassCocktailOutlineLogoMetadata = {
  id: "glass-cocktail-outline",
  baseId: "glass-cocktail-outline",
  variant: "default",
  name: "Glass Cocktail Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GlassCocktailOutlineLogo;
