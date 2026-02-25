/**
 * Auto-generated logo component: Number 7 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number7SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number7SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number7SmallOutlineLogoProps>(
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
      <path d="M10 8h4l-2 8" />
    </svg>
  )
);

Number7SmallOutlineLogo.displayName = "Number7SmallOutlineLogo";

export const Number7SmallOutlineLogoMetadata = {
  id: "number-7-small-outline",
  baseId: "number-7-small-outline",
  variant: "default",
  name: "Number 7 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number7SmallOutlineLogo;
