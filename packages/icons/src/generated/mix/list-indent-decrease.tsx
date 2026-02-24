/**
 * Auto-generated logo component: List Indent Decrease (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListIndentDecreaseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListIndentDecreaseLogo = React.forwardRef<SVGSVGElement, ListIndentDecreaseLogoProps>(
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
      <path d="M21 5H11" />
  <path d="M21 12H11" />
  <path d="M21 19H11" />
  <path d="m7 8-4 4 4 4" />
    </svg>
  )
);

ListIndentDecreaseLogo.displayName = "ListIndentDecreaseLogo";

export const ListIndentDecreaseLogoMetadata = {
  id: "list-indent-decrease",
  baseId: "list-indent-decrease",
  variant: "default",
  name: "List Indent Decrease",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListIndentDecreaseLogo;
