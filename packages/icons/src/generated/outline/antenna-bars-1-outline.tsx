/**
 * Auto-generated logo component: Antenna Bars 1 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AntennaBars1OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AntennaBars1OutlineLogo = React.forwardRef<SVGSVGElement, AntennaBars1OutlineLogoProps>(
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
      <path d="M6 18l0 .01" />
  <path d="M10 18l0 .01" />
  <path d="M14 18l0 .01" />
  <path d="M18 18l0 .01" />
    </svg>
  )
);

AntennaBars1OutlineLogo.displayName = "AntennaBars1OutlineLogo";

export const AntennaBars1OutlineLogoMetadata = {
  id: "antenna-bars-1-outline",
  baseId: "antenna-bars-1-outline",
  variant: "default",
  name: "Antenna Bars 1 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AntennaBars1OutlineLogo;
