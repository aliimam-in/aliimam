/**
 * Auto-generated logo component: List Chevrons Up Down (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListChevronsUpDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListChevronsUpDownLogo = React.forwardRef<SVGSVGElement, ListChevronsUpDownLogoProps>(
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
  <path d="m15 8 3-3 3 3" />
  <path d="m15 16 3 3 3-3" />
    </svg>
  )
);

ListChevronsUpDownLogo.displayName = "ListChevronsUpDownLogo";

export const ListChevronsUpDownLogoMetadata = {
  id: "list-chevrons-up-down",
  baseId: "list-chevrons-up-down",
  variant: "default",
  name: "List Chevrons Up Down",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListChevronsUpDownLogo;
