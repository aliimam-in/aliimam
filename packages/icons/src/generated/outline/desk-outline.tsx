/**
 * Auto-generated logo component: Desk Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeskOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeskOutlineLogo = React.forwardRef<SVGSVGElement, DeskOutlineLogoProps>(
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
      <path d="M3 6h18" />
  <path d="M4 6v13" />
  <path d="M20 19v-13" />
  <path d="M4 10h16" />
  <path d="M15 6v8a2 2 0 0 0 2 2h3" />
    </svg>
  )
);

DeskOutlineLogo.displayName = "DeskOutlineLogo";

export const DeskOutlineLogoMetadata = {
  id: "desk-outline",
  baseId: "desk-outline",
  variant: "default",
  name: "Desk Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeskOutlineLogo;
