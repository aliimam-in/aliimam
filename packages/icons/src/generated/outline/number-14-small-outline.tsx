/**
 * Auto-generated logo component: Number 14 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number14SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number14SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number14SmallOutlineLogoProps>(
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
      <path d="M8 8h1v8" />
  <path d="M13 8v3a1 1 0 0 0 1 1h3" />
  <path d="M17 8v8" />
    </svg>
  )
);

Number14SmallOutlineLogo.displayName = "Number14SmallOutlineLogo";

export const Number14SmallOutlineLogoMetadata = {
  id: "number-14-small-outline",
  baseId: "number-14-small-outline",
  variant: "default",
  name: "Number 14 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number14SmallOutlineLogo;
