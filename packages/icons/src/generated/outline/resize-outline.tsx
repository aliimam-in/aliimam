/**
 * Auto-generated logo component: Resize Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ResizeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ResizeOutlineLogo = React.forwardRef<SVGSVGElement, ResizeOutlineLogoProps>(
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
      <path d="M4 11v8a1 1 0 0 0 1 1h8m-9 -14v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1" />
  <path d="M4 12h7a1 1 0 0 1 1 1v7" />
    </svg>
  )
);

ResizeOutlineLogo.displayName = "ResizeOutlineLogo";

export const ResizeOutlineLogoMetadata = {
  id: "resize-outline",
  baseId: "resize-outline",
  variant: "default",
  name: "Resize Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ResizeOutlineLogo;
