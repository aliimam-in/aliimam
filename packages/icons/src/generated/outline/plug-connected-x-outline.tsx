/**
 * Auto-generated logo component: Plug Connected X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlugConnectedXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlugConnectedXOutlineLogo = React.forwardRef<SVGSVGElement, PlugConnectedXOutlineLogoProps>(
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
      <path d="M20 16l-4 4" />
  <path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5" />
  <path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5" />
  <path d="M3 21l2.5 -2.5" />
  <path d="M18.5 5.5l2.5 -2.5" />
  <path d="M10 11l-2 2" />
  <path d="M13 14l-2 2" />
  <path d="M16 16l4 4" />
    </svg>
  )
);

PlugConnectedXOutlineLogo.displayName = "PlugConnectedXOutlineLogo";

export const PlugConnectedXOutlineLogoMetadata = {
  id: "plug-connected-x-outline",
  baseId: "plug-connected-x-outline",
  variant: "default",
  name: "Plug Connected X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlugConnectedXOutlineLogo;
