/**
 * Auto-generated logo component: Pencil Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PencilMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PencilMinusOutlineLogo = React.forwardRef<SVGSVGElement, PencilMinusOutlineLogoProps>(
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
      <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
  <path d="M16 19h6" />
    </svg>
  )
);

PencilMinusOutlineLogo.displayName = "PencilMinusOutlineLogo";

export const PencilMinusOutlineLogoMetadata = {
  id: "pencil-minus-outline",
  baseId: "pencil-minus-outline",
  variant: "default",
  name: "Pencil Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PencilMinusOutlineLogo;
