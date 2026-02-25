/**
 * Auto-generated logo component: Container Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ContainerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ContainerOutlineLogo = React.forwardRef<SVGSVGElement, ContainerOutlineLogoProps>(
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
  <path d="M8 5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -14" />
  <path d="M4 4v.01" />
  <path d="M4 20v.01" />
  <path d="M4 16v.01" />
  <path d="M4 12v.01" />
  <path d="M4 8v.01" />
    </svg>
  )
);

ContainerOutlineLogo.displayName = "ContainerOutlineLogo";

export const ContainerOutlineLogoMetadata = {
  id: "container-outline",
  baseId: "container-outline",
  variant: "default",
  name: "Container Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ContainerOutlineLogo;
