/**
 * Auto-generated logo component: Volume 4 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Volume4OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Volume4OutlineLogo = React.forwardRef<SVGSVGElement, Volume4OutlineLogoProps>(
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
      <g transform="translate(1.5, 0)">
  <path d="M8 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
  </g>
    </svg>
  )
);

Volume4OutlineLogo.displayName = "Volume4OutlineLogo";

export const Volume4OutlineLogoMetadata = {
  id: "volume-4-outline",
  baseId: "volume-4-outline",
  variant: "default",
  name: "Volume 4 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Volume4OutlineLogo;
