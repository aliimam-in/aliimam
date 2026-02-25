/**
 * Auto-generated logo component: Switch Vertical Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SwitchVerticalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SwitchVerticalOutlineLogo = React.forwardRef<SVGSVGElement, SwitchVerticalOutlineLogoProps>(
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
      <path d="M3 8l4 -4l4 4" />
  <path d="M7 4l0 9" />
  <path d="M13 16l4 4l4 -4" />
  <path d="M17 10l0 10" />
    </svg>
  )
);

SwitchVerticalOutlineLogo.displayName = "SwitchVerticalOutlineLogo";

export const SwitchVerticalOutlineLogoMetadata = {
  id: "switch-vertical-outline",
  baseId: "switch-vertical-outline",
  variant: "default",
  name: "Switch Vertical Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SwitchVerticalOutlineLogo;
