/**
 * Auto-generated logo component: List Ordered (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListOrderedLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListOrderedLogo = React.forwardRef<SVGSVGElement, ListOrderedLogoProps>(
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
      <path d="M11 5h10" />
  <path d="M11 12h10" />
  <path d="M11 19h10" />
  <path d="M4 4h1v5" />
  <path d="M4 9h2" />
  <path d="M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02" />
    </svg>
  )
);

ListOrderedLogo.displayName = "ListOrderedLogo";

export const ListOrderedLogoMetadata = {
  id: "list-ordered",
  baseId: "list-ordered",
  variant: "default",
  name: "List Ordered",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListOrderedLogo;
