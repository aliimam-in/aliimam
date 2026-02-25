/**
 * Auto-generated logo component: Tornado Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TornadoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TornadoOutlineLogo = React.forwardRef<SVGSVGElement, TornadoOutlineLogoProps>(
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
      <path d="M21 4l-18 0" />
  <path d="M13 16l-6 0" />
  <path d="M11 20l4 0" />
  <path d="M6 8l14 0" />
  <path d="M4 12l12 0" />
    </svg>
  )
);

TornadoOutlineLogo.displayName = "TornadoOutlineLogo";

export const TornadoOutlineLogoMetadata = {
  id: "tornado-outline",
  baseId: "tornado-outline",
  variant: "default",
  name: "Tornado Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TornadoOutlineLogo;
