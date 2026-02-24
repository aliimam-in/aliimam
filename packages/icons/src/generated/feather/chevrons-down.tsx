/**
 * Auto-generated logo component: Chevrons Down (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronsDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronsDownLogo = React.forwardRef<SVGSVGElement, ChevronsDownLogoProps>(
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
      <polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/>
    </svg>
  )
);

ChevronsDownLogo.displayName = "ChevronsDownLogo";

export const ChevronsDownLogoMetadata = {
  id: "chevrons-down",
  baseId: "chevrons-down",
  variant: "default",
  name: "Chevrons Down",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsDownLogo;
