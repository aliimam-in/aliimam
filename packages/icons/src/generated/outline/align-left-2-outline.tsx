/**
 * Auto-generated logo component: Align Left 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignLeft2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignLeft2OutlineLogo = React.forwardRef<SVGSVGElement, AlignLeft2OutlineLogoProps>(
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
      <path d="M4 4v16" />
  <path d="M8 6h12" />
  <path d="M8 12h6" />
  <path d="M8 18h10" />
    </svg>
  )
);

AlignLeft2OutlineLogo.displayName = "AlignLeft2OutlineLogo";

export const AlignLeft2OutlineLogoMetadata = {
  id: "align-left-2-outline",
  baseId: "align-left-2-outline",
  variant: "default",
  name: "Align Left 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignLeft2OutlineLogo;
