/**
 * Auto-generated logo component: Columns 1 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Columns1OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Columns1OutlineLogo = React.forwardRef<SVGSVGElement, Columns1OutlineLogoProps>(
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
      <path d="M5 4a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -16" />
    </svg>
  )
);

Columns1OutlineLogo.displayName = "Columns1OutlineLogo";

export const Columns1OutlineLogoMetadata = {
  id: "columns-1-outline",
  baseId: "columns-1-outline",
  variant: "default",
  name: "Columns 1 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Columns1OutlineLogo;
