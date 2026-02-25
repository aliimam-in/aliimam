/**
 * Auto-generated logo component: Switch Horizontal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SwitchHorizontalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SwitchHorizontalOutlineLogo = React.forwardRef<SVGSVGElement, SwitchHorizontalOutlineLogoProps>(
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
      <path d="M16 3l4 4l-4 4" />
  <path d="M10 7l10 0" />
  <path d="M8 13l-4 4l4 4" />
  <path d="M4 17l9 0" />
    </svg>
  )
);

SwitchHorizontalOutlineLogo.displayName = "SwitchHorizontalOutlineLogo";

export const SwitchHorizontalOutlineLogoMetadata = {
  id: "switch-horizontal-outline",
  baseId: "switch-horizontal-outline",
  variant: "default",
  name: "Switch Horizontal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SwitchHorizontalOutlineLogo;
