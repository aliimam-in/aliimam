/**
 * Auto-generated logo component: Chevrons Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronsUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronsUpOutlineLogo = React.forwardRef<SVGSVGElement, ChevronsUpOutlineLogoProps>(
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
      <path d="M7 11l5 -5l5 5" />
  <path d="M7 17l5 -5l5 5" />
    </svg>
  )
);

ChevronsUpOutlineLogo.displayName = "ChevronsUpOutlineLogo";

export const ChevronsUpOutlineLogoMetadata = {
  id: "chevrons-up-outline",
  baseId: "chevrons-up-outline",
  variant: "default",
  name: "Chevrons Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsUpOutlineLogo;
