/**
 * Auto-generated logo component: List Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListSearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListSearchOutlineLogo = React.forwardRef<SVGSVGElement, ListSearchOutlineLogoProps>(
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
      <path d="M11 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M18.5 18.5l2.5 2.5" />
  <path d="M4 6h16" />
  <path d="M4 12h4" />
  <path d="M4 18h4" />
    </svg>
  )
);

ListSearchOutlineLogo.displayName = "ListSearchOutlineLogo";

export const ListSearchOutlineLogoMetadata = {
  id: "list-search-outline",
  baseId: "list-search-outline",
  variant: "default",
  name: "List Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListSearchOutlineLogo;
