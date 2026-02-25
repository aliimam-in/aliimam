/**
 * Auto-generated logo component: Solar Panel 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SolarPanel2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SolarPanel2OutlineLogo = React.forwardRef<SVGSVGElement, SolarPanel2OutlineLogoProps>(
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
      <path d="M8 2a4 4 0 1 0 8 0" />
  <path d="M4 3h1" />
  <path d="M19 3h1" />
  <path d="M12 9v1" />
  <path d="M17.2 7.2l.707 .707" />
  <path d="M6.8 7.2l-.7 .7" />
  <path d="M4.28 21h15.44a1 1 0 0 0 .97 -1.243l-1.5 -6a1 1 0 0 0 -.97 -.757h-12.44a1 1 0 0 0 -.97 .757l-1.5 6a1 1 0 0 0 .97 1.243" />
  <path d="M4 17h16" />
  <path d="M10 13l-1 8" />
  <path d="M14 13l1 8" />
    </svg>
  )
);

SolarPanel2OutlineLogo.displayName = "SolarPanel2OutlineLogo";

export const SolarPanel2OutlineLogoMetadata = {
  id: "solar-panel-2-outline",
  baseId: "solar-panel-2-outline",
  variant: "default",
  name: "Solar Panel 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SolarPanel2OutlineLogo;
