/**
 * Auto-generated logo component: Number 17 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number17SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number17SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number17SmallOutlineLogoProps>(
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
  <path d="M13 8h4l-2 8" />
    </svg>
  )
);

Number17SmallOutlineLogo.displayName = "Number17SmallOutlineLogo";

export const Number17SmallOutlineLogoMetadata = {
  id: "number-17-small-outline",
  baseId: "number-17-small-outline",
  variant: "default",
  name: "Number 17 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number17SmallOutlineLogo;
