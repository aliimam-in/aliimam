/**
 * Auto-generated logo component: Indent Increase Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IndentIncreaseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IndentIncreaseOutlineLogo = React.forwardRef<SVGSVGElement, IndentIncreaseOutlineLogoProps>(
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
      <path d="M20 6l-11 0" />
  <path d="M20 12l-7 0" />
  <path d="M20 18l-11 0" />
  <path d="M4 8l4 4l-4 4" />
    </svg>
  )
);

IndentIncreaseOutlineLogo.displayName = "IndentIncreaseOutlineLogo";

export const IndentIncreaseOutlineLogoMetadata = {
  id: "indent-increase-outline",
  baseId: "indent-increase-outline",
  variant: "default",
  name: "Indent Increase Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IndentIncreaseOutlineLogo;
