/**
 * Auto-generated logo component: Chevrons Up (default)
 * Category: arrows
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
      <path d="m17 11-5-5-5 5" />
  <path d="m17 18-5-5-5 5" />
    </svg>
  )
);

ChevronsUpLogo.displayName = "ChevronsUpLogo";

export const ChevronsUpLogoMetadata = {
  id: "chevrons-up",
  baseId: "chevrons-up",
  variant: "default",
  name: "Chevrons Up",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsUpLogo;
