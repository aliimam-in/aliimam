/**
 * Auto-generated logo component: Abc Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AbcOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AbcOutlineLogo = React.forwardRef<SVGSVGElement, AbcOutlineLogoProps>(
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
      <path d="M3 16v-6a2 2 0 1 1 4 0v6" />
  <path d="M3 13h4" />
  <path d="M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1" />
  <path d="M20.732 12a2 2 0 0 0 -3.732 1v1a2 2 0 0 0 3.726 1.01" />
    </svg>
  )
);

AbcOutlineLogo.displayName = "AbcOutlineLogo";

export const AbcOutlineLogoMetadata = {
  id: "abc-outline",
  baseId: "abc-outline",
  variant: "default",
  name: "Abc Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AbcOutlineLogo;
