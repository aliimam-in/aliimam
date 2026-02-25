/**
 * Auto-generated logo component: Shovel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShovelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShovelOutlineLogo = React.forwardRef<SVGSVGElement, ShovelOutlineLogoProps>(
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
      <path d="M17 4l3 3" />
  <path d="M18.5 5.5l-8 8" />
  <path d="M8.276 11.284l4.44 4.44a.968 .968 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1 -5.809 -5.81l2.704 -2.703a.968 .968 0 0 1 1.37 0l-.001 0" />
    </svg>
  )
);

ShovelOutlineLogo.displayName = "ShovelOutlineLogo";

export const ShovelOutlineLogoMetadata = {
  id: "shovel-outline",
  baseId: "shovel-outline",
  variant: "default",
  name: "Shovel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShovelOutlineLogo;
