/**
 * Auto-generated logo component: List Letters Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListLettersOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListLettersOutlineLogo = React.forwardRef<SVGSVGElement, ListLettersOutlineLogoProps>(
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
  <path d="M11 18h9" />
  <path d="M4 10v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
  <path d="M4 8h3" />
  <path d="M4 20h1.5a1.5 1.5 0 0 0 0 -3h-1.5h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
    </svg>
  )
);

ListLettersOutlineLogo.displayName = "ListLettersOutlineLogo";

export const ListLettersOutlineLogoMetadata = {
  id: "list-letters-outline",
  baseId: "list-letters-outline",
  variant: "default",
  name: "List Letters Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListLettersOutlineLogo;
