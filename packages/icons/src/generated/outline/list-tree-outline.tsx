/**
 * Auto-generated logo component: List Tree Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListTreeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListTreeOutlineLogo = React.forwardRef<SVGSVGElement, ListTreeOutlineLogoProps>(
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
      <path d="M9 6h11" />
  <path d="M12 12h8" />
  <path d="M15 18h5" />
  <path d="M5 6v.01" />
  <path d="M8 12v.01" />
  <path d="M11 18v.01" />
    </svg>
  )
);

ListTreeOutlineLogo.displayName = "ListTreeOutlineLogo";

export const ListTreeOutlineLogoMetadata = {
  id: "list-tree-outline",
  baseId: "list-tree-outline",
  variant: "default",
  name: "List Tree Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListTreeOutlineLogo;
