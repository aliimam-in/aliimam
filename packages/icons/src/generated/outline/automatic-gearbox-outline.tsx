/**
 * Auto-generated logo component: Automatic Gearbox Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AutomaticGearboxOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AutomaticGearboxOutlineLogo = React.forwardRef<SVGSVGElement, AutomaticGearboxOutlineLogoProps>(
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
      <path d="M17 17v4h1a2 2 0 1 0 0 -4h-1" />
  <path d="M17 11h1.5a1.5 1.5 0 0 0 0 -3h-1.5v5" />
  <path d="M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3" />
  <path d="M9 11h4" />
    </svg>
  )
);

AutomaticGearboxOutlineLogo.displayName = "AutomaticGearboxOutlineLogo";

export const AutomaticGearboxOutlineLogoMetadata = {
  id: "automatic-gearbox-outline",
  baseId: "automatic-gearbox-outline",
  variant: "default",
  name: "Automatic Gearbox Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AutomaticGearboxOutlineLogo;
