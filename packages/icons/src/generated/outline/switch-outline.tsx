/**
 * Auto-generated logo component: Switch Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SwitchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SwitchOutlineLogo = React.forwardRef<SVGSVGElement, SwitchOutlineLogoProps>(
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
      <path d="M15 4l4 0l0 4" />
  <path d="M14.75 9.25l4.25 -5.25" />
  <path d="M5 19l4 -4" />
  <path d="M15 19l4 0l0 -4" />
  <path d="M5 5l14 14" />
    </svg>
  )
);

SwitchOutlineLogo.displayName = "SwitchOutlineLogo";

export const SwitchOutlineLogoMetadata = {
  id: "switch-outline",
  baseId: "switch-outline",
  variant: "default",
  name: "Switch Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SwitchOutlineLogo;
