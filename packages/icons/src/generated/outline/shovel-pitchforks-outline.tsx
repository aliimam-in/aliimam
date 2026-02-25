/**
 * Auto-generated logo component: Shovel Pitchforks Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShovelPitchforksOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShovelPitchforksOutlineLogo = React.forwardRef<SVGSVGElement, ShovelPitchforksOutlineLogoProps>(
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
      <path d="M5 3h4" />
  <path d="M7 3v12" />
  <path d="M4 15h6v3a3 3 0 0 1 -6 0v-3" />
  <path d="M14 21v-3a3 3 0 0 1 6 0v3" />
  <path d="M17 21v-18" />
    </svg>
  )
);

ShovelPitchforksOutlineLogo.displayName = "ShovelPitchforksOutlineLogo";

export const ShovelPitchforksOutlineLogoMetadata = {
  id: "shovel-pitchforks-outline",
  baseId: "shovel-pitchforks-outline",
  variant: "default",
  name: "Shovel Pitchforks Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShovelPitchforksOutlineLogo;
