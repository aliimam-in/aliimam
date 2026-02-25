/**
 * Auto-generated logo component: Picnic Table Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PicnicTableOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PicnicTableOutlineLogo = React.forwardRef<SVGSVGElement, PicnicTableOutlineLogoProps>(
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
      <path d="M16 7l2 9m-10 -9l-2 9m-1 -9h14m2 5h-18" />
    </svg>
  )
);

PicnicTableOutlineLogo.displayName = "PicnicTableOutlineLogo";

export const PicnicTableOutlineLogoMetadata = {
  id: "picnic-table-outline",
  baseId: "picnic-table-outline",
  variant: "default",
  name: "Picnic Table Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PicnicTableOutlineLogo;
