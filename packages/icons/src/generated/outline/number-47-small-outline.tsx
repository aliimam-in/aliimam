/**
 * Auto-generated logo component: Number 47 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number47SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number47SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number47SmallOutlineLogoProps>(
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
      <path d="M14 8h4l-2 8" />
  <path d="M6 8v3a1 1 0 0 0 1 1h3" />
  <path d="M10 8v8" />
    </svg>
  )
);

Number47SmallOutlineLogo.displayName = "Number47SmallOutlineLogo";

export const Number47SmallOutlineLogoMetadata = {
  id: "number-47-small-outline",
  baseId: "number-47-small-outline",
  variant: "default",
  name: "Number 47 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number47SmallOutlineLogo;
