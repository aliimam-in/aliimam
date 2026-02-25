/**
 * Auto-generated logo component: List Tree (default)
 * Category: list
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListTreeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListTreeLogo = React.forwardRef<SVGSVGElement, ListTreeLogoProps>(
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
      <path d="M8 5h13" />
  <path d="M13 12h8" />
  <path d="M13 19h8" />
  <path d="M3 10a2 2 0 0 0 2 2h3" />
  <path d="M3 5v12a2 2 0 0 0 2 2h3" />
    </svg>
  )
);

ListTreeLogo.displayName = "ListTreeLogo";

export const ListTreeLogoMetadata = {
  id: "list-tree",
  baseId: "list-tree",
  variant: "default",
  name: "List Tree",
  category: "list",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListTreeLogo;
