/**
 * Auto-generated logo component: Id Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IdOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IdOffOutlineLogo = React.forwardRef<SVGSVGElement, IdOffOutlineLogoProps>(
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
      <path d="M8 4h10a3 3 0 0 1 3 3v10m-1.437 2.561c-.455 .279 -.99 .439 -1.563 .439h-12a3 3 0 0 1 -3 -3v-10c0 -1.083 .573 -2.031 1.433 -2.559" />
  <path d="M8.175 8.178a2 2 0 1 0 2.646 2.65" />
  <path d="M15 8h2" />
  <path d="M16 12h1" />
  <path d="M7 16h9" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

IdOffOutlineLogo.displayName = "IdOffOutlineLogo";

export const IdOffOutlineLogoMetadata = {
  id: "id-off-outline",
  baseId: "id-off-outline",
  variant: "default",
  name: "Id Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IdOffOutlineLogo;
