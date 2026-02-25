/**
 * Auto-generated logo component: Pennant Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PennantOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PennantOutlineLogo = React.forwardRef<SVGSVGElement, PennantOutlineLogoProps>(
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
      <path d="M8 21l4 0" />
  <path d="M10 21l0 -18" />
  <path d="M10 4l9 4l-9 4" />
    </svg>
  )
);

PennantOutlineLogo.displayName = "PennantOutlineLogo";

export const PennantOutlineLogoMetadata = {
  id: "pennant-outline",
  baseId: "pennant-outline",
  variant: "default",
  name: "Pennant Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PennantOutlineLogo;
