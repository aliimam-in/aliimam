/**
 * Auto-generated logo component: Chevrons Up (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronsUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronsUpLogo = React.forwardRef<SVGSVGElement, ChevronsUpLogoProps>(
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
      <polyline points="17 11 12 6 7 11"/><polyline points="17 18 12 13 7 18"/>
    </svg>
  )
);

ChevronsUpLogo.displayName = "ChevronsUpLogo";

export const ChevronsUpLogoMetadata = {
  id: "chevrons-up",
  baseId: "chevrons-up",
  variant: "default",
  name: "Chevrons Up",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsUpLogo;
