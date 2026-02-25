/**
 * Auto-generated logo component: List Collapse (default)
 * Category: list
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListCollapseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListCollapseLogo = React.forwardRef<SVGSVGElement, ListCollapseLogoProps>(
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
      <path d="M10 5h11" />
  <path d="M10 12h11" />
  <path d="M10 19h11" />
  <path d="m3 10 3-3-3-3" />
  <path d="m3 20 3-3-3-3" />
    </svg>
  )
);

ListCollapseLogo.displayName = "ListCollapseLogo";

export const ListCollapseLogoMetadata = {
  id: "list-collapse",
  baseId: "list-collapse",
  variant: "default",
  name: "List Collapse",
  category: "list",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListCollapseLogo;
