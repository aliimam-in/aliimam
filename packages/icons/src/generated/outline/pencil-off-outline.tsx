/**
 * Auto-generated logo component: Pencil Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PencilOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PencilOffOutlineLogo = React.forwardRef<SVGSVGElement, PencilOffOutlineLogoProps>(
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
      <path d="M10 10l-6 6v4h4l6 -6m1.99 -1.99l2.504 -2.504a2.828 2.828 0 1 0 -4 -4l-2.5 2.5" />
  <path d="M13.5 6.5l4 4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PencilOffOutlineLogo.displayName = "PencilOffOutlineLogo";

export const PencilOffOutlineLogoMetadata = {
  id: "pencil-off-outline",
  baseId: "pencil-off-outline",
  variant: "default",
  name: "Pencil Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PencilOffOutlineLogo;
