/**
 * Auto-generated logo component: Container Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ContainerOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ContainerOffOutlineLogo = React.forwardRef<SVGSVGElement, ContainerOffOutlineLogoProps>(
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
      <path d="M20 4v.01" />
  <path d="M20 20v.01" />
  <path d="M20 16v.01" />
  <path d="M20 12v.01" />
  <path d="M20 8v.01" />
  <path d="M8.297 4.289a1 1 0 0 1 .703 -.289h6a1 1 0 0 1 1 1v7m0 4v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-11" />
  <path d="M4 4v.01" />
  <path d="M4 20v.01" />
  <path d="M4 16v.01" />
  <path d="M4 12v.01" />
  <path d="M4 8v.01" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ContainerOffOutlineLogo.displayName = "ContainerOffOutlineLogo";

export const ContainerOffOutlineLogoMetadata = {
  id: "container-off-outline",
  baseId: "container-off-outline",
  variant: "default",
  name: "Container Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ContainerOffOutlineLogo;
