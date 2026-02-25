/**
 * Auto-generated logo component: Clear Formatting Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClearFormattingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClearFormattingOutlineLogo = React.forwardRef<SVGSVGElement, ClearFormattingOutlineLogoProps>(
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
      <path d="M17 15l4 4m0 -4l-4 4" />
  <path d="M7 6v-1h11v1" />
  <path d="M7 19l4 0" />
  <path d="M13 5l-4 14" />
    </svg>
  )
);

ClearFormattingOutlineLogo.displayName = "ClearFormattingOutlineLogo";

export const ClearFormattingOutlineLogoMetadata = {
  id: "clear-formatting-outline",
  baseId: "clear-formatting-outline",
  variant: "default",
  name: "Clear Formatting Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClearFormattingOutlineLogo;
