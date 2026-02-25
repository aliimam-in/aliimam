/**
 * Auto-generated logo component: Align Right 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignRight2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignRight2OutlineLogo = React.forwardRef<SVGSVGElement, AlignRight2OutlineLogoProps>(
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
      <path d="M20 4v16" />
  <path d="M4 6h12" />
  <path d="M10 12h6" />
  <path d="M6 18h10" />
    </svg>
  )
);

AlignRight2OutlineLogo.displayName = "AlignRight2OutlineLogo";

export const AlignRight2OutlineLogoMetadata = {
  id: "align-right-2-outline",
  baseId: "align-right-2-outline",
  variant: "default",
  name: "Align Right 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignRight2OutlineLogo;
