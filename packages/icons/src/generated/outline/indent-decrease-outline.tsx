/**
 * Auto-generated logo component: Indent Decrease Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IndentDecreaseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IndentDecreaseOutlineLogo = React.forwardRef<SVGSVGElement, IndentDecreaseOutlineLogoProps>(
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
      <path d="M20 6l-7 0" />
  <path d="M20 12l-9 0" />
  <path d="M20 18l-7 0" />
  <path d="M8 8l-4 4l4 4" />
    </svg>
  )
);

IndentDecreaseOutlineLogo.displayName = "IndentDecreaseOutlineLogo";

export const IndentDecreaseOutlineLogoMetadata = {
  id: "indent-decrease-outline",
  baseId: "indent-decrease-outline",
  variant: "default",
  name: "Indent Decrease Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IndentDecreaseOutlineLogo;
