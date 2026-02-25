/**
 * Auto-generated logo component: Columns 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Columns2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Columns2OutlineLogo = React.forwardRef<SVGSVGElement, Columns2OutlineLogoProps>(
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
  <path d="M12 3v18" />
    </svg>
  )
);

Columns2OutlineLogo.displayName = "Columns2OutlineLogo";

export const Columns2OutlineLogoMetadata = {
  id: "columns-2-outline",
  baseId: "columns-2-outline",
  variant: "default",
  name: "Columns 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Columns2OutlineLogo;
