/**
 * Auto-generated logo component: Tallymark 4 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Tallymark4OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Tallymark4OutlineLogo = React.forwardRef<SVGSVGElement, Tallymark4OutlineLogoProps>(
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
      <path d="M6 5l0 14" />
  <path d="M10 5l0 14" />
  <path d="M14 5l0 14" />
  <path d="M18 5l0 14" />
    </svg>
  )
);

Tallymark4OutlineLogo.displayName = "Tallymark4OutlineLogo";

export const Tallymark4OutlineLogoMetadata = {
  id: "tallymark-4-outline",
  baseId: "tallymark-4-outline",
  variant: "default",
  name: "Tallymark 4 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Tallymark4OutlineLogo;
