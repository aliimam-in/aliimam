/**
 * Auto-generated logo component: Number 6 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number6OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number6OutlineLogo = React.forwardRef<SVGSVGElement, Number6OutlineLogoProps>(
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
      <path d="M8 16a4 4 0 1 0 8 0v-1a4 4 0 1 0 -8 0" />
  <path d="M16 8a4 4 0 1 0 -8 0v8" />
    </svg>
  )
);

Number6OutlineLogo.displayName = "Number6OutlineLogo";

export const Number6OutlineLogoMetadata = {
  id: "number-6-outline",
  baseId: "number-6-outline",
  variant: "default",
  name: "Number 6 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number6OutlineLogo;
