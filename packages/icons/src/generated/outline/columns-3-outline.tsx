/**
 * Auto-generated logo component: Columns 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Columns3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Columns3OutlineLogo = React.forwardRef<SVGSVGElement, Columns3OutlineLogoProps>(
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
      <path d="M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-16" />
  <path d="M9 3v18" />
  <path d="M15 3v18" />
    </svg>
  )
);

Columns3OutlineLogo.displayName = "Columns3OutlineLogo";

export const Columns3OutlineLogoMetadata = {
  id: "columns-3-outline",
  baseId: "columns-3-outline",
  variant: "default",
  name: "Columns 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Columns3OutlineLogo;
