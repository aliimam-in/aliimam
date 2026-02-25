/**
 * Auto-generated logo component: Plug Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlugOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlugOffOutlineLogo = React.forwardRef<SVGSVGElement, PlugOffOutlineLogoProps>(
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
      <path d="M16.123 16.092l-.177 .177a5.81 5.81 0 1 1 -8.215 -8.215l.159 -.159" />
  <path d="M4 20l3.5 -3.5" />
  <path d="M15 4l-3.5 3.5" />
  <path d="M20 9l-3.5 3.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PlugOffOutlineLogo.displayName = "PlugOffOutlineLogo";

export const PlugOffOutlineLogoMetadata = {
  id: "plug-off-outline",
  baseId: "plug-off-outline",
  variant: "default",
  name: "Plug Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlugOffOutlineLogo;
