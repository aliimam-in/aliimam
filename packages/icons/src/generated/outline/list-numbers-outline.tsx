/**
 * Auto-generated logo component: List Numbers Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListNumbersOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListNumbersOutlineLogo = React.forwardRef<SVGSVGElement, ListNumbersOutlineLogoProps>(
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
      <path d="M11 6h9" />
  <path d="M11 12h9" />
  <path d="M12 18h8" />
  <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />
  <path d="M6 10v-6l-2 2" />
    </svg>
  )
);

ListNumbersOutlineLogo.displayName = "ListNumbersOutlineLogo";

export const ListNumbersOutlineLogoMetadata = {
  id: "list-numbers-outline",
  baseId: "list-numbers-outline",
  variant: "default",
  name: "List Numbers Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListNumbersOutlineLogo;
