/**
 * Auto-generated logo component: Antenna Bars 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AntennaBars2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AntennaBars2OutlineLogo = React.forwardRef<SVGSVGElement, AntennaBars2OutlineLogoProps>(
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
      <path d="M6 18l0 -3" />
  <path d="M10 18l0 .01" />
  <path d="M14 18l0 .01" />
  <path d="M18 18l0 .01" />
    </svg>
  )
);

AntennaBars2OutlineLogo.displayName = "AntennaBars2OutlineLogo";

export const AntennaBars2OutlineLogoMetadata = {
  id: "antenna-bars-2-outline",
  baseId: "antenna-bars-2-outline",
  variant: "default",
  name: "Antenna Bars 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AntennaBars2OutlineLogo;
