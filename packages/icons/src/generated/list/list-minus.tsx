/**
 * Auto-generated logo component: List Minus (default)
 * Category: list
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListMinusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListMinusLogo = React.forwardRef<SVGSVGElement, ListMinusLogoProps>(
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
  <path d="M21 12h-6" />
    </svg>
  )
);

ListMinusLogo.displayName = "ListMinusLogo";

export const ListMinusLogoMetadata = {
  id: "list-minus",
  baseId: "list-minus",
  variant: "default",
  name: "List Minus",
  category: "list",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListMinusLogo;
