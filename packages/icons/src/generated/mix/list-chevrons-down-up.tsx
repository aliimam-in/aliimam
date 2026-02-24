/**
 * Auto-generated logo component: List Chevrons Down Up (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListChevronsDownUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListChevronsDownUpLogo = React.forwardRef<SVGSVGElement, ListChevronsDownUpLogoProps>(
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
      <path d="M3 5h8" />
  <path d="M3 12h8" />
  <path d="M3 19h8" />
  <path d="m15 5 3 3 3-3" />
  <path d="m15 19 3-3 3 3" />
    </svg>
  )
);

ListChevronsDownUpLogo.displayName = "ListChevronsDownUpLogo";

export const ListChevronsDownUpLogoMetadata = {
  id: "list-chevrons-down-up",
  baseId: "list-chevrons-down-up",
  variant: "default",
  name: "List Chevrons Down Up",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListChevronsDownUpLogo;
