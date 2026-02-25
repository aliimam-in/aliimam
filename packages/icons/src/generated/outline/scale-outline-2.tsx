/**
 * Auto-generated logo component: Scale Outline 2 (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScaleOutline2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScaleOutline2Logo = React.forwardRef<SVGSVGElement, ScaleOutline2LogoProps>(
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
      <path d="M7 20l10 0" />
  <path d="M6 6l6 -1l6 1" />
  <path d="M12 3l0 17" />
  <path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
  <path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
    </svg>
  )
);

ScaleOutline2Logo.displayName = "ScaleOutline2Logo";

export const ScaleOutline2LogoMetadata = {
  id: "scale-outline-2",
  baseId: "scale-outline-2",
  variant: "default",
  name: "Scale Outline 2",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScaleOutline2Logo;
