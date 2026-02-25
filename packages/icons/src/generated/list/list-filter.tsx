/**
 * Auto-generated logo component: List Filter (default)
 * Category: list
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListFilterLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListFilterLogo = React.forwardRef<SVGSVGElement, ListFilterLogoProps>(
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
      <path d="M2 5h20" />
  <path d="M6 12h12" />
  <path d="M9 19h6" />
    </svg>
  )
);

ListFilterLogo.displayName = "ListFilterLogo";

export const ListFilterLogoMetadata = {
  id: "list-filter",
  baseId: "list-filter",
  variant: "default",
  name: "List Filter",
  category: "list",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListFilterLogo;
