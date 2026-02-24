/**
 * Auto-generated logo component: List Indent Increase (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListIndentIncreaseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListIndentIncreaseLogo = React.forwardRef<SVGSVGElement, ListIndentIncreaseLogoProps>(
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
  <path d="m3 8 4 4-4 4" />
    </svg>
  )
);

ListIndentIncreaseLogo.displayName = "ListIndentIncreaseLogo";

export const ListIndentIncreaseLogoMetadata = {
  id: "list-indent-increase",
  baseId: "list-indent-increase",
  variant: "default",
  name: "List Indent Increase",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListIndentIncreaseLogo;
