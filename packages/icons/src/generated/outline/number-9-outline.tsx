/**
 * Auto-generated logo component: Number 9 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number9OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number9OutlineLogo = React.forwardRef<SVGSVGElement, Number9OutlineLogoProps>(
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
      <path d="M16 8a4 4 0 1 0 -8 0v1a4 4 0 1 0 8 0" />
  <path d="M8 16a4 4 0 1 0 8 0v-8" />
    </svg>
  )
);

Number9OutlineLogo.displayName = "Number9OutlineLogo";

export const Number9OutlineLogoMetadata = {
  id: "number-9-outline",
  baseId: "number-9-outline",
  variant: "default",
  name: "Number 9 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number9OutlineLogo;
