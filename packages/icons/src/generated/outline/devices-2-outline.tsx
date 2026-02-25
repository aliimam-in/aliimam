/**
 * Auto-generated logo component: Devices 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Devices2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Devices2OutlineLogo = React.forwardRef<SVGSVGElement, Devices2OutlineLogoProps>(
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
      <path d="M10 15h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h6" />
  <path d="M13 5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -14" />
  <path d="M7 19l3 0" />
  <path d="M17 8l0 .01" />
  <path d="M16 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M9 15l0 4" />
    </svg>
  )
);

Devices2OutlineLogo.displayName = "Devices2OutlineLogo";

export const Devices2OutlineLogoMetadata = {
  id: "devices-2-outline",
  baseId: "devices-2-outline",
  variant: "default",
  name: "Devices 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Devices2OutlineLogo;
