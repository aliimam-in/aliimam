/**
 * Auto-generated logo component: List Plus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListPlusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListPlusLogo = React.forwardRef<SVGSVGElement, ListPlusLogoProps>(
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
      <path d="M16 5H3" />
  <path d="M11 12H3" />
  <path d="M16 19H3" />
  <path d="M18 9v6" />
  <path d="M21 12h-6" />
    </svg>
  )
);

ListPlusLogo.displayName = "ListPlusLogo";

export const ListPlusLogoMetadata = {
  id: "list-plus",
  baseId: "list-plus",
  variant: "default",
  name: "List Plus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListPlusLogo;
