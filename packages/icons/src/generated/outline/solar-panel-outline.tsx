/**
 * Auto-generated logo component: Solar Panel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SolarPanelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SolarPanelOutlineLogo = React.forwardRef<SVGSVGElement, SolarPanelOutlineLogoProps>(
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
      <path d="M4.28 14h15.44a1 1 0 0 0 .97 -1.243l-1.5 -6a1 1 0 0 0 -.97 -.757h-12.44a1 1 0 0 0 -.97 .757l-1.5 6a1 1 0 0 0 .97 1.243" />
  <path d="M4 10h16" />
  <path d="M10 6l-1 8" />
  <path d="M14 6l1 8" />
  <path d="M12 14v4" />
  <path d="M7 18h10" />
    </svg>
  )
);

SolarPanelOutlineLogo.displayName = "SolarPanelOutlineLogo";

export const SolarPanelOutlineLogoMetadata = {
  id: "solar-panel-outline",
  baseId: "solar-panel-outline",
  variant: "default",
  name: "Solar Panel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SolarPanelOutlineLogo;
