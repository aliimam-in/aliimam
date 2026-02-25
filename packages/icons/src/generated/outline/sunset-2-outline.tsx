/**
 * Auto-generated logo component: Sunset 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Sunset2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Sunset2OutlineLogo = React.forwardRef<SVGSVGElement, Sunset2OutlineLogoProps>(
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
      <path d="M3 13h1" />
  <path d="M20 13h1" />
  <path d="M5.6 6.6l.7 .7" />
  <path d="M18.4 6.6l-.7 .7" />
  <path d="M8 13a4 4 0 1 1 8 0" />
  <path d="M3 17h18" />
  <path d="M7 20h5" />
  <path d="M16 20h1" />
  <path d="M12 5v-1" />
    </svg>
  )
);

Sunset2OutlineLogo.displayName = "Sunset2OutlineLogo";

export const Sunset2OutlineLogoMetadata = {
  id: "sunset-2-outline",
  baseId: "sunset-2-outline",
  variant: "default",
  name: "Sunset 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Sunset2OutlineLogo;
