/**
 * Auto-generated logo component: Transform Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TransformOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TransformOutlineLogo = React.forwardRef<SVGSVGElement, TransformOutlineLogoProps>(
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
      <path d="M3 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" />
  <path d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" />
  <path d="M15 18a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    </svg>
  )
);

TransformOutlineLogo.displayName = "TransformOutlineLogo";

export const TransformOutlineLogoMetadata = {
  id: "transform-outline",
  baseId: "transform-outline",
  variant: "default",
  name: "Transform Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TransformOutlineLogo;
