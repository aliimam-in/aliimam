/**
 * Auto-generated logo component: Radar 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Radar2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Radar2OutlineLogo = React.forwardRef<SVGSVGElement, Radar2OutlineLogoProps>(
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
      <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M15.51 15.56a5 5 0 1 0 -3.51 1.44" />
  <path d="M18.832 17.86a9 9 0 1 0 -6.832 3.14" />
  <path d="M12 12v9" />
    </svg>
  )
);

Radar2OutlineLogo.displayName = "Radar2OutlineLogo";

export const Radar2OutlineLogoMetadata = {
  id: "radar-2-outline",
  baseId: "radar-2-outline",
  variant: "default",
  name: "Radar 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Radar2OutlineLogo;
