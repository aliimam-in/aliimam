/**
 * Auto-generated logo component: Number 4 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number4SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number4SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number4SmallOutlineLogoProps>(
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
      <path d="M10 8v3a1 1 0 0 0 1 1h3" />
  <path d="M14 8v8" />
    </svg>
  )
);

Number4SmallOutlineLogo.displayName = "Number4SmallOutlineLogo";

export const Number4SmallOutlineLogoMetadata = {
  id: "number-4-small-outline",
  baseId: "number-4-small-outline",
  variant: "default",
  name: "Number 4 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number4SmallOutlineLogo;
